import * as React from 'react';
import {useContext} from 'react';
import {
    Avatar, Box,
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
    IconButton,
    Pagination,
    PaginationItem,
    Radio,
    RadioGroup,
    Stack,
    Typography, useMediaQuery, useTheme
} from "@mui/material";
import {ConstantImages, LanguageContext} from "../../base";
import {ArrowBackOutlined, ArrowForwardOutlined, ExpandMoreOutlined, Favorite} from "@mui/icons-material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Lottie from "lottie-react";
import {ConstantLottie} from "../../base/constants/ConstantLottie";

const data = [
    {
        id: 1,
        // en
        title: 'How to learn words without pain to remember them',
        description: 'Here will be the text that Julia will write. I have nothing to do with it, so for now I write what I can. For example, I was able to write this text for an example. But it was very short, so I\'ll add another thread. So I can write that this text should not be very short, otherwise there will be nothing to read. If you write a post, then you should have something to talk about and not write from the bold as I do now)',
        content: '',
        // ru
        titleRu: 'Как выучить слова без боли, чтобы запомнить их',
        descriptionRu: 'Здесь будет текст, который напишет Юля. Я тут ни при чем, поэтому пока пишу то, что могу. Например, я смог написать этот текст для примера. Но он быс сильно короткий поэтому я допишу че нить еще. Вот я могу написать что этот текст должен быть не очень коротким иначе читать то и нечго будет. Если пишешь пост то тебе должно быть о чем рассказать а не от болды писать как это делаю сейчас я )',
        contentRu: '',
        // common
        image: ConstantImages.home.post1,
        date: 111111,
        topics: ['words', 'articles', 'blog'],
        likeCount: 99,
        likeIs: true,
        type: 'article'
    },
    {
        id: 2,
        // en
        title: 'How to sleep in class without students noticing',
        description: 'Here will be the text that Julia will write. I have nothing to do with it, so for now I write what I can. For example, I was able to write this text for an example. But it was very short, so I\'ll add another thread. So I can write that this text should not be very short, otherwise there will be nothing to read. If you write a post, then you should have something to talk about and not write from the bold as I do now)',
        content: '',
        // ru
        titleRu: 'Как спать в классе так, чтобы ученики не заметили',
        descriptionRu: 'Здесь будет текст, который напишет Юля. Я тут ни при чем, поэтому пока пишу то, что могу. Например, я смог написать этот текст для примера. Но он быс сильно короткий поэтому я допишу че нить еще. Вот я могу написать что этот текст должен быть не очень коротким иначе читать то и нечго будет. Если пишешь пост то тебе должно быть о чем рассказать а не от болды писать как это делаю сейчас я )',
        contentRu: '',
        // common
        image: ConstantImages.home.post2,
        date: 111111,
        topics: ['words', 'articles', 'blog'],
        likeCount: 99,
        likeIs: true,
        type: 'article'
    },
    {
        id: 3,
        // en
        title: 'Teaching untrained students with the super method',
        description: 'Here will be the text that Julia will write. I have nothing to do with it, so for now I write what I can. For example, I was able to write this text for an example. But it was very short, so I\'ll add another thread. So I can write that this text should not be very short, otherwise there will be nothing to read. If you write a post, then you should have something to talk about and not write from the bold as I do now)',
        content: '',
        // ru
        titleRu: 'Обучение неподготовленных студентов суперметодом',
        descriptionRu: 'Здесь будет текст, который напишет Юля. Я тут ни при чем, поэтому пока пишу то, что могу. Например, я смог написать этот текст для примера. Но он быс сильно короткий поэтому я допишу че нить еще. Вот я могу написать что этот текст должен быть не очень коротким иначе читать то и нечго будет. Если пишешь пост то тебе должно быть о чем рассказать а не от болды писать как это делаю сейчас я )',
        contentRu: '',
        // common
        image: ConstantImages.home.post3,
        date: 111111,
        topics: ['words', 'articles', 'blog', 'words1', 'articles2', 'blog3'],
        likeCount: 99,
        likeIs: true,
        type: 'article'
    }
]

function CardItemArticle(props) {

    const {t} = useContext(LanguageContext)

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
        <Card>
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
                subheader="September 14, 2016"
            />
            <CardContent
                sx={{
                    paddingTop: 1
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
            <CardActions disableSpacing>

                <Stack
                    width={'100%'}
                    direction={'row'}
                    spacing={3}
                    justifyContent='space-between'
                >
                    <Stack
                        direction={'row'}
                        spacing={1}
                    >
                        <IconButton aria-label="add to favorites">
                            <Favorite/>
                        </IconButton>

                        <Typography gutterBottom variant="h4" sx={{
                            paddingTop: '10px'
                        }}>
                            {99}
                        </Typography>
                    </Stack>

                    <Button variant={'outlined'} size={'small'} sx={{
                        height: 'fit-content',
                        marginTop: '4px !important'
                    }}>
                        {t('pages.blog.t_blog_list_btn_more')}
                    </Button>

                </Stack>


            </CardActions>
        </Card>
    )
}

export function BlogPage() {

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const {t, isLocEn} = useContext(LanguageContext)

    const content = []

    data.forEach((item) => {
        content.push(<CardItemArticle
            key={item.id}
            image={item.image}
            title={isLocEn ? item.title : item.titleRu}
            description={isLocEn ? item.description : item.descriptionRu}
            topics={item.topics}
        />)
    })

    return (
        <Stack className={'BlogContent'}>
            <Box className={'BlogTitleHeader'}>
                <Container maxWidth={"lg"} >
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
                        <Stack spacing={4}>

                            {content}

                            <Pagination
                                size={isMD ? 'small': 'medium'}
                                count={99}
                                renderItem={(item) => (
                                    <PaginationItem
                                        components={{previous: ArrowBackOutlined, next: ArrowForwardOutlined}}
                                        {...item}
                                    />
                                )}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xl={3} lg={3} md={4} sm={12} xs={12} className={'Filter'}>
                        <Stack spacing={3}>

                            <Typography variant={'h4'}>
                                {t('pages.blog.t_filter_title')}

                            </Typography>

                            <Stack spacing={0}>
                                <Accordion disableGutters>
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
                                                <FormControlLabel control={<Checkbox defaultChecked/>}
                                                                  label={t('pages.blog.t_filter_types_item_1')}/>
                                                <FormControlLabel control={<Checkbox defaultChecked/>}
                                                                  label={t('pages.blog.t_filter_types_item_2')}/>
                                            </FormGroup>
                                        </FormControl>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion disableGutters>
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
                                            <RadioGroup defaultValue={'item_1'}>
                                                <FormControlLabel value="item_1" control={<Radio/>}
                                                                  label={t('pages.blog.t_filter_sort_item_1')}/>
                                                <FormControlLabel value="item_2" control={<Radio/>}
                                                                  label={t('pages.blog.t_filter_sort_item_2')}/>
                                                <FormControlLabel value="item_3" control={<Radio/>}
                                                                  label={t('pages.blog.t_filter_sort_item_3')}/>
                                            </RadioGroup>
                                        </FormControl>
                                    </AccordionDetails>
                                </Accordion>
                            </Stack>

                            <Button variant={'contained'}>
                                {t('pages.blog.t_filter_btn')}
                            </Button>

                        </Stack>
                    </Grid>
                </Grid>
            </Container>

        </Stack>


    );
}

BlogPage.propTypes = {};