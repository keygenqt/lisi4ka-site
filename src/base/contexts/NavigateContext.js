import React, {createContext, useState} from "react";
import {useLocation, useNavigate, useNavigationType} from "react-router-dom";
import RouteCore from "../route/RouteCore";
import {RouteConf} from "../route/RouteConf";

export const NavigateContext = createContext({})

export default function NavigateContextProvider(props) {

    const location = useLocation()
    const navigate = useNavigate()
    const type = useNavigationType()

    const [route] = useState(new RouteCore(RouteConf, location, navigate, type));

    route.update(location, navigate, type)

    return (
        <NavigateContext.Provider
            value={{route}}>
            {props.children}
        </NavigateContext.Provider>
    )
}