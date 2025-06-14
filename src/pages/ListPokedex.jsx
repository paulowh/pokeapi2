import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import NavBar from '../components/Navbar';

export default function PokedexPage() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPokemons() {
            try {
                const requests = Array.from({ length: 151 }, (_, i) =>
                    fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`).then(res => res.json())
                );
                const results = await Promise.all(requests);

                const formatted = results.map(pokemon => ({
                    id: pokemon.id,
                    name: pokemon.name,
                    image: pokemon.sprites.front_default,
                    type: pokemon.types.map(t => t.type.name).join(', ')
                }));

                setPokemons(formatted);
            } catch (error) {
                console.error('Erro ao carregar pokémons:', error);
            } finally {
                setLoading(false);
            }
        }

        loadPokemons();
    }, []);

    return (
        <>
            <NavBar />

            <Container className="py-4">
                <h1 className="text-center text-danger mb-4">
                    Pokédex - Os verdadeiros 151 Pokémon
                </h1>
                {loading ? (
                    <div className="text-center py-5">
                        <Spinner animation="border" variant="danger" />
                    </div>
                ) : (
                    <Row>
                        {pokemons.map(pokemon => (
                            <Col key={pokemon.id} xs={6} md={4} lg={2} className="mb-4">
                                <Card className="h-100 text-center">
                                    <Card.Img
                                        variant="top"
                                        src={pokemon.image}
                                        className="p-3 pokemon-img"
                                    />
                                    <Card.Body>
                                        <Card.Title className="mb-1 text-capitalize">
                                            {pokemon.name}
                                        </Card.Title>
                                        <Card.Text className="text-muted">
                                            <small>{pokemon.type}</small>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>

        </>
    );
}
