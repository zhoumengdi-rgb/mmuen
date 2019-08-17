import React,{Component} from "react"
import Head from "../components/head"
import Left from "../components/left"
import {Input} from "antd"

export default class Fa extends Component{
    render(){
        return(
            <div className="box">
                <Head />
                <Left />
                <div className="right">
                    <h1>投票标题: <input placeholder="你对自己的定位是什么" /></h1>
                    <p>补充描述(选填) <input placeholder="描述" /></p>
                </div>
                
            </div>
        )
    }
}