import * as React from 'react';
import PropTypes from "prop-types";

export function BaseLayout(props) {
    return (
        <React.Fragment>
            <div className={"AppTable"}>
                <div className={"AppTableRow"}>
                    <header>
                        HEADER
                    </header>
                </div>
                <div className={"AppTableRow"}>
                    <main style={{
                        verticalAlign: props.isCenter ? 'middle' : 'top'
                    }}>
                        {props.children}
                    </main>
                </div>
                <div className={"AppTableRow"}>
                    <footer>
                        FOOTER
                    </footer>
                </div>
            </div>
        </React.Fragment>
    )
}

BaseLayout.propTypes = {
    isCenter: PropTypes.bool,
    children: PropTypes.element.isRequired
};