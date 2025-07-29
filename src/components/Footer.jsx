import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-900 dark:hover:text-white" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "Email", icon: Mail, href: "mailto:your.email@example.com", color: "hover:text-red-500" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              RjayDev
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Passionate web developer creating beautiful and functional digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Blog", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Get In Touch</h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>📧 Ralphjay9Guevarra@Gmail.com</p>
              <p>📱 +63 918 672 4007</p>
              <p>📍 Cebu City, Philippines</p>
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <span>© {currentYear} RjayDev. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>

          <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Designed and developed by RjayDev • Open to opportunities</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
