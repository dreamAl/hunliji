import React, { Component } from 'react'
import Top from '../components/top'
import Funav from '../components/nav/funav'
import Banner from '../components/banner'
import Pfour from '../components/four/pfour'
import Futime from '../components/goodtime/futime'
import Eroute from '../components/fine/eroute'
export default class gift extends Component {
    render() {
        let obj={marginBottom:0.8+'rem'}
        return (
            <div style={obj}>
                <Top/>
                <Funav/>
                <Banner/>
                <Pfour/>
                <Futime/>
                <Eroute/>
            </div>
        )
    }
}
