import * as React from 'react';
import {useContext} from 'react';
import {Button, Container, Stack, Typography} from "@mui/material";
import {ConstantImages, LanguageContext, NavigateContext} from "../../../base";

export function AboutMeElement(props) {

    const {t} = useContext(LanguageContext)
    const {route, routes} = useContext(NavigateContext)

    return (
        <Stack className={'ItemAboutMeContainer'}>
            <Container maxWidth={'md'}>
                <Stack spacing={3}>
                    <Typography variant="h1" className={'title'}>
                        {t('pages.home.t_about_title')}
                    </Typography>

                    <Stack
                        sx={{display: 'block'}}
                        spacing={1}
                    >
                        <Typography variant="body1" className={'subtitle'}>
                            {t('pages.home.t_about_description')}
                        </Typography>

                    </Stack>

                    <Stack
                        className={'SignatureBlock'}
                        direction={'row'}
                        spacing={3}
                        justifyContent='space-between'
                        sx={{
                            paddingTop: 4
                        }}
                    >

                        <img style={{
                            maxWidth: 100
                        }} src={ConstantImages.home.signature} alt={'Signature'}/>

                        <Button
                            variant={'outlined'}
                            onClick={() => {
                                route.toLocation(routes.about)
                            }}
                        >
                            {t('pages.home.t_btn_more')}
                        </Button>

                    </Stack>
                </Stack>
            </Container>
        </Stack>
    );
}

AboutMeElement.propTypes = {};