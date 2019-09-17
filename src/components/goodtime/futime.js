import React, { Component } from 'react'
import Zitime from './zitime'
import "../../style/goodtime.css"
import Img1 from '../../img/16.png'
import Img2 from '../../img/17.png'
import Img3 from '../../img/18.png'
import Img4 from '../../img/19.png'
import Img5 from '../../img/20.png'
import Img6 from '../../img/21.png'
export default class futime extends Component {
    state={
        arr:[
            {imgurl:Img1,tit:"中式婚礼创意套装。。。。。。",pri:"￥9.9"},
            {imgurl:Img2,tit:"结婚中式陶瓷。。。。。。",pri:"￥22"},
            {imgurl:Img3,tit:"中式烫金流苏喜糖盒",pri:"￥0.48"},
            {imgurl:Img4,tit:"【50个装】婚礼纪独家定制",pri:"￥16"},
            {imgurl:Img5,tit:"新娘嫁妆套装",pri:"￥39.9"},
            {imgurl:Img6,tit:"婚礼手持礼炮",pri:"￥6.8"}
        ]
    }
    render() {
        let newarr=this.state.arr.map((v,i)=>{
            return <Zitime key={i} imgurl={v.imgurl} tit={v.tit} pri={v.pri}/> 
        })
        return (
            <div className="times">
                <div className="timeTw">
                    <h3>良辰吉市</h3>&nbsp;&nbsp;
                    <span>|&nbsp;&nbsp;婚礼纪自营品牌</span>
                </div>
               {/* <Zitime/>  */}
               {newarr}
            </div>
        )
    }
}
