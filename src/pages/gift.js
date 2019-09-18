import React, { Component } from 'react'
import Top from '../components/top'
import Funav from '../components/nav/funav'
import Banner from '../components/banner'
import Pfour from '../components/four/pfour'
import Futime from '../components/goodtime/futime'
import Eroute from '../components/fine/eroute'
import Chose from '../components/fine/chose'
import {BrowserRouter,Navlink,Route} from 'react-router-dom'
import Erji from './erji'
export default class gift extends Component {
    render() {
        let obj={marginBottom:0.8+'rem'}
        let dis={marginTop:0.7+'rem'}
        return (
            <div style={obj}>
                <Top/>
                <div style={dis}>
                    <Funav/>
                    <Banner/>
                    <Pfour/>
                    <Futime/>
                    <Eroute/>
                    <Chose/>                    
                </div>
                <Route path="/gift/erji" component={Erji}/>                 
            </div>
        )
    }
}
