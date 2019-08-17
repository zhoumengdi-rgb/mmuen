import React, { Component } from "react";
import {withRouter} from "react-router-dom"

import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;


class Left extends Component {
    render() {
        return (
            <div className="left">
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    className="left"
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>用户管理</span>
                            </span>
                        }
                    >
                        <span onClick={this.handleClick.bind(this)} className="suo">所有用户</span>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>小组管理</span>
                            </span>
                        }
                    >
                        <span className="xiao" onClick={this.handleXiao.bind(this)}>小组列表</span>
                    </SubMenu>
                    <SubMenu
                        key="sub3"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>投票管理</span>
                            </span>
                        }
                    >
                        <span className="xiao" onClick={this.handleFa.bind(this)}>发起投票</span>
                        <span className="cheng" onClick={this.handleTou.bind(this)}>投票列表</span>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
    handleClick(){
        this.props.history.push('/suoy')
    }
    handleXiao(){
        this.props.history.push('/xiao')
    }
    handleFa(){
        this.props.history.push('/fa')
    }
    handleTou(){
        this.props.history.push('/tou')
    }
}
export default withRouter(Left)

