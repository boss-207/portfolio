import { motion } from "framer-motion"
import { projets } from "../../data/projets"

export default function Projets() {
    const colors = [
  { border: "hover:border-purple-500/50", shadow: "hover:shadow-purple-500/10", dot: "bg-purple-500" },
  { border: "hover:border-cyan-500/50",   shadow: "hover:shadow-cyan-500/10",   dot: "bg-cyan-500"   },
  { border: "hover:border-pink-500/50",   shadow: "hover:shadow-pink-500/10",   dot: "bg-pink-500"   },
  { border: "hover:border-amber-500/50",  shadow: "hover:shadow-amber-500/10",  dot: "bg-amber-500"  },
]
  return (
    <section id="Projets" className="py-32 px-6">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        
        <h2 className="
text-4xl md:text-6xl font-extrabold

bg-gradient-to-r from-white via-primary to-secondary
bg-clip-text text-transparent

drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]
">Mes Projets</h2>
      </motion.div>

      <div className="relative">


        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

        {projets.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative mb-16 md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
          >


            <div className={`absolute top-6 w-3 h-3 rounded-full left-5 md:left-auto ${colors[i % colors.length].dot} ${i % 2 === 0 ? "md:-right-1.5" : "md:-left-1.5"}`} />

  
            <div className={`rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-lg ${colors[i % colors.length].border} ${colors[i % colors.length].shadow}`}>

              {e.Image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={e.Image}
                    alt={e.Titre}
                    className="w-full h-full object-cover"
                  />
                    

                </div>
              )}
              <div className="p-6">

<span className={`text-xs font-mono mb-2 block ${i === 0 ? "text-purple-400" : i === 1 ? "text-cyan-400" : i === 2 ? "text-pink-400" : "text-amber-400"}`}>
  {String(i + 1).padStart(2, '0')}
</span>
  <h3 className="text-xl font-bold mb-2">{e.Titre}</h3>
  <p className="text-sm text-muted-foreground mb-4">{e.Description}</p>
  <div className="flex flex-wrap gap-2">
    {e.Langage?.map((lang, index) => (
      <span key={index} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
        {lang}
      </span>
    ))}
  </div>
</div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
