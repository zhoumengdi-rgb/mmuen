import React,{Component} from "react"


import Zhu from "../views/zhu"

import Home from "../views/home"
import Suoy from "../views/suoy"
import Login from "../views/login"
import Xiao from "../views/xiao"
import Cheng from "../views/cheng"
import Fa from "../views/fa"
import Tou from "../views/tou"

const router = [
    {
        path:"/zhu",
        component:Zhu,
    },
    {
        path:"/login",
        component:Login
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:"/suoy",
        component:Suoy
    },
    {
        path:"/xiao",
        component:Xiao
    },
    {
        path:"/cheng",
        component:Cheng
    },
    {
        path:"/fa",
        component:Fa
    },
    {
        path:"/tou",
        component:Tou
    },
    {
        path:"/",
        redirect:"/zhu"
    }
]
export default router;