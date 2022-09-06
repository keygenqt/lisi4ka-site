import * as React from 'react';
import {Container, Stack, Typography} from "@mui/material";
import {Item1} from "./elements/Item1";

export function HomePage() {
    return (
        <Stack>
            <Item1/>





            <Container maxWidth="xl" sx={{
                height: 800,
                backgroundColor: '#F7F9FB'
            }}>
                <Typography variant="body1" sx={{
                    padding: 2
                }}>
                    Content
                </Typography>
            </Container>
        </Stack>

    );
}

HomePage.propTypes = {};