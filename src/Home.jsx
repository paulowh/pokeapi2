import React from "react";
import { Container, Typography, Button } from "@mui/material";

export default function Home({ onStart }) {
    return (
        <Container maxWidth="sm" sx={{ textAlign: "center", mt: 8 }}>
            <Typography variant="h3" color="error" gutterBottom>
                Bem-vindo ao PokéApp!
            </Typography>
            <Typography variant="body1" gutterBottom>
                Explore, salve e consulte seus Pokémon favoritos da primeira geração.
            </Typography>
            <Button
                variant="contained"
                color="error"
                size="large"
                onClick={onStart}
                endIcon={<span>→</span>}
            >
                Começar
            </Button>
        </Container>
    );
}
