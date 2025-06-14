import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import PokemonCard from './PokemonCard';

export default function PokemonSearch() {
    const [entrada, setEntrada] = useState('');
    const [pokemon, setPokemon] = useState(null);
    const [erro, setErro] = useState('');

    const buscarPokemon = async (valor = null) => {
        const busca = (valor || entrada.trim().toLowerCase());

        if (busca === '') {
            setErro('Digite algo para buscar.');
            setPokemon(null);
            return;
        }

        if (!isNaN(busca)) {
            const numero = Number(busca);
            if (numero > 151 || numero < 1) {
                setErro('Somente Pokémon da primeira geração (1-151).');
                setPokemon(null);
                return;
            }
        }

        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`);
            if (!res.ok) {
                setErro('Pokémon não encontrado.');
                setPokemon(null);
                return;
            }

            const data = await res.json();

            if (data.id > 151) {
                setErro('Ta achando que sou besta? Só Pokémon da primeira geração.');
                setPokemon(null);
                return;
            }

            setErro('');
            setPokemon(data);
        } catch {
            setErro('Erro ao buscar o Pokémon.');
            setPokemon(null);
        }
    };

    const buscarPokemonAleatorio = () => {
        const numero = Math.floor(Math.random() * 151) + 1;
        buscarPokemon(numero);
    };

    return (
        <Container style={{ maxWidth: '600px'}}>
            <h2 className="text-center text-primary mb-4">Buscar Pokémon</h2>

            <Form>
                <Row className="g-2 mb-3">
                    <Col xs={8}>
                        <Form.Control
                            type="text"
                            placeholder="Nome ou número"
                            value={entrada}
                            onChange={(e) => setEntrada(e.target.value)}
                        />
                    </Col>
                    <Col xs={2}>
                        <Button variant="success" onClick={() => buscarPokemon()}>
                            Buscar
                        </Button>
                    </Col>
                    <Col xs={2}>
                        <Button variant="outline-secondary" onClick={buscarPokemonAleatorio}>
                            Aleatório
                        </Button>
                    </Col>
                </Row>
            </Form>

            {erro && <Alert variant="warning">{erro}</Alert>}

            {pokemon && <PokemonCard pokemon={pokemon} />}
        </Container>
    );
}