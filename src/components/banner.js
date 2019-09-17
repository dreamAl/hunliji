import React, { Component } from 'react'
import  "../style/banner.css"
import Img from "../img/11.png"
export default class banner extends Component {
    render() {
        return (
            <div className="banners">
                <img src={Img} alt=""/>
            </div>
        )
    }
}
