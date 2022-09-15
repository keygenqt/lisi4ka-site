import * as React from 'react';
import {useContext} from 'react';
import {Button, Container, Stack, Typography} from "@mui/material";
import {ConstantImages, LanguageContext, NavigateContext} from "../../../base";
import {FileDownload} from "@mui/icons-material";

export function QuestionsElement(props) {
    return (
        <Stack className={'AboutQuestionsElementContainer'}>
            <Container maxWidth={'md'}>
                <Stack spacing={3}>
                    <Typography variant="h2" align={'center'}>
                        Do you have any questions?
                    </Typography>

                    <Typography variant="subtitle2"  align={'center'}>
                        Don't be shy, say Hello!
                    </Typography>
                </Stack>
            </Container>
        </Stack>
    );
}

QuestionsElement.propTypes = {};