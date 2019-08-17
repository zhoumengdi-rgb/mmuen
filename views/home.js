import React, { Component } from "react"
import {NavLink} from "react-router-dom"
import Head from "../components/head"
import axios from "axios"
import Left from "../components/left"
import Suoy from "../views/suoy"


export default class Home extends Component {
    state = {

    }
    render() {
        return (
            <div className="box">
                <Head title="退出"/>
                <Left />
            </div>

        )
    } 
}