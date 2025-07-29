"use client"

import { useState } from "react"

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null)

  const skills = [
    {
      name: "HTML",
      level: 90,
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
      ),
    },
    {
      name: "CSS",
      level: 85,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      level: 80,
      color: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
        </svg>
      ),
    },
    {
      name: "React",
      level: 75,
      color: "bg-cyan-500",
      hoverColor: "hover:bg-cyan-600",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.992-1.36-1.56z" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      level: 85,
      color: "bg-teal-500",
      hoverColor: "hover:bg-teal-600",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      ),
    },
    {
      name: "WordPress",
      level: 70,
      color: "bg-indigo-500",
      hoverColor: "hover:bg-indigo-600",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-.963 0-1.641.84-1.641 1.74 0 .81.467 1.504.963 2.31.375.645.81 1.474.81 2.67 0 .828-.315 1.783-.72 3.109l-.943 3.154-3.435-10.23zm-2.7 20.615c-1.31.75-2.750 1.17-4.289 1.17C4.775 24.025 2.366 23.13.542 21.57l3.932-11.395c.001-.028.014-.052.016-.08l4.347 11.905c.131.29.275.543.426.77M12 22.79c-1.224 0-2.359-.23-3.414-.65l3.6-10.44 3.733 10.238c.024.06.057.117.095.172-.65.434-1.39.68-2.014.68" />
        </svg>
      ),
    },
    {
      name: "Figma",
      level: 75,
      color: "bg-pink-500",
      hoverColor: "hover:bg-pink-600",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704-.979c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.49-4.49 4.49zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.355-3.019-3.019-3.019z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50/50 dark:bg-gray-800/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`
                group space-y-3 sm:space-y-4 p-4 sm:p-6 
                bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl 
                shadow-sm hover:shadow-lg 
                transition-all duration-300 
                transform hover:-translate-y-2
                ${activeSkill === skill.name ? "-translate-y-2 shadow-lg" : "translate-y-0"}
                cursor-pointer
              `}
              onMouseEnter={() => setActiveSkill(skill.name)}
              onMouseLeave={() => setActiveSkill(null)}
              onTouchStart={() => setActiveSkill(skill.name)}
              onTouchEnd={() => setTimeout(() => setActiveSkill(null), 2000)}
            >
              {/* Header Section - Icon + Name + Percentage */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Animated Icon Container - Moves with the whole card */}
                  <div
                    className={`
                      flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg
                      ${skill.color} ${skill.hoverColor}
                      text-white transition-all duration-300
                      ${activeSkill === skill.name ? "scale-110 rotate-6 shadow-lg" : "scale-100 rotate-0"}
                    `}
                  >
                    <div
                      className={`
                        transition-transform duration-300
                        ${activeSkill === skill.name ? "scale-110" : "scale-100"}
                      `}
                    >
                      {skill.icon}
                    </div>
                  </div>

                  {/* Skill Name and Level - Moves with the card */}
                  <div className="flex-1">
                    <span
                      className={`
                        text-lg sm:text-xl font-semibold 
                        text-gray-800 dark:text-gray-200 
                        transition-all duration-300
                        ${activeSkill === skill.name ? "text-blue-600 dark:text-blue-400" : ""}
                      `}
                    >
                      {skill.name}
                    </span>
                    <div
                      className={`
                        text-sm mt-1 transition-colors duration-300
                        ${
                          activeSkill === skill.name
                            ? "text-blue-500 dark:text-blue-300"
                            : "text-gray-500 dark:text-gray-400"
                        }
                      `}
                    >
                      {skill.level >= 80 ? "Expert" : skill.level >= 70 ? "Advanced" : "Intermediate"}
                    </div>
                  </div>
                </div>

                {/* Percentage - Moves with the card */}
                <div className="text-right">
                  <span
                    className={`
                      text-lg sm:text-xl font-bold 
                      transition-colors duration-300
                      ${
                        activeSkill === skill.name
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300"
                      }
                    `}
                  >
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 sm:h-4 overflow-hidden">
                <div
                  className={`
                    h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden
                    ${skill.color}
                    ${activeSkill === skill.name ? "animate-pulse shadow-lg" : ""}
                  `}
                  style={{
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
                </div>
              </div>

              {/* Skill Description - Appears on hover/touch */}
              <div
                className={`
                  text-sm transition-all duration-300 overflow-hidden
                  ${
                    activeSkill === skill.name
                      ? "opacity-100 max-h-20 text-blue-600 dark:text-blue-400"
                      : "opacity-0 max-h-0 text-gray-600 dark:text-gray-400"
                  }
                `}
              >
                {skill.name === "HTML" && "Semantic markup and modern HTML5 features"}
                {skill.name === "CSS" && "Responsive design, animations, and modern CSS"}
                {skill.name === "JavaScript" && "ES6+, DOM manipulation, and async programming"}
                {skill.name === "React" && "Hooks, components, state management, and ecosystem"}
                {skill.name === "Tailwind CSS" && "Utility-first CSS framework and custom designs"}
                {skill.name === "WordPress" && "Theme development, customization, and plugins"}
                {skill.name === "Figma" && "UI/UX design, prototyping, and design systems"}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Always exploring new technologies and staying current with industry trends. Currently diving deeper into
              advanced React patterns, modern CSS techniques, and exploring the latest web development tools and
              frameworks.
            </p>

            {/* Learning Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">7+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">∞</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Learning Mode</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 dark:text-orange-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Passion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
