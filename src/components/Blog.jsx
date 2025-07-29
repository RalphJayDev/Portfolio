import { Calendar, Clock, ArrowRight } from "lucide-react"

const Blog = () => {
  // Placeholder blog posts
  const blogPosts = [
    {
      title: "Getting Started with React Hooks",
      excerpt: "Learn the fundamentals of React Hooks and how they can simplify your component logic...",
      date: "Coming Soon",
      readTime: "5 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop&auto=format",
      isPlaceholder: true,
    },
    {
      title: "Mastering Tailwind CSS",
      excerpt: "Discover advanced Tailwind CSS techniques to create beautiful and responsive designs...",
      date: "Coming Soon",
      readTime: "7 min read",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop&auto=format",
      isPlaceholder: true,
    },
    {
      title: "JavaScript ES6+ Features",
      excerpt: "Explore modern JavaScript features that will make your code cleaner and more efficient...",
      date: "Coming Soon",
      readTime: "6 min read",
      category: "JavaScript",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop&auto=format",
      isPlaceholder: true,
    },
  ]

  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Sharing knowledge and insights about web development
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-2">Blog Coming Soon! 🚀</h3>
          <p className="text-blue-100">
            I'm working on creating valuable content about web development, tutorials, and tech insights. Stay tuned for
            exciting articles!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden opacity-60"
            >
              <div className="relative">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominantBaseline='middle' textAnchor='middle' fontFamily='Arial, sans-serif' fontSize='14' fill='%236b7280'%3EBlog Image%3C/text%3E%3C/svg%3E"
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">{post.category}</span>
                </div>
                {post.isPlaceholder && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-semibold bg-black/70 px-4 py-2 rounded-lg">Coming Soon</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <button
                  className={`flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium transition-colors duration-200 ${
                    post.isPlaceholder
                      ? "cursor-not-allowed opacity-50"
                      : "hover:text-blue-700 dark:hover:text-blue-300"
                  }`}
                  disabled={post.isPlaceholder}
                >
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">Want to be notified when new articles are published?</p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 cursor-not-allowed opacity-50">
            Subscribe to Newsletter (Coming Soon)
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog
