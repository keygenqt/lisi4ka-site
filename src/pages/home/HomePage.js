import * as React from 'react';
import {Stack} from "@mui/material";
import {Item1} from "./elements/Item1";
import {Item2} from "./elements/Item2";
import {Item3} from "./elements/Item3";
import {Item4} from "./elements/Item4";

export function HomePage() {
    return (
        <Stack>
            <Item1/>
            <Item2/>
            <Item3/>
            <Item4/>
        </Stack>
    );
}

HomePage.propTypes = {};