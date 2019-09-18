import React, { Component } from 'react'
import { Input } from 'antd';
import { Icon } from 'antd';
import  "../style/top.css"
const { Search } = Input;
export default class top extends Component {
     state = {
    top: 10,
  };
    render() {
        return (
            <div className="tops">
               <Search
                    placeholder="搜索想要的商品"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                    />
                <Icon type="shopping-cart" />
                <Icon type="mail" />
            </div>
        )
    }
}
