import {Route} from "react-router-dom";
import {BaseLayout} from "../../layouts/base/BaseLayout";
import {HomePage} from "../../pages";
import * as React from "react";

export const RouteConf = {
    delay: 200,
    routes: {
        home: {
            path: '/',
            render: function (key, path) {
                return <Route
                    key={key}
                    exact
                    path={path}
                    element={
                        <BaseLayout>
                            <HomePage/>
                        </BaseLayout>
                    }
                />
            }
        },
    },
}