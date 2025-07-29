import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import StarField from "./components/StarField"
import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Initialize theme on component mount
  useEffect(() => {
    // Check for saved theme preference first
    const savedTheme = localStorage.getItem("rjaydev-theme")

    if (savedTheme) {
      // Use saved preference
      const isDark = savedTheme === "dark"
      setDarkMode(isDark)
      applyTheme(isDark)
    } else {
      // Default to light mode if no preference is saved
      setDarkMode(false)
      applyTheme(false)
      localStorage.setItem("rjaydev-theme", "light")
    }

    setIsLoaded(true)
  }, [])

  // Apply theme to document with aggressive overrides
  const applyTheme = (isDark) => {
    const root = document.documentElement
    const body = document.body

    if (isDark) {
      // Force dark mode
      root.classList.add("dark")
      root.setAttribute("data-theme", "dark")
      root.style.colorScheme = "dark"
      body.style.colorScheme = "dark"

      // Force override browser styles
      root.style.setProperty("color-scheme", "dark", "important")
      body.style.setProperty("color-scheme", "dark", "important")

      // Add meta tag for theme color
      let metaTheme = document.querySelector('meta[name="theme-color"]')
      if (!metaTheme) {
        metaTheme = document.createElement("meta")
        metaTheme.name = "theme-color"
        document.head.appendChild(metaTheme)
      }
      metaTheme.content = "#1f2937"
    } else {
      // Force light mode
      root.classList.remove("dark")
      root.setAttribute("data-theme", "light")
      root.style.colorScheme = "light"
      body.style.colorScheme = "light"

      // Force override browser styles
      root.style.setProperty("color-scheme", "light", "important")
      body.style.setProperty("color-scheme", "light", "important")

      // Update meta tag for theme color
      let metaTheme = document.querySelector('meta[name="theme-color"]')
      if (!metaTheme) {
        metaTheme = document.createElement("meta")
        metaTheme.name = "theme-color"
        document.head.appendChild(metaTheme)
      }
      metaTheme.content = "#ffffff"
    }

    // Force repaint to ensure changes take effect
    root.style.display = "none"
    root.offsetHeight // Trigger reflow
    root.style.display = ""
  }

  // Handle theme toggle with more aggressive approach
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)

    // Save preference immediately
    localStorage.setItem("rjaydev-theme", newDarkMode ? "dark" : "light")

    // Apply theme with delay to ensure state update
    setTimeout(() => {
      applyTheme(newDarkMode)

      // Double-check after a short delay
      setTimeout(() => {
        const root = document.documentElement
        if (newDarkMode && !root.classList.contains("dark")) {
          root.classList.add("dark")
          root.setAttribute("data-theme", "dark")
        } else if (!newDarkMode && root.classList.contains("dark")) {
          root.classList.remove("dark")
          root.setAttribute("data-theme", "light")
        }
      }, 50)
    }, 10)
  }

  // Don't render until theme is loaded to prevent flash
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Loading...
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
      data-theme={darkMode ? "dark" : "light"}
    >
      {/* Animated stars only in dark mode */}
      {darkMode && <StarField />}

      {/* Main content */}
      <div className="relative z-10">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="blog">
            <Blog />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
