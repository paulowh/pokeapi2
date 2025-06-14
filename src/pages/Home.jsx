import React from "react";
import Navbar from "../components/Navbar";          // ajuste o caminho conforme seu projeto
import PokemonSearch from "../components/PokemonSearch"; // ajuste o caminho conforme seu projeto
import { Container } from "react-bootstrap";

export default function Home() {
    return (
        <>
            <Navbar />
            <Container className="py-4">
                <PokemonSearch />
            </Container>
        </>
    );
}
