import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './components/shared/Header/header.component';

import Register from './components/Register/register.component';

function App() {
  return (
    <div className='app' style={{position:'relative' ,right:"30px" }}>
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
 
  </div>
   );
}

export default App;
