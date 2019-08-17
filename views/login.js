import React,{Component} from "react"
import axios from "axios"

export default class Zhu extends Component{
    state = {
        name:"",
        pwd:""
    }
    render(){
        let {name,pwd} = this.state;
        return(
            <div>
                <p>用户名: <input type="text" value={name} onChange={(e)=>{
                    this.setState({
                        name:e.target.value
                    })
                }}/></p>
                <p>密码: <input type="text" value={pwd} onChange={(e)=>{
                    this.setState({
                        pwd:e.target.value
                    })
                }}/></p>
                <button onClick={this.hanleLogin.bind(this)}>登陆</button>
            </div>
        )
    }
    hanleLogin(){
        axios.post('/login',{
            userName:this.state.name,
            password:this.state.pwd
        }).then(res =>{
            if(res.data.code === 1){
                let token = res.data.token; //取出token
                window.localStorage.setItem("token",token) //存本地
                this.props.history.push('/suoy');
            }else{
                alert('登陆失败')
            }
        })
    }
}