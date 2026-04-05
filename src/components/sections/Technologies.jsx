import { technologies } from "../../data/technologies"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Technologies() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })


  const getColor = (name) => {
    switch (name) {
      case "React js": return "text-blue-500"
      case "JavaScript": return "text-yellow-400"
      case "Node js": return "text-green-500"
      case "Tailwind CSS": return "text-cyan-400"
      case "MongoDB": return "text-green-600"
      case "HTML": return "text-orange-500"
      case "CSS": return "text-blue-400"
      default: return "text-white"
    }
  }

  return (
    <section id="Technologies" ref={ref} className="py-32 px-6">

      <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]
">
        Technologies
      </h2><br/><br/>

      <div className="grid md:grid-cols-2 gap-10">

        {technologies.map((e, i) => {
          const IconCat = e.icon

          return (
            <motion.div
              key={i}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >


              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-white/5">
                  {IconCat && <IconCat className="w-5 h-5 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold">{e.titre}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">

                {e.langages.map((n, ic) => {
                  const IconSkill = n.icon

                  return (
                    <motion.div
                      key={ic}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300"
                      whileHover={{ y: -3 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.15 + ic * 0.05 }}
                    >
                      <div className="p-2 rounded-md bg-white/5">
                        {IconSkill && (
                          <IconSkill className={`w-5 h-5 ${getColor(n.nom)}`} />
                        )}
                      </div>

                      <span className="text-sm font-medium">
                        {n.nom}
                      </span>
                    </motion.div>
                  )
                })}

              </div>

            </motion.div>
          )
        })}

      </div>
    </section>
  )
}