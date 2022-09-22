import * as React from 'react';
import {useEffect, useState} from 'react';
import {Box, CircularProgress, Container, Fab, Paper, Stack, ToggleButtonGroup, Typography, Zoom} from "@mui/material";
import YouTube from "react-youtube";
import {
    HeadphonesOutlined,
    MoveUpOutlined,
    PauseCircleOutlined,
    PlayCircleOutline,
    SkipNextOutlined,
    SkipPreviousOutlined,
    TranslateOutlined
} from "@mui/icons-material";
import {useWindowScroll} from "../../base";
import {ToggleButton} from "@mui/lab";

let videoElement = null;
let intervalChangeIndex = null;

const data = {
    id: 1,
    idYouTube: 'kLvuZtpQaSs',
    title: 'Hollywood in 1950\'s vs NOW!',
    author: 'AwakenWithJP',
    content: [
        {
            start: 0,
            text: 'We\'ve received reports in substantial evidence that you\'re involved in communist activities.',
            textRu: 'Мы получили отчеты, свидетельствующие о том, что вы причастны к коммунистической деятельности.'
        },
        {
            start: 6.280918043869018,
            text: 'For the record.',
            textRu: 'Для записи.'
        },
        {
            start: 7.4219620267028805,
            text: 'Are you a communist?',
            textRu: 'Вы коммунист?'
        },
        {
            start: 9.629176036239623,
            text: 'Yes I am.',
            textRu: 'Да.'
        },
        {
            start: 10.651088047683716,
            text: 'You\'re blacklisted.',
            textRu: 'Вы в черном списке.'
        },
        {
            start: 11.760320051498413,
            text: 'Get then out of here.',
            textRu: 'Убирайся тогда отсюда.'
        },
        {
            start: 13.119629118255615,
            text: 'Are you a communist?',
            textRu: 'Вы коммунист?'
        },
        {
            start: 14.80633897329712,
            text: 'No I am not.',
            textRu: 'Нет, я не.'
        },
        {
            start: 16.371769045776367,
            text: 'You\'re blacklisted.',
            textRu: 'Вы в черном списке.'
        },
        {
            start: 17.560807904632567,
            text: 'You\'ll never work in this industry again.',
            textRu: 'Ты больше никогда не будешь работать в этой отрасли.'
        },
        {
            start: 20.453153080108642,
            text: 'Do you support the president of this country.',
            textRu: 'Вы поддерживаете президента этой страны.'
        },
        {
            start: 23.369926946594237,
            text: 'Yes i do.',
            textRu: 'Да.'
        },
        {
            start: 24.51979594468689,
            text: 'Great.',
            textRu: 'Великолепно.'
        },
        {
            start: 26.011659011444093,
            text: 'Do you support the president of this country?',
            textRu: 'Вы поддерживаете президента этой страны?'
        },
        {
            start: 28.49172595994568,
            text: 'Which one?',
            textRu: 'Который из?'
        },
        {
            start: 29.211827148773192,
            text: 'Biden.',
            textRu: 'Байден.'
        },
        {
            start: 30.07043115640259,
            text: 'Yes I do.',
            textRu: 'Да.'
        },
        {
            start: 30.851411977111818,
            text: 'And Trump?',
            textRu: 'И Трамп?'
        },
        {
            start: 32.24181711825562,
            text: 'Absolutely not.',
            textRu: 'Точно нет.'
        },
        {
            start: 33.244049792098996,
            text: 'Excellent.',
            textRu: 'Превосходно.'
        },
        {
            start: 34.407284893188475,
            text: 'Do you think it\'s appropriate to show sexually explicit movie scenes to children.',
            textRu: 'Считаете ли вы уместным показывать детям откровенно сексуальные сцены из фильмов?'
        },
        {
            start: 40.50005489318848,
            text: 'No sir it would be completely inappropriate to do so.',
            textRu: 'Нет, сэр, это было бы совершенно неуместно.'
        },
        {
            start: 44.5354659294281,
            text: 'Exactly.',
            textRu: 'В яблочко.'
        },
        {
            start: 45.367344998092655,
            text: 'Do you think it\'s appropriate to sexualize children in TV shows and films.',
            textRu: 'Считаете ли вы уместным сексуализировать детей в сериалах и фильмах.'
        },
        {
            start: 50.48116606484985,
            text: 'Yeah it would be inappropriate not to.',
            textRu: 'Да и неуместно было бы.'
        },
        {
            start: 52.79935989700317,
            text: 'Phenomenal.',
            textRu: 'Феноменальный.'
        },
        {
            start: 53.76377289128113,
            text: 'Now as a part of the hollywood artistic community.',
            textRu: 'Теперь как часть голливудского артистического сообщества.'
        },
        {
            start: 56.87106904768372,
            text: 'How do you view the importance of creativity and original thought.',
            textRu: 'Как вы относитесь к важности творчества и оригинальной мысли.'
        },
        {
            start: 61.40101897901916,
            text: 'I think that\'s what\'s most important.',
            textRu: 'Я думаю, это самое главное.'
        },
        {
            start: 63.12856301525879,
            text: 'Because everything we do is based on that and that\'s what people want to see.',
            textRu: 'Потому что все, что мы делаем, основано на этом, и это то, что люди хотят видеть.'
        },
        {
            start: 68.75487590463256,
            text: 'How do you view the importance of creativity and original thought in our industry.',
            textRu: 'Как вы оцениваете важность творчества и оригинального мышления в нашей отрасли?'
        },
        {
            start: 74.2100531411438,
            text: 'I think quite frankly it interferes with what\'s most important in our pictures.',
            textRu: 'Я думаю, откровенно говоря, это мешает тому, что является самым важным в наших картинах.'
        },
        {
            start: 78.77894696566773,
            text: 'Diversity.',
            textRu: 'Разнообразие.'
        },
        {
            start: 79.46351208964539,
            text: 'Because that\'s what people want to see most and whatever whatever.',
            textRu: 'Потому что это то, что люди хотят видеть больше всего и что угодно.'
        },
        {
            start: 82.8056239256134,
            text: 'She-Hulk and Bat-Girl are great movies.',
            textRu: 'Женщина-Халк и Бэт-Гёрл — отличные фильмы.'
        },
        {
            start: 86.62731294659424,
            text: 'Have you or have you not ever read the work of Karl Marx.',
            textRu: 'Вы когда-нибудь читали или не читали работы Карла Маркса.'
        },
        {
            start: 91.65473710681153,
            text: 'No sir just like i\'m supposed to i have never read a word of that.',
            textRu: 'Нет, сэр, как и положено, я никогда не читал ни слова об этом.'
        },
        {
            start: 95.33634311444092,
            text: 'You better keep it that way.',
            textRu: 'Лучше так и продолжай.'
        },
        {
            start: 97.72634101144409,
            text: 'Have you or have you not ever read the work of Karl Marx.',
            textRu: 'Вы когда-нибудь читали или не читали работы Карла Маркса.'
        },
        {
            start: 102.03369908964539,
            text: 'Of course i\'ve memorized every word of it like i\'m supposed to.',
            textRu: 'Конечно, я запомнил каждое слово, как и должен был.'
        },
        {
            start: 105.76686211062623,
            text: 'Do you have any ties to the chinese communist party.',
            textRu: 'Есть ли у вас какие-либо связи с китайской коммунистической партией?'
        },
        {
            start: 109.0784720038147,
            text: 'Of course not.',
            textRu: 'Конечно нет.'
        },
        {
            start: 110.08401805149842,
            text: 'I\'m aware of the national security risk that ties to communist activity carries and understand it has no place in hollywood.',
            textRu: 'Я осознаю угрозу национальной безопасности, которую несут связи с коммунистической деятельностью, и понимаю, что ей нет места в Голливуде.'
        },
        {
            start: 117.03943095994568,
            text: 'Do you have any ties to the chinese communist party.',
            textRu: 'Есть ли у вас какие-либо связи с китайской коммунистической партией?'
        },
        {
            start: 120.82405194850159,
            text: 'Yeah and i understand that being loyal to their funding and sympathetic to their messaging is important to the success of our major studios and my paycheck.',
            textRu: 'Да, и я понимаю, что лояльность к их финансированию и сочувствие к их сообщениям важны для успеха наших крупных студий и моей зарплаты.'
        },
        {
            start: 129.7604627882843,
            text: 'We have seven new roles that you would be an excellent fit for.',
            textRu: 'У нас есть семь новых ролей, на которые вы бы отлично подошли.'
        },
        {
            start: 134.08070096566772,
            text: 'Do you think hollywood should hire and not hire actors based on their race.',
            textRu: 'Считаете ли вы, что Голливуд должен нанимать, а не нанимать актеров на основе их расы?'
        },
        {
            start: 139.07229911825563,
            text: 'Yes.',
            textRu: 'Да.'
        },
        {
            start: 140.04521992179872,
            text: 'Should hollywood hire and not hire actors on the basis of their race.',
            textRu: 'Голливуд должен нанимать, а не нанимать актеров на основе их расы.'
        },
        {
            start: 145.51435487602235,
            end: 146.51435487602235,
            text: 'Yes.',
            textRu: 'Да.'
        },
    ]
}

export function VideoPage() {

    const {y} = useWindowScroll()
    const boxYouTubeFrameRef = React.useRef(null)

    const [isStartPreview, setIsStartPreview] = useState(true);
    const [isToggleInterval, setIsToggleInterval] = useState(false);
    const [isInit, setIsInit] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [indexAction, setIndexAction] = useState(-1);

    const [alignment, setAlignment] = React.useState([]);

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const togglePause = () => {
        setIsPaused(!isPaused);
    };

    const seekTo = (index) => {
        if (isInit) {
            clearInterval(intervalChangeIndex)
            setIndexAction(index)
            videoElement.target.seekTo(data.content[index].start);
            videoElement.target.playVideo();
            setIsToggleInterval(!isToggleInterval)
        }
    };

    const onClickPrevious = () => {
        if (isInit) {
            seekTo(indexAction - 1)
        }
    };

    const onClickNext = () => {
        if (isInit) {
            seekTo(indexAction + 1)
        }
    };

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            enablejsapi: 1,
            playsinline: 1,
            autoplay: 0,
            controls: 0,
            rel: 0,
            showinfo: 0,
            showsearch: 0,
            modestbranding: 1,
            disablekb: 1,
        },
    };

    useEffect(() => {
        if (isInit && videoElement?.target?.i) {
            if (isPaused) {
                videoElement?.target?.pauseVideo();
            } else {
                setIsStartPreview(false)
                if (indexAction !== -1) {
                    seekTo(indexAction)
                } else {
                    videoElement?.target.playVideo();
                }
            }
        }
    }, [isInit, isPaused]);

    //get current time and video status in real time
    useEffect(() => {
        if (isInit) {
            intervalChangeIndex = setInterval(async () => {
                if (videoElement
                    && videoElement.target.getCurrentTime() > 0
                    && videoElement.target.playerInfo.playerState === 1
                ) {
                    const seconds = videoElement.target.getCurrentTime();

                    // console.log(seconds)

                    setIndexAction(-1)
                    for (let i = 0; i < data.content.length; i++) {
                        const end = data.content[i].end ? data.content[i].end : data.content[i + 1].start
                        if (data.content[i].start <= seconds && end > seconds) {
                            setIndexAction(i)
                            break;
                        }
                    }
                }
            }, 200);
        }

        return () => {
            clearInterval(intervalChangeIndex);
        };
    }, [isInit, isToggleInterval]);

    const _onReady = (event) => {
        videoElement = event;
        setIsInit(true)
    };

    const _onStateChange = () => {
        if (isInit) {
            setIsPaused(videoElement.target.playerInfo.playerState === 2);
        }
    };

    const content = []

    data.content.forEach((item, index) => {
        content.push(
            <Typography
                key={`item-${index}`}
                className={(index === indexAction ? (isPaused ? 'Active Pause' : 'Active') : '')}
                onClick={() => {
                    seekTo(index)
                }}
            >
                {alignment.includes('frameTranslate') ? item.textRu : item.text}
            </Typography>
        )
    })

    return (
        <Container className={'VideoContent'} maxWidth={"md"}>
            <Stack spacing={3}>

                <Stack spacing={1}>
                    <Typography variant="h5">
                        {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.author}
                    </Typography>
                </Stack>

                <ToggleButtonGroup
                    size="small"
                    color="primary"
                    value={alignment}
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <ToggleButton value="frameScroll" aria-label="bold">
                        <MoveUpOutlined/>
                    </ToggleButton>
                    <ToggleButton value="frameHide" aria-label="bold">
                        <HeadphonesOutlined/>
                    </ToggleButton>
                    <ToggleButton value="frameTranslate" aria-label="bold">
                        <TranslateOutlined/>
                    </ToggleButton>
                </ToggleButtonGroup>

                <Box
                    ref={boxYouTubeFrameRef}
                    className={'BoxYouTubeMove' + (alignment.includes('frameHide') ? ' Audio' : '')}
                    sx={{
                        marginTop: '0px !important'
                    }}
                >
                    <Box
                        className={'BoxYouTubeFrame' + (alignment.includes('frameScroll') && y > boxYouTubeFrameRef.current?.offsetTop ? ' Fix' : '')}
                    >
                        <Box sx={{
                            height: '40px',
                            backgroundColor: 'white',
                            marginBottom: '-10px'
                        }}/>

                        <Box
                            className={'BoxYouTubeFrameRad'}
                            sx={{
                                display: alignment.includes('frameHide') ? 'none' : 'block'
                            }}
                        >

                            <YouTube
                                className={'IFrame'}
                                videoId={"kLvuZtpQaSs"}
                                opts={opts}
                                onReady={_onReady}
                                onStateChange={_onStateChange}
                            />

                            <Box className={'ContainerButton AppTable'} sx={{
                                display: (isStartPreview ? 'auto' : 'none')
                            }}>
                                <Box className={'AppTableRow'}>
                                    <Box className={'AppTableCell'} sx={{
                                        backgroundImage: `url(https://img.youtube.com/vi/kLvuZtpQaSs/maxresdefault.jpg)`
                                    }}>
                                        <Stack className={'ContainerButtonItems'} alignItems={"center"}>
                                            {!isInit ? (
                                                <Zoom timeout={1000} in={true}>
                                                    <CircularProgress color={'warning'}/>
                                                </Zoom>
                                            ) : null}
                                        </Stack>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Paper variant="outlined" sx={{
                            padding: 2
                        }}>
                            <Stack
                                spacing={2}
                                direction={'row'}
                                alignItems="center"
                                justifyContent='space-between'
                            >
                                <Box>
                                    <Fab
                                        disabled={!isInit || isPaused || indexAction < 1}
                                        size="small"
                                        onClick={onClickPrevious}
                                        color="primary"
                                    >
                                        <SkipPreviousOutlined/>
                                    </Fab>
                                </Box>

                                <Box>
                                    <Fab
                                        disabled={!isInit}
                                        onClick={togglePause}
                                        color="primary"
                                    >
                                        {isPaused ? <PlayCircleOutline/> : <PauseCircleOutlined/>}
                                    </Fab>
                                </Box>

                                <Box>
                                    <Fab
                                        disabled={!isInit || isPaused || indexAction >= data.content.length - 1 || indexAction === -1}
                                        size="small"
                                        onClick={onClickNext}
                                        color="primary"
                                    >
                                        <SkipNextOutlined/>
                                    </Fab>
                                </Box>

                            </Stack>
                        </Paper>

                    </Box>

                </Box>

                <Box className={'VideoText'}>
                    {content}
                </Box>

            </Stack>
        </Container>
    );
}

VideoPage.propTypes = {};