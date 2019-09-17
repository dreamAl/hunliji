import React, { Component } from 'react'
import '../../style/nav.css'
export default class zinav extends Component {
    render() {
        return (
            <div className="navOne">
              <img src={this.props.imgurl} alt=""/>
              <p>{this.props.titlt}</p>
            </div>       
        )
    }
}
