import * as React from 'react';
import {useContext} from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import {Shop} from "@mui/icons-material";
import {LanguageContext, NavigateContext} from "../../../base";
import {BlogData} from "../../blog/data/BlogData";

function CardItem(props) {

    const {route, routes} = useContext(NavigateContext)

    return (
        <Card>
            <CardActionArea onClick={() => {
                route.toLocation(routes.post, props.id)
            }}>
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
                            {props.description}
                        </Typography>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export function ItemStart(props) {

    const {t, isLocEn} = useContext(LanguageContext)

    const content = []

    BlogData.reverse().slice(0, 3).forEach((item) => {
        content.push(<Grid key={item.id} item xl={4} lg={4} md={4} sm={12} xs={12}>
            <CardItem
                id={item.id}
                image={item.image}
                title={isLocEn ? item.title : item.titleRu}
                description={isLocEn ? item.description : item.descriptionRu}
            />
        </Grid>)
    })

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
                    {content}
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