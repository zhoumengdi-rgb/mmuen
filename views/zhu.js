import React,{Component} from "react"
import axios from "axios"
export default class Zhu extends Component{
    state = {
        name:"",
        pwd:"",
        zhen:""
    }
    render(){
        let {name,pwd,zhen} = this.state;
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
                <p>真实姓名: <input type="text" value={zhen} onChange={(e)=>{
                    this.setState({
                        zhen:e.target.value
                    })
                }}/></p>
                <button onClick={this.handleZc.bind(this)}>注册</button>
            </div>
        )
    }
    handleZc(){
        axios.post('/register',{userName:this.state.name,password:this.state.pwd,realName:this.state.zhen}).then(res =>{
            if(res.data.code === 1){
                this.props.history.push('/login')
            }
        })
    }
}