import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {
    Autocomplete,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia, Checkbox,
    CircularProgress,
    Container, FormControl, FormControlLabel, FormGroup, Grid, Radio, RadioGroup,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
    Zoom
} from "@mui/material";
import {LanguageContext, NavigateContext, useWindowResize, useWindowScroll} from "../../base";
import Lottie from "lottie-react";
import {ConstantLottie} from "../../base/constants/ConstantLottie";
import Masonry from '@mui/lab/Masonry';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import {BookOutlined, ExpandMoreOutlined, OndemandVideoOutlined} from "@mui/icons-material";
import AccordionDetails from "@mui/material/AccordionDetails";

const data = [
    {
        id: 1,
        idYouTube: 'kLvuZtpQaSs',
        title: 'Hollywood in 1950\'s vs NOW!',
        author: 'AwakenWithJP',
        type: 'video'
    },
    {
        id: 2,
        idYouTube: '3sXaq0NNZjo',
        title: 'The Tell-Tale Heart by Edgar Allan Poe',
        author: 'Justin Franco',
        type: 'book'
    },
    {
        id: 3,
        idYouTube: 'P2emFurIekk',
        title: 'How to Offend Everyone',
        author: 'AwakenWithJP',
        type: 'video'
    },
    {
        id: 4,
        idYouTube: 'xBfZ2-0U4ck',
        title: 'Unboxing MacBook Pro M2',
        author: 'Alex Ziskind',
        type: 'video'
    },
    {
        id: 5,
        idYouTube: 'd1HIopKBb3w',
        title: 'What Spiritual People Are Like During the Quarantine',
        author: 'AwakenWithJP',
        type: 'video'
    },
    {
        id: 6,
        idYouTube: 'mvtrGOjmmTU',
        title: 'We’re Controlling You Even MORE Now! - News Update',
        author: 'AwakenWithJP',
        type: 'video'
    },
    {
        id: 7,
        idYouTube: 'h6Cfbb3pJFI',
        title: 'Apple M1 vs Intel Core i9 and Docker Preview - First Look',
        author: 'Alex Ziskind',
        type: 'video'
    },
    {
        id: 8,
        idYouTube: 'OxQDmxFyHsA',
        title: 'What Liberals Think Conservative Companies are Like',
        author: 'AwakenWithJP',
        type: 'video'
    },
    {
        id: 9,
        idYouTube: '-kgNeyZNatk',
        title: 'Github Copilot has a HIDDEN SKILL',
        author: 'Alex Ziskind',
        type: 'video'
    },
]

function CardItemVideo(props) {

    const {t} = useContext(LanguageContext)
    const {route, routes} = useContext(NavigateContext)

    return (
        <Card
            variant={'outlined'}
        >
            <Box className={'ImageCard'}>
                <CardMedia
                    component="img"
                    height="145"
                    image={`https://img.youtube.com/vi/${props.idYouTube}/hqdefault.jpg`}
                    alt="Paella dish"
                />
                <Box>

                    {props.type === 'video' ? <OndemandVideoOutlined color={'info'}/> : <BookOutlined color={'success'}/>}

                    <Button
                        color={'warning'}
                        variant={'outlined'}
                        size={'small'}
                        onClick={() => {
                            route.toLocation(routes.youtubeVideo, props.id)
                        }}
                    >
                        {t('pages.youtube.t_youtube_btn_read')}
                    </Button>
                </Box>
            </Box>

            <CardContent>
                <Stack spacing={1}>


                    <Typography variant="subtitle2">
                        {props.title}
                    </Typography>

                    <Stack spacing={0}>
                        <Typography variant="caption">
                            {t('pages.youtube.t_youtube_card_author')}: {props.author}
                        </Typography>
                        <Typography variant="caption">
                            {t('pages.youtube.t_youtube_card_time')}: 7:29
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export function YouTubePage() {

    const {t} = useContext(LanguageContext)

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    const {y} = useWindowScroll()
    const {height} = useWindowResize()

    const loadingRef = React.useRef(null)

    const [loading, setLoading] = useState(false)
    const [isEnd, setIsEnd] = useState(false)

    useEffect(() => {
        if (!isEnd && !loading && y + height > loadingRef.current?.offsetTop) {
            setLoading(true)
            setTimeout(function () {
                setIsEnd(true)
                setLoading(false)
            }, 2000);
        }
    }, [y, height, isEnd, loading])

    const autocomplete = []
    const content = []

    data.forEach((item) => {
        content.push(<CardItemVideo
            id={item.id}
            key={item.idYouTube}
            idYouTube={item.idYouTube}
            title={item.title}
            author={item.author}
            type={item.type}
            url={`https://www.youtube.com/watch?v=${item.idYouTube}`}
        />)
    })

    data.forEach((item) => {
        autocomplete.push({
            label: item.title,
            author: item.author,
        })
    })

    const autocompleteSort = autocomplete.slice(0);
    autocompleteSort.sort(function (a, b) {
        const x = a.author.toLowerCase();
        const y = b.author.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });

    return (
        <Stack className={'VideosContent'}>
            <Box className={'VideosTitleHeader'} sx={{
                backgroundColor: 'secondary.main'
            }}>
                <Container maxWidth={"lg"}>
                    <Stack className={'Title'} spacing={3}>
                        <Typography gutterBottom variant="h2" sx={{
                            marginBottom: 4
                        }}>
                            {t('pages.youtube.t_youtube_title')}
                        </Typography>

                        <Lottie className={'Lottie'} animationData={ConstantLottie.videosIcon}/>

                        <Typography gutterBottom variant="subtitle2">
                            {t('pages.youtube.t_youtube_subtitle')}
                        </Typography>
                    </Stack>
                </Container>
            </Box>

            <Container maxWidth={"lg"}>
                <Stack spacing={4}>

                    <Grid container spacing={5} rowSpacing={3}>
                        <Grid item xl={9} lg={9} md={8} sm={12} xs={12}>
                            <Stack spacing={4}>
                                <Masonry columns={isMD ? (isSM ? 1 : 2) : 3} spacing={4}>
                                    {content}
                                </Masonry>

                                <Box ref={loadingRef}>
                                    {loading ? (
                                        <Zoom timeout={1000} in={true}>
                                            <Stack alignItems={"center"}>
                                                <CircularProgress/>
                                            </Stack>
                                        </Zoom>
                                    ) : null}
                                </Box>
                            </Stack>
                        </Grid>

                        <Grid item xl={3} lg={3} md={4} sm={12} xs={12} className={'Filter'}>
                            <Stack spacing={3}>

                                <Typography variant={'h4'} color="text.primary">
                                    {t('pages.youtube.t_filter_title')}
                                </Typography>

                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    groupBy={(option) => option.author}
                                    options={autocompleteSort}
                                    renderInput={(params) => <TextField {...params} label={t('pages.youtube.t_youtube_search')}/>}
                                />

                                <Stack spacing={0}>
                                    <Accordion disableGutters variant={'outlined'}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreOutlined/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>
                                                {t('pages.youtube.t_filter_types_title')}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <FormControl>
                                                <FormGroup>
                                                    <FormControlLabel control={<Checkbox defaultChecked/>}
                                                                      label={t('pages.youtube.t_filter_types_item_1')}/>
                                                    <FormControlLabel control={<Checkbox defaultChecked/>}
                                                                      label={t('pages.youtube.t_filter_types_item_2')}/>
                                                </FormGroup>
                                            </FormControl>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion disableGutters variant={'outlined'} sx={{
                                        marginTop: '-1px'
                                    }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreOutlined/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>
                                                {t('pages.youtube.t_filter_sort_title')}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <FormControl>
                                                <RadioGroup defaultValue={'item_1'}>
                                                    <FormControlLabel value="item_1" control={<Radio/>}
                                                                      label={t('pages.youtube.t_filter_sort_item_1')}/>
                                                    <FormControlLabel value="item_2" control={<Radio/>}
                                                                      label={t('pages.youtube.t_filter_sort_item_2')}/>
                                                    <FormControlLabel value="item_3" control={<Radio/>}
                                                                      label={t('pages.youtube.t_filter_sort_item_3')}/>
                                                </RadioGroup>
                                            </FormControl>
                                        </AccordionDetails>
                                    </Accordion>
                                </Stack>

                                <Button variant={'contained'}>
                                    {t('pages.youtube.t_filter_btn')}
                                </Button>

                            </Stack>
                        </Grid>

                    </Grid>

                </Stack>
            </Container>

        </Stack>
    );
}

YouTubePage.propTypes = {};