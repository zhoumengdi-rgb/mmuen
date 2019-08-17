import React,{Component} from "react"

import { get, post } from "../utils/request" //请求用户列表get  删除post

export default class Dialog extends Component{
    
    render(){
        return(
            <div className="dialogBox">
                <p>用户名:<input type="text"/></p>
                <p>姓名:<input type="text"/></p>
                <p>密码:<input type="text"/></p>
                <p>权限:<select><option>菜单</option><option>选项</option></select></p>
                <p>电话:<input type="text"/></p>
                <p>地址:<input type="text"/></p>
                <p><button onClick={this.handleQx.bind(this)}>取消</button><button className="queding" onClick={this.handleQued.bind(this)}>确定</button></p>
            </div>
        )
    }
    handleQx(){
        this.props.btn(false);
    }
    handleQued(key){
        // post('/user/update', {
        //     userId: key
        // }).then(res => {
        //     console.log(res)
        // })
    }
}