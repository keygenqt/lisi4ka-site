import * as React from 'react';
import {Container, Stack, Typography} from "@mui/material";

export function ItemStart(props) {
    return (
        <Stack className={'ItemStartContainer'}>
            <Container maxWidth="xl" sx={{
                height: 300,
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

ItemStart.propTypes = {};