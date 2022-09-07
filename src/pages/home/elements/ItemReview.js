import * as React from 'react';
import {Avatar, Box, Container, Fab, Grid, Stack, Typography} from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import {ConstantImages} from "../../../base";
import {ArrowLeft, ArrowRight} from "@mui/icons-material";

export function ItemReview(props) {

    let items = [
        {
            icon: ConstantImages.home.user1,
            name: "Remy Sharp",
            role: "UX Designer",
            description: "“ Barmy loo sloshed porkiesdo with me down the pub say bubble and squeak. ”"
        },
        {
            icon: ConstantImages.home.user2,
            name: "Travis Howard",
            role: "UX Designer",
            description: "“ Explore learning tips, career advice. Unlock new opportunities with unlimited access. ”"
        },
        {
            icon: ConstantImages.home.user3,
            name: "Cindy Baker",
            role: "UX Designer",
            description: "“ We’ll then ask you to tell us your current level of English or invite you to take our quick 20 minute placement test so we can make sure you start learning English. ”"
        }
    ].map((item, i) => <Stack key={`item-${i}`} spacing={4}>

        <Avatar
            alt={item.name}
            src={item.icon}
            sx={{width: 56, height: 56, margin: 'auto'}}
        />

        <Grid container spacing={3} rowSpacing={3}>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}/>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Typography gutterBottom variant="h5">
                    {item.description}
                </Typography>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}/>
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
                        height={290}
                        swipe={true}
                        autoPlay={false}
                        // animation={'slide'}
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

ItemReview.propTypes = {};