import * as React from 'react';
import {useContext} from 'react';
import {
    Avatar,
    Button,
    ButtonGroup,
    Card,
    CardActionArea,
    CardHeader,
    Container,
    Divider,
    Grid,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {Brightness4Outlined, Brightness5Outlined, Email, LinkedIn, Telegram} from "@mui/icons-material";
import {AppCache, ConstantImages, LanguageContext, NavigateContext, useLocalStorage} from "../../../base";
import {Link} from "react-router-dom";
import {ValueType} from "../../../base/route/ValueType";

export function FooterElement(props) {

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const darkMode = useLocalStorage("darkMode", ValueType.bool);

    const {t, i18n, isLocEn} = useContext(LanguageContext)
    const {route, routes} = useContext(NavigateContext)

    return (
        <Stack className={'FooterElement'}>
            <Container maxWidth="lg">

                <Stack spacing={3}>
                    <Grid container spacing={4} rowSpacing={4}>
                        <Grid item xl={5} lg={5} md={5} sm={8} xs={12}>

                            <Stack spacing={2}>

                                <Typography variant="h6" color="#ffffff">
                                    {t('layouts.footer.t_block1_title')}
                                </Typography>

                                <Typography variant="caption" color="#ffffff">
                                    {t('layouts.footer.t_block1_desc')}
                                </Typography>

                                <Stack
                                    direction={'row'}
                                    spacing={1}
                                    alignItems={'center'}
                                >
                                    <Typography variant="body1" color="#ffffff">
                                        {t('layouts.footer.t_block1_email')}
                                    </Typography>

                                    <Button
                                        className={'Link'}
                                        size={'small'}
                                        color={'info'}
                                        onClick={() => {
                                            route.openEmail('lisi4ka@mail.com')
                                        }}>
                                        lisi4ka@mail.com
                                    </Button>
                                </Stack>

                                <Stack
                                    direction={'row'}
                                    spacing={1}
                                    alignItems={'center'}
                                >
                                    <Typography variant="body1" color="#ffffff">
                                        {t('layouts.footer.t_block1_phone')}
                                    </Typography>

                                    <Button
                                        className={'Link'}
                                        size={'small'}
                                        color={'info'}
                                        onClick={() => {
                                            route.openPhone('234-777-8888')
                                        }}>
                                        234-777-8888
                                    </Button>

                                </Stack>

                                <ButtonGroup color={'secondary'} size="small" aria-label="small button group">
                                    <Button onClick={() => {

                                    }}>
                                        <LinkedIn/>
                                    </Button>
                                    <Button onClick={() => {

                                    }}>
                                        <Telegram/>
                                    </Button>
                                    <Button onClick={() => {

                                    }}>
                                        <Email/>
                                    </Button>
                                </ButtonGroup>

                            </Stack>
                        </Grid>

                        {isSM ? null : (
                            <Grid item xl={3} lg={3} md={3} sm={4} xs={12}>
                                <Stack spacing={2}>

                                    <Typography variant="h6" color="#ffffff">
                                        {t('layouts.footer.t_block2_title_youtube')}
                                    </Typography>

                                    <Stack spacing={1} className={'Links'}>
                                        <Link to={routes.youtubeBooks.path}>
                                            <Typography variant="body1">
                                                {t('layouts.footer.t_block2_link_books')}
                                            </Typography>
                                        </Link>
                                        <Link to={routes.youtubeVideos.path}>
                                            <Typography variant="body1">
                                                {t('layouts.footer.t_block2_link_videos')}
                                            </Typography>
                                        </Link>
                                    </Stack>

                                    <Typography variant="h6" color="#ffffff">
                                        {t('layouts.footer.t_block2_title_blog')}
                                    </Typography>

                                    <Stack spacing={1} className={'Links'}>
                                        <Link to={routes.blogArticles.path}>
                                            <Typography variant="body1">
                                                {t('layouts.footer.t_block2_link_articles')}
                                            </Typography>
                                        </Link>
                                        <Link to={routes.blogReviews.path}>
                                            <Typography variant="body1">
                                                {t('layouts.footer.t_block2_link_reviews')}
                                            </Typography>
                                        </Link>
                                    </Stack>
                                </Stack>

                            </Grid>
                        )}
                        {isSM ? null : (
                            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                                <Stack spacing={2}>

                                    <Typography variant="h6" color="#ffffff">
                                        {t('layouts.footer.t_block3_title')}
                                    </Typography>

                                    <Stack spacing={2}>
                                        <Card className={'CardFooter'}>
                                            <CardActionArea>
                                                <CardHeader
                                                    avatar={
                                                        <Avatar aria-label="recipe" src={ConstantImages.home.post1}>
                                                            R
                                                        </Avatar>
                                                    }
                                                    title="How to learn words without pain to remember them"
                                                    subheader="September 14, 2016"
                                                />
                                            </CardActionArea>
                                        </Card>

                                        <Card className={'CardFooter'}>
                                            <CardActionArea>
                                                <CardHeader
                                                    avatar={
                                                        <Avatar aria-label="recipe" src={ConstantImages.home.post2}>
                                                            R
                                                        </Avatar>
                                                    }
                                                    title="How to sleep in class without students noticing"
                                                    subheader="September 14, 2016"
                                                />
                                            </CardActionArea>
                                        </Card>

                                    </Stack>

                                </Stack>
                            </Grid>
                        )}

                    </Grid>

                    <Divider/>

                    <Stack
                        direction={'row'}
                        spacing={3}
                        justifyContent='space-between'>

                        <Typography variant="caption" className={'Copyright'} color="#ffffff">
                            © 2022 KeyGenQt. All Right Reserved.
                        </Typography>

                        <Stack
                            sx={{
                                height: '20px',
                                '& .MuiButtonGroup-grouped': {
                                    minWidth: '30px !important'
                                }
                            }}
                            direction={'row'}
                            spacing={1}>

                            <ButtonGroup
                                color={'secondary'}
                                size="small"
                                variant="text"
                                aria-label="Localization"
                            >
                                <Button
                                    className={isLocEn ? 'Active' : ''}
                                    disabled={isLocEn}
                                    onClick={() => {
                                        i18n.changeLanguage('en')
                                    }}
                                >
                                    En
                                </Button>
                                <Button
                                    className={!isLocEn ? 'Active' : ''}
                                    disabled={!isLocEn}
                                    onClick={() => {
                                        i18n.changeLanguage('ru')
                                    }}
                                >
                                    Ru
                                </Button>
                            </ButtonGroup>

                            <ButtonGroup
                                color={'secondary'}
                                size="small"
                                variant="text"
                                aria-label="Mode"
                            >
                                <Button
                                    onClick={() => {
                                        AppCache.booleanSet('darkMode', !darkMode)
                                    }}
                                >
                                    {darkMode ? (
                                        <Brightness5Outlined sx={{
                                            width: '16px',
                                            height: '16px'
                                        }}/>
                                    ) : (
                                        <Brightness4Outlined sx={{
                                            width: '16px',
                                            height: '16px'
                                        }}/>
                                    )}

                                </Button>
                            </ButtonGroup>

                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    );
}

FooterElement.propTypes = {};