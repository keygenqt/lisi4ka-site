import * as React from 'react';
import {useContext} from 'react';
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import {SendOutlined} from "@mui/icons-material";
import Lottie from "lottie-react";
import {ConstantLottie} from "../../../base/constants/ConstantLottie";
import {ConstantOther, LanguageContext, NavigateContext} from "../../../base";

export function QuestionsElement(props) {

    const {t} = useContext(LanguageContext)
    const {route} = useContext(NavigateContext)

    return (
        <Stack className={'AboutQuestionsElementContainer'}>
            <Container maxWidth={'md'}>
                <Stack spacing={3}>
                    <Typography variant="h2" align={'center'}>
                        {t('pages.about.t_questions_title')}
                    </Typography>

                    <Typography variant="subtitle2" align={'center'}>
                        {t('pages.about.t_questions_subtitle')}
                    </Typography>

                    <Lottie className={'IconBg'} animationData={ConstantLottie.mailbox}/>

                    <Box textAlign='center'>
                        <Button
                            variant="outlined"
                            size="large"
                            endIcon={<SendOutlined/>}
                            sx={{
                                maxWidth: 'max-content',
                            }}
                            onClick={() => {
                                route.openEmail(ConstantOther.email)
                            }}
                        >
                            {t('pages.about.t_questions_btn_send')}
                        </Button>
                    </Box>
                </Stack>
            </Container>
        </Stack>
    );
}

QuestionsElement.propTypes = {};