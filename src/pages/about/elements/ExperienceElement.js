import * as React from 'react';
import {Avatar, Box, Button, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import {ConstantImages} from "../../../base";
import {LinkOutlined} from "@mui/icons-material";

export function ExperienceElement(props) {


    return (
        <Stack className={'AboutExperienceElementContainer'}>
            <Container maxWidth={'md'}>

                <Stack spacing={3} className={'TitleBlock'}>
                    <Typography variant="h2" align={'center'}>
                        Experience
                    </Typography>

                    <Typography variant="subtitle2" align={'center'}>
                        My work, I take into account only educational practice.
                        <br/>
                        I don't think anyone here is interested in my work in the police ;)
                    </Typography>
                </Stack>

                <Stack spacing={3} className={'ContentBlock'}>

                    <Grid container spacing={0} rowSpacing={3}>
                        <Grid item xl={4} lg={5} md={5} sm={8} xs={12}>

                            <Stack
                                direction={'row'}
                                spacing={2}
                            >
                                <Avatar
                                    alt={'Graduation icon, Education College School Logo'}
                                    src={ConstantImages.about.school}
                                    sx={{width: 40, height: 40}}
                                />

                                <Typography className={'ContentName'}>
                                    Graduation icon, Education College School Logo
                                </Typography>

                            </Stack>

                            <Stack className={'LineTime'} spacing={1}>
                                <Typography variant="h4">
                                    English teacher
                                </Typography>

                                <Typography variant="subtitle1" color={'#cfcfcf'}>
                                    Sep 2021 - Present
                                </Typography>
                            </Stack>

                        </Grid>
                        <Grid item xl={8} lg={5} md={5} sm={8} xs={12}>
                            <Stack spacing={3}>
                                <Typography variant="body1">
                                    This is my first and favorite job. I work with my beloved children, pass on my
                                    knowledge to them and learn from them.
                                </Typography>

                                <iframe
                                    className={'Map-Frame'}
                                    title="Lyceum-666"
                                    src="https://yandex.com/map-widget/v1/?um=constructor%3Acc745608557c75d8a689723c0a64c06e3315eccea3eceb476c5d74896dcff4bd&amp;source=constructor"
                                />

                                <Divider sx={{
                                    paddingTop: '32px'
                                }}/>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} rowSpacing={3}>
                        <Grid item xl={4} lg={5} md={5} sm={8} xs={12}>

                            <Stack
                                direction={'row'}
                                spacing={2}
                            >
                                <Avatar
                                    alt={'Graduation icon, Education College School Logo'}
                                    src={ConstantImages.about.university}
                                    sx={{width: 40, height: 40}}
                                />

                                <Typography className={'ContentName'}>
                                    Moscow State Institute of International Relations
                                </Typography>

                            </Stack>

                            <Stack className={'LineTime'} spacing={1}>
                                <Typography variant="h4">
                                    Student
                                </Typography>

                                <Typography variant="subtitle1" color={'#cfcfcf'}>
                                    Graduated in 2021
                                </Typography>
                            </Stack>

                        </Grid>
                        <Grid item xl={8} lg={5} md={5} sm={8} xs={12}>
                            <Stack spacing={3}>
                                <Typography variant="body1">
                                    Capital ranking of universities in 2022, according to Round University Ranking
                                    (RUR),
                                    includes 27 higher educational institutions. The most prestigious or best
                                    universities
                                    Moscow, there are three contenders who are placed in the so-called diamond
                                    league.
                                    <br/>
                                    <br/>
                                    This is the permanent leader of almost all such ratings - Moscow
                                    State University (MGU), as well as MEPhI and the Moscow Physics and Technology
                                    institute.
                                </Typography>

                                <Box>
                                    <Button
                                        size={'small'}
                                        color={'info'}
                                        startIcon={<LinkOutlined/>}
                                        sx={{textTransform: 'none'}}
                                    >
                                        https://www.msu.ru/
                                    </Button>
                                </Box>

                            </Stack>
                        </Grid>
                    </Grid>

                </Stack>

            </Container>


        </Stack>
    );
}

ExperienceElement.propTypes = {};