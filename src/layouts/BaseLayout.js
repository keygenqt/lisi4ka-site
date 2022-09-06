import * as React from 'react';
import PropTypes from "prop-types";
import {Box, Container, Stack, Typography} from "@mui/material";

export function BaseLayout(props) {
    return (
        <div className={"AppTable"}>
            <div className={"AppTableRow"}>
                <header className={"AppTableCell"}>
                    <Box className={"Menu"}>
                        <Container maxWidth="xl">
                            <Typography variant="h5">
                                @lisi4ka
                            </Typography>
                        </Container>
                    </Box>
                </header>
            </div>
            <div className={"AppTableRow"}>
                <main className={"AppTableCell"} style={{
                    verticalAlign: props.isCenter ? 'middle' : 'top'
                }}>
                    <Stack>
                        {props.children}
                    </Stack>
                </main>
            </div>
            <div className={"AppTableRow"}>
                <footer className={"AppTableCell"}>
                    <Container maxWidth="xl">
                        <Typography variant="body1" sx={{
                            padding: 2
                        }}>
                            FOOTER
                        </Typography>
                    </Container>
                </footer>
            </div>
        </div>
    )
}

BaseLayout.propTypes = {
    isCenter: PropTypes.bool,
    children: PropTypes.element.isRequired,
};