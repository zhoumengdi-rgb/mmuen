import React, { Component } from "react"
import Head from "../components/head"
import Left from "../components/left"
import { get, post } from "../utils/request" //请求用户列表get  删除post
import { Divider, Table, Input, Button , Modal} from "antd"
import Dialog from "./dialog"
// import axios from "axios"

export default class Suoy extends Component {
    state = {
        userId:"",
        phoneNum:"",
        realName:"",
        userIcon:"",
        userName:"",
        SuoyouList: [],
        keyword: "",
        visible:false, //控制显示隐藏
        columns: [
            {
                title: "头像",
                dataIndex: "userIcon",
                render: (url) => {
                    return (
                        <img src={url} />
                    )
                }
            },
            {
                title: "用户名",
                dataIndex: "userName"
            },
            {
                title: "操作",
                dataIndex:"action",
                key: "action",
                render: (text,record) => (
                    <div>
                        <span onClick={()=>{
                            this.setState({
                                visible:true,
                                userId:record.key,
                                phoneNum:record.phoneNum,
                                realName:record.realName,
                                userIcon:record.userIcon
                            })
                        }}>
                            编辑
                        </span>
                            <Divider type="vertical" />
                        <span onClick={
                            this.handleDelete.bind(this,record)
                        }>
                            删除
                    </span>
                    </div>
                )
            }
        ]
    }
    render() {
        let { keyword,phoneNum, realName,userIcon,userName} = this.state;
        return (
            <div className="box">
                <Head />
                <Left />
                <div className="right">
                    <div className="Suoytop">
                        <Input value={keyword} onChange={(e) => {
                            this.setState({
                                keyword: e.target.value
                            })
                        }} className="inpSearch"/>
                        <Button type="primary" onClick={this.handleSearch.bind(this)}>搜索</Button>
                        <Button type="primary" onClick={this.handleAddcy.bind(this)}>添加成员</Button>
                    </div>

                    <Table columns={this.state.columns} dataSource={this.state.SuoyouList}>

                    </Table>
                </div>

                
                {/* 弹框组件 */}
                <Modal
                    title="修改"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    >
                    <Input value={phoneNum} onChange={(e)=>{
                        this.setState({
                            phoneNum:e.target.value
                        })
                    }}></Input>
                    <Input value={realName} onChange={(e)=>{
                        this.setState({
                            realName:e.target.value
                        })
                    }}></Input>
                    <Input value={userIcon} onChange={(e)=>{
                        this.setState({
                            userIcon:e.target.value
                        })
                    }}></Input>
                </Modal>

            </div>
        )
    }
    //搜索
    handleSearch() {
        let keyword = this.state.keyword;
        get('/user/search?input=' + keyword).then(res => {
            this.getTableDate(res);
        })
    }
    //添加成员
    handleAddcy(){
        let {visible} = this.state;
        this.setState({
            visible:true
        })
    }
     //所有数据
    requestFirst(){
        get('/user').then(res => {
            this.getTableDate(res);
        })
    }

    //初次进入页面渲染
    componentDidMount() {
        this.requestFirst();
    }
    //删除,id
    handleDelete(record) {
        let id = record.key;
        post('/user/delete', {
            userId:id
        }).then(res => {
            get('/user').then(res => {
                this.getTableDate(res);
            })
        })
    }
    //OK之后修改
    handleOk(){
        let {userId,phoneNum, realName,userIcon,userName} = this.state;
        this.setState({
            visible:false
        })
        post('/user/update',{
            userId,
            phoneNum,
            realName,
            userIcon,
            userName
        }).then(res =>{
            console.log(res);

            this.requestFirst();
        })
    }
   
    //弹框隐藏
    handleCancel(){
        this.setState({
            visible:false
        })
    }

    //封装数据
    getTableDate(res) {
        let userListNew = [];
        res.result.forEach(item => {
            userListNew.push({
                key: item.userId,
                userName: item.userName,
                userType: item.userType,
                userIcon: item.userIcon,
                phoneNum: item.phoneNum,
                realName: item.realName
            })
        })
        this.setState({
            SuoyouList: userListNew
        })
    }
}