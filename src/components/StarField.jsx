import { useEffect, useRef } from "react"

const StarField = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Star and meteor arrays
    const stars = []
    const meteors = []

    // Create stars with different sizes and twinkle speeds
    for (let i = 0; i < 300; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.8 + 0.4,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        maxOpacity: Math.random() * 0.8 + 0.2,
      })
    }

    // Create meteors with enhanced properties
    const createMeteor = () => {
      const startSide = Math.random()
      let startX, startY, angle

      // Meteors can come from different directions
      if (startSide < 0.25) {
        // From top
        startX = Math.random() * canvas.width
        startY = -50
        angle = (Math.random() * Math.PI) / 3 + Math.PI / 6 // 30-60 degrees
      } else if (startSide < 0.5) {
        // From top-right
        startX = canvas.width + 50
        startY = Math.random() * canvas.height * 0.3
        angle = (Math.random() * Math.PI) / 4 + (Math.PI * 3) / 4 // 135-180 degrees
      } else if (startSide < 0.75) {
        // From top-left
        startX = -50
        startY = Math.random() * canvas.height * 0.3
        angle = (Math.random() * Math.PI) / 4 + Math.PI / 4 // 45-90 degrees
      } else {
        // From right
        startX = canvas.width + 50
        startY = Math.random() * canvas.height * 0.5
        angle = (Math.random() * Math.PI) / 6 + (Math.PI * 2) / 3 // 120-150 degrees
      }

      meteors.push({
        x: startX,
        y: startY,
        speed: Math.random() * 4 + 3, // Faster meteors
        angle: angle,
        length: Math.random() * 120 + 60, // Longer trails
        opacity: 1,
        size: Math.random() * 3 + 2, // Bigger meteors
        glowSize: Math.random() * 8 + 6, // Glow effect size
        color: {
          r: Math.random() * 100 + 155, // White to light blue
          g: Math.random() * 100 + 155,
          b: Math.random() * 50 + 205,
        },
      })
    }

    // Create meteors at random intervals
    const meteorInterval = setInterval(() => {
      if (Math.random() < 0.7) {
        // 70% chance every interval
        createMeteor()
      }
    }, 2000)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars with enhanced twinkling
      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed
        if (star.opacity > star.maxOpacity || star.opacity < 0.1) {
          star.twinkleSpeed = -star.twinkleSpeed
        }

        // Add subtle glow to larger stars
        if (star.radius > 1.5) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.opacity) * 0.1})`
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.opacity)})`
        ctx.fill()
      })

      // Draw meteors with enhanced effects
      meteors.forEach((meteor, index) => {
        // Update meteor position
        meteor.x += Math.cos(meteor.angle) * meteor.speed
        meteor.y += Math.sin(meteor.angle) * meteor.speed
        meteor.opacity -= 0.008 // Slower fade

        // Remove meteors that are off-screen or faded
        if (
          meteor.opacity <= 0 ||
          meteor.x > canvas.width + 200 ||
          meteor.y > canvas.height + 200 ||
          meteor.x < -200 ||
          meteor.y < -200
        ) {
          meteors.splice(index, 1)
          return
        }

        // Calculate trail positions
        const trailX = meteor.x - Math.cos(meteor.angle) * meteor.length
        const trailY = meteor.y - Math.sin(meteor.angle) * meteor.length

        // Draw outer glow
        ctx.beginPath()
        ctx.moveTo(trailX, trailY)
        ctx.lineTo(meteor.x, meteor.y)
        ctx.strokeStyle = `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${meteor.opacity * 0.3})`
        ctx.lineWidth = meteor.glowSize
        ctx.lineCap = "round"
        ctx.stroke()

        // Draw main trail with gradient
        const gradient = ctx.createLinearGradient(trailX, trailY, meteor.x, meteor.y)
        gradient.addColorStop(0, `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, 0)`)
        gradient.addColorStop(
          0.7,
          `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${meteor.opacity * 0.6})`,
        )
        gradient.addColorStop(1, `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${meteor.opacity})`)

        ctx.beginPath()
        ctx.moveTo(trailX, trailY)
        ctx.lineTo(meteor.x, meteor.y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = meteor.size
        ctx.lineCap = "round"
        ctx.stroke()

        // Draw glowing head
        const headGradient = ctx.createRadialGradient(meteor.x, meteor.y, 0, meteor.x, meteor.y, meteor.size * 2)
        headGradient.addColorStop(0, `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${meteor.opacity})`)
        headGradient.addColorStop(
          0.5,
          `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, ${meteor.opacity * 0.5})`,
        )
        headGradient.addColorStop(1, `rgba(${meteor.color.r}, ${meteor.color.g}, ${meteor.color.b}, 0)`)

        ctx.beginPath()
        ctx.arc(meteor.x, meteor.y, meteor.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = headGradient
        ctx.fill()

        // Draw bright core
        ctx.beginPath()
        ctx.arc(meteor.x, meteor.y, meteor.size * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${meteor.opacity * 0.9})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
      clearInterval(meteorInterval)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}

export default StarField
