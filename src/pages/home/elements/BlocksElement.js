import * as React from 'react';
import {Box, Container, Fab, Grid, Paper, Stack, Typography} from "@mui/material";
import {
    ArrowForward,
    MenuBookOutlined,
    NotificationsOutlined,
    PlayCircleOutlined,
    TranslateOutlined
} from "@mui/icons-material";

export function BlocksElement(props) {
    return (
        <Box className={'ItemBlocksContainer'}>
            <Container maxWidth={'lg'}>

                <Stack spacing={3}>
                    <Typography gutterBottom variant="h2">
                        What can you learn from this site
                    </Typography>

                    <Typography gutterBottom variant="subtitle2">
                        The site provides convenient tools to help learn English, all for my favorite students
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
                                    9,000 words
                                    <br/>
                                    for learning
                                </Typography>

                                <Box className={'BoxWithButton'}>
                                    <Typography gutterBottom variant="caption">
                                        Learn English words in a convenient format
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
                                    Weekly
                                    <br/>
                                    detailed reviews
                                </Typography>

                                <Box className={'BoxWithButton'}>
                                    <Typography gutterBottom variant="caption">
                                        Read weekly my posts and learn English
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
                                    Video
                                    <br/>
                                    text detailing
                                </Typography>

                                <Box className={'BoxWithButton'}>
                                    <Typography gutterBottom variant="caption">
                                        Possibility to watch a video detailing text sentences
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
                                    Books with
                                    <br/>
                                    native voice
                                </Typography>

                                <Box className={'BoxWithButton'}>
                                    <Typography gutterBottom variant="caption">
                                        Read books and listen to how the native reads
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