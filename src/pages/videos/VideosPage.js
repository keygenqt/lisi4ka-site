import * as React from 'react';
import {useContext} from 'react';
import {
    Autocomplete,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Pagination,
    PaginationItem,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {LanguageContext} from "../../base";
import {ArrowBackOutlined, ArrowForwardOutlined} from "@mui/icons-material";
import Lottie from "lottie-react";
import {ConstantLottie} from "../../base/constants/ConstantLottie";
import Masonry from '@mui/lab/Masonry';

const data = [
    {
        id: 1,
        idYouTube: 'kLvuZtpQaSs',
        title: 'Hollywood in 1950\'s vs NOW!',
        author: 'AwakenWithJP',
    },
    {
        id: 2,
        idYouTube: 'i6yXf4zXO1g',
        title: 'The Guy that Believed Biden’s Speech',
        author: 'AwakenWithJP',
    },
    {
        id: 3,
        idYouTube: 'P2emFurIekk',
        title: 'How to Offend Everyone',
        author: 'AwakenWithJP',
    },
    {
        id: 4,
        idYouTube: 'xBfZ2-0U4ck',
        title: 'Unboxing MacBook Pro M2',
        author: 'Alex Ziskind',
    },
    {
        id: 5,
        idYouTube: 'd1HIopKBb3w',
        title: 'What Spiritual People Are Like During the Quarantine',
        author: 'AwakenWithJP',
    },
    {
        id: 6,
        idYouTube: 'mvtrGOjmmTU',
        title: 'We’re Controlling You Even MORE Now! - News Update',
        author: 'AwakenWithJP',
    },
    {
        id: 7,
        idYouTube: 'h6Cfbb3pJFI',
        title: 'Apple M1 vs Intel Core i9 and Docker Preview - First Look',
        author: 'Alex Ziskind',
    },
    {
        id: 8,
        idYouTube: 'OxQDmxFyHsA',
        title: 'What Liberals Think Conservative Companies are Like',
        author: 'AwakenWithJP',
    },
    {
        id: 9,
        idYouTube: '-kgNeyZNatk',
        title: 'Github Copilot has a HIDDEN SKILL',
        author: 'Alex Ziskind',
    },
]

function CardItemVideo(props) {

    const {t} = useContext(LanguageContext)

    return (
        <Card
            key={props.idYouTube}
            variant={'outlined'}
        >
            <Box className={'ImageCard'}>
                <CardMedia
                    component="img"
                    height="200"
                    image={`https://img.youtube.com/vi/${props.idYouTube}/hqdefault.jpg`}
                    alt="Paella dish"
                />
                <Box>
                    <Button
                        color={'warning'}
                        variant={'outlined'}
                        size={'small'}>
                        {t('pages.videos.t_videos_btn_read')}
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
                            {t('pages.videos.t_videos_card_author')}: {props.author}
                        </Typography>
                        <Typography variant="caption">
                            {t('pages.videos.t_videos_card_time')}: 7:29
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export function VideosPage() {

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const {t} = useContext(LanguageContext)

    const autocomplete = []
    const content = []

    data.forEach((item) => {
        content.push(<CardItemVideo
            idYouTube={item.idYouTube}
            title={item.title}
            author={item.author}
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
            <Box className={'VideosTitleHeader'}>
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

                    <Box alignContent={'end'}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            groupBy={(option) => option.author}
                            options={autocompleteSort}
                            renderInput={(params) => <TextField {...params} label={t('pages.videos.t_videos_search')}/>}
                        />
                    </Box>

                    <Masonry columns={isMD ? (isSM ? 1 : 2) : 3} spacing={3}>
                        {content}
                    </Masonry>

                    <Pagination
                        size={isMD ? 'small' : 'medium'}
                        count={99}
                        renderItem={(item) => (
                            <PaginationItem
                                components={{previous: ArrowBackOutlined, next: ArrowForwardOutlined}}
                                {...item}
                            />
                        )}
                    />
                </Stack>
            </Container>

        </Stack>
    );
}

VideosPage.propTypes = {};