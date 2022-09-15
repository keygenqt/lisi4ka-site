import * as React from 'react';
import {Box, Container, Grid, Paper, Stack, Typography} from "@mui/material";

export function MySkillsElement(props) {
    return (
        <Stack className={'AboutMySkillsElementContainer'}>
            <Box sx={{height: 50}}/>
            <Stack className={'AboutMySkillsElementContainer2'}>
                <Container maxWidth={'lg'}>
                    <Stack spacing={3}>
                        <Typography variant="h2" align={'center'}>
                            My skills
                        </Typography>

                        <Typography variant="subtitle2"  align={'center'}>
                            My diplomas are awards and skills in which I am 100% sure
                        </Typography>
                    </Stack>

                    <Grid container spacing={3} rowSpacing={3}>
                        <Grid item xl={6} lg={5} md={5} sm={8} xs={12}>
                            <Paper className={'PaperItem'}>
                                <Typography variant="body1">
                                    My diplomas are awards and skills in which I am 100% sure
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xl={6} lg={5} md={5} sm={8} xs={12}>
                            <Paper className={'PaperItem'}>
                                <Typography variant="body1">
                                    My diplomas are awards and skills in which I am 100% sure
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xl={6} lg={5} md={5} sm={8} xs={12}>
                            <Paper className={'PaperItem'}>
                                <Typography variant="body1">
                                    My diplomas are awards and skills in which I am 100% sure
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xl={6} lg={5} md={5} sm={8} xs={12}>
                            <Paper className={'PaperItem'}>
                                <Typography variant="body1">
                                    My diplomas are awards and skills in which I am 100% sure
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xl={6} lg={5} md={5} sm={8} xs={12}>
                            <Paper className={'PaperItem'}>
                                <Typography variant="body1">
                                    My diplomas are awards and skills in which I am 100% sure
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xl={6} lg={5} md={5} sm={8} xs={12}>
                            <Paper className={'PaperItem'}>
                                <Typography variant="body1">
                                    My diplomas are awards and skills in which I am 100% sure
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Stack>
        </Stack>
    );
}

MySkillsElement.propTypes = {};