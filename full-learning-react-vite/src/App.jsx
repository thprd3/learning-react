import './App.css'
import Navbar from "./components/project1/Navbar.jsx"
import Main from "./components/project1/Main.jsx"
import Footer from "./components/project1/Footer.jsx"

function App() {  
  return (
    <>
      <div className="project1">
        <h1>Project 1 - React info page</h1>
        <Navbar />
        <Main />
        <Footer />
      </div>

      <div className="project2">
        <h1>Project 2 - x</h1>
      </div>
    </>
  )
}

export default App
