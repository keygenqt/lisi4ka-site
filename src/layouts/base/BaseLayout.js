import * as React from 'react';
import PropTypes from "prop-types";
import {Stack} from "@mui/material";
import {FooterElement} from "./elements/FooterElement";
import {TopBarMenuElement} from "./elements/TopBarMenuElement";

export function BaseLayout(props) {
    return (
        <div className={"AppTable"}>
            <div className={"AppTableRow"}>
                <header className={"AppTableCell"}>
                    <TopBarMenuElement/>
                </header>
            </div>
            <div className={"AppTableRow"}>
                <main className={"AppTableCell"} style={{
                    verticalAlign: props.isCenter ? 'middle' : 'top'
                }}>
                    <Stack>
                        {props.children}
                    </Stack>
                </main>
            </div>
            <div className={"AppTableRow"}>
                <footer className={"AppTableCell"}>
                    <FooterElement/>
                </footer>
            </div>
        </div>
    )
}

BaseLayout.propTypes = {
    isCenter: PropTypes.bool,
    children: PropTypes.element.isRequired,
};