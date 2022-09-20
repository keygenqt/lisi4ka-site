import * as React from 'react';
import {Container, Stack, Typography} from "@mui/material";
import YouTube from "react-youtube";

export function VideoPage() {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <Container maxWidth={"lg"}>
            <Stack spacing={4}>

                <Typography variant="h3">
                    Video
                </Typography>

                <YouTube videoId="kLvuZtpQaSs" opts={opts} onReady={(event) => {
                    event.target.pauseVideo();
                }}/>

                <Typography variant="body1">
                    We've received reports in substantial evidence that you're involved in communist activities.
                    For the record.
                    Are you a communist.
                    Yes I am.
                    You're blacklisted.
                    Get then out of here.
                    Are you a communist?
                    No I am not.
                    You're blacklisted.
                    You'll never work in this industry again. Do you support the president of this country
                    Yes i do.
                    Great.
                    Do you support the president of this country?
                    Which one?
                    Biden.
                    Yes I do.
                    And Trump?
                    Absolutely not.
                    Excellent.
                </Typography>

            </Stack>
        </Container>
    );
}

VideoPage.propTypes = {};