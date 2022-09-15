import * as React from 'react';
import {Stack} from "@mui/material";
import {MainElement} from "./elements/MainElement";
import {ExperienceElement} from "./elements/ExperienceElement";
import {MySkillsElement} from "./elements/MySkillsElement";
import {QuestionsElement} from "./elements/QuestionsElement";

export function AboutPage() {
    return (
        <Stack>
            {/*skills*/}
            <MySkillsElement/>
            {/*main*/}
            <MainElement/>
            {/*experience*/}
            <ExperienceElement/>

            {/*connect*/}
            <QuestionsElement/>
        </Stack>
    );
}

AboutPage.propTypes = {};