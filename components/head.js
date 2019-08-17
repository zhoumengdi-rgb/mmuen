import React,{Component} from "react"


export default class Head extends Component{
    state = {
        title:"标题",
        isShowRight:false
    }
    render(){
        let title = this.props.title;
        return(
            <div className="head">
                {/* 传过来的值改变内容
                1:接收父组件传过来的值
                2:改变内部状态 */}
                <span>{title || this.state.title}</span>
            </div>
        )
    }
}