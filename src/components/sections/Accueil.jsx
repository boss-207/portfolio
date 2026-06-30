import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"


export default function Hero (){

    return(
        <div>
            <section id="Accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[url('/img.png')] bg-cover bg-center"  >
            
            <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute  animate-glow-pulse w-96 h-96 rounded-full blur-[120px] top-1/4 left-1/4 bg-primary/10 "></div>
                    <div className="absolute  animate-glow-pulse w-96 h-96 rounded-full blur-[120px] bottom-1/4 right-1/4 bg-secondary/10 "></div>
                    <div className="absolute  animate-glow-pulse w-96 h-96 rounded-full blur-[120px] top-1/2 left-1/2 bg-primary/10  "></div>
                </div>
                <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{opacity: 0, x: -40}} animate={{opacity: 1, x: 0}} transition={{duration:0.8}} className="text-center lg:text-left space-y-6">
                        <motion.h1 className="text-5xl md:text-7xl font-bold" initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8}}><br/>
                            <p className="text-sm text-primary mb-2 tracking-widest">Salut, Je suis</p>
                            <span className="gradient-text"> KOUBOUMOR</span><br/> Péniel Oboèaba</motion.h1>
                        <p className="text-lg text-muted-foreground">Passionné par la création d'expériences numériques captivantes, je suis un développeur Fullstack JavaScript spécialisé dans la conception de solutions innovantes et performantes.
                        </p><br/>
                        <div className="flex gap-4 flex-wrap">


  <a
    href="/KOUBOUMOR PÉNIEL OBOÈABA.pdf"
    target="_blank"
    download
    className="
    relative inline-flex items-center justify-center

    px-6 py-3 rounded-full

    bg-primary text-primary-foreground

    font-medium text-sm

    transition-all duration-300

    hover:scale-105
    hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)]

    before:absolute before:inset-0 before:rounded-full
    before:bg-gradient-to-b before:from-white/30 before:to-transparent
    before:opacity-20
    ">
    Telecharger Mon CV
  </a>

  <a
    href="#Contact"
    className="
    relative inline-flex items-center justify-center

    px-6 py-3 rounded-full

    border border-white/20
 backdrop-blur-md

    text-white font-medium text-sm

    transition-all duration-300

    hover:scale-105
    hover:bg-white/20
    hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]

    before:absolute before:inset-0 before:rounded-full
    before:bg-gradient-to-b before:from-white/40 before:to-transparent
    before:opacity-20
    "
  >
    Contactez-moi
  </a>

</div>
                    </motion.div>
                    <div className="flex justify-center lg:justify-end">
                        <motion.img initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8}} src="/peniel.png" alt="Hero Image" className="w-80 h-80 object-cover rounded-full shadow-lg animate-float" />
                    </div>
                    
                </div>
                <motion.div animate={{y: [0, 8, 0] }} transition={{duration: 2, repeat: Infinity, ease: "easeInOut" }}className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <ArrowDown onClick={()=>window.scrollTo({top:window.innerHeight, behavior:'smooth'})} className="text-muted-foreground "/>
                 </motion.div>
            </section>

            </div>

            
            
        
        
    )
}