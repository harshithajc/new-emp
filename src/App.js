import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Employees from "./components/pages/Employees"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Route exact={true} path="/" component={Employees} />
        </div>
      </div>
    </Router>
  )
}

export default App
