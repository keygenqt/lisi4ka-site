import * as React from 'react';
import {useContext} from 'react';
import {Container, Stack, Typography} from "@mui/material";
import {ConstantImages, LanguageContext} from "../../../base";

export function MainElement(props) {

    const {t, isLocEn} = useContext(LanguageContext)

    return (
        <Stack className={'ItemMainContainer'}>
            <Container maxWidth={'xl'}>

                <div className={'Wave'}/>
                <div className={'Wave item2'}/>
                <div className={'Wave item3'}/>

                <Stack
                    className={'Content'}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >

                    <div className={'Circle'}/>
                    <div className={'Circle item2'}/>
                    <div className={'Circle item3'}/>
                    <div className={'Circle item4'}/>

                    <Stack spacing={2}>
                        <Typography gutterBottom variant="h1" className={'TitleMain'} sx={{
                            ...(isLocEn ? (
                                {
                                    '@media (max-width: 1750px)': {
                                        fontSize: '80px',
                                    },
                                    '@media (max-width: 1550px)': {
                                        fontSize: '55px',
                                    },
                                }
                            ) : (
                                {
                                    fontSize: '90px',
                                    '@media (max-width: 2030px)': {
                                        fontSize: '70px',
                                    },
                                    '@media (max-width: 1000px)': {
                                        fontSize: '35px',
                                    },
                                }
                            ))
                        }}>
                            {t('pages.home.t_main_title')}
                        </Typography>

                        <Typography className={'SubtitleMain'} variant="h3" sx={{
                            ...(isLocEn ? (
                                {
                                    '&:after': {
                                        width: '188px'
                                    },
                                    '@media (max-width: 700px)': {
                                        '&:after': {
                                            width: '119px'
                                        },
                                    },
                                }
                            ) : (
                                {
                                    '&:after': {
                                        width: '202px'
                                    },
                                    '@media (max-width: 700px)': {
                                        '&:after': {
                                            width: '127px'
                                        },
                                    },
                                }
                            ))
                        }}>
                            {t('pages.home.t_main_subtitle')}
                        </Typography>
                    </Stack>

                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img style={{
                        maxWidth: 600
                    }} src={ConstantImages.home.photo} alt={'Photo'}/>

                </Stack>
            </Container>
        </Stack>
    );
}

MainElement.propTypes = {};