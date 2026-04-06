
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { projets } from "../../data/projets"

export default function Projets (){
    return(
        <section id="Projets" className="section-padding">
            <div className="mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Mes Projets</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projets.map((projet, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-surface p-6 rounded-2xl hover:scale-105 transition-transform"
                        >
                            <h3 className="text-xl font-bold mb-3">{projet.Titre}</h3>
                            <p className="text-muted-foreground mb-4">{projet.Description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {projet.Langage.map((lang, i) => (
                                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                        {lang}
                                    </span>
                                ))}
                            </div>
                            {projet.github && (
                                <a href={projet.github} className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                                    <ExternalLink className="w-4 h-4" />
                                    Voir sur GitHub
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}