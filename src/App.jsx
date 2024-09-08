import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Hero } from "./components"
import About from "./components/About"
import Experience from "./components/Experience"
import Tech from "./components/Tech"

function App() {

  return (
   <BrowserRouter>
   <div className="relative z-0 bg-white">
   <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Experience/>
        <Tech/>
   </div>
   </BrowserRouter>
  )
}

export default App
