"use client"

import { useEffect, useRef } from "react"

const About = () => {
  const avatarRef = useRef(null)

  useEffect(() => {
    const avatar = avatarRef.current
    if (!avatar) return

    // Create floating sparkles around the avatar
    const createSparkle = () => {
      const sparkle = document.createElement("div")
      sparkle.className = "absolute pointer-events-none"
      sparkle.style.cssText = `
        width: 4px;
        height: 4px;
        background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(59,130,246,0.7) 50%, transparent 100%);
        border-radius: 50%;
        animation: sparkleFloat 3s ease-in-out infinite;
      `

      // Responsive sparkle positioning based on screen size
      const isMobile = window.innerWidth <= 768
      const isSmallMobile = window.innerWidth <= 480

      let distance, baseDistance
      if (isSmallMobile) {
        baseDistance = 90
        distance = baseDistance + Math.random() * 30
      } else if (isMobile) {
        baseDistance = 100
        distance = baseDistance + Math.random() * 35
      } else {
        baseDistance = 140
        distance = baseDistance + Math.random() * 40
      }

      // Random position around the avatar
      const angle = Math.random() * Math.PI * 2
      const x = Math.cos(angle) * distance
      const y = Math.sin(angle) * distance

      sparkle.style.left = `calc(50% + ${x}px)`
      sparkle.style.top = `calc(50% + ${y}px)`
      sparkle.style.animationDelay = `${Math.random() * 3}s`

      avatar.appendChild(sparkle)

      // Remove sparkle after animation
      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle)
        }
      }, 3000)
    }

    // Create glowing moon with wider elliptical JavaScript animation for all mobile devices
    const createMoon = () => {
      const moonContainer = document.createElement("div")
      moonContainer.className = "absolute pointer-events-none"
      moonContainer.style.cssText = `
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    z-index: 10;
  `

      const moon = document.createElement("div")
      moon.innerHTML = "🌕"

      // Responsive moon styling with WIDER orbits (like the original)
      const isMobile = window.innerWidth <= 768
      const isSmallMobile = window.innerWidth <= 480
      const isVerySmall = window.innerWidth <= 320

      let fontSize, radiusX, radiusY
      if (isVerySmall) {
        fontSize = "14px"
        radiusX = 120 // Much wider horizontal radius
        radiusY = 80 // Vertical radius (creates nice ellipse)
      } else if (isSmallMobile) {
        fontSize = "16px"
        radiusX = 140 // Wider orbit
        radiusY = 95
      } else if (isMobile) {
        fontSize = "18px"
        radiusX = 160 // Even wider for tablets
        radiusY = 110
      } else {
        fontSize = "20px"
        radiusX = 180 // Desktop - nice wide orbit like original
        radiusY = 130
      }

      moon.style.cssText = `
    font-size: ${fontSize};
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 16px rgba(255, 255, 255, 0.4));
    display: flex;
    align-items: center;
    justify-content: center;
    animation: moonPulse 3s ease-in-out infinite;
  `

      moonContainer.appendChild(moon)
      avatar.appendChild(moonContainer)

      // JavaScript-based wider elliptical orbit animation - works on ALL devices
      let angle = 0
      const animateMoon = () => {
        angle += 0.015 // Slightly slower for more graceful movement

        // Create wider elliptical orbit (like the beautiful original)
        const x = Math.cos(angle) * radiusX
        const y = Math.sin(angle) * radiusY

        // Add subtle rotation for natural movement
        const rotation = angle * (180 / Math.PI) * 0.3 // Gentler rotation

        moonContainer.style.transform = `translate(${x}px, ${y}px) rotate(${-rotation}deg)`

        requestAnimationFrame(animateMoon)
      }

      // Start the animation
      animateMoon()

      return moonContainer
    }

    // Enhanced CSS-based wider elliptical moon for modern browsers
    const createCSSMoon = () => {
      const moonContainer = document.createElement("div")
      moonContainer.className = "absolute pointer-events-none moon-orbit-css"

      const moon = document.createElement("div")
      moon.className = "moon-glow"
      moon.innerHTML = "🌕"

      // Responsive moon styling with WIDER orbits to match original beauty
      const isMobile = window.innerWidth <= 768
      const isSmallMobile = window.innerWidth <= 480
      const isVerySmall = window.innerWidth <= 320

      let fontSize, translateY, transformOrigin, scaleX
      if (isVerySmall) {
        fontSize = "14px"
        translateY = "-80px" // Wider orbit
        transformOrigin = "20px 100px"
        scaleX = 1.5 // More elliptical
      } else if (isSmallMobile) {
        fontSize = "16px"
        translateY = "-95px" // Wider
        transformOrigin = "20px 115px"
        scaleX = 1.47
      } else if (isMobile) {
        fontSize = "18px"
        translateY = "-110px" // Wider
        transformOrigin = "20px 130px"
        scaleX = 1.45
      } else {
        fontSize = "20px"
        translateY = "-130px" // Nice wide orbit like original
        transformOrigin = "20px 150px"
        scaleX = 1.38 // Beautiful elliptical ratio
      }

      moon.style.cssText = `
    font-size: ${fontSize};
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 16px rgba(255, 255, 255, 0.4));
    animation: moonPulse 3s ease-in-out infinite;
  `

      moonContainer.appendChild(moon)
      moonContainer.style.cssText = `
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: moonOrbitWide 18s linear infinite;
    transform-origin: ${transformOrigin};
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    transform: translateY(${translateY}) scaleX(${scaleX});
  `

      avatar.appendChild(moonContainer)
      return moonContainer
    }

    // Detect if device supports CSS animations properly
    const supportsCSS3D = () => {
      const el = document.createElement("div")
      const transforms = {
        transform: "transform",
        WebkitTransform: "-webkit-transform",
        MozTransform: "-moz-transform",
        msTransform: "-ms-transform",
      }

      for (const t in transforms) {
        if (el.style[t] !== undefined) {
          el.style[t] = "translate3d(1px,1px,1px)"
          const has3d = el.style[t] !== undefined && el.style[t].length > 0 && el.style[t] !== "none"
          return has3d
        }
      }
      return false
    }

    // Create sparkles periodically with responsive timing
    const sparkleInterval = setInterval(createSparkle, window.innerWidth <= 768 ? 1000 : 800)

    // Create initial sparkles
    const initialSparkles = window.innerWidth <= 768 ? 4 : 6
    for (let i = 0; i < initialSparkles; i++) {
      setTimeout(createSparkle, i * 200)
    }

    // Create the moon - use JS animation for ALL mobile devices for better compatibility
    let moon
    const isMobile = window.innerWidth <= 768
    if (isMobile) {
      // Use JavaScript animation for ALL mobile devices (including Huawei Y6P)
      moon = createMoon()
    } else {
      // Use CSS animation only for desktop
      if (supportsCSS3D()) {
        moon = createCSSMoon()
      } else {
        moon = createMoon()
      }
    }

    return () => {
      clearInterval(sparkleInterval)
      // Clean up moon
      if (moon && moon.parentNode) {
        moon.parentNode.removeChild(moon)
      }
    }
  }, [])

  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative" ref={avatarRef}>
            {/* Main Avatar Container - Responsive sizing */}
            <div className="w-64 h-64 md:w-64 md:h-64 sm:w-48 sm:h-48 xs:w-40 xs:h-40 mx-auto relative avatar-container">
              {/* Outer gradient ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full p-2">
                {/* Inner container */}
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full p-2">
                  {/* Avatar image container */}
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src="rjay.jpg"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      alt="Ralph Jay Guevarra - Web Developer"
                      onError={(e) => {
                        // Fallback to a default avatar if image fails to load
                        e.target.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Ccircle cx='128' cy='128' r='128' fill='%236366f1'/%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fontFamily='Arial, sans-serif' fontSize='80' fill='white'%3ERJ%3C/text%3E%3C/svg%3E"
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Rotating rings */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400/30 via-purple-500/30 to-cyan-400/30 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full border-2 border-transparent bg-gradient-to-l from-purple-400/20 via-blue-500/20 to-teal-400/20 animate-spin-reverse"></div>

              {/* Subtle pulsing glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-500/10 animate-pulse-slow"></div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hi! I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Ralph Jay Guevarra</span>, a
              passionate web developer with a love for creating beautiful, functional, and user-friendly websites. My
              journey in web development started with curiosity and has grown into a deep passion for crafting digital
              experiences.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying a peaceful moment in nature. I believe in continuous learning and always strive to improve my
              skills while creating meaningful digital solutions.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:scale-105 transition-transform duration-200">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm hover:scale-105 transition-transform duration-200">
                Creative Thinker
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm hover:scale-105 transition-transform duration-200">
                Team Player
              </span>
            </div>

            {/* Fun fact section */}
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Fun fact:</span> I love stargazing and find inspiration in the night sky
                - which is why this portfolio has that peaceful cosmic theme! The gentle moon orbiting around represents
                the constant cycle of learning and growth in my development journey! 🌙✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
