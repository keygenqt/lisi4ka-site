import * as React from 'react';
import {useContext} from 'react';
import {Avatar, Box, Button, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import {ConstantImages, LanguageContext, NavigateContext} from "../../../base";
import {LinkOutlined} from "@mui/icons-material";

export function ExperienceElement(props) {

    const {t} = useContext(LanguageContext)
    const {route} = useContext(NavigateContext)

    return (
        <Stack className={'AboutExperienceElementContainer'} sx={{
            '&:after': {
                backgroundColor: 'primary.dark',
                opacity: '0.9'
            }
        }}>
            <Container maxWidth={'md'}>

                <Stack spacing={3} className={'TitleBlock'}>
                    <Typography variant="h2" align={'center'}>
                        {t('pages.about.t_experience_title')}
                    </Typography>

                    <Typography variant="subtitle2" align={'center'} sx={{
                        whiteSpace: 'break-spaces'
                    }}>
                        {t('pages.about.t_experience_subtitle')}
                    </Typography>
                </Stack>

                <Stack spacing={3} className={'ContentBlock'}>

                    <Grid container spacing={0} rowSpacing={3}>
                        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>

                            <Stack
                                direction={'row'}
                                spacing={2}
                            >
                                <Avatar
                                    alt={'Graduation icon, Education College School Logo'}
                                    src={ConstantImages.about.school}
                                    sx={{width: 40, height: 40}}
                                />

                                <Typography className={'ContentName'}>
                                    {t('pages.about.t_experience_school_1_title')}
                                </Typography>

                            </Stack>

                            <Stack className={'LineTime'} spacing={1}>
                                <Typography variant="h4">
                                    {t('pages.about.t_experience_school_1_role')}
                                </Typography>

                                <Typography variant="subtitle1" color={'#cfcfcf'}>
                                    {t('pages.about.t_experience_school_1_date')}
                                </Typography>
                            </Stack>

                        </Grid>
                        <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                            <Stack spacing={3}>
                                <Typography variant="body1">
                                    {t('pages.about.t_experience_school_1_text')}
                                </Typography>

                                <iframe
                                    className={'Map-Frame'}
                                    title="Lyceum-666"
                                    src="https://yandex.com/map-widget/v1/?um=constructor%3Acc745608557c75d8a689723c0a64c06e3315eccea3eceb476c5d74896dcff4bd&amp;source=constructor"
                                />

                                <Box>
                                    <Button
                                        size={'small'}
                                        color={'info'}
                                        startIcon={<LinkOutlined/>}
                                        sx={{textTransform: 'none'}}
                                        onClick={() => {
                                            route.openUrlNewTab(t('pages.about.t_experience_school_1_link'))
                                        }}
                                    >
                                        {t('pages.about.t_experience_school_1_link')}
                                    </Button>
                                </Box>

                                <Divider/>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} rowSpacing={3}>
                        <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>

                            <Stack
                                direction={'row'}
                                spacing={2}
                            >
                                <Avatar
                                    alt={'Graduation icon, Education College School Logo'}
                                    src={ConstantImages.about.university}
                                    sx={{width: 40, height: 40}}
                                />

                                <Typography className={'ContentName'}>
                                    {t('pages.about.t_experience_school_2_title')}
                                </Typography>

                            </Stack>

                            <Stack className={'LineTime'} spacing={1}>
                                <Typography variant="h4">
                                    {t('pages.about.t_experience_school_2_role')}
                                </Typography>

                                <Typography variant="subtitle1" color={'#cfcfcf'}>
                                    {t('pages.about.t_experience_school_2_date')}
                                </Typography>
                            </Stack>

                        </Grid>
                        <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                            <Stack spacing={3}>
                                <Typography variant="body1">
                                    {t('pages.about.t_experience_school_2_text')}
                                </Typography>

                                <Box>
                                    <Button
                                        size={'small'}
                                        color={'info'}
                                        startIcon={<LinkOutlined/>}
                                        sx={{textTransform: 'none'}}
                                        onClick={() => {
                                            route.openUrlNewTab(t('pages.about.t_experience_school_2_link'))
                                        }}
                                    >
                                        {t('pages.about.t_experience_school_2_link')}
                                    </Button>
                                </Box>

                            </Stack>
                        </Grid>
                    </Grid>

                </Stack>

            </Container>


        </Stack>
    );
}

ExperienceElement.propTypes = {};