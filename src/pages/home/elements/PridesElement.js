import * as React from 'react';
import {useContext} from 'react';
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import {AccessTimeOutlined, Diversity1Outlined, LocalFloristOutlined, MonitorHeartOutlined} from "@mui/icons-material";
import {LanguageContext} from "../../../base";

export function PridesElement(props) {

    const {t} = useContext(LanguageContext)

    return (
        <Stack className={'ItemProudContainer'}>
            <Container maxWidth={'md'}>
                <Stack spacing={3}>
                    <Typography variant="h1" className={'title'}>
                        {t('pages.home.t_prides_title')}
                    </Typography>

                    <Typography variant="body1" className={'subtitle'}>
                        {t('pages.home.t_prides_subtitle')}
                    </Typography>

                    <Grid container spacing={0} rowSpacing={3}>

                        <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                            <Stack spacing={1}>
                                <Box className={'SvgIcon'}>
                                    <AccessTimeOutlined/>
                                </Box>

                                <Typography variant="h5" sx={{
                                    paddingTop: 1
                                }}>
                                    {t('pages.home.t_prides_item1_title')}
                                </Typography>

                                <Typography variant="caption">
                                    {t('pages.home.t_prides_item1_text')}
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                            <Stack spacing={1}>
                                <Box className={'SvgIcon'}>
                                    <Diversity1Outlined/>
                                </Box>

                                <Typography variant="h5" sx={{
                                    paddingTop: 1
                                }}>
                                    {t('pages.home.t_prides_item2_title')}
                                </Typography>

                                <Typography variant="caption">
                                    {t('pages.home.t_prides_item2_text')}
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                            <Stack spacing={1}>

                                <Box className={'SvgIcon'}>
                                    <LocalFloristOutlined/>
                                </Box>

                                <Typography variant="h5" sx={{
                                    paddingTop: 1
                                }}>
                                    {t('pages.home.t_prides_item3_title')}
                                </Typography>

                                <Typography variant="caption">
                                    {t('pages.home.t_prides_item3_text')}
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                            <Stack spacing={1}>
                                <Box className={'SvgIcon'}>
                                    <MonitorHeartOutlined/>
                                </Box>

                                <Typography variant="h5" sx={{
                                    paddingTop: 1
                                }}>
                                    {t('pages.home.t_prides_item4_title')}
                                </Typography>

                                <Typography variant="caption">
                                    {t('pages.home.t_prides_item4_text')}
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Stack>
    );
}

PridesElement.propTypes = {};