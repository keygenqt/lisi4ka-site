import * as React from 'react';
import {useContext} from 'react';
import {
    Autocomplete,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    IconButton,
    Pagination,
    PaginationItem,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import Lottie from "lottie-react";
import {ConstantLottie} from "../../base/constants/ConstantLottie";
import {ConstantImages, LanguageContext} from "../../base";
import {ArrowBackOutlined, ArrowForwardOutlined, BookmarkOutlined, StarOutlined} from "@mui/icons-material";

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
    }
]

function CardItemBook(props) {

    const {t} = useContext(LanguageContext)

    return (
        <Card elevation={0} variant={'outlined'}>

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

            <CardMedia
                component="img"
                height="410"
                image={props.image}
                alt="Paella dish"
            />

            <CardContent>
                <Stack spacing={0}>
                    <Typography variant="subtitle2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.author}
                    </Typography>
                </Stack>

                <Button variant={'outlined'} size={'small'} sx={{
                    height: 'fit-content',
                    marginTop: '16px'
                }}>
                    {t('pages.books.t_books_btn_read')}
                </Button>
            </CardContent>
        </Card>
    )
}

export function BooksPage() {

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const {t, isLocEn} = useContext(LanguageContext)

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
            <Grid
                key={item.id}
                item xl={3} lg={3} md={4} sm={6} xs={12}
            >
                <CardItemBook
                    image={item.image}
                    title={item.title}
                    author={item.author}
                    rating={item.rating}
                    isBookmark={item.isBookmark}
                    description={isLocEn ? item.description : item.descriptionRu}
                />
            </Grid>
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
                        <Grid container spacing={5} rowSpacing={3}>
                            {content}
                        </Grid>
                    </Box>

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

BooksPage.propTypes = {};