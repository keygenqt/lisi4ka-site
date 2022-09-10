import * as React from 'react';
import {Container, Stack, Typography} from "@mui/material";
import {ConstantImages} from "../../../base";

export function MainElement(props) {

    return (
        <Stack className={'ItemMainContainer'}>
            <Container maxWidth={'xl'}>

                <div className={'Wave'}/>
                <div className={'Wave item2'}/>
                <div className={'Wave item3'}/>

                <Stack
                    className={'Content'}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >

                    <div className={'Circle'}/>
                    <div className={'Circle item2'}/>
                    <div className={'Circle item3'}/>
                    <div className={'Circle item4'}/>

                    <Stack spacing={2}>

                        <Typography gutterBottom variant="h1" className={'TitleMain'}>
                            English
                            <br/>
                            teacher
                        </Typography>

                        <Typography className={'SubtitleMain'} variant="h3">
                            Julia
                            Zarubina
                        </Typography>
                    </Stack>

                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img style={{
                        maxWidth: 600
                    }} src={ConstantImages.home.photo} alt={'Photo'}/>

                </Stack>
            </Container>
        </Stack>
    );
}

MainElement.propTypes = {};