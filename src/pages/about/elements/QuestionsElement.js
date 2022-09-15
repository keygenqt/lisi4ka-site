import * as React from 'react';
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import {SendOutlined} from "@mui/icons-material";
import Lottie from "lottie-react";
import {ConstantLottie} from "../../../base/constants/ConstantLottie";

export function QuestionsElement(props) {
    return (
        <Stack className={'AboutQuestionsElementContainer'}>
            <Container maxWidth={'md'}>
                <Stack spacing={3}>
                    <Typography variant="h2" align={'center'}>
                        Do you have any questions?
                    </Typography>

                    <Typography variant="subtitle2" align={'center'}>
                        Don't be shy, say Hello!
                    </Typography>

                    <Lottie className={'IconBg'} animationData={ConstantLottie.mailbox}/>

                    <Box textAlign='center'>
                        <Button variant="outlined" size="large" endIcon={<SendOutlined/>} sx={{
                            maxWidth: 'max-content',
                        }}>
                            to write a message
                        </Button>
                    </Box>
                </Stack>
            </Container>
        </Stack>
    );
}

QuestionsElement.propTypes = {};