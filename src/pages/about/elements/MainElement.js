import * as React from 'react';
import {Avatar, Button, ButtonGroup, Container, Grid, Stack, Typography} from "@mui/material";
import {Email, LinkedIn, Telegram} from "@mui/icons-material";
import {ConstantImages} from "../../../base";

export function MainElement(props) {
    return (
        <Stack className={'AboutMainElementContainer'}>
            <Container maxWidth={'lg'}>
                <Grid container>
                    <Grid item xl={4} lg={5} md={5} sm={8} xs={12}>
                        <Stack spacing={2}>

                            <Avatar
                                alt={'Julia Zarubina'}
                                src={ConstantImages.home.user1}
                                sx={{width: 240, height: 240, marginBottom: 2, borderRadius: 2}}
                            />

                            <Typography variant="h3" color={'warning.main'}>
                                About Me
                            </Typography>

                            <Typography variant="subtitle2">
                                English teacher
                                <br/>
                                mother
                                <br/>
                                and loving wife
                            </Typography>

                            <Typography variant="h4">
                                Julia Zarubina
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xl={8} lg={5} md={5} sm={8} xs={12}>
                        <Stack spacing={3}>
                            <Typography variant="body1">
                                Hello! I am an English teacher. I teach at school 666. Just a hell of a teacher. I teach
                                everyone, I don’t torture anyone. We watch cartoons in class while I sleep. I'm also
                                cool and I love sweets: 5 candies is a grade of 5.
                                <br/>
                                <br/>
                                Hello! I am an English teacher. I teach at school 666. Just a hell of a teacher. I teach
                                everyone, I don’t torture anyone. We watch cartoons in class while I sleep. I'm also
                                cool and I love sweets: 5 candies is a grade of 5.
                                <br/>
                                <br/>
                                Hello! I am an English teacher. I teach at school 666. Just a hell of a teacher. I teach
                                everyone, I don’t torture anyone. We watch cartoons in class while I sleep. I'm also
                                cool and I love sweets: 5 candies is a grade of 5.
                                <br/>
                                <br/>
                                I always dreamed of becoming a teacher so that I wouldn't have to work. Well, it has
                                become, but you have to work.
                                <br/>
                                <br/>
                                I made my husband write a website for me so that the students would study on it
                                themselves. Actually part of this is a joke.
                            </Typography>

                            <Typography variant="h4">
                                Follow me
                            </Typography>

                            <ButtonGroup color={'primary'} size="small" aria-label="small button group">
                                <Button onClick={() => {

                                }}>
                                    <LinkedIn/>
                                </Button>
                                <Button onClick={() => {

                                }}>
                                    <Telegram/>
                                </Button>
                                <Button onClick={() => {

                                }}>
                                    <Email/>
                                </Button>
                            </ButtonGroup>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    );
}

MainElement.propTypes = {};