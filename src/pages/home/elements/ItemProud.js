import * as React from 'react';
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import {
    AccessTimeOutlined,
    Diversity1Outlined,
    LocalFloristOutlined,
    LocalLibraryOutlined,
    MonitorHeartOutlined
} from "@mui/icons-material";

export function ItemProud(props) {
    return (
        <Stack className={'ItemProudContainer'}>
            <Container maxWidth={'md'}>
                <Stack spacing={3}>
                    <Typography variant="h1" className={'title'}>
                        IM proud of
                    </Typography>

                    <Typography variant="body1" className={'subtitle'}>
                        You don't have to struggle alone, you've got our assistance and help
                    </Typography>

                    <Grid container spacing={0} rowSpacing={3}>

                        <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                            <Stack spacing={1}>
                                <Box className={'SvgIcon'}>
                                    <AccessTimeOutlined/>
                                </Box>

                                <Typography variant="h5" sx={{
                                    paddingTop: 1
                                }}>
                                    5,298
                                </Typography>

                                <Typography variant="caption">
                                    Online Learners
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                            <Stack spacing={1}>
                                <Box className={'SvgIcon'}>
                                    <Diversity1Outlined/>
                                </Box>

                                <Typography variant="h5" sx={{
                                    paddingTop: 1
                                }}>
                                    5,298
                                </Typography>

                                <Typography variant="caption">
                                    Online Learners
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                            <Stack spacing={1}>

                                <Box className={'SvgIcon'}>
                                    <LocalFloristOutlined/>
                                </Box>

                                <Typography variant="h5" sx={{
                                    paddingTop: 1
                                }}>
                                    5,298
                                </Typography>

                                <Typography variant="caption">
                                    Online Learners
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                            <Stack spacing={1}>
                                <Box className={'SvgIcon'}>
                                    <MonitorHeartOutlined/>
                                </Box>

                                <Typography variant="h5" sx={{
                                    paddingTop: 1
                                }}>
                                    150/120
                                </Typography>

                                <Typography variant="caption">
                                    Hypertension
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Stack>
    );
}

ItemProud.propTypes = {};