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
                        Hello ! Im Mohamed arafa and i do web design, Graphic Design, User Experiences. habitant morbi
                        tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
                        feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
                        semper. Aenean ultricies mi vitae est. Mauris placerat feugiat vitae, ultricies eget, tempor sit
                        amet, ante.
                    </Typography>

                    <Stack
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