import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Employees from "./components/pages/Employees"
import { Container, Row, Col } from 'reactstrap';
import Header from './components/shared/Header/header.component';
import Register from './components/Register/register.component';


function App() {
  return (
    <Router>
      <div className="App">
        <h5 style={{color:"ButtonFace",marginLeft:'46%',marginTop:"20px"}} >Register your account</h5>
        <Container style={{backgroundColor:"ButtonFace" ,marginTop:'20px',marginLeft:'40%',width:'25%'}}>
      <Row style={{backgroundColor:"AppWorkspace" ,width:"10%"}}>
        <Col>
          <Header />
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Register />
        </Col>
      </Row>

      <Row>
        <Col>
          
        </Col>
      </Row>
    </Container>
        <Navbar />
        <div>
          <Route exact={true} path="/" component={Employees} />
        </div>
      </div>
    </Router>
  )
}

export default App
