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
    FormatAlignJustifyOutlined,
    FormatAlignLeftOutlined,
    HourglassEmptyOutlined,
    LoopOutlined,
    MoveUpOutlined,
    PauseCircleOutlined,
    PlayCircleOutline,
    SkipNextOutlined,
    SkipPreviousOutlined,
    TitleOutlined,
    VideocamOutlined
} from "@mui/icons-material";
import {AppCache, LanguageContext, useLocalStorage, useWindowScroll} from "../../base";
import {useParams} from "react-router";
import {YouTubeData} from "../videos/data/YouTubeData";
import {AppUtils} from "../../base/utils/AppUtils";
import {StrText} from "./elements/StrText";
import {ValueType} from "../../base/route/ValueType";
import {ErrorPage} from "../error/ErrorPage";

let intervalChangeIndex = null;

export function VideoPage() {

    // id item from url params
    const {id} = useParams();
    const [data] = useState(YouTubeData.find(x => x.id === parseInt(id)))

    // hooks
    const {y} = useWindowScroll()
    const {t} = useContext(LanguageContext)
    const isXS500 = useMediaQuery(useTheme().breakpoints.down('xs500'));
    const isMin = useMediaQuery(useTheme().breakpoints.down('min'));

    // site dark mode
    const darkMode = useLocalStorage("darkMode", ValueType.bool, false);

    // page save state after refresh
    const isShowVideo = useLocalStorage("VideoPage_isShowVideo", ValueType.bool, true);
    const isShowText = useLocalStorage("VideoPage_isShowText", ValueType.bool, true);
    const isBlockAttach = useLocalStorage("VideoPage_isBlockAttach", ValueType.bool, false);
    const textAlign = useLocalStorage("VideoPage_textAlign", ValueType.string, 'justify');

    // elements
    const boxYouTubeFrameRef = React.useRef(null)

    // states
    const [str, setStr] = useState([]);
    const [language, setLanguage] = useState('English');

    // video state
    const [isShowImagePreview, setIsShowImagePreview] = useState(true);
    const [videoElement, setVideoElement] = useState(null);
    const [isPaused, setIsPaused] = useState(true);
    const [isAfterStr, setIsAfterStr] = useState(false);

    // text state
    const [indexAction, setIndexAction] = useState(-1);
    const [indexActionSentence, setIndexActionSentence] = useState(-1);

    // preview state
    const [indexActionPreview, setIndexActionPreview] = useState(-1);

    // next state
    const [indexActionNext, setIndexActionNext] = useState(0);

    // modes state
    const [modeFrameState, setModeFrameState] = React.useState([
        isShowVideo ? 'isShowVideo' : null,
        isShowText ? 'isShowText' : null,
    ]);
    const [modeVisibleState, setModeVisibleState] = React.useState([
        darkMode ? 'darkMode' : null,
        isBlockAttach ? 'isBlockAttach' : null,
    ]);
    const [modePlayerState, setModePlayerState] = React.useState(null);

    // callback video control
    const seekTo = useCallback((index) => {
        if (Boolean(videoElement)) {
            setIndexAction(index)
            videoElement.target.seekTo(str[index].start);
            videoElement.target.playVideo();
        }
    }, [videoElement, str]);

    // effects
    useEffect(() => {
        if (data) {
            setStr(AppUtils.parseStr(data.str[language]))
        }
    }, [data, language]);

    useEffect(() => {
        setModeVisibleState([
            darkMode ? 'darkMode' : null,
            isBlockAttach ? 'isBlockAttach' : null,
        ])
    }, [isBlockAttach, darkMode]);

    useEffect(() => {
        AppCache.booleanSet('darkMode', modeVisibleState.includes('darkMode'))
        AppCache.booleanSet('VideoPage_isBlockAttach', modeVisibleState.includes('isBlockAttach'))
    }, [modeVisibleState]);

    useEffect(() => {
        AppCache.booleanSet('VideoPage_isShowVideo', modeFrameState.includes('isShowVideo'))
        AppCache.booleanSet('VideoPage_isShowText', modeFrameState.includes('isShowText'))
    }, [modeFrameState]);

    // change state video
    useEffect(() => {
        if (Boolean(videoElement) && videoElement?.target?.i) {
            try {
                if (isPaused) {
                    clearInterval(intervalChangeIndex)
                    videoElement?.target?.pauseVideo();
                } else if (videoElement.target.playerInfo.playerState !== 1) {
                    setIsShowImagePreview(false)
                    if (indexAction !== -1) {
                        seekTo(indexAction)
                    } else {
                        videoElement?.target.playVideo();
                    }
                }
            } catch (e) {
            }
        }
    }, [indexAction, isPaused, videoElement, seekTo]);

    // get current time and video status in real time
    useEffect(() => {
        if (Boolean(videoElement) && !isPaused) {
            intervalChangeIndex = setInterval(async () => {

                if (videoElement.target.playerInfo.playerState === 0) {
                    setIsShowImagePreview(true)
                    setIsPaused(true)
                    setIndexAction(-1)
                    setIndexActionNext(0)
                    setIndexActionPreview(-1)
                    setIndexActionSentence(-1)
                    setModePlayerState(null)
                    videoElement.target.seekTo(0);
                    videoElement?.target?.pauseVideo();
                    clearInterval(intervalChangeIndex)
                } else if (videoElement
                    && videoElement.target.getCurrentTime() > 0
                    && videoElement.target.playerInfo.playerState === 1
                ) {
                    const seconds = videoElement.target.getCurrentTime();

                    if (modePlayerState !== 'sentencePause' && modePlayerState !== 'sentenceLoop') {
                        setIndexActionSentence(-1)
                    }

                    setIndexActionPreview(-1)

                    if (indexActionSentence + 1 === str.length) {

                        setIndexActionPreview(indexActionSentence - 1)
                        setIndexActionNext(-1)

                        setIndexAction(indexActionSentence)
                        if (str[indexActionSentence].end < seconds) {
                            seekTo(indexActionSentence)
                            if (modePlayerState === 'sentencePause') {
                                setIsPaused(true)
                            }
                        }
                    } else {
                        let findIndex = -1

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
                                        setIsPaused(true)
                                    }
                                }
                            }

                            if (str[i].start <= seconds && str[i].end > seconds) {
                                findIndex = i
                                break;
                            }
                        }

                        setIsAfterStr(str.length === 0 || str[str.length - 1].end < seconds)
                        setIndexAction(findIndex)
                    }
                }
            }, 50);
        }

        return () => {
            clearInterval(intervalChangeIndex);
        };

    }, [isPaused, indexAction, indexActionSentence, modePlayerState, seekTo, str, videoElement]);

    if (!data) {
        return (
            <ErrorPage/>
        )
    }

    return (
        <Container className={'VideoContent'} maxWidth={"md"}>

            <Stack spacing={3} sx={{
                position: 'relative'
            }}>

                <Stack spacing={1}>
                    <Typography variant="h5" color="text.primary">
                        {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.author}
                    </Typography>
                </Stack>

                {/*MODE*/}
                <Stack
                    spacing={3}
                    direction={isXS500 ? 'column-reverse' : 'row'}
                    justifyContent={'space-between'}
                >
                    <Stack
                        spacing={1}
                        direction={'row'}
                    >
                        <ToggleButtonGroup
                            size="small"
                            color="primary"
                            value={modeFrameState}
                            onChange={(event, newValue) => {
                                setModeFrameState(newValue);
                            }}
                            aria-label="Group"
                        >
                            <Tooltip
                                title={modeFrameState.includes('isShowVideo') ? t('pages.video.t_video_mode_video_hide') : t('pages.video.t_video_mode_video_show')}
                                placement="top"
                            >
                                <ToggleButton
                                    selected={modeFrameState.includes('isShowVideo')}
                                    value="isShowVideo"
                                    aria-label="bold"
                                >
                                    <VideocamOutlined/>
                                </ToggleButton>
                            </Tooltip>

                            <Tooltip
                                title={modeFrameState.includes('isShowText') ? t('pages.video.t_video_mode_text_hide') : t('pages.video.t_video_mode_text_show')}
                                placement="top"
                            >
                                <ToggleButton
                                    selected={modeFrameState.includes('isShowText')}
                                    value="isShowText"
                                    aria-label="bold"
                                >
                                    <TitleOutlined/>
                                </ToggleButton>
                            </Tooltip>

                        </ToggleButtonGroup>

                        <ToggleButtonGroup
                            size="small"
                            color="primary"
                            value={textAlign}
                            disabled={!modeFrameState.includes('isShowText')}
                            exclusive
                            onChange={(event, newValue) => {
                                AppCache.booleanSet('VideoPage_textAlign', newValue)
                            }}
                            aria-label="Group"
                        >
                            <Tooltip
                                title={t('pages.video.t_video_mode_align_justify')}
                                placement="top"
                            >
                                <ToggleButton
                                    selected={textAlign === 'justify' && modeFrameState.includes('isShowText')}
                                    value="justify"
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
                                    selected={textAlign === 'left' && modeFrameState.includes('isShowText')}
                                    value="left"
                                    aria-label="bold"
                                >
                                    <FormatAlignLeftOutlined/>
                                </ToggleButton>
                            </Tooltip>

                        </ToggleButtonGroup>

                        <ToggleButtonGroup
                            size="small"
                            color="primary"
                            value={modeVisibleState}
                            onChange={(event, newValue) => {
                                setModeVisibleState(newValue);
                            }}
                            aria-label="Group"
                        >
                            <Tooltip
                                title={modeVisibleState.includes('isBlockAttach') ? t('pages.video.t_video_mode_unkeep') : t('pages.video.t_video_mode_keep')}
                                placement="top"
                            >
                                <ToggleButton
                                    selected={modeVisibleState.includes('isBlockAttach')}
                                    value='isBlockAttach'
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

                    <FormControl size="small" sx={{
                        minWidth: '130px'
                    }}>
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
                </Stack>

                {/*VIDEO BOX*/}
                <Box
                    ref={boxYouTubeFrameRef}
                    className={[
                        'BoxYouTubeMove',
                        (modeVisibleState.includes('isBlockAttach') && y > boxYouTubeFrameRef.current?.offsetTop ? 'isSticky' : ''),
                    ].join(' ')}
                    sx={{
                        marginTop: '0px !important'
                    }}
                >
                    <Box
                        className={'BoxYouTubeFrame'}
                    >
                        <Box className={'LineFrame'} sx={{
                            height: '40px',
                            backgroundColor: 'background.default',
                            marginBottom: '-10px'
                        }}/>

                        <Box
                            className={'BoxYouTubeFrameRad'}
                            sx={{
                                display: modeFrameState.includes('isShowVideo') ? 'block' : 'none'
                            }}
                        >

                            <YouTube
                                className={'IFrame'}
                                videoId={data.idYouTube}
                                opts={{
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
                                }}
                                onReady={(event) => {
                                    setVideoElement(event)
                                }}
                                onStateChange={() => {
                                    if (videoElement.target.playerInfo.playerState === 1) {
                                        setIsPaused(false)
                                    }
                                    if (videoElement.target.playerInfo.playerState === 2) {
                                        setIsPaused(true)
                                    }
                                }}
                            />

                            <Box className={'ContainerButton'} sx={{
                                display: (isShowImagePreview ? 'block' : 'none'),
                                backgroundImage: `url(https://img.youtube.com/vi/${data.idYouTube}/sddefault.jpg)`
                            }}>

                                <Box className={'ShadowPreview'}/>

                                {!Boolean(videoElement) ? (
                                    <Box className={'AppTable'} sx={{
                                        position: 'relative',
                                        zIndex: 1
                                    }}>
                                        <Box className={'AppTableRow'}>
                                            <Box className={'AppTableCell'}>
                                                <Zoom timeout={1000} in={true}>
                                                    <CircularProgress color={'info'}/>
                                                </Zoom>
                                            </Box>
                                        </Box>
                                    </Box>
                                ) : null}

                            </Box>
                        </Box>

                        {/*VIDEO CONTROL*/}
                        <Paper className={'Control'} variant="outlined" sx={{
                            padding: 2
                        }}>
                            <Stack
                                spacing={1}
                                alignItems={'center'}
                                direction={'row'}
                                justifyContent='space-between'
                            >

                                <Stack
                                    spacing={1}
                                    direction={'row'}
                                    alignItems="center"
                                    justifyContent='space-between'
                                >

                                    <Box>
                                        <Fab
                                            disabled={!Boolean(videoElement) || isPaused || indexActionPreview < 0}
                                            size="small"
                                            onClick={() => {
                                                if (indexAction !== indexActionPreview) {
                                                    clearInterval(intervalChangeIndex)
                                                    seekTo(indexActionPreview)
                                                    if (modePlayerState === 'sentencePause' || modePlayerState === 'sentenceLoop') {
                                                        setIndexActionSentence(indexActionPreview)
                                                    }
                                                }
                                            }}
                                            color="primary"
                                        >
                                            <SkipPreviousOutlined/>
                                        </Fab>
                                    </Box>

                                    <Box>
                                        <Fab
                                            size={isMin ? 'small' : 'large'}
                                            disabled={!Boolean(videoElement)}
                                            onClick={() => {
                                                setIsPaused(!isPaused)
                                            }}
                                            color="primary"
                                        >
                                            {Boolean(videoElement) ? (
                                                isPaused ? <PlayCircleOutline/> : <PauseCircleOutlined/>
                                            ) : (
                                                <HourglassEmptyOutlined/>
                                            )}
                                        </Fab>
                                    </Box>

                                    <Box>
                                        <Fab
                                            disabled={!Boolean(videoElement) || isPaused || indexActionNext >= str.length || indexActionNext === -1}
                                            size="small"
                                            onClick={() => {
                                                if (indexAction !== indexActionNext) {
                                                    clearInterval(intervalChangeIndex)
                                                    seekTo(indexActionNext)
                                                    if (modePlayerState === 'sentencePause' || modePlayerState === 'sentenceLoop') {
                                                        setIndexActionSentence(indexActionNext)
                                                    }
                                                }
                                            }}
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


                                    <ToggleButtonGroup
                                        size="small"
                                        color="primary"
                                        disabled={isAfterStr}
                                        exclusive
                                        value={modePlayerState}
                                        onChange={(event, newValue) => {
                                            setModePlayerState(newValue);
                                        }}
                                        aria-label="Group"
                                    >
                                        <Tooltip title={t('pages.video.t_video_mode_pause')} placement="top">
                                            <ToggleButton
                                                selected={modePlayerState === 'sentencePause' && !isAfterStr}
                                                value="sentencePause"
                                                aria-label="bold"
                                                onClick={() => {
                                                    setIndexActionSentence(indexAction === -1 ? indexActionNext : indexAction)
                                                }}
                                            >
                                                <AvTimerOutlined/>
                                            </ToggleButton>
                                        </Tooltip>

                                        <Tooltip title={t('pages.video.t_video_mode_loop')} placement="top">
                                            <ToggleButton
                                                selected={modePlayerState === 'sentenceLoop' && !isAfterStr}
                                                value="sentenceLoop"
                                                aria-label="bold"
                                                onClick={() => {
                                                    setIndexActionSentence(indexAction === -1 ? indexActionNext : indexAction)
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

                {/*TEXT*/}
                {modeFrameState.includes('isShowText') ? <StrText
                    items={str}
                    action={indexAction}
                    nextAction={indexActionNext}
                    language={language}
                    isInit={Boolean(videoElement)}
                    isPaused={isPaused}
                    textAlign={textAlign}
                    onClick={(index) => {
                        if (modePlayerState === 'sentencePause' || modePlayerState === 'sentenceLoop') {
                            setIndexActionSentence(index)
                        } else {
                            setIndexActionSentence(-1)
                        }
                        setIsPaused(false)
                        seekTo(index)
                    }}
                /> : null}

            </Stack>
        </Container>
    );
}

VideoPage.propTypes = {};