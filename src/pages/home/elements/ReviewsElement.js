import * as React from 'react';
import {Avatar, Box, Container, Fab, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import {ConstantImages} from "../../../base";
import {ArrowLeft, ArrowRight} from "@mui/icons-material";

export function ReviewsElement(props) {

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    let items = [
        {
            icon: ConstantImages.home.user1,
            name: "Remy Sharp",
            role: "UX Designer",
            description: "“My first teacher. I'm 56 and still remember those great lessons. Stop though. Who should write a review? And I thought about Olga Petrovna's speech, but who is Julia Zarubina?”"
        },
        {
            icon: ConstantImages.home.user2,
            name: "Travis Howard",
            role: "UX Designer",
            description: "“I have blue eyes, I'm tall and handsome. There is a cube on the press. I train every day. I like to ride a skateboard and dance different dances. And yes, I learned English, I have already learned a lot of words, I understand when the British swear at me.”"
        },
        {
            icon: ConstantImages.home.user3,
            name: "Cindy Baker",
            role: "UX Designer",
            description: "“She taught me well. When I arrived in England, the English did not surprise me. I knew they didn't speak our language.”"
        }
    ].map((item, i) => <Stack key={`item-${i}`} spacing={4}>

        <Avatar
            alt={item.name}
            src={item.icon}
            sx={{width: 56, height: 56, margin: 'auto'}}
        />

        <Grid container spacing={3} rowSpacing={3}>
            <Grid item xl={2} lg={2} md={2} sm={1} xs={0}/>
            <Grid item xl={8} lg={8} md={8} sm={10} xs={12}>
                <Typography gutterBottom variant="h5">
                    {item.description}
                </Typography>
            </Grid>
            <Grid item xl={2} lg={2} md={2} sm={1} xs={0}/>
        </Grid>

        <Typography gutterBottom variant="subtitle2">
            {item.name}
        </Typography>

    </Stack>)

    return (
        <Stack className={'ItemReviewContainer'}>
            <Box className={'Content'}>
                <Container maxWidth={'lg'}>
                    <Carousel
                        height={isMD ? null : 290}
                        swipe={true}
                        autoPlay={false}
                        navButtonsAlwaysVisible={true}
                        NavButton={({onClick, className, style, next, prev}) => {
                            return (
                                <Fab onClick={onClick} size="small" color="secondary" aria-label="add">
                                    {next && <ArrowRight/>}
                                    {prev && <ArrowLeft/>}
                                </Fab>
                            )
                        }}
                    >
                        {items}
                    </Carousel>
                </Container>
            </Box>
        </Stack>
    );
}

ReviewsElement.propTypes = {};