import * as React from 'react';
import {useContext} from 'react';
import {Button, Container, Stack, Typography} from "@mui/material";
import {ConstantImages, LanguageContext} from "../../../base";
import {FileDownload} from "@mui/icons-material";

export function AboutMeElement(props) {

    const {t} = useContext(LanguageContext)

    return (
        <Stack className={'ItemAboutMeContainer'}>
            <Container maxWidth={'md'}>
                <Stack spacing={3}>
                    <Typography variant="h1" className={'title'}>
                        {t('pages.home.t_about_title')}
                    </Typography>

                    <Typography variant="body1" className={'subtitle'}>
                        {t('pages.home.t_about_description')}
                    </Typography>

                    <Stack
                        className={'SignatureBlock'}
                        direction={'row'}
                        spacing={3}
                        justifyContent='space-between'
                        sx={{
                            paddingTop: 4
                        }}
                    >

                        <Button variant="outlined" startIcon={<FileDownload/>}>
                            {t('pages.home.t_about_btn')}
                        </Button>

                        <img style={{
                            maxWidth: 100
                        }} src={ConstantImages.home.signature} alt={'Signature'}/>

                    </Stack>
                </Stack>
            </Container>
        </Stack>
    );
}

AboutMeElement.propTypes = {};