import React,{Component} from "react"
import Head from "../components/head"
import Left from "../components/left"

export default class Tou extends Component{
    render(){
        return(
            <div className="box">
                <Head />
                <Left />
                <div className="right">
                    投票列表页
                </div>
            </div>
        )
    }
}