import * as React from 'react';
import {useContext} from 'react';
import {Box, Container, Fab, Grid, Paper, Stack, Typography} from "@mui/material";
import {
    ArrowForward,
    MenuBookOutlined,
    NotificationsOutlined,
    PlayCircleOutlined,
    TranslateOutlined
} from "@mui/icons-material";
import {LanguageContext} from "../../../base";

export function BlocksElement(props) {

    const {t} = useContext(LanguageContext)

    return (
        <Box className={'ItemBlocksContainer'}>
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
                        <Paper elevation={3} className={'InfoBlock item1'}>
                            <Stack spacing={3}>
                                <TranslateOutlined/>

                                <Typography gutterBottom variant="h5">
                                    {t('pages.home.t_blocks_item1_title')}
                                </Typography>

                                <Box className={'BoxWithButton'}>
                                    <Typography gutterBottom variant="caption">
                                        {t('pages.home.t_blocks_item1_text')}
                                    </Typography>

                                    <Fab>
                                        <ArrowForward/>
                                    </Fab>
                                </Box>

                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={6} md={6} sm={6} xs={12}>
                        <Paper elevation={3} className={'InfoBlock item2'}>
                            <Stack spacing={3}>
                                <NotificationsOutlined/>

                                <Typography gutterBottom variant="h5">
                                    {t('pages.home.t_blocks_item2_title')}

                                </Typography>

                                <Box className={'BoxWithButton'}>
                                    <Typography gutterBottom variant="caption">
                                        {t('pages.home.t_blocks_item2_text')}
                                    </Typography>

                                    <Fab>
                                        <ArrowForward/>
                                    </Fab>
                                </Box>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={6} md={6} sm={6} xs={12}>
                        <Paper elevation={3} className={'InfoBlock item3'}>
                            <Stack spacing={3}>
                                <PlayCircleOutlined/>

                                <Typography gutterBottom variant="h5">
                                    {t('pages.home.t_blocks_item3_title')}

                                </Typography>

                                <Box className={'BoxWithButton'}>
                                    <Typography gutterBottom variant="caption">
                                        {t('pages.home.t_blocks_item3_text')}
                                    </Typography>

                                    <Fab>
                                        <ArrowForward/>
                                    </Fab>
                                </Box>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xl={3} lg={6} md={6} sm={6} xs={12}>
                        <Paper elevation={3} className={'InfoBlock item4'}>
                            <Stack spacing={3}>
                                <MenuBookOutlined/>

                                <Typography gutterBottom variant="h5">
                                    {t('pages.home.t_blocks_item4_title')}
                                </Typography>

                                <Box className={'BoxWithButton'}>
                                    <Typography gutterBottom variant="caption">
                                        {t('pages.home.t_blocks_item4_text')}
                                    </Typography>

                                    <Fab>
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