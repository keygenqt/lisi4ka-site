import * as React from 'react';
import {useContext, useEffect} from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Checkbox,
    Chip,
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
import {ArrowBackOutlined, ArrowForwardOutlined, ExpandMoreOutlined} from "@mui/icons-material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Lottie from "lottie-react";
import {ConstantLottie} from "../../base/constants/ConstantLottie";
import {BlogData} from "./data/BlogData";

function CardItemArticle(props) {

    const {t, isLocEn} = useContext(LanguageContext)
    const {route, routes} = useContext(NavigateContext)

    const topics = []
    const colors = [
        'primary',
        'success',
        'warning',
        'error'
    ]

    props.topics.forEach((item, index) => {
        topics.push(<Chip
            key={item}
            label={item}
            color={colors[index % 4]}
            variant="outlined"
            size="small"
            sx={{
                height: '25px'
            }}
        />)
    })

    return (
        <Card variant={'outlined'}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: 'primary'}} aria-label="recipe" src={props.image}>
                        R
                    </Avatar>
                }
                title={<Typography sx={{
                    fontWeight: 'bold'
                }}>
                    {props.title}
                </Typography>}
                subheader={new Intl
                    .DateTimeFormat(isLocEn ? 'en-US' : 'ru-RU', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit',
                    })
                    .format(props.createAt)}
            />
            <CardContent
                sx={{
                    paddingTop: 1,
                    paddingBottom: 0
                }}
            >
                <Stack spacing={2}>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>

                    <Box className={'Topics'}>
                        {topics}
                    </Box>
                </Stack>
            </CardContent>
            <CardActions sx={{
                paddingLeft: 2,
                paddingBottom: 2,
                paddingTop: 2
            }}>
                <Button
                    variant={'outlined'}
                    size={'small'}
                    onClick={() => {
                        route.toLocation(routes.post, props.id)
                    }}
                >
                    {t('pages.blog.t_blog_list_btn_more')}
                </Button>
            </CardActions>
        </Card>
    )
}

export function BlogPage(props) {

    // hooks
    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const {t, isLocEn} = useContext(LanguageContext)

    // effects
    useEffect(() => {
        setEnableArticles(props.type === 'articles')
        setEnableReview(props.type === 'reviews')
    }, [props.type]);

    // states
    const [expanded, setExpanded] = React.useState('panel1');
    const [enableArticles, setEnableArticles] = React.useState(props.type === 'articles');
    const [enableReview, setEnableReview] = React.useState(props.type === 'reviews');
    const [sortItems, setSortItems] = React.useState('item_1');
    const [page, setPage] = React.useState(1);

    // data
    const countItemsPage = 3
    const content = []

    const filterData = BlogData.filter((item) => {
        return (enableArticles && item.type === 'article') || (enableReview && item.type === 'review')
    })

    const sortData = filterData.sort((a, b) => {
        if (sortItems === 'item_1') {
            return b.createAt - a.createAt;
        }
        if (sortItems === 'item_2') {
            if (isLocEn) {
                return a.title.localeCompare(b.title)
            } else {
                return a.titleRu.localeCompare(b.titleRu)
            }
        }
        return 0;
    })

    const pagesCount = Math.round(filterData.length / countItemsPage)

    sortData.slice(countItemsPage * (page - 1), countItemsPage * (page - 1) + countItemsPage).forEach((item) => {
        content.push(<CardItemArticle
            key={item.id}
            id={item.id}
            image={item.image}
            title={isLocEn ? item.title : item.titleRu}
            description={isLocEn ? item.description : item.descriptionRu}
            createAt={item.createAt}
            topics={item.topics}
        />)
    })

    // handles
    const handleChangeFilter = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Stack className={'BlogContent'} sx={{
            marginBottom: pagesCount > 1 ? '36px' : '60px'
        }}>
            <Box className={'BlogTitleHeader'} sx={{
                backgroundColor: 'secondary.main'
            }}>
                <Container maxWidth={"lg"}>
                    <Stack className={'Title'} spacing={3}>
                        <Typography gutterBottom variant="h2" sx={{
                            marginBottom: 4
                        }}>
                            {t('pages.blog.t_blog_title')}
                        </Typography>

                        <Lottie className={'Lottie'} animationData={ConstantLottie.blogIcon}/>

                        <Typography gutterBottom variant="subtitle2">
                            {t('pages.blog.t_blog_subtitle')}
                        </Typography>
                    </Stack>
                </Container>
            </Box>

            <Container maxWidth={"lg"}>
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

                                {content}

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
                                                components={{previous: ArrowBackOutlined, next: ArrowForwardOutlined}}
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
                                {t('pages.blog.t_filter_title')}
                            </Typography>

                            <Stack spacing={0}>
                                <Accordion
                                    expanded={expanded === 'panel1'}
                                    onChange={handleChangeFilter('panel1')}
                                    disableGutters variant={'outlined'}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreOutlined/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>
                                            {t('pages.blog.t_filter_types_title')}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormControl>
                                            <FormGroup>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={enableArticles}
                                                            onChange={(event) => {
                                                                setEnableArticles(event.target.checked)
                                                            }}
                                                        />}
                                                    label={t('pages.blog.t_filter_types_item_1')}
                                                />
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={enableReview}
                                                            onChange={(event) => {
                                                                setEnableReview(event.target.checked)
                                                            }}
                                                        />}
                                                    label={t('pages.blog.t_filter_types_item_2')}
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
                                            {t('pages.blog.t_filter_sort_title')}
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
                                                    label={t('pages.blog.t_filter_sort_item_1')}
                                                />
                                                <FormControlLabel
                                                    value="item_2"
                                                    control={<Radio/>}
                                                    label={t('pages.blog.t_filter_sort_item_2')}
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </AccordionDetails>
                                </Accordion>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

        </Stack>
    );
}

BlogPage.propTypes = {};