import * as React from 'react';
import {Button, Container, Stack, Typography} from "@mui/material";
import {ConstantImages} from "../../../base";
import {FileDownload} from "@mui/icons-material";

export function ItemAboutMe(props) {
    return (
        <Stack className={'ItemAboutMeContainer'}>
            <Container maxWidth={'md'}>
                <Stack spacing={3}>
                    <Typography variant="h1" className={'title'}>
                        about me
                    </Typography>

                    <Typography variant="body1" className={'subtitle'}>
                        Hello! I am an English teacher. I teach at school 666. Just a hell of a teacher. I teach
                        everyone, I don’t torture anyone. We watch cartoons in class while I sleep. I'm also cool and I
                        love sweets: 5 candies is a grade of 5. I always dreamed of becoming a teacher so that I
                        wouldn't have to work. Well, it has become, but you have to work. I made my husband write a
                        website for me so that the students would study on it themselves. Actually part of this is a
                        joke.
                    </Typography>

                    <Stack
                        className={'SignatureBlock'}
                        direction={'row'}
                        spacing={3}
                        justifyContent='space-between'
                        sx={{
                            paddingTop: 4
                        }}
                    >

                        <Button variant="outlined" startIcon={<FileDownload/>}>
                            Download my resume
                        </Button>

                        <img style={{
                            maxWidth: 100
                        }} src={ConstantImages.home.signature} alt={'Signature'}/>

                    </Stack>
                </Stack>
            </Container>
        </Stack>
    );
}

ItemAboutMe.propTypes = {};