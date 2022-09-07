import * as React from 'react';
import {Box, Container, Fab, Grid, Paper, Stack, Typography} from "@mui/material";
import {
    ArrowForward,
    Diversity1Outlined,
    LocalLibraryOutlined,
    NotificationsOutlined,
    PlayCircleOutlined
} from "@mui/icons-material";

export function Item2(props) {
    return (
        <Container className={'Item2Container'} maxWidth={'lg'}>

            <Stack spacing={3}>
                <Typography gutterBottom variant="h2">
                    Why An Scholercity Out Of The Ordinary
                </Typography>

                <Typography gutterBottom variant="subtitle1">
                    You don't have to struggle alone, you've got our assistance and help
                </Typography>
            </Stack>

            <Grid container spacing={3} rowSpacing={3} sx={{
                paddingTop: 9
            }}>
                <Grid item xl={3} lg={6} md={6} sm={6} xs={12}>
                    <Paper elevation={3} className={'InfoBlock item1'}>
                        <Stack spacing={3}>
                            <LocalLibraryOutlined/>

                            <Typography gutterBottom variant="h5">
                                4,000
                                <br/>
                                Online courses
                            </Typography>

                            <Box className={'BoxWithButton'}>
                                <Typography gutterBottom variant="caption">
                                    Arse over tit morish wind up gormless butty.!
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
                                Job placement Support
                            </Typography>

                            <Box className={'BoxWithButton'}>
                                <Typography gutterBottom variant="caption">
                                    Arse over tit morish wind up gormless butty.!
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
                                Lifetime
                                Slack chat support
                            </Typography>

                            <Box className={'BoxWithButton'}>
                                <Typography gutterBottom variant="caption">
                                    Arse over tit morish wind up gormless butty.!
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
                            <Diversity1Outlined/>

                            <Typography gutterBottom variant="h5">
                                Research
                                <br/>
                                and Innovation
                            </Typography>

                            <Box className={'BoxWithButton'}>
                                <Typography gutterBottom variant="caption">
                                    Arse over tit morish wind up gormless butty.!
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
    );
}

Item2.propTypes = {};