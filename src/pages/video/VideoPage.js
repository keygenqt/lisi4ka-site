import * as React from 'react';
import {useCallback, useContext, useEffect, useState} from 'react';
import {
    Box,
    Button,
    CircularProgress,
    ClickAwayListener,
    Container,
    Fab,
    Fade,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Popper,
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
    FormatAlignCenterOutlined,
    FormatAlignJustifyOutlined,
    FormatAlignLeftOutlined,
    LoopOutlined,
    MoveUpOutlined,
    PauseCircleOutlined,
    PlayCircleOutline,
    SkipNextOutlined,
    SkipPreviousOutlined,
    TitleOutlined,
    TranslateOutlined,
    VideocamOutlined
} from "@mui/icons-material";
import {AppCache, LanguageContext, NavigateContext, useLocalStorage, useWindowScroll} from "../../base";
import {ValueType} from "../../base/route/ValueType";
import {useParams} from "react-router";
import {YouTubeData} from "./data/YouTubeData";

let videoElement = null;
let intervalChangeIndex = null;

export function VideoPage() {

    const {id} = useParams();

    const {route} = useContext(NavigateContext)
    const [data] = useState(YouTubeData.find(x => x.id === parseInt(id)))

    function expensiveComputation(name) {

        function getSecond(value) {
            const [time, ms] = value.split(',')
            const [h, m, s] = time.split(':')
            return parseFloat(`${(parseInt(h) * 60 * 60) + (parseInt(m) * 60) + parseInt(s)}.${ms}`);
        }

        let str = []
        data.str[name].trim().split("\n\n").forEach((item) => {
            const [index, time] = item.trim().split("\n")
            const [start, end] = time.split(" --> ")
            const text = item.trim().replace(index + "\n", "").replace(time + "\n", "")
            const obj = {
                index: index,
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

    const [anchorElSubMenu, setAnchorElSubMenu] = useState(null);
    const [itemSubMenu, setItemSubMenu] = useState(null);

    const [isStartPreview, setIsStartPreview] = useState(true);
    const [isToggleInterval, setIsToggleInterval] = useState(false);
    const [isInit, setIsInit] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [indexAction, setIndexAction] = useState(-1);
    const [indexActionSentence, setIndexActionSentence] = useState(-1);

    const [indexActionPreview, setIndexActionPreview] = useState(-1);
    const [indexActionNext, setIndexActionNext] = useState(0);

    const [modeFrameState, setModeFrameState] = React.useState(['showText', 'showVideo']);
    const [modePlayerState, setModePlayerState] = React.useState(null);
    const [modeVisibleState, setModeVisibleState] = React.useState(AppCache.booleanGet('darkMode') ? ['darkMode'] : []);
    const [modeAlignState, setModeAlignState] = React.useState(['alignJustify']);

    const handleChangeModeFrame = (event, newValue) => {
        setModeFrameState(newValue);
    };

    const handleChangeModePlayer = (event, newValue) => {
        setModePlayerState(newValue);
    };

    const handleChangeModeVisible = (event, newValue) => {
        setModeVisibleState(newValue);
    };

    const handleChangeModeAlign = (event, newValue) => {
        setModeAlignState(newValue);
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
        setAnchorElSubMenu(null);
    }, [y]);

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

                            if ((str[i].end <= seconds + 0.06 && Boolean(str[i + 1]) && str[i + 1].start > seconds)) {
                                if (indexActionSentence >= 0 && indexActionSentence === i) {
                                    setIndexAction(i)
                                    seekTo(indexActionSentence)
                                    if (modePlayerState === 'sentencePause') {
                                        videoElement?.target?.pauseVideo();
                                    }
                                }
                            }

                            if (str[i].start <= seconds && str[i].end > seconds) {
                                setIndexAction(i)
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
                    if (isInit) {
                        if (modePlayerState === 'sentencePause' || modePlayerState === 'sentenceLoop') {
                            setIndexActionSentence(index)
                        } else {
                            setIndexActionSentence(-1)
                        }
                        seekTo(index)
                    }
                }}
                onContextMenu={(e) => {
                    if (isInit) {
                        if (language === 'English' || language === 'Russian') {
                            function generateGetBoundingClientRect(x = 0, y = 0) {
                                return () => ({
                                    width: 0,
                                    height: 0,
                                    top: e.clientY,
                                    right: e.clientX,
                                    bottom: e.clientY,
                                    left: e.clientX,
                                });
                            }

                            const virtualElement = {
                                getBoundingClientRect: generateGetBoundingClientRect(),
                            };
                            setAnchorElSubMenu(virtualElement);
                            setItemSubMenu(item)
                            e.preventDefault();
                        }
                    }
                }}
            >
                {item.text}
            </Typography>
        )
    })

    return (
        <Container className={'VideoContent'} maxWidth={"md"}>

            <ClickAwayListener onClickAway={() => {
                setAnchorElSubMenu(null);
            }}>
                <Popper
                    id={'MenuRightClick'}
                    open={Boolean(anchorElSubMenu)}
                    anchorEl={anchorElSubMenu}
                    transition
                    placement="bottom"
                    sx={{
                        zIndex: 1
                    }}
                    popperOptions={{
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, 10]
                                }
                            },
                        ]
                    }}
                >
                    {({TransitionProps}) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper sx={{p: 1}}>
                                <Stack spacing={0}>
                                    <Button
                                        sx={{
                                            padding: '6px 16px',
                                            ...(darkMode ? {color: '#fff'} : {})
                                        }}
                                        startIcon={<TranslateOutlined/>}
                                        onClick={() => {
                                            if (language === 'English') {
                                                route.openUrlNewTab(`https://translate.yandex.com/?lang=en-ru&text=${itemSubMenu.text}`)
                                            }
                                            if (language === 'Russian') {
                                                route.openUrlNewTab(`https://translate.yandex.com/?lang=ru-en&text=${itemSubMenu.text}`)
                                            }
                                            setAnchorElSubMenu(null);
                                        }}
                                    >
                                        <Box>
                                            {t('pages.video.t_video_tr_yandex')}
                                        </Box>
                                    </Button>
                                    <Button
                                        sx={(darkMode ? {color: '#fff'} : {})}
                                        startIcon={<TranslateOutlined/>}
                                        onClick={() => {
                                            if (language === 'English') {
                                                route.openUrlNewTab(`https://translate.google.com/?sl=en&tl=ru&op=translate&text=${itemSubMenu.text}`)
                                            }
                                            if (language === 'Russian') {
                                                route.openUrlNewTab(`https://translate.google.com/?sl=ru&tl=en&op=translate&text=${itemSubMenu.text}`)
                                            }
                                            setAnchorElSubMenu(null);
                                        }}
                                    >
                                        <Box>
                                            {t('pages.video.t_video_tr_google')}
                                        </Box>
                                    </Button>
                                </Stack>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </ClickAwayListener>


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
                        <Tooltip
                            title={modeFrameState.includes('showVideo') ? t('pages.video.t_video_mode_video_hide') : t('pages.video.t_video_mode_video_show')}
                            placement="top"
                        >
                            <ToggleButton
                                selected={modeFrameState.includes('showVideo')}
                                value="showVideo"
                                aria-label="bold"
                            >
                                <VideocamOutlined/>
                            </ToggleButton>
                        </Tooltip>

                        <Tooltip
                            title={modeFrameState.includes('showText') ? t('pages.video.t_video_mode_text_hide') : t('pages.video.t_video_mode_text_show')}
                            placement="top"
                        >
                            <ToggleButton
                                selected={modeFrameState.includes('showText')}
                                value="showText"
                                aria-label="bold"
                            >
                                <TitleOutlined/>
                            </ToggleButton>
                        </Tooltip>

                    </ToggleButtonGroup>

                    <ToggleButtonGroup
                        size="small"
                        color="primary"
                        value={modeAlignState}
                        disabled={!modeFrameState.includes('showText')}
                        exclusive
                        onChange={handleChangeModeAlign}
                        aria-label="Group"
                    >
                        <Tooltip
                            title={t('pages.video.t_video_mode_align_justify')}
                            placement="top"
                        >
                            <ToggleButton
                                selected={modeAlignState.includes('alignJustify') && modeFrameState.includes('showText')}
                                value="alignJustify"
                                aria-label="bold"
                            >
                                <FormatAlignJustifyOutlined/>
                            </ToggleButton>
                        </Tooltip>

                        <Tooltip
                            title={t('pages.video.t_video_mode_align_left')}
                            placement="top"
                        >
                            <ToggleButton
                                selected={modeAlignState.includes('alignLeft') && modeFrameState.includes('showText')}
                                value="alignLeft"
                                aria-label="bold"
                            >
                                <FormatAlignLeftOutlined/>
                            </ToggleButton>
                        </Tooltip>

                        <Tooltip
                            title={t('pages.video.t_video_mode_align_center')}
                            placement="top"
                        >
                            <ToggleButton
                                selected={modeAlignState.includes('alignCenter') && modeFrameState.includes('showText')}
                                value="alignCenter"
                                aria-label="bold"
                            >
                                <FormatAlignCenterOutlined/>
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
                        <Tooltip
                            title={modeVisibleState.includes('frameScroll') ? t('pages.video.t_video_mode_unkeep') : t('pages.video.t_video_mode_keep')}
                            placement="top"
                        >
                            <ToggleButton
                                selected={modeVisibleState.includes('frameScroll')}
                                value="frameScroll"
                                aria-label="bold"
                            >
                                <MoveUpOutlined/>
                            </ToggleButton>
                        </Tooltip>

                        <Tooltip
                            title={modeVisibleState.includes('darkMode') ? t('pages.video.t_video_mode_dark_disable') : t('pages.video.t_video_mode_dark_enable')}
                            placement="top"
                        >
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
                    className={'BoxYouTubeMove' + (modeFrameState.includes('showVideo') ? '' : ' Audio')}
                    sx={{
                        marginTop: '0px !important'
                    }}
                >
                    <Box
                        className={'BoxYouTubeFrame' + (modeVisibleState.includes('frameScroll') && y > boxYouTubeFrameRef.current?.offsetTop ? ' Fix' : '')}
                    >
                        <Box sx={{
                            height: '40px',
                            backgroundColor: 'background.default',
                            marginBottom: '-10px'
                        }}/>

                        <Box
                            className={'BoxYouTubeFrameRad'}
                            sx={{
                                display: modeFrameState.includes('showVideo') ? 'block' : 'none'
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
                                        <InputLabel
                                            id="demo-simple-select-label">{t('pages.video.t_video_mode_language')}</InputLabel>
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

                <Box className={'VideoText'} sx={{
                    display: modeFrameState.includes('showText') ? 'auto' : 'none',
                    textAlign: (modeAlignState.includes('alignJustify') ? 'justify' : (modeAlignState.includes('alignLeft') ? 'left' : 'center')),
                }}>
                    {content}
                </Box>

            </Stack>
        </Container>
    );
}

VideoPage.propTypes = {};