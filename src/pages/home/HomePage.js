import * as React from 'react';
import {Grid} from "@mui/material";

export function HomePage() {
    return (
        <Grid container spacing={3} rowSpacing={3}>
            <Grid item xl={4} lg={6} md={6} sm={6} xs={12}>
                TEST 2
            </Grid>
        </Grid>
    );
}

HomePage.propTypes = {};