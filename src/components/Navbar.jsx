import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"

const navItems = ['Accueil', 'Apropos', 'Technologies', 'Projets', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [sections, setSection] = useState('Accueil')
  const [menumobil, setMenumobil] = useState(false)
  const [theme, setTheme] = useState('sombre')

  useEffect(() => {
    if (theme === 'claire') {
      document.documentElement.classList.add('claire')
    } else {
      document.documentElement.classList.remove('claire')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'sombre' ? 'claire' : 'sombre')
  }

  useEffect(() => {
    const handler = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false)
      navItems.map((e) => {
        const e1 = document.getElementById(e)
        e1 && e1.getBoundingClientRect().top < 200 ? setSection(e) : null
      })
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
      >
        <span className="px-4 py-2 text-sm font-bold gradient-text">MrPK.</span>

        <div className="flex items-center gap-2">
          {navItems.map(e => (
            <motion.a key={e} href={`#${e}`} className="relative px-4 py-2 text-sm font-medium">
              {sections == e && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-primary/15 border border-primary/20"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{e}</span>
            </motion.a>
          ))}

          {/* 
          <button onClick={toggleTheme} className="p-2 rounded-full glass-surface ml-2">
            {theme === 'sombre' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          */} 
          
        </div>
      </motion.nav>


      <button
        className="fixed bottom-6 left-1/2 -translate-x-1/2 md:hidden z-50 p-4 rounded-full glass-surface"
        onClick={() => setMenumobil(!menumobil)}
      >
        {menumobil ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {menumobil && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 left-6 right-6 z-50 glass-surface p-4 flex flex-col gap-2"
          >
            {navItems.map(e => ( 
                <a
                key={e}
                href={`#${e}`}
                className="relative block px-4 py-3 text-sm font-medium rounded-xl hover:bg-primary/10 transition-colors"
                onClick={() => setMenumobil(false)}
              >
                {sections == e && (
                  <motion.span
                    layoutId="nav-pill-mobile"
                    className="absolute inset-0 rounded-xl bg-primary/15 border border-primary/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{e}</span>
              </a>
            ))}

            {/* 
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-xl hover:bg-primary/10 transition-colors"
            >
              {theme === 'sombre' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span>{theme === 'sombre' ? 'Mode clair' : 'Mode sombre'}</span>
            </button>
            */}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}