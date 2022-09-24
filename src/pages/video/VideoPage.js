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
        Korean: "1\n" +
            "00:00:00,110 --> 00:00:01,770\n" +
            "co\n" +
            "\n" +
            "2\n" +
            "00:00:01,770 --> 00:00:04,790\n" +
            "뭘 쌩쌩\n" +
            "\n" +
            "3\n" +
            "00:00:07,620 --> 00:00:10,230\n" +
            "써먹을 수 있어요\n" +
            "\n" +
            "4\n" +
            "00:00:10,230 --> 00:00:12,180\n" +
            "5\n" +
            "\n" +
            "5\n" +
            "00:00:12,180 --> 00:00:15,990\n" +
            "및 뭐 싸워야 합니다\n" +
            "\n" +
            "6\n" +
            "00:00:15,990 --> 00:00:18,840\n" +
            "좌 우 씨 버스 안에 스페어 2 -\n" +
            "\n" +
            "7\n" +
            "00:00:18,840 --> 00:00:23,450\n" +
            "na ei 에이 뭐 싸이\n" +
            "\n" +
            "8\n" +
            "00:00:23,450 --> 00:00:27,500\n" +
            "와 적고 5\n" +
            "\n" +
            "9\n" +
            "00:00:27,630 --> 00:00:29,509\n" +
            "이제와 뭘 퀴\n" +
            "\n" +
            "10\n" +
            "00:00:29,509 --> 00:00:31,169\n" +
            "tesol\n" +
            "\n" +
            "11\n" +
            "00:00:31,169 --> 00:00:32,189\n" +
            "ol\n" +
            "\n" +
            "12\n" +
            "00:00:32,189 --> 00:00:36,300\n" +
            "튜브를 쌀을 유아인 어스 안나 2\n" +
            "\n" +
            "13\n" +
            "00:00:36,300 --> 00:00:40,580\n" +
            "으 아 아 이거 어바웃 얻었어요\n" +
            "\n" +
            "14\n" +
            "00:00:40,580 --> 00:00:45,090\n" +
            "오오오 오오오 썩 알 수 있어요\n" +
            "\n" +
            "15\n" +
            "00:00:45,090 --> 00:00:49,290\n" +
            "ms 싸울 쏘가리 쌈\n" +
            "\n" +
            "16\n" +
            "00:00:49,290 --> 00:00:52,760\n" +
            "목 써 걸 수 있어요\n" +
            "\n" +
            "17\n" +
            "00:00:52,760 --> 00:00:57,450\n" +
            "[음악]\n" +
            "\n" +
            "18\n" +
            "00:00:57,450 --> 00:01:02,070\n" +
            "아 멀티 위 럭비 4 스플 금 멀\n" +
            "\n" +
            "19\n" +
            "00:01:02,070 --> 00:01:05,670\n" +
            "거침 패를 속살을 교외에 있는 거 금\n" +
            "\n" +
            "20\n" +
            "00:01:05,670 --> 00:01:06,990\n" +
            "낮 질문\n" +
            "\n" +
            "21\n" +
            "00:01:06,990 --> 00:01:08,130\n" +
            "애한 5성 마이\n" +
            "\n" +
            "22\n" +
            "00:01:08,130 --> 00:01:10,750\n" +
            "[음악]\n" +
            "\n" +
            "23\n" +
            "00:01:10,750 --> 00:01:12,860\n" +
            "cork\n" +
            "\n" +
            "24\n" +
            "00:01:12,860 --> 00:01:16,400\n" +
            "작 마 ks 타코 하우스의 스프 아\n" +
            "\n" +
            "25\n" +
            "00:01:16,400 --> 00:01:19,210\n" +
            "4 주다 썰 n\n" +
            "\n" +
            "26\n" +
            "00:01:19,210 --> 00:01:22,910\n" +
            "및 mens 착복\n" +
            "\n" +
            "27\n" +
            "00:01:22,910 --> 00:01:25,940\n" +
            "beans 비스타 vista 아 4\n" +
            "\n" +
            "28\n" +
            "00:01:25,940 --> 00:01:28,810\n" +
            "옛날 쓰다 2\n" +
            "\n" +
            "29\n" +
            "00:01:28,810 --> 00:01:30,890\n" +
            "ee\n" +
            "\n" +
            "30\n" +
            "00:01:30,890 --> 00:01:32,080\n" +
            "to\n" +
            "\n" +
            "31\n" +
            "00:01:32,080 --> 00:01:34,610\n" +
            "wolf 안에\n" +
            "\n" +
            "32\n" +
            "00:01:34,610 --> 00:01:37,850\n" +
            "아 뭐 및 마을\n" +
            "\n" +
            "33\n" +
            "00:01:37,850 --> 00:01:38,720\n" +
            "착\n" +
            "\n" +
            "34\n" +
            "00:01:38,720 --> 00:01:41,590\n" +
            "멀 희성 말 거야 는\n" +
            "\n" +
            "35\n" +
            "00:01:41,590 --> 00:01:43,369\n" +
            "[음악]\n" +
            "\n" +
            "36\n" +
            "00:01:43,369 --> 00:01:45,229\n" +
            "귀 슈벨은\n" +
            "\n" +
            "37\n" +
            "00:01:45,229 --> 00:01:50,869\n" +
            "초밥 슈퍼를 있어 얼 z 포함해\n" +
            "\n" +
            "38\n" +
            "00:01:50,869 --> 00:01:53,149\n" +
            "뭐 쌀 으\n" +
            "\n" +
            "39\n" +
            "00:01:53,149 --> 00:01:57,650\n" +
            "적법 싸 룬 써봐야 낸 wa\n" +
            "\n" +
            "40\n" +
            "00:01:57,650 --> 00:02:00,170\n" +
            "[음악]\n" +
            "\n" +
            "41\n" +
            "00:02:00,170 --> 00:02:01,940\n" +
            "2 5회 인 어스\n" +
            "\n" +
            "42\n" +
            "00:02:01,940 --> 00:02:03,039\n" +
            "정보\n" +
            "\n" +
            "43\n" +
            "00:02:03,039 --> 00:02:04,570\n" +
            "uas\n" +
            "\n" +
            "44\n" +
            "00:02:04,570 --> 00:02:07,070\n" +
            "looper 2\n" +
            "\n" +
            "45\n" +
            "00:02:07,070 --> 00:02:08,150\n" +
            "아\n" +
            "\n" +
            "46\n" +
            "00:02:08,150 --> 00:02:10,580\n" +
            "무희 낫츠\n" +
            "\n" +
            "47\n" +
            "00:02:10,580 --> 00:02:11,870\n" +
            "적고 5\n" +
            "\n" +
            "48\n" +
            "00:02:11,870 --> 00:02:15,610\n" +
            "몇 주민 스매 잃어야\n" +
            "\n" +
            "49\n" +
            "00:02:15,950 --> 00:02:16,670\n" +
            "르\n" +
            "\n" +
            "50\n" +
            "00:02:16,670 --> 00:02:22,310\n" +
            "악산 정말 키위 앞이 4 걸 까 말\n" +
            "\n" +
            "51\n" +
            "00:02:22,310 --> 00:02:23,480\n" +
            "기운 패를\n" +
            "\n" +
            "52\n" +
            "00:02:23,480 --> 00:02:29,450\n" +
            "쌀은 교 웨이 4 컴 납치 물 적합\n" +
            "\n" +
            "53\n" +
            "00:02:29,450 --> 00:02:33,569\n" +
            "테스 옳소 가 있어\n" +
            "\n" +
            "54\n" +
            "00:02:33,569 --> 00:02:34,909\n" +
            "5\n" +
            "\n" +
            "55\n" +
            "00:02:34,909 --> 00:02:38,239\n" +
            "woo 5\n" +
            "\n" +
            "56\n" +
            "00:02:38,510 --> 00:02:41,299\n" +
            "썩을 수 있어요\n" +
            "\n" +
            "57\n" +
            "00:02:41,299 --> 00:02:43,230\n" +
            "#5 5\n" +
            "\n" +
            "58\n" +
            "00:02:43,230 --> 00:02:45,360\n" +
            "싼\n" +
            "\n" +
            "59\n" +
            "00:02:45,360 --> 00:02:47,610\n" +
            "do\n" +
            "\n" +
            "60\n" +
            "00:02:47,610 --> 00:02:48,770\n" +
            "분만 게임\n" +
            "\n" +
            "61\n" +
            "00:02:48,770 --> 00:02:51,480\n" +
            "[음악]\n" +
            "\n" +
            "62\n" +
            "00:02:51,480 --> 00:02:53,549\n" +
            "ves\n" +
            "\n" +
            "63\n" +
            "00:02:53,549 --> 00:02:57,319\n" +
            "to 5 5 5\n" +
            "\n" +
            "64\n" +
            "00:02:57,319 --> 00:02:59,150\n" +
            "to\n" +
            "\n" +
            "65\n" +
            "00:02:59,150 --> 00:03:01,340\n" +
            "my\n" +
            "\n" +
            "66\n" +
            "00:03:01,340 --> 00:03:03,840\n" +
            "cool\n" +
            "\n" +
            "67\n" +
            "00:03:03,840 --> 00:03:05,110\n" +
            "주역들을\n" +
            "\n" +
            "68\n" +
            "00:03:05,110 --> 00:03:07,739\n" +
            "[음악]\n" +
            "\n" +
            "69\n" +
            "00:03:07,739 --> 00:03:09,739\n" +
            "쌀 a\n" +
            "\n" +
            "70\n" +
            "00:03:09,739 --> 00:03:11,940\n" +
            "cool\n" +
            "\n" +
            "71\n" +
            "00:03:11,940 --> 00:03:14,069\n" +
            "이오레 이날 s4\n" +
            "\n" +
            "72\n" +
            "00:03:14,069 --> 00:03:15,410\n" +
            "coo\n" +
            "\n" +
            "73\n" +
            "00:03:15,410 --> 00:03:17,060\n" +
            "인 얇지\n" +
            "\n" +
            "74\n" +
            "00:03:17,060 --> 00:03:19,090\n" +
            "[음악]\n" +
            "\n" +
            "75\n" +
            "00:03:19,090 --> 00:03:22,560\n" +
            "으아아 합니다\n"
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