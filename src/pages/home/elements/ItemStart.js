import * as React from 'react';
import {useContext} from 'react';
import {Button, Card, CardContent, CardMedia, Container, Grid, Paper, Stack, Typography} from "@mui/material";
import {Shop} from "@mui/icons-material";
import {ConstantImages, LanguageContext} from "../../../base";

function CardItem(props) {
    return (
        <Card>
            <CardMedia
                component="img"
                height="194"
                image={props.image}
                alt="Paella dish"
            />
            <CardContent>
                <Stack spacing={2}>
                    <Typography variant="h5">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Here will be the text that Julia will write. I have nothing to do with it, so while I write
                        something that I can. For example, I was able to write this text for an example.
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export function ItemStart(props) {

    const {t} = useContext(LanguageContext)

    return (
        <Stack className={'ItemStartContainer'}>
            <Container maxWidth="lg">
                <Stack spacing={3}>
                    <Typography gutterBottom variant="h2" color="text.primary">
                        {t('pages.home.t_start_title')}
                    </Typography>

                    <Typography gutterBottom variant="subtitle2" color="text.primary">
                        {t('pages.home.t_start_subtitle')}
                    </Typography>
                </Stack>

                <Grid container spacing={3} rowSpacing={3} sx={{
                    paddingTop: 9
                }}>
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                        <CardItem
                            image={ConstantImages.home.post1}
                            title={"How to learn words without pain to remember them"}
                        />
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                        <CardItem
                            image={ConstantImages.home.post2}
                            title={"How to sleep in class without students noticing"}
                        />
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                        <CardItem
                            image={ConstantImages.home.post3}
                            title={"Teaching untrained students with the super method"}
                        />
                    </Grid>
                </Grid>

                <Paper elevation={5} className={'StartBlock'} sx={{
                    backgroundColor: '#4d5d83',
                    '&:after': {
                        backgroundColor: '#edacac'
                    }
                }}>
                    <Stack
                        className={'Content'}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <Typography variant="h2">
                            {t('pages.home.t_start_download_block')}
                        </Typography>

                        <Button variant="outlined" size="large" startIcon={<Shop/>} sx={{
                            color: '#3e4862',
                            border: '1px solid #3e4862',
                            backgroundColor: 'transparent',
                            opacity: 0.8,
                            transitionDuration: '200ms',
                            transitionProperty: 'opacity',
                            '&:hover': {
                                opacity: 1,
                                color: '#3e4862',
                                border: '1px solid #3e4862',
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