import "./layout.scss"
import "./components/navbar/Navbar"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./routes/homePage/homePage"

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <HomePage/>
      </div>
    </div>
  )
}

export default App