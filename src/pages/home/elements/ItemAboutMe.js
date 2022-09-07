import * as React from 'react';
import {Container, Stack, Typography} from "@mui/material";

export function ItemAboutMe(props) {
    return (
        <Stack className={'ItemAboutMeContainer'}>
            <Container maxWidth="xl" sx={{
                height: 400,
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

ItemAboutMe.propTypes = {};