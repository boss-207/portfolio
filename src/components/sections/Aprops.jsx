import { motion } from "framer-motion"
import { GraduationCap, Code2, Clock, MapPin } from "lucide-react"
import { useState, useEffect } from "react"

export default function Apropos (){
    const [temps,setTemps]=useState(new Date())
    useEffect (()=>{
        const interval = setInterval(()=>{
            setTemps(new Date())
        },1000)
        return()=> clearInterval(interval)
    },[])
    
    return(
        <section id="Apropos" className="relative py-32">
            <div className="mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]
            ">Qui suis-je ?</h2><br/><br/>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30, scale: 0.95 }} viewport={{ once: true }} whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.5, delay: 0.1 }}  className="lg:col-span-2 rounded-md glass-surface p-8 cursor-pointer" >
                        <GraduationCap className="w-8 h-8 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors duration-300">L'Étude</h3>
                        <p className="">Étudiant en 2ème année de Licence Informatique à l'IAI-TOGO, passionné par l'ingénierie logicielle et les architectures modernes. Spécialisé dans le développement web JavaScript .</p></motion.div>
                    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30, scale: 0.95 }} viewport={{ once: true }} whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.5, delay: 0.1 }} className="lg:col-span-1 glass-surface p-8 cursor-pointer">
                        <Code2 className="w-8 h-8 text-primary mb-4"/>
                        <h3 className="text-xl font-bold mb-2">Années d'expérience</h3>
                        <h2 className="
text-4xl font-extrabold

bg-gradient-to-r from-primary to-secondary
bg-clip-text text-transparent

drop-shadow-[0_0_15px_hsl(var(--primary)/0.4)]
">2+</h2></motion.div>
                    <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30, scale: 0.95 }} viewport={{ once: true }} whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.5, delay: 0.1 }} className="lg:col-span-1 glass-surface p-8 cursor-pointer">
                        <Clock className="w-8 h-8 text-primary mb-4"/>
                        <h3 className="text-xl font-bold mb-2">Localisation</h3>
                            <h3 className="text-xl font-bold text-mono mb-2">{temps.toLocaleTimeString()}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4"/>
                                <span>Lomé,Togo</span>
                            </div>
                    </motion.div>
                          
                </div>
            </div>

        </section>
    )
}