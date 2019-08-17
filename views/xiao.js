import React,{Component} from "react"
import Head from "../components/head"
import Left from "../components/left"

import { get, post } from "../utils/request" //请求用户列表get  删除post
import {Button,Modal,Card,Input} from "antd"
import Dialog from "./dialog"

export default class Xiao extends Component{
    state = {
        dataList:[],
        visible:false,
        groupName:"",
        groupPersonNum:0,
        leaderUserName:"",
        groupIcon:""
    }
    render(){
        let {dataList,groupName,groupPersonNum,leaderUserName,groupIcon} = this.state;
        return(
            <div className="box">
                <Head />
                <Left />
                <div className="right">
                    <div className="top">
                        <span>全部小组</span>
                        <Button type="primary" onClick={()=>{
                            this.setState({
                                visible:true
                            })
                        }}>添加小组</Button>
                    </div>
                        {
                            dataList && dataList.map((item,index) => {
                                return <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                          <p key={index}><img src={item.groupIcon}/>{item.groupName}</p>
                                       </Card>
                            })
                        }
                </div>




                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    >
                    <p>小组ICON:</p>
                    <p>小组名称: <Input placeholder="祷告小组" value={groupName} onChange={(e)=>{
                        this.setState({
                            groupName:e.target.value
                        })
                    }}/></p>
                    <p>小组人数: <Input placeholder="10" value={groupPersonNum} onChange={(e)=>{
                        this.setState({
                            groupPersonNum:Number(e.target.value)
                        })
                    }}/></p> 
                    <p>组长账号: <Input placeholder="组长账号" value={leaderUserName} onChange={(e)=>{
                        this.setState({
                            leaderUserName:e.target.value
                        })
                    }}/></p> 
                     
                </Modal>
            </div>
        )
    }
    componentDidMount(){
        get('/group/list').then(res =>{
            this.setState({
                dataList:res.result
            })
        })
    }
    handleAddxz(){
            
    }
    handleOk(){
        let {groupName,groupPersonNum,leaderUserName} = this.state;
        console.log({groupName,groupPersonNum,leaderUserName})
        post('/group/add',{groupName,groupPersonNum,leaderUserName}).then(res =>{
            console.log(res)
      })
         
        
    }
    handleCancel(){
        this.setState({
            visible:false
        })
    }
}