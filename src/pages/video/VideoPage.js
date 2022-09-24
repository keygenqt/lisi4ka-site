import * as React from 'react';
import {useCallback, useContext, useEffect, useState} from 'react';
import {
    Box,
    CircularProgress,
    Container,
    Fab,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    Typography,
    useMediaQuery,
    useTheme,
    Zoom
} from "@mui/material";
import YouTube from "react-youtube";
import {
    AvTimerOutlined,
    Brightness6Outlined,
    HeadphonesOutlined,
    LoopOutlined,
    MoveUpOutlined,
    PauseCircleOutlined,
    PlayCircleOutline,
    SkipNextOutlined,
    SkipPreviousOutlined,
    TranslateOutlined
} from "@mui/icons-material";
import {AppCache, LanguageContext, useLocalStorage, useWindowScroll} from "../../base";
import {ValueType} from "../../base/route/ValueType";
import {useParams} from "react-router";

let videoElement = null;
let intervalChangeIndex = null;

const data = {
    id: 1,
    idYouTube: 'sD1-rS_TM2o',
    title: 'Kids vocabulary - Solar System - planets - Learn English for kids - English educational video',
    author: 'English Singsing',
    str: {
        English: "1\n" +
            "00:00:08,160 --> 00:00:09,560\n" +
            "Solar System\n" +
            "\n" +
            "2\n" +
            "00:00:13,940 --> 00:00:15,000\n" +
            "Sun\n" +
            "\n" +
            "3\n" +
            "00:00:16,620 --> 00:00:20,180\n" +
            "The Sun is very big and hot.\n" +
            "\n" +
            "4\n" +
            "00:00:22,140 --> 00:00:23,100\n" +
            "Sun\n" +
            "\n" +
            "5\n" +
            "00:00:27,660 --> 00:00:36,260\n" +
            "There are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.\n" +
            "\n" +
            "6\n" +
            "00:00:36,980 --> 00:00:39,860\n" +
            "They go around the Sun.\n" +
            "\n" +
            "7\n" +
            "00:00:41,840 --> 00:00:44,460\n" +
            "Solar System\n" +
            "\n" +
            "8\n" +
            "00:00:45,180 --> 00:00:48,340\n" +
            "This is our Solar System.\n" +
            "\n" +
            "9\n" +
            "00:00:49,800 --> 00:00:51,480\n" +
            "Solar System\n" +
            "\n" +
            "10\n" +
            "00:00:57,400 --> 00:01:08,980\n" +
            "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, and Sun.\n" +
            "\n" +
            "11\n" +
            "00:01:11,240 --> 00:01:12,780\n" +
            "Mercury\n" +
            "\n" +
            "12\n" +
            "00:01:13,820 --> 00:01:18,420\n" +
            "Mercury is the closest planet to the Sun.\n" +
            "\n" +
            "13\n" +
            "00:01:20,640 --> 00:01:21,820\n" +
            "Venus\n" +
            "\n" +
            "14\n" +
            "00:01:22,900 --> 00:01:27,500\n" +
            "Venus is the brightest planet in the sky.\n" +
            "\n" +
            "15\n" +
            "00:01:29,720 --> 00:01:30,780\n" +
            "Earth\n" +
            "\n" +
            "16\n" +
            "00:01:31,820 --> 00:01:34,420\n" +
            "Earth is our planet.\n" +
            "\n" +
            "17\n" +
            "00:01:36,520 --> 00:01:37,800\n" +
            "Mars\n" +
            "\n" +
            "18\n" +
            "00:01:38,660 --> 00:01:41,680\n" +
            "Mars is a red planet.\n" +
            "\n" +
            "19\n" +
            "00:01:43,920 --> 00:01:45,240\n" +
            "Jupiter\n" +
            "\n" +
            "20\n" +
            "00:01:46,240 --> 00:01:49,880\n" +
            "Jupiter is the largest planet.\n" +
            "\n" +
            "21\n" +
            "00:01:51,780 --> 00:01:53,100\n" +
            "Saturn\n" +
            "\n" +
            "22\n" +
            "00:01:54,380 --> 00:01:58,160\n" +
            "Saturn is the planet with the rings.\n" +
            "\n" +
            "23\n" +
            "00:02:00,020 --> 00:02:01,640\n" +
            "Uranus\n" +
            "\n" +
            "24\n" +
            "00:02:03,000 --> 00:02:07,060\n" +
            "Uranus is very cold and cloudy.\n" +
            "\n" +
            "25\n" +
            "00:02:08,880 --> 00:02:10,500\n" +
            "Neptune\n" +
            "\n" +
            "26\n" +
            "00:02:11,760 --> 00:02:14,620\n" +
            "Neptune is made of gas.\n" +
            "\n" +
            "27\n" +
            "00:02:16,600 --> 00:02:27,580\n" +
            "Sun, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune\n" +
            "\n" +
            "28\n" +
            "00:02:29,340 --> 00:02:32,440\n" +
            "This is our solar system.\n",
    }
}

export function VideoPage() {

    let {id} = useParams();

    function getSecond(value) {
        const [time, ms] = value.split(',')
        const [h, m, s] = time.split(':')
        return parseFloat(`${(parseInt(h) * 60 * 60) + (parseInt(m) * 60) + parseInt(s)}.${ms}`);
    }

    function expensiveComputation(name) {
        let str = []
        data.str[name].split("\n\n").forEach((item) => {
            // eslint-disable-next-line no-unused-vars
            const [_, time, text] = item.split("\n")
            const [start, end] = time.split(" --> ")
            const obj = {
                time: time,
                start: getSecond(start),
                end: getSecond(end),
                text: text,
            }
            str.push(obj)
        })
        return str
    }

    const [str, setStr] = useState([]);

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    const {y} = useWindowScroll()
    const boxYouTubeFrameRef = React.useRef(null)
    const darkMode = useLocalStorage("darkMode", ValueType.bool);
    const {t} = useContext(LanguageContext)

    const [language, setLanguage] = useState('English');

    const [isStartPreview, setIsStartPreview] = useState(true);
    const [isToggleInterval, setIsToggleInterval] = useState(false);
    const [isInit, setIsInit] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [indexAction, setIndexAction] = useState(-1);
    const [indexActionSentence, setIndexActionSentence] = useState(-1);

    const [indexActionPreview, setIndexActionPreview] = useState(-1);
    const [indexActionNext, setIndexActionNext] = useState(0);

    const [modeFrameState, setModeFrameState] = React.useState([]);
    const [modePlayerState, setModePlayerState] = React.useState(null);
    const [modeVisibleState, setModeVisibleState] = React.useState(AppCache.booleanGet('darkMode') ? ['darkMode'] : []);

    const handleChangeModeFrame = (event, newValue) => {
        setModeFrameState(newValue);
    };

    const handleChangeModePlayer = (event, newValue) => {
        setModePlayerState(newValue);
    };

    const handleChangeModeVisible = (event, newValue) => {
        setModeVisibleState(newValue);
    };

    const seekTo = useCallback((index) => {
        if (isInit) {
            clearInterval(intervalChangeIndex)
            setIndexAction(index)
            videoElement.target.seekTo(str[index].start);
            videoElement.target.playVideo();
            setIsToggleInterval(!isToggleInterval)
        }
    }, [isInit, isToggleInterval]);

    const togglePause = () => {
        if (isInit) {
            setIsPaused(!isPaused);
        }
    };

    const onClickPrevious = () => {
        if (isInit) {
            seekTo(indexActionPreview)
            if (modePlayerState === 'sentencePause' || modePlayerState === 'sentenceLoop') {
                setIndexActionSentence(indexActionPreview)
            }
        }
    };

    const onClickNext = () => {
        if (isInit) {
            seekTo(indexActionNext)
            if (modePlayerState === 'sentencePause' || modePlayerState === 'sentenceLoop') {
                setIndexActionSentence(indexActionNext)
            }
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
        if (modeVisibleState.includes('darkMode')) {
            AppCache.booleanSet('darkMode', true)
        } else {
            AppCache.booleanSet('darkMode', false)
        }
    }, [modeVisibleState]);

    useEffect(() => {
        setStr(expensiveComputation(language))
    }, [language]);

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

                    if (modePlayerState !== 'sentencePause' && modePlayerState !== 'sentenceLoop') {
                        setIndexActionSentence(-1)
                    }

                    setIndexAction(-1)
                    setIndexActionPreview(-1)

                    if (indexActionSentence + 1 === str.length) {

                        setIndexActionPreview(indexActionSentence - 1)
                        setIndexActionNext(-1)

                        setIndexAction(indexActionSentence)
                        if (str[indexActionSentence].end < seconds) {
                            seekTo(indexActionSentence)
                            if (modePlayerState === 'sentencePause') {
                                videoElement?.target?.pauseVideo();
                            }
                        }
                    } else {
                        for (let i = 0; i < str.length; i++) {

                            if ((str[i].start <= seconds && str[i].end > seconds)
                                || (str[i].end <= seconds && Boolean(str[i + 1]) && str[i + 1].start > seconds)) {
                                setIndexActionNext(i + 1)
                                if (i > 0) {
                                    setIndexActionPreview(i - 1)
                                }
                            }

                            if (str[i].start <= seconds && str[i].end > seconds) {
                                if (indexActionSentence >= 0 && indexActionSentence !== i) {
                                    seekTo(indexActionSentence)
                                    if (modePlayerState === 'sentencePause') {
                                        videoElement?.target?.pauseVideo();
                                    }
                                } else {
                                    setIndexAction(i)
                                }
                                break;
                            }
                        }
                    }
                }
            }, 50);
        }

        return () => {
            clearInterval(intervalChangeIndex);
        };
    }, [indexActionSentence, modePlayerState, isInit, isToggleInterval, seekTo]);

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

    str.forEach((item, index) => {
        content.push(
            <Typography
                key={`item-${index}`}
                className={isPaused && index === indexAction ? 'Pause' : ''}
                sx={darkMode ? {
                    backgroundColor: index === indexAction ? '#dedede' : '#444444',
                    color: index === indexAction ? '#252525' : '#f1f1f1',
                } : {
                    backgroundColor: index === indexAction ? '#444444' : '#e9e9e9',
                    color: index === indexAction ? '#ffffff' : '#000000',
                }}
                onClick={() => {
                    if (modePlayerState === 'sentencePause' || modePlayerState === 'sentenceLoop') {
                        setIndexActionSentence(index)
                    } else {
                        setIndexActionSentence(-1)
                    }
                    seekTo(index)
                }}
            >
                {modeVisibleState.includes('frameTranslate') ? item.textRu : item.text}
            </Typography>
        )
    })

    return (
        <Container className={'VideoContent'} maxWidth={"md"}>
            <Stack spacing={3}>

                <Stack spacing={1}>
                    <Typography variant="h5" color="text.primary">
                        {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.author}
                    </Typography>
                </Stack>

                <Stack spacing={1} direction={'row'}>
                    <ToggleButtonGroup
                        size="small"
                        color="primary"
                        value={modeFrameState}
                        onChange={handleChangeModeFrame}
                        aria-label="Group"
                    >
                        <Tooltip title={t('pages.video.t_video_mode_keep')} placement="top">
                            <ToggleButton
                                selected={modeFrameState.includes('frameScroll')}
                                value="frameScroll"
                                aria-label="bold"
                            >
                                <MoveUpOutlined/>
                            </ToggleButton>
                        </Tooltip>

                        <Tooltip title={t('pages.video.t_video_mode_hide')} placement="top">
                            <ToggleButton
                                selected={modeFrameState.includes('frameHide')}
                                value="frameHide"
                                aria-label="bold"
                            >
                                <HeadphonesOutlined/>
                            </ToggleButton>
                        </Tooltip>

                    </ToggleButtonGroup>

                    <ToggleButtonGroup
                        size="small"
                        color="primary"
                        value={modeVisibleState}
                        onChange={handleChangeModeVisible}
                        aria-label="Group"
                    >
                        <Tooltip title={t('pages.video.t_video_mode_dark')} placement="top">
                            <ToggleButton
                                selected={modeVisibleState.includes('darkMode')}
                                value="darkMode"
                                aria-label="bold"
                            >
                                <Brightness6Outlined/>
                            </ToggleButton>
                        </Tooltip>

                    </ToggleButtonGroup>
                </Stack>

                <Box
                    ref={boxYouTubeFrameRef}
                    className={'BoxYouTubeMove' + (modeFrameState.includes('frameHide') ? ' Audio' : '')}
                    sx={{
                        marginTop: '0px !important'
                    }}
                >
                    <Box
                        className={'BoxYouTubeFrame' + (modeFrameState.includes('frameScroll') && y > boxYouTubeFrameRef.current?.offsetTop ? ' Fix' : '')}
                    >
                        <Box sx={{
                            height: '40px',
                            backgroundColor: 'background.default',
                            marginBottom: '-10px'
                        }}/>

                        <Box
                            className={'BoxYouTubeFrameRad'}
                            sx={{
                                display: modeFrameState.includes('frameHide') ? 'none' : 'block'
                            }}
                        >

                            <YouTube
                                className={'IFrame'}
                                videoId={data.idYouTube}
                                opts={opts}
                                onReady={_onReady}
                                onStateChange={_onStateChange}
                            />

                            <Box className={'ContainerButton AppTable'} sx={{
                                display: (isStartPreview ? 'auto' : 'none')
                            }}>
                                <Box className={'AppTableRow'}>
                                    <Box className={'AppTableCell'} sx={{
                                        backgroundImage: `url(https://img.youtube.com/vi/${data.idYouTube}/hqdefault.jpg)`
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

                        <Paper className={'Control'} variant="outlined" sx={{
                            padding: 2
                        }}>
                            <Stack
                                spacing={2}
                                alignItems={isSM ? 'auto' : 'center'}
                                direction={isSM ? 'column' : 'row'}
                                justifyContent='space-between'
                            >

                                <Stack
                                    spacing={2}
                                    direction={'row'}
                                    alignItems="center"
                                    justifyContent='space-between'
                                >

                                    <Box>
                                        <Fab
                                            disabled={!isInit || isPaused || indexActionPreview < 0}
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
                                            disabled={!isInit || isPaused || indexActionNext >= str.length || indexActionNext === -1}
                                            size="small"
                                            onClick={onClickNext}
                                            color="primary"
                                        >
                                            <SkipNextOutlined/>
                                        </Fab>
                                    </Box>

                                </Stack>

                                <Stack
                                    spacing={2}
                                    direction={'row'}
                                    alignItems="center"
                                    justifyContent='flex-end'
                                >
                                    <FormControl size="small">
                                        <InputLabel id="demo-simple-select-label">{t('pages.video.t_video_mode_language')}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={language}
                                            label={t('pages.video.t_video_mode_language')}
                                            onChange={(event) => {
                                                setLanguage(event.target.value)
                                            }}
                                        >
                                            {Object.keys(data.str).map((option) => (
                                                <MenuItem key={`cat-${option}`} value={option}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <ToggleButtonGroup
                                        size="small"
                                        color="primary"
                                        exclusive
                                        value={modePlayerState}
                                        onChange={handleChangeModePlayer}
                                        aria-label="Group"
                                    >
                                        <Tooltip title={t('pages.video.t_video_mode_pause')} placement="top">
                                            <ToggleButton
                                                selected={modePlayerState === 'sentencePause'}
                                                value="sentencePause"
                                                aria-label="bold"
                                                onClick={() => {
                                                    setIndexActionSentence(indexAction)
                                                }}
                                            >
                                                <AvTimerOutlined/>
                                            </ToggleButton>
                                        </Tooltip>

                                        <Tooltip title={t('pages.video.t_video_mode_loop')} placement="top">
                                            <ToggleButton
                                                selected={modePlayerState === 'sentenceLoop'}
                                                value="sentenceLoop"
                                                aria-label="bold"
                                                onClick={() => {
                                                    setIndexActionSentence(indexAction)
                                                }}
                                            >
                                                <LoopOutlined/>
                                            </ToggleButton>
                                        </Tooltip>

                                    </ToggleButtonGroup>
                                </Stack>

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