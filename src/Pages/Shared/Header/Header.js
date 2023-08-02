import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { users, logout } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="">
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#experts">
                Experts
              </Nav.Link>
              {users.email ? (
                <Button onClick={logout} variant="light">
                  Log-Out
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
            <Navbar.Text>
              Signed in as: <a href="#login">{users.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
