import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../components/Navbar';

export default function NotFound() {
    return (
        <>
            <NavBar />
            <Container className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
                <Row>
                    <Col>
                        <img
                            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
                            alt="Snorlax"
                            style={{ width: '180px', marginBottom: '1.5rem' }}
                        />
                        <h1>Snorlax está bloqueando o caminho!</h1>
                        <h4>Não foi possível encontrar essa região...</h4>
                        <p>Você pode tentar outra rota ou voltar para a Pokédex.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
