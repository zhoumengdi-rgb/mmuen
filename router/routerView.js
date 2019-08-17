import React from "react"
import {Switch,Route,Redirect} from "react-router-dom"

export default function RouterView(props){
    let {Router} = props;
    let routeArr = Router.filter(item => !item.redirect);
    let redirectArr = Router.filter(item => item.redirect).map((item,index) => <Redirect key={index} from={item.path} to={item.redirect}/>)
    return (
        <Switch>
            {
               routeArr && routeArr.map((item,index) => <Route key={index} path={item.path} render={(props)=>{
                    return <item.component {...props} children={item.children}/>
               }} />).concat(redirectArr) 
            }
        </Switch>
    )
}