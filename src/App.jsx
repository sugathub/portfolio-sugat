import CustomCursor from "./components/CustomCursor"
import IntroAnimation from "./components/IntroAnimation"
import Navbar from "./components/Navbar"
import OverlayMenu from "./components/OverlayMenu"
import About from "./section/About"
import { Contact } from "./section/Contact"
import { Experience } from "./section/Experience"
import Footer from "./section/Footer"
import Home from "./section/Home"
import Project from "./section/Project"
import { Skills } from "./section/Skills"
import Testimonials from "./section/Testimonials"


function App() {
 

  return (
    <div className=" relative gradient text-white">  
    <Navbar />
    <Home />
    <Home />

  <CustomCursor/>

 
  <About />
    <Skills />
        <Project />
  <Experience />
    <Testimonials />
   <Contact />

    <Footer />


    
    
     <IntroAnimation />
   
    
   
  
   
    
 
   
   
     
    </div>
  )
}

export default App
