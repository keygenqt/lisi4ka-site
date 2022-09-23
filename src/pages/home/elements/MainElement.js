import * as React from 'react';
import {useContext} from 'react';
import {Box, Container, Stack, Typography} from "@mui/material";
import {ConstantImages, LanguageContext, useLocalStorage} from "../../../base";
import {ValueType} from "../../../base/route/ValueType";

export function MainElement(props) {

    const {t, isLocEn} = useContext(LanguageContext)
    const darkMode = useLocalStorage("darkMode", ValueType.bool);

    return (
        <Stack className={'ItemMainContainer'} sx={{
            backgroundColor: 'secondary.main'
        }}>
            <Container maxWidth={'xl'}>

                <Box className={'Wave'} sx={{
                    backgroundColor: 'secondary.main'
                }}/>
                <Box className={'Wave item2'} sx={{
                    backgroundColor: 'secondary.main'
                }}/>
                <Box className={'Wave item3'} sx={{
                    backgroundColor: 'secondary.main'
                }}/>

                <Stack
                    className={'Content'}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >

                    <Box className={'Circle'} sx={{
                        backgroundColor: 'success.main'
                    }}/>
                    <Box className={'Circle item2'} sx={{
                        backgroundColor: 'warning.main'
                    }}/>
                    <Box className={'Circle item3'} sx={{
                        backgroundColor: 'error.main'
                    }}/>
                    <Box className={'Circle item4'} sx={{
                        backgroundColor: 'info.main'
                    }}/>

                    <Stack spacing={2}>
                        <Typography gutterBottom variant="h1" className={'TitleMain'} sx={{
                            color: darkMode ? '#fff' : 'primary.main',
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
                            color: darkMode ? '#fbd5c8' : 'warning.main',
                            ...(isLocEn ? (
                                {
                                    '&:after': {
                                        width: '188px',
                                        backgroundColor: darkMode ? '#fbd5c8' : 'warning.main'
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