import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { GiPokecog } from 'react-icons/gi'; // ícone estilo Pokémon
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand href="#" className="d-flex align-items-center fw-bold text-danger">
                    <GiPokecog size={28} className="me-2" />
                    PokéApp
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-3">
                        <Nav.Link as={Link} to="/">Pokédex</Nav.Link>
                        <Nav.Link as={Link} to="/listar">Listar</Nav.Link>
                        <Nav.Link as={Link} to="/mypokedex">Minha Pokedex</Nav.Link>
                        <Nav.Link as={Link} to="/minigame">Mini Game</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
