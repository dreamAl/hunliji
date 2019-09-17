import React, { Component } from 'react'
import "../../style/goodtime.css"
export default class zitime extends Component {
    render() {
        return (
            <div className="threes">
                <img src={this.props.imgurl} alt=""/>
                <p>{this.props.tit}</p>
                <b>{this.props.pri}</b>
            </div>
        )
    }
}
