import React from 'react';
import { Card, Button, ListGroup, Row, Col } from 'react-bootstrap';
import './PokemonCard.css';

export default function PokemonCard({ pokemon, salvarPokemon }) {
    const tipos = pokemon.types.map(t => t.type.name).join(', ');
    const habilidades = pokemon.abilities.map(a => a.ability.name).join(', ');

    return (
        <Card className="mx-auto" style={{ maxWidth: '500px', marginTop: '1rem' }}>
            <Card.Body>
                <div className="d-flex justify-content-end mb-2">
                    <Button variant="primary" onClick={() => salvarPokemon(pokemon.id)}>
                        Salvar
                    </Button>
                </div>

                <Card.Header className="text-center border-0 pb-0 mb-3">
                    <Row className="justify-content-center g-3">
                        <Col xs="auto">
                            <Card.Img
                                variant="top"
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                style={{ width: 130, height: 130, objectFit: 'contain', backgroundColor: '#f8f9fa' }}
                            />
                        </Col>
                        <Col xs="auto">
                            <Card.Img
                                variant="top"
                                src={pokemon.sprites.front_shiny}
                                alt={`${pokemon.name} shiny`}
                                style={{ width: 130, height: 130, objectFit: 'contain', backgroundColor: '#f8f9fa' }}
                            />
                        </Col>
                    </Row>
                    <Card.Title className="text-capitalize mt-2">{pokemon.name}</Card.Title>
                    {pokemon.id === 7 && <Card.Subtitle>O Melhor de todos</Card.Subtitle>}
                    <small className="text-muted">#{pokemon.id}</small>
                </Card.Header>

                <hr />

                <section className="mb-3">
                    <h6>Informações Básicas</h6>
                    <ListGroup variant="flush">
                        <ListGroup.Item><strong>Tipo:</strong> {tipos}</ListGroup.Item>
                        <ListGroup.Item><strong>Altura:</strong> {(pokemon.height / 10).toFixed(1)} m</ListGroup.Item>
                        <ListGroup.Item><strong>Peso:</strong> {(pokemon.weight / 10).toFixed(1)} kg</ListGroup.Item>
                    </ListGroup>
                </section>

                <hr />

                <section className="mb-3">
                    <h6>Habilidades</h6>
                    <p>{habilidades}</p>
                </section>

                <hr />
                <section>
                    <h6>Estatísticas</h6>
                    <ListGroup>
                        <Row>
                            {pokemon.stats.map((stat, i) => (
                                <Col key={i} xs={6} className="mb-2">
                                    <ListGroup.Item
                                        className="text-uppercase fw-semibold text-center"
                                        style={{ backgroundColor: '#f8f9fa' }}
                                    >
                                        {stat.stat.name}: {stat.base_stat}
                                    </ListGroup.Item>
                                </Col>
                            ))}
                        </Row>
                    </ListGroup>
                </section>

            </Card.Body>
        </Card>
    );
}
