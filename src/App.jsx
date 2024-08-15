import './App.css'
import Cursor from './components/UI/cursor/cursor'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Hero from './components/hero/hero'
import NavBar from './components/navbar/navbar'
import Project from './components/projects/project'

function App() {
  return (
    <>
      <div className="px-6 md:px-10 lg:mx-auto">
        <div id="particles-js"></div>
        
        {/* cursor */}
        <Cursor />

        <div className="flex flex-col h-screen">
          {/* navbar */}
          <NavBar />

          <div className="max-w-screen-xl w-full mx-auto h-full">
            {/* hero */}
            <Hero />
          </div>
        </div>
      </div>
      
      <About />

      <div className="mt-64">
        <Project />
      </div>

      <div className="my-40 md:my-64">
        <Contact />
      </div>

      <Footer />
    </>
  )
}

export default App
