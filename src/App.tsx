import About from "./components/About.tsx"
import Footer from "./components/Footer.tsx"
import Github from "./components/Github.tsx"
import Main from "./components/Main.tsx"
import Projects from "./components/Projects.tsx"
import Skills from "./components/Skills.tsx"

function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center text-white">
        <Main />
        <About />
        <Projects />
        <Skills />
        <Github />
        <Footer />
      </div>
    </>
  )
}

export default App
