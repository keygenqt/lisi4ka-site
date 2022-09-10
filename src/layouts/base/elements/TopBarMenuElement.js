import * as React from 'react';
import {Container, Stack, Typography} from "@mui/material";

export function TopBarMenuElement(props) {
    return (
        <Stack className={'TopBarMenuElement'}>
            <Container maxWidth="lg">
                <Typography variant="h5">
                    @lisi4ka
                </Typography>
            </Container>
        </Stack>
    );
}

TopBarMenuElement.propTypes = {};