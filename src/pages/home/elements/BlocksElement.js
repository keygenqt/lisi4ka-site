import * as React from 'react';
import {useContext} from 'react';
import {Box, Container, Fab, Grid, Paper, Stack, Typography} from "@mui/material";
import {
    ArrowForward,
    NotificationsOutlined,
    PlayCircleOutlined,
    ReceiptLongOutlined,
    TranslateOutlined
} from "@mui/icons-material";
import {LanguageContext, NavigateContext} from "../../../base";

export function BlocksElement(props) {

    const {t} = useContext(LanguageContext)
    const {route, routes} = useContext(NavigateContext)

    return (
        <Box className={'ItemBlocksContainer'} sx={{
            '&:after': {
                backgroundColor: 'primary.dark',
                opacity: '0.9'
            }
        }}>
            <Container maxWidth={'lg'}>

                <Stack spacing={3}>
                    <Typography gutterBottom variant="h2">
                        {t('pages.home.t_blocks_title')}
                    </Typography>

                    <Typography gutterBottom variant="subtitle2">
                        {t('pages.home.t_blocks_subtitle')}
                    </Typography>
                </Stack>

                <Grid container spacing={3} rowSpacing={3} sx={{
                    paddingTop: 9
                }}>
                    <Grid item xl={3} lg={6} md={6} sm={6} xs={12}>
                        <Paper elevation={3} className={'InfoBlock item1'} sx={{
                            backgroundColor: 'info.dark'
                        }}>
                            <Stack spacing={3}>
                                <PlayCircleOutlined/>

                                <Typography gutterBottom variant="h5">
                                    {t('pages.home.t_blocks_item1_title')}
                                </Typography>

                                <Box className={'BoxWithButton'}>
                                    <Typography gutterBottom variant="caption">
                                        {t('pages.home.t_blocks_item1_text')}
                                    </Typography>

                                    <Fab onClick={() => {
                                        route.toLocation(routes.videos)
                                    }}>
                                        <ArrowForward/>
                                    </Fab>
                                </Box>

                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={6} md={6} sm={6} xs={12}>
                        <Paper elevation={3} className={'InfoBlock item2'} sx={{
                            backgroundColor: 'warning.dark'
                        }}>
                            <Stack spacing={3}>
                                <NotificationsOutlined/>

                                <Typography gutterBottom variant="h5">
                                    {t('pages.home.t_blocks_item2_title')}

                                </Typography>

                                <Box className={'BoxWithButton'}>
                                    <Typography gutterBottom variant="caption">
                                        {t('pages.home.t_blocks_item2_text')}
                                    </Typography>

                                    <Fab onClick={() => {
                                        route.toLocation(routes.blogReviews)
                                    }}>
                                        <ArrowForward/>
                                    </Fab>
                                </Box>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={6} md={6} sm={6} xs={12}>
                        <Paper elevation={3} className={'InfoBlock item3'} sx={{
                            backgroundColor: 'success.dark'
                        }}>
                            <Stack spacing={3}>
                                <ReceiptLongOutlined/>

                                <Typography gutterBottom variant="h5">
                                    {t('pages.home.t_blocks_item3_title')}

                                </Typography>

                                <Box className={'BoxWithButton'}>
                                    <Typography gutterBottom variant="caption">
                                        {t('pages.home.t_blocks_item3_text')}
                                    </Typography>

                                    <Fab onClick={() => {
                                        route.toLocation(routes.blogArticles)
                                    }}>
                                        <ArrowForward/>
                                    </Fab>
                                </Box>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={6} md={6} sm={6} xs={12}>
                        <Paper elevation={3} className={'InfoBlock item4'} sx={{
                            backgroundColor: 'error.dark'
                        }}>
                            <Stack spacing={3}>
                                <TranslateOutlined/>

                                <Typography gutterBottom variant="h5">
                                    {t('pages.home.t_blocks_item4_title')}
                                </Typography>

                                <Box className={'BoxWithButton'}>
                                    <Typography gutterBottom variant="caption">
                                        {t('pages.home.t_blocks_item4_text')}
                                    </Typography>

                                    <Fab onClick={() => {
                                        route.toLocation(routes.videos)
                                    }}>
                                        <ArrowForward/>
                                    </Fab>
                                </Box>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}

BlocksElement.propTypes = {};