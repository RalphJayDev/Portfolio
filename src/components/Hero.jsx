import { ChevronDown } from "lucide-react"

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 sm:pt-20 bg-transparent">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 sm:mb-12">
          {/* Main Heading - Responsive */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RjayDev</span>
          </h1>

          {/* Subtitle - Responsive */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto px-4">
            A passionate web developer creating beautiful and functional digital experiences with modern technologies
          </p>
        </div>

        {/* CTA Buttons - Responsive */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4">
          <button
            onClick={() => document.querySelector("#projects").scrollIntoView({ behavior: "smooth" })}
            className="px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => document.querySelector("#contact").scrollIntoView({ behavior: "smooth" })}
            className="px-6 sm:px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator - Responsive */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={28} className="sm:w-8 sm:h-8" />
        </button>
      </div>
    </section>
  )
}

export default Hero
