import * as React from 'react';
import {Container, Stack, Typography} from "@mui/material";
import Lottie from "lottie-react";
import {ConstantLottie} from "../../base/constants/ConstantLottie";

export function VideoPage() {
    return (
        <Container maxWidth={"lg"}>
            <Stack spacing={4}>

                <Typography variant="h3">
                    Video
                </Typography>

                <Lottie style={{
                    width: '100%',
                }} animationData={ConstantLottie.soon}/>
            </Stack>
        </Container>
    );
}

VideoPage.propTypes = {};