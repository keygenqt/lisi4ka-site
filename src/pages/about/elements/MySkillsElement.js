import * as React from 'react';
import {useContext} from 'react';
import {Box, Container, Grid, Paper, Stack, Typography} from "@mui/material";
import {ApartmentOutlined, EmojiEventsOutlined, MilitaryTechOutlined, PregnantWomanOutlined} from "@mui/icons-material";
import {LanguageContext} from "../../../base";
import Lottie from "lottie-react";
import {ConstantLottie} from "../../../base/constants/ConstantLottie";

export function MySkillsElement(props) {

    const {t} = useContext(LanguageContext)

    return (
        <Stack className={'AboutMySkillsContent'}>
            <Box className={'AboutMySkillsTitleHeader'} sx={{
                backgroundColor: 'secondary.main'
            }}>
                <Container maxWidth={"lg"}>
                    <Stack className={'Title'} spacing={3}>
                        <Typography gutterBottom variant="h2" sx={{
                            marginBottom: 4
                        }}>
                            {t('pages.about.t_skills_title')}
                        </Typography>

                        <Lottie className={'Lottie'} animationData={ConstantLottie.aboutIcon}/>

                        <Typography gutterBottom variant="subtitle2">
                            {t('pages.about.t_skills_subtitle')}
                        </Typography>
                    </Stack>

                    <Grid container spacing={3} rowSpacing={3}>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Paper className={'PaperItem'}>
                                <Stack
                                    direction={'row'}
                                    spacing={2}
                                >
                                    <ApartmentOutlined color={'info'}/>

                                    <Typography variant="subtitle2">
                                        {t('pages.about.t_skills_item1_title')}
                                    </Typography>
                                </Stack>

                                <Typography variant="body1">
                                    {t('pages.about.t_skills_item1_text')}
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Paper className={'PaperItem'}>
                                <Stack
                                    direction={'row'}
                                    spacing={2}
                                >
                                    <PregnantWomanOutlined color={'success'}/>

                                    <Typography variant="subtitle2">
                                        {t('pages.about.t_skills_item2_title')}
                                    </Typography>
                                </Stack>

                                <Typography variant="body1">
                                    {t('pages.about.t_skills_item2_text')}
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Paper className={'PaperItem'}>
                                <Stack
                                    direction={'row'}
                                    spacing={2}
                                >
                                    <EmojiEventsOutlined color={'warning'}/>

                                    <Typography variant="subtitle2">
                                        {t('pages.about.t_skills_item3_title')}
                                    </Typography>
                                </Stack>

                                <Typography variant="body1">
                                    {t('pages.about.t_skills_item3_text')}
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Paper className={'PaperItem'}>
                                <Stack
                                    direction={'row'}
                                    spacing={2}
                                >
                                    <MilitaryTechOutlined color={'error'}/>

                                    <Typography variant="subtitle2">
                                        {t('pages.about.t_skills_item4_title')}
                                    </Typography>
                                </Stack>

                                <Typography variant="body1">
                                    {t('pages.about.t_skills_item4_text')}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>

            </Box>
        </Stack>
    )
}

MySkillsElement.propTypes = {};