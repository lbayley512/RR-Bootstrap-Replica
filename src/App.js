import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup' 
function App() {
  return (
  <div>
    <div id="navbar">
    <Navbar bg="light" expand="lg" >
     <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        <img id="logo" src="https://logos-world.net/wp-content/uploads/2022/01/Instacart-Logo-2017.png" /> 
      </Navbar.Brand>
   
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"> 
         </Nav>
         <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success" id="signBtn">Sign Up</Button>{' '}
          </Nav>
      </Navbar.Collapse>
    </Navbar> 
    </div> 
    <main>
    <div id="imageOver">
    
    <Card className="bg-dark text-white">
      <Card.Img src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" id="cardImg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Order groceries for delivery or pickup today</Card.Title>
        <Card.Text>
          Whatever you want from local stores, brought right to your door.
        </Card.Text>
        
        <>
      
      <Form.Control
        type="address"
        id="address"
        placeholder='Address'
      />
      <Button id="addressBtn" varient="primary" type="submit">Find Near You</Button>
    </>
      </Card.ImgOverlay>
    </Card>
    </div>
    
    
    <div className="grid">

    <h2>Browse stores in Houston</h2>
<Container style={{ marginTop: "40px", textAlign: "center" }}>
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
        <Row>
            <Col xs=".5" >
                <Image src="https://www.instacart.com/image-server/60x60/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5">
                <Image src="https://www.instacart.com/image-server/60x60/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/38/bef2eb95-7375-4547-ab37-21502de090e0.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5" >
                <Image src="https://www.instacart.com/image-server/144x/www.instacart.com/assets/domains/warehouse/logo/118/6ede4bd3-cc58-4e32-b10b-24ed1d656131.png" roundedCircle />
            </Col>
            <Col md="6">
                <h5 style={{ fontWeight: "bold" }}>CVS</h5>
                <p>Delivery</p>
            </Col>
        </Row>
    </Row>
</Container>

    </div>

</main>
</div>

  );
}

export default App;
