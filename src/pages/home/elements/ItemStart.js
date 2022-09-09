import * as React from 'react';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Container,
    Grid,
    IconButton,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import {Favorite, MoreVert, Share, Shop} from "@mui/icons-material";
import {ConstantImages} from "../../../base";

function CardItem(props) {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: 'red'}} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert/>
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={ConstantImages.home.headerBgTeam}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Favorite/>
                </IconButton>
                <IconButton aria-label="share">
                    <Share/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export function ItemStart(props) {
    return (
        <Stack className={'ItemStartContainer'}>
            <Container maxWidth="lg">
                <Stack spacing={3}>
                    <Typography gutterBottom variant="h2">
                        Why An Scholercity Out Of The Ordinary
                    </Typography>

                    <Typography gutterBottom variant="subtitle2">
                        You don't have to struggle alone, you've got our assistance and help
                    </Typography>
                </Stack>

                <Grid container spacing={3} rowSpacing={3} sx={{
                    paddingTop: 9
                }}>
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                        <CardItem/>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                        <CardItem/>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                        <CardItem/>
                    </Grid>
                </Grid>

                <Paper elevation={5} className={'StartBlock'}>
                    <Stack
                        className={'Content'}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <Typography variant="h2">
                            Start learning by
                            <br/>
                            Downloading Apps.
                        </Typography>

                        <Button variant="outlined" size="large" startIcon={<Shop/>} sx={{
                            color: 'white',
                            border: '1px solid white',
                            backgroundColor: 'transparent',
                            opacity: 0.8,
                            transitionDuration: '200ms',
                            transitionProperty: 'opacity',
                            '&:hover': {
                                opacity: 1,
                                color: 'white',
                                border: '1px solid white',
                                backgroundColor: 'transparent',
                            },
                        }}>
                            Play Store
                        </Button>
                    </Stack>
                </Paper>

            </Container>
        </Stack>
    );
}

ItemStart.propTypes = {};