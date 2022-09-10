import * as React from 'react';
import {Stack} from "@mui/material";
import {MainElement} from "./elements/MainElement";
import {AboutMeElement} from "./elements/AboutMeElement";
import {BlocksElement} from "./elements/BlocksElement";
import {ProudsElement} from "./elements/ProudsElement";
import {ReviewsElement} from "./elements/ReviewsElement";
import {ItemStart} from "./elements/ItemStart";

export function HomePage() {
    return (
        <Stack>
            {/*main*/}
            <MainElement/>
            {/*/!*about me*!/*/}
            <AboutMeElement/>
            {/*/!*blocks*!/*/}
            <BlocksElement/>
            {/*/!*proud*!/*/}
            <ProudsElement/>
            {/*/!*reviews*!/*/}
            <ReviewsElement/>
            {/*/!*start*!/*/}
            <ItemStart/>
        </Stack>
    );
}

HomePage.propTypes = {};