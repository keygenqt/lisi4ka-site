import * as React from 'react';
import {Avatar, Box, Container, Fab, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import {ConstantImages} from "../../../base";
import {ArrowLeft, ArrowRight} from "@mui/icons-material";

export function ItemReview(props) {

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

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