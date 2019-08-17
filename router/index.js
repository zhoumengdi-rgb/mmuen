import React from "react"

import {BrowserRouter} from "react-router-dom"
import Router from "./routerConfig"
import RouterView from "./routerView"


function RouterRou(){
    return(
        <BrowserRouter>
            <RouterView Router={Router}/>
        </BrowserRouter>
    )
}
export default RouterRou;
