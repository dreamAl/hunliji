import React, { Component } from 'react'
import "../../style/er.css"
import {BrowserRouter,NavLink,Route} from 'react-router-dom'

export default class eroute extends Component {   
    render() {
        return (
            <div className="smallnav">
                {/* <a href="#">精选</a>
                <span></span>
                <a href="#">婚纱礼服</a>
                <a href="#">婚房布置</a>
                <a href="#">婚鞋箱包</a>
                <a href="#">喜糖回礼</a>
                <a href="#">婚礼百货</a>
                <a href="#">婚庆床品</a>
                <a href="#">良辰吉市</a>
                <a href="#">美妆护肤</a>  */}
                <NavLink to="/gift/erji">精选</NavLink>  
                <NavLink to="/gift/erji">婚纱礼服</NavLink>  
                <NavLink to="/gift/erji">婚房布置</NavLink>  
                <NavLink to="/gift/erji">婚鞋箱包</NavLink>  
                <NavLink to="/gift/erji">喜糖回礼</NavLink>  
                <NavLink to="/gift/erji">婚礼百货</NavLink>  
                <NavLink to="/gift/erji">婚庆床品</NavLink>  
                <NavLink to="/gift/erji">良辰吉市</NavLink>  
                <NavLink to="/gift/erji">美妆护肤</NavLink>  
                <div>
                    <NavLink to="/gift/erji"></NavLink>                    
                </div>
                         
            </div>
        )
    }
}


