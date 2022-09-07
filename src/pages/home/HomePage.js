import * as React from 'react';
import {Stack} from "@mui/material";
import {ItemMain} from "./elements/ItemMain";
import {ItemAboutMe} from "./elements/ItemAboutMe";
import {ItemBlocks} from "./elements/ItemBlocks";
import {ItemProud} from "./elements/ItemProud";
import {ItemReview} from "./elements/ItemReview";
import {ItemStart} from "./elements/ItemStart";

export function HomePage() {
    return (
        <Stack>
            {/*main*/}
            <ItemMain/>
            {/*about me*/}
            <ItemAboutMe/>
            {/*blocks*/}
            <ItemBlocks/>
            {/*proud*/}
            <ItemProud/>
            {/*reviews*/}
            <ItemReview/>
            {/*start*/}
            <ItemStart/>
        </Stack>
    );
}

HomePage.propTypes = {};