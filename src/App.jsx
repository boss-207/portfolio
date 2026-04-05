import Navbar  from "./components/Navbar"
import Accueil from "./components/sections/Accueil"
import Apropos from "./components/sections/Aprops"
import Projets from "./components/sections/Projets"
import Technologies from "./components/sections/Technologies"
import Contact from "./components/sections/Contact"
import Footer from "./components/sections/Footer"
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
        <Navbar/>
        <Accueil/>
        <Apropos/>
        <Technologies/>
        <Projets/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App