import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail } from "lucide-react"
import { FaGithub, FaLinkedin,FaPhone,FaWhatsapp } from "react-icons/fa"
import emailjs from '@emailjs/browser'


export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' })
  const [focus, setFocus] = useState(null)
  const [status, setStatus] = useState('idle')

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/boss-207" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/peniel-kouboumor-33202b343/" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/22870470202" },
  { icon: FaPhone, label: "Téléphone", href: "tel:+22870470202" },
  { icon: Mail, label: "Email", href: "mailto:penielkouboumor@gmail.com" },
]

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    emailjs.send('service_mlqpiuv','template_uqhsdrw',{
      from_name: form.nom,
      from_email: form.email,
      message: form.message
    },'X8_NKl0g4T7AUJ48p').then(() => {
      setStatus('sent'),
      setForm({ nom: '', email: '', message: '' })
    }).catch(() => {
      setStatus('error')
    })
    setTimeout(() => setStatus('sent'), 2000)
  }

  const inputClass = (field) => `w-full px-4 py-3 rounded-2xl bg-muted/30 border text-sm outline-none transition-all duration-300 ${
    focus === field
      ? 'border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.15)]'
      : 'border-white/10 hover:border-white/20'
  }`

  return (
    <section id="Contact" className="section-padding">
      <div className="glass-surface p-8 md:p-12 max-w-3xl mx-auto rounded-2xl">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
          Contactez-moi
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-2xl">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium tracking-widest text-muted-foreground uppercase ">
                Nom
              </label>
              <input
                type="text"
                placeholder="John "
                value={form.nom}
                name="nom"
                onChange={(e) => setForm(prev => ({ ...prev, nom: e.target.value }))}
                onFocus={() => setFocus('nom')}
                onBlur={() => setFocus(null)}
                className={inputClass('nom') }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                value={form.email}
                name="email"
                onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                onFocus={() => setFocus('email')}
                onBlur={() => setFocus(null)}
                className={inputClass('email')}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Message
            </label>
            <textarea
              placeholder="Parlez-nous de votre projet..."
              value={form.message}
              name="message"
              rows={6}
              onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
              onFocus={() => setFocus('message')}
              onBlur={() => setFocus(null)}
              className={inputClass('message')}
              style={{ resize: 'none' }}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl gradient-bg text-white font-semibold text-sm transition-all"
          >
            {status === 'sending' ? 'Envoi...' : status === 'sent' ? 'Envoyé ✓' : status === 'error' ? 'Erreur ✗' : 'Envoyer un message'}
            <Send className="w-4 h-4" strokeWidth={1.5} />
          </motion.button>

        </form>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex justify-center gap-4">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-2xl glass-surface text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
              >
                <s.icon className="w-5 h-5" strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}