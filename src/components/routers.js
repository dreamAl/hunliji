import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import  "../style/routers.css"
import { Icon } from 'antd';
export default class routers extends Component {
    render() {
        return (
            <div className="foot">
                <NavLink to="/first" activeClassName="footCli">
                    <Icon type="home" /><br/>
                    首页
                </NavLink>
                <NavLink to="/says" activeClassName="footCli"> 
                    <Icon type="message" /><br/>
                    新娘说
                </NavLink>
                <NavLink to="/gift" activeClassName="footCli">
                    <Icon type="shopping" /><br/>
                    婚品11.11
                </NavLink>
                <NavLink to="/collect" activeClassName="footCli">
                    <Icon type="book" /><br/>
                    收藏
                </NavLink>
                <NavLink to="/we" activeClassName="footCli">
                    <Icon type="usergroup-delete" /><br/>
                    我们
                </NavLink>
            </div>
        )
    }
}



