import * as React from 'react';
import {useContext} from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    Pagination,
    PaginationItem,
    Radio,
    RadioGroup,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {LanguageContext, NavigateContext} from "../../base";
import Lottie from "lottie-react";
import {ConstantLottie} from "../../base/constants/ConstantLottie";
import Masonry from '@mui/lab/Masonry';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import {ArrowBackOutlined, ArrowForwardOutlined, ExpandMoreOutlined} from "@mui/icons-material";
import AccordionDetails from "@mui/material/AccordionDetails";
import {YouTubeData} from "./data/YouTubeData";

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
                    alt={props.title}
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

    // hooks
    const {t} = useContext(LanguageContext)
    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    // states
    const [enableLevel1, setEnableLevel1] = React.useState(true);
    const [enableLevel2, setEnableLevel2] = React.useState(true);
    const [enableLevel3, setEnableLevel3] = React.useState(true);

    const [sortItems, setSortItems] = React.useState('item_1');
    const [page, setPage] = React.useState(1);

    // data
    const countItemsPage = 6
    const content = []

    const filterData = YouTubeData.filter((item) => {
        return (enableLevel1 && item.level === '1')
            || (enableLevel2 && item.level === '2')
            || (enableLevel3 && item.level === '3')
    })

    const sortData = filterData.sort((a, b) => {
        if (sortItems === 'item_1') {
            return b.createAt - a.createAt;
        }
        if (sortItems === 'item_2') {
            return a.title.localeCompare(b.title)
        }
        return 0;
    })

    const pagesCount = Math.round(filterData.length / countItemsPage)

    sortData.slice(countItemsPage * (page - 1), countItemsPage * (page - 1) + countItemsPage).forEach((item) => {
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

                            {content.length === 0 ? (
                                <Stack
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{
                                        padding: 7
                                    }}
                                >
                                    <Lottie style={{
                                        width: 250,
                                    }} animationData={ConstantLottie.empty}/>
                                </Stack>
                            ) : (
                                <Stack spacing={4}>

                                    <Masonry columns={isMD ? (isSM ? 1 : 2) : 3} spacing={4}>
                                        {content}
                                    </Masonry>

                                    {pagesCount !== 1 ? (
                                        <Pagination
                                            page={page}
                                            onChange={(event, value) => {
                                                setPage(value);
                                            }}
                                            size={isMD ? 'small' : 'medium'}
                                            count={pagesCount}
                                            renderItem={(item) => (
                                                <PaginationItem
                                                    components={{
                                                        previous: ArrowBackOutlined,
                                                        next: ArrowForwardOutlined
                                                    }}
                                                    {...item}
                                                />
                                            )}
                                        />
                                    ) : null}

                                </Stack>
                            )}
                        </Grid>

                        <Grid item xl={3} lg={3} md={4} sm={12} xs={12} className={'Filter'}>
                            <Stack spacing={3}>

                                <Typography variant={'h4'} color="text.primary">
                                    {t('pages.videos.t_filter_title')}
                                </Typography>

                                <Stack spacing={0}>
                                    <Accordion disableGutters variant={'outlined'}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreOutlined/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>
                                                {t('pages.videos.t_filter_types_title')}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <FormControl>
                                                <FormGroup>
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                checked={enableLevel1}
                                                                onChange={(event) => {
                                                                    setEnableLevel1(event.target.checked)
                                                                }}
                                                            />}
                                                        label={t('pages.videos.t_filter_types_item_1')}
                                                    />
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                checked={enableLevel2}
                                                                onChange={(event) => {
                                                                    setEnableLevel2(event.target.checked)
                                                                }}
                                                            />}
                                                        label={t('pages.videos.t_filter_types_item_2')}
                                                    />
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                checked={enableLevel3}
                                                                onChange={(event) => {
                                                                    setEnableLevel3(event.target.checked)
                                                                }}
                                                            />}
                                                        label={t('pages.videos.t_filter_types_item_3')}
                                                    />
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
                                                {t('pages.videos.t_filter_sort_title')}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <FormControl>
                                                <RadioGroup
                                                    value={sortItems}
                                                    onChange={(event) => {
                                                        setSortItems(event.target.value);
                                                    }}
                                                >
                                                    <FormControlLabel
                                                        value="item_1"
                                                        control={<Radio/>}
                                                        label={t('pages.videos.t_filter_sort_item_1')}
                                                    />
                                                    <FormControlLabel
                                                        value="item_2"
                                                        control={<Radio/>}
                                                        label={t('pages.videos.t_filter_sort_item_2')}
                                                    />
                                                </RadioGroup>
                                            </FormControl>
                                        </AccordionDetails>
                                    </Accordion>
                                </Stack>
                            </Stack>
                        </Grid>

                    </Grid>

                </Stack>
            </Container>

        </Stack>
    );
}

VideosPage.propTypes = {};