import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact(){
    return(
        <section id="Contact" className="section-padding">
            <div className="mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Contactez-moi</h2>
                <div className="grid md:grid-cols-2 gap-12">                <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold mb-4">Discutons de votre projet</h3>
                        <p className="text-muted-foreground">
                            Je suis toujours intéressé par de nouveaux défis et opportunités.
                            N'hésitez pas à me contacter pour discuter de vos idées.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <span>votre.email@example.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <span>+33 6 XX XX XX XX</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span>Votre Ville, France</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass-surface p-6 rounded-2xl space-y-4"
                    >
                        <div>
                            <label className="block text-sm font-medium mb-2">Nom</label>
                            <input type="text" className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input type="email" className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea rows="4" className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                            Envoyer
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}