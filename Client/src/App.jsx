import Custom from "./Components/custom"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"

function App() {
  
  return (
    <div className="max-w-[1200px] mx-auto">
      <Navbar/>
      <Hero/>
      <Custom/>
      <Footer/>
    </div>
  )
}

export default App
