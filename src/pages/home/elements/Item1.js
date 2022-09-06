import * as React from 'react';
import {Container, Stack, Typography} from "@mui/material";
import {ConstantImages} from "../../../base";

export function Item1(props) {
    return (
        <Stack className={'Item1Container'}>

            <div className={'Wave'}/>
            <div className={'Wave item2'}/>
            <div className={'Wave item3'}/>

            <Container maxWidth={'xl'}>
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

                    <Stack spacing={2}>

                        <Typography gutterBottom variant="h1" sx={{
                            color: '#3d354e'
                        }}>
                            Best
                            <br/>
                            teacher
                        </Typography>

                        <Typography gutterBottom variant="h3" sx={{
                            position: 'relative',
                            '&:after': {
                                content: '""',
                                position: 'absolute',
                                right: 0,
                                top: '34px',
                                height: '3px',
                                borderRadius: 2,
                                width: 188,
                                background: 'linear-gradient(240deg, #ffcda5, #FF2574)',
                            }
                        }}>
                            Julia
                            Zarubina
                        </Typography>
                    </Stack>

                    <img style={{
                        maxWidth: 600
                    }} src={ConstantImages.home.photo} alt={'Photo'}/>

                </Stack>
            </Container>
        </Stack>
    );
}

Item1.propTypes = {};