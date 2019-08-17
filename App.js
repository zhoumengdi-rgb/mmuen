import React,{Component} from "react"

import Home from "./views/home"
import "./css/style.scss"
import "antd/dist/antd.css";
import Router from "./router/index"
export default class App extends Component{
    render(){
        return(
            <div>
                 <Router />
            </div>
           
        )
    }
}