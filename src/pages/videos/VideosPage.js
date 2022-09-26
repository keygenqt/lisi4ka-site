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
import {YouTubeData} from "../video/data/YouTubeData";

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
                    <Button
                        color={'warning'}
                        variant={'outlined'}
                        size={'small'}
                        onClick={() => {
                            route.toLocation(routes.video, props.id)
                        }}
                    >
                        {t('pages.videos.t_videos_btn_read')}
                    </Button>
                </Box>
            </Box>

            <CardContent>
                <Stack spacing={1}>
                    <Typography variant="subtitle2">
                        {props.title}
                    </Typography>
                    <Typography variant="caption">
                        {props.author}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export function VideosPage() {

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

    YouTubeData.forEach((item) => {
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

    YouTubeData.forEach((item) => {
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
                            {t('pages.videos.t_videos_title')}
                        </Typography>

                        <Lottie className={'Lottie'} animationData={ConstantLottie.videosIcon}/>

                        <Typography gutterBottom variant="subtitle2">
                            {t('pages.videos.t_videos_subtitle')}
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
                                    {t('pages.videos.t_filter_title')}
                                </Typography>

                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    groupBy={(option) => option.author}
                                    options={autocompleteSort}
                                    renderInput={(params) => <TextField {...params} label={t('pages.videos.t_videos_search')}/>}
                                />

                                <Stack spacing={0}>
                                    <Accordion disableGutters variant={'outlined'} sx={{
                                        marginTop: '-1px'
                                    }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreOutlined/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>
                                                {t('pages.videos.t_filter_sort_title')}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <FormControl>
                                                <RadioGroup defaultValue={'item_1'}>
                                                    <FormControlLabel value="item_1" control={<Radio/>}
                                                                      label={t('pages.videos.t_filter_sort_item_1')}/>
                                                    <FormControlLabel value="item_2" control={<Radio/>}
                                                                      label={t('pages.videos.t_filter_sort_item_2')}/>
                                                    <FormControlLabel value="item_3" control={<Radio/>}
                                                                      label={t('pages.videos.t_filter_sort_item_3')}/>
                                                </RadioGroup>
                                            </FormControl>
                                        </AccordionDetails>
                                    </Accordion>
                                </Stack>

                                <Button variant={'contained'}>
                                    {t('pages.videos.t_filter_btn')}
                                </Button>

                            </Stack>
                        </Grid>

                    </Grid>

                </Stack>
            </Container>

        </Stack>
    );
}

VideosPage.propTypes = {};