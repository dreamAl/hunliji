import React, { Component } from 'react'
import '../../style/nav.css'
import Zinav from './zinav'
import Img1 from '../../img/1.png'
import Img2 from '../../img/2.png'
import Img3 from '../../img/3.png'
import Img4 from '../../img/4.png'
import Img5 from '../../img/5.png'
import Img6 from '../../img/6.png'
import Img7 from '../../img/7.png'
import Img8 from '../../img/8.png'
import Img9 from '../../img/9.png'
import Img10 from '../../img/10.png'  
export default class nav extends Component {
    state={
        obj:[
            {titlt:"婚纱礼服",imgurl:Img1},
            {titlt:"婚房布置",imgurl:Img2},
            {titlt:"婚鞋箱包",imgurl:Img3},
            {titlt:"喜糖回礼",imgurl:Img4},
            {titlt:"婚礼百货",imgurl:Img5},
            {titlt:"婚庆床品",imgurl:Img6},
            {titlt:"睡衣胸贴",imgurl:Img7},
            {titlt:"良辰吉市",imgurl:Img8},
            {titlt:"美妆护肤",imgurl:Img9},
            {titlt:"全部分类",imgurl:Img10},
        ]
    }
    render() { 
        let newobj=this.state.obj.map((v,i)=>{
            return <Zinav key={i} titlt={v.titlt} imgurl={v.imgurl}/>
        })     
        return (
            <div className="navs">
                {newobj}
                {/* <Zinav/> */}
            </div>
        )
    }
}
