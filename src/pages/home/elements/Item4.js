import * as React from 'react';
import {Container, Stack, Typography} from "@mui/material";

export function Item4(props) {
    return (
        <Stack className={'Item4Container'}>
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

Item4.propTypes = {};