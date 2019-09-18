import React, { Component } from 'react'
import  '../style/bgimg.css'
export default class erji extends Component {
    render() {
        let bgimg={
            background:`url(${require("../assets/24.png")})`
        }  
        return (
            <div>
                我是二级路由
                <img src="../favicon" alt=""/>
                <img src="../ifavicon" alt=""/> 
                <span style={bgimg} className="spansas"></span>
            </div>
        )
    }
}
