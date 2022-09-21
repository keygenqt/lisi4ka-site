import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {
    Autocomplete,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CircularProgress,
    Container,
    IconButton,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
    Zoom
} from "@mui/material";
import Lottie from "lottie-react";
import {ConstantLottie} from "../../base/constants/ConstantLottie";
import {ConstantImages, LanguageContext, useWindowResize, useWindowScroll} from "../../base";
import {BookmarkOutlined, StarOutlined} from "@mui/icons-material";
import Masonry from "@mui/lab/Masonry";

const data = [
    {
        id: 1,
        image: ConstantImages.books.book1,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        rating: 4.8,
        isBookmark: false
    },
    {
        id: 2,
        image: ConstantImages.books.book2,
        title: '1984',
        author: 'George Orwell',
        rating: 3,
        isBookmark: true
    },
    {
        id: 3,
        image: ConstantImages.books.book3,
        title: 'Harry Potter and the Philosopher’s Stone',
        author: 'J.K. Rowling',
        rating: 4.9,
        isBookmark: false
    },
    {
        id: 4,
        image: ConstantImages.books.book4,
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        rating: 3.6,
        isBookmark: false
    },
    {
        id: 5,
        image: ConstantImages.books.book5,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        rating: 3.88,
        isBookmark: false
    },
    {
        id: 6,
        image: ConstantImages.books.book6,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        rating: 4.5,
        isBookmark: false
    },
    {
        id: 7,
        image: ConstantImages.books.book7,
        title: 'The Diary Of A Young Girl',
        author: 'Anne Frank',
        rating: 5,
        isBookmark: false
    },
    {
        id: 8,
        image: ConstantImages.books.book8,
        title: 'The Little Prince',
        author: 'Antoine de Saint-Exupéry',
        rating: 4,
        isBookmark: false
    },
    {
        id: 9,
        image: ConstantImages.books.book8,
        title: 'The Little Prince',
        author: 'Antoine de Saint-Exupéry',
        rating: 4,
        isBookmark: false
    },
    {
        id: 10,
        image: ConstantImages.books.book8,
        title: 'The Little Prince',
        author: 'Antoine de Saint-Exupéry',
        rating: 4,
        isBookmark: false
    }
]

function CardItemBook(props) {

    const {t} = useContext(LanguageContext)

    return (
        <Card elevation={0} variant={'outlined'}>

            <Box className={'ImageCard'}>

                <CardMedia
                    component="img"
                    height="320"
                    image={props.image}
                    alt="Paella dish"
                />

                <Box>
                    <Button
                        color={'warning'}
                        variant={'outlined'}
                        size={'small'}>
                        {t('pages.books.t_books_btn_read')}
                    </Button>
                </Box>
            </Box>

            <CardContent sx={{
                paddingBottom: 0
            }}>
                <Stack spacing={0}>
                    <Typography variant="subtitle2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.author}
                    </Typography>
                </Stack>
            </CardContent>

            <CardActions disableSpacing sx={{
                display: 'block'
            }}>
                <Stack
                    direction={'row'}
                    spacing={3}
                    justifyContent='space-between'
                >
                    <IconButton aria-label="share" size={'small'}>
                        <BookmarkOutlined color={Boolean(props.isBookmark) ? 'info' : 'inherit'} sx={{
                            height: '16px',
                            width: '16px',
                        }}/>
                    </IconButton>

                    <Stack
                        direction={'row'}
                        spacing={1}
                        sx={{
                            paddingTop: '2px'
                        }}
                    >
                        <Typography variant="subtitle1">
                            {props.rating.toFixed(1)}
                        </Typography>
                        <StarOutlined sx={{
                            width: '16px',
                            position: 'relative',
                            top: '-1px',
                            color: '#f5ab01'
                        }}/>
                    </Stack>

                </Stack>

            </CardActions>

        </Card>
    )
}

export function BooksPage() {

    const {t, isLocEn} = useContext(LanguageContext)

    const theme = useTheme()
    const isLG = useMediaQuery(theme.breakpoints.down('lg'));
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const isXS = useMediaQuery(theme.breakpoints.down('xs'));

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

    const autocomplete = [
        {
            label: t('pages.books.t_books_search_group_param_1'),
            type: t('pages.books.t_books_search_group_param')
        },
        {
            label: t('pages.books.t_books_search_group_param_2'),
            type: t('pages.books.t_books_search_group_param')
        },
    ]

    const content = []

    data.forEach((item) => {
        content.push(
            <CardItemBook
                key={item.id}
                image={item.image}
                title={item.title}
                author={item.author}
                rating={item.rating}
                isBookmark={item.isBookmark}
                description={isLocEn ? item.description : item.descriptionRu}
            />
        )
    })

    data.forEach((item) => {
        autocomplete.push({
            label: item.title,
            type: t('pages.books.t_books_search_group_title')
        })
    })

    data.forEach((item) => {
        autocomplete.push({
            label: item.author,
            type: t('pages.books.t_books_search_group_author')
        })
    })

    return (
        <Stack className={'BooksContent'}>
            <Box className={'BooksTitleHeader'}>
                <Container maxWidth={"lg"}>
                    <Stack className={'Title'} spacing={3}>
                        <Typography gutterBottom variant="h2" sx={{
                            marginBottom: 4
                        }}>
                            {t('pages.books.t_books_title')}
                        </Typography>

                        <Lottie className={'Lottie'} animationData={ConstantLottie.booksIcon}/>

                        <Typography gutterBottom variant="subtitle2">
                            {t('pages.books.t_books_subtitle')}
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
                            groupBy={(option) => option.type}
                            options={autocomplete}
                            renderInput={(params) => <TextField {...params} label={t('pages.books.t_books_search')}/>}
                        />
                    </Box>

                    <Box>
                        <Masonry columns={isLG ? (isMD ? (isSM ? (isXS ? 1 : 2) : 3) : 4) : 5} spacing={5}>
                            {content}
                        </Masonry>
                    </Box>

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
            </Container>

        </Stack>
    );
}

BooksPage.propTypes = {};