import React, { Component } from 'react'
import "../../style/four.css"
import Zfour from './zfour'
import Img1 from '../../img/12.png'
import Img2 from '../../img/13.png'
import Img3 from '../../img/14.png'
import Img4 from '../../img/15.png'
export default class four extends Component {
    state={
        arr:[
            {imgurl:Img1},
            {imgurl:Img2},
            {imgurl:Img3},
            {imgurl:Img4}
        ]
    }
    render() {
        var newarr=this.state.arr.map((v,i)=>{
            return <Zfour key={i} imgurl={v.imgurl}/>
        })
        return (
            <div className="fu">
               {newarr}
            </div>
        )
    }
}
