import * as React from 'react';
import {Container, Stack, Typography} from "@mui/material";
import Lottie from "lottie-react";
import {ConstantLottie} from "../../base/constants/ConstantLottie";

export function BooksPage() {
    return (
        <Container maxWidth={"lg"}>
            <Stack spacing={4}>

                <Typography variant="h3">
                    Books
                </Typography>

                <Lottie style={{
                    width: '100%',
                }} animationData={ConstantLottie.soon}/>
            </Stack>
        </Container>
    );
}

BooksPage.propTypes = {};