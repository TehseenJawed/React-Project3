import React, {useContext} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {TransactionContext} from "./../service/Context";

export default function NavBar(){
  let set = useContext(TransactionContext);
  let {transactions} = useContext(TransactionContext)
  console.log(transactions.length)
  return(<div>
        <Navbar className="nav-shadow fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Shopping.</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Items" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#memes">
      <i class="fas fa-cart-plus"></i> {transactions.length}
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>)
}