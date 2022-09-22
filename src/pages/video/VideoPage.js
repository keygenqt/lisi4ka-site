import * as React from 'react';
import {useEffect, useState} from 'react';
import {Box, CircularProgress, Container, IconButton, Stack, Typography, Zoom} from "@mui/material";
import YouTube from "react-youtube";
import {PlayCircleFilledWhite} from "@mui/icons-material";

let videoElement = null;

const data = {
    id: 1,
    idYouTube: 'kLvuZtpQaSs',
    title: 'Hollywood in 1950\'s vs NOW!',
    author: 'AwakenWithJP',
    content: [
        {
            start: 0,
            end: 6.280918043869018,
            text: 'We\'ve received reports in substantial evidence that you\'re involved in communist activities.'
        },
        {
            start: 6.280918043869018,
            end: 7.4219620267028805,
            text: 'For the record.'
        },
        {
            start: 7.4219620267028805,
            end: 9.629176036239623,
            text: 'Are you a communist.'
        },
        {
            start: 9.629176036239623,
            end: 10.651088047683716,
            text: 'Yes I am.'
        },
        {
            start: 10.651088047683716,
            end: 11.760320051498413,
            text: 'You\'re blacklisted.'
        },
        {
            start: 11.760320051498413,
            end: 13.019629118255615,
            text: 'Get then out of here.'
        },
        {
            start: 13.119629118255615,
            end: 14.80633897329712,
            text: 'Are you a communist?'
        },
        {
            start: 14.80633897329712,
            end: 16.371769045776367,
            text: 'No I am not.'
        },
        {
            start: 16.371769045776367,
            end: 17.560807904632567,
            text: 'You\'re blacklisted.'
        },
        {
            start: 17.560807904632567,
            end: 20.453153080108642,
            text: 'You\'ll never work in this industry again.'
        },
        {
            start: 20.453153080108642,
            end: 23.369926946594237,
            text: 'Do you support the president of this country.'
        },
        {
            start: 23.369926946594237,
            end: 24.51979594468689,
            text: 'Yes i do.'
        },
        {
            start: 24.51979594468689,
            end: 26.011659011444093,
            text: 'Great.'
        },
        {
            start: 26.011659011444093,
            end: 28.49172595994568,
            text: 'Do you support the president of this country?'
        },
        {
            start: 28.49172595994568,
            end: 29.211827148773192,
            text: 'Which one?'
        },
        {
            start: 29.211827148773192,
            end: 30.07043115640259,
            text: 'Biden.'
        },
        {
            start: 30.07043115640259,
            end: 30.851411977111818,
            text: 'Yes I do.'
        },
        {
            start: 30.851411977111818,
            end: 32.24181711825562,
            text: 'And Trump?'
        },
        {
            start: 32.24181711825562,
            end: 33.244049792098996,
            text: 'Absolutely not.'
        },
        {
            start: 33.244049792098996,
            end: 34.407284893188475,
            text: 'Excellent.'
        },
    ]
}

export function VideoPage() {

    const [isPaused, setIsPaused] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [indexAction, setIndexAction] = useState(-1);

    const togglePause = () => {
        setIsPaused(!isPaused);
    };

    const seekTo = (seconds) => {
        videoElement.target.seekTo(seconds);
        videoElement.target.playVideo();

        let shouldSkip = false;
        data.content.forEach((item, index) => {
            if (!shouldSkip && item.start <= seconds && item.end > seconds) {
                setIndexAction(index)
                shouldSkip = true
            }
        })
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
        if (videoElement) {
            if (isPaused) {
                videoElement.target.pauseVideo();
            } else {
                videoElement.target.playVideo();
            }
        }
    }, [isPaused]);

    //get current time and video status in real time
    useEffect(() => {

        const interval = setInterval(async () => {
            if (videoElement
                && videoElement.target.getCurrentTime() > 0
                && videoElement.target.playerInfo.playerState === 1
            ) {
                const seconds = videoElement.target.getCurrentTime();

                let shouldSkip = false;
                setIndexAction(-1)
                data.content.forEach((item, index) => {
                    if (!shouldSkip && item.start <= seconds && item.end > seconds) {
                        setIndexAction(index)
                        shouldSkip = true
                    }
                })
            }
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const _onReady = (event) => {
        videoElement = event;
        setTimeout(function () {
            setIsLoading(false)
        }, 500);
    };

    const _onStateChange = (event) => {
        videoElement = event;
        setIsPaused(videoElement.target.playerInfo.playerState === 2);
        if (videoElement.target.playerInfo.playerState === 2) {
            setIndexAction(-1)
        }
    };

    const content = []

    data.content.forEach((item, index) => {
        content.push(<Typography
            key={`item-${index}`}
            className={(index === indexAction ? 'Active' : '')}
            onClick={() => {
            seekTo(item.start)
        }}
        >
            {item.text}
        </Typography>)
    })

    return (
        <Container className={'VideoContent'} maxWidth={"md"}>
            <Stack spacing={4}>


                <Box className={'BoxYouTubeFrame'}>
                    <YouTube
                        className={'IFrame'}
                        videoId={"kLvuZtpQaSs"}
                        opts={opts}
                        onReady={_onReady}
                        onStateChange={_onStateChange}
                    />

                    <Box className={'ContainerButton AppTable'} sx={{
                        display: (isPaused ? 'auto' : 'none')
                    }}>
                        <Box className={'AppTableRow'}>
                            <Box className={'AppTableCell'} sx={{
                                backgroundImage: `url(https://img.youtube.com/vi/kLvuZtpQaSs/maxresdefault.jpg)`
                            }}>
                                <Stack className={'ContainerButtonItems'} alignItems={"center"}>
                                    {isLoading ? (
                                        <Zoom timeout={1000} in={true}>
                                            <CircularProgress color={'warning'}/>
                                        </Zoom>
                                    ) : (
                                        <IconButton onClick={togglePause} aria-label="play video">
                                            <PlayCircleFilledWhite/>
                                        </IconButton>
                                    )}
                                </Stack>
                            </Box>
                        </Box>
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