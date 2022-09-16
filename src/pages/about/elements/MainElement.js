import * as React from 'react';
import {useContext} from 'react';
import {Avatar, Button, ButtonGroup, Container, Grid, Stack, Typography} from "@mui/material";
import {Email, LinkedIn, Telegram} from "@mui/icons-material";
import {ConstantImages, LanguageContext} from "../../../base";

export function MainElement(props) {

    const {t} = useContext(LanguageContext)

    return (
        <Stack className={'AboutMainElementContainer'}>
            <Container maxWidth={'lg'}>
                <Grid container>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <Stack spacing={2}>

                            <Avatar
                                alt={t('pages.about.t_about_title_name')}
                                src={ConstantImages.about.aboutPhoto}
                                sx={{width: 240, height: 240, marginBottom: 2, borderRadius: 2}}
                            />

                            <Typography variant="h3" color={'warning.main'}>
                                {t('pages.about.t_about_title')}
                            </Typography>

                            <Typography variant="subtitle2" sx={{
                                whiteSpace: 'break-spaces'
                            }}>
                                {t('pages.about.t_about_title_role')}
                            </Typography>

                            <Typography variant="h4">
                                {t('pages.about.t_about_title_name')}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                        <Stack spacing={3}>
                            <Typography variant="body1" sx={{
                                whiteSpace: 'break-spaces'
                            }}>
                                {t('pages.about.t_about_text')}
                            </Typography>

                            <Typography variant="h4">
                                {t('pages.about.t_about_follow_text')}
                            </Typography>

                            <ButtonGroup color={'primary'} size="small" aria-label="small button group">
                                <Button onClick={() => {

                                }}>
                                    <LinkedIn/>
                                </Button>
                                <Button onClick={() => {

                                }}>
                                    <Telegram/>
                                </Button>
                                <Button onClick={() => {

                                }}>
                                    <Email/>
                                </Button>
                            </ButtonGroup>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    );
}

MainElement.propTypes = {};