import React, { Component } from 'react'
import  '../../style/chose.css'
import { Tag } from 'antd';
import { Icon } from 'antd';
import Img1 from '../../img/22.png'
import Img2 from '../../img/23.png'
import Img3 from '../../img/24.png'
import Img4 from '../../img/25.png'
export default class chose extends Component {
    state={
        arr:[
            {imgurl:Img1,tag:"自营",tit:"免邮费试纱【揽月】抹胸...",pri:"￥399",delpri:"￥1699",num:"428"},
            {imgurl:Img3,tag:"自营",tit:"免邮费试纱【揽月】抹胸...",pri:"￥399",delpri:"￥1699",num:"428"},
            {imgurl:Img2},
            {imgurl:Img4,tag:"自营",tit:"免邮费试纱【揽月】抹胸...",pri:"￥399",delpri:"￥1699",num:"428"},
        ]
    }
    render() {
        let newarr=this.state.arr.map((v,i)=>{
            return  <div className="jx" key={i}>
                        <img src={v.imgurl} alt=""/> 
                        <h3><Tag color="red">{v.tag}</Tag>{v.tit}</h3>                                                                       
                        <b>{v.pri}&nbsp;&nbsp;&nbsp;</b>
                        <span>{v.delpri}</span>
                        <i><Icon type="star" />{v.num}</i>                                      
                    </div> 
        })
        return (
            <div className="box">
                {newarr}
                {/* <div className="jx">
                    <img src={Img1} alt=""/> 
                    <h3><Tag color="red">自营</Tag>免邮费试纱</h3>                                                                       
                    <b>￥399&nbsp;&nbsp;&nbsp;</b>
                    <span>￥1699</span>
                    <i><Icon type="star" />428</i>                                      
                </div>       */}
            </div>                
        )         
    }
}
