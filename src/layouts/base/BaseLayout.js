import * as React from 'react';
import {useContext} from 'react';
import PropTypes from "prop-types";
import {Stack} from "@mui/material";
import {FooterElement} from "./elements/FooterElement";
import {TopBarMenuElement} from "./elements/TopBarMenuElement";
import {LanguageContext} from "../../base";

export function BaseLayout(props) {

    const {isLocEn} = useContext(LanguageContext)

    return (
        <div className={`AppTable ${props.pageClassName} ${isLocEn ? 'EN-en' : 'RU-ru'}`}>
            <div className={"AppTableRow"}>
                <header className={"AppTableCell"}>
                    <TopBarMenuElement/>
                </header>
            </div>
            <div className={"AppTableRow"}>
                <main className={"AppTableCell"} style={{
                    padding: props.disablePadding ? 0 : '60px 0',
                    background: props.background ? props.background : 'inherit',
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
    background: PropTypes.string,
    disablePadding: PropTypes.bool,
    isCenter: PropTypes.bool,
    children: PropTypes.element.isRequired,
};