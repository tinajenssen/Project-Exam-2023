<Row>
<Col className="one">
  <Row>
    <Col>
      <Nav.Link href="#home">
        <img
          src={Profile}
          className="profile-img"
          alt="profile picture"
        />
      </Nav.Link>
    </Col>
    <Col>
      <Nav.Link href="#link">Name</Nav.Link>
    </Col>
  </Row>
</Col>
<Col className="two">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
</Col>
</Row>

<Navbar.Collapse id="basic-navbar-nav">
<Nav>
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#link">Link</Nav.Link>
</Nav>
</Navbar.Collapse>
<Navbar.Toggle aria-controls="basic-navbar-nav" />