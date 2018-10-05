import React, { Component } from 'react';
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { Button, List, InputItem, Toast } from 'antd-mobile'
import {BrowserRouter,Route,Switch,Redirect,withRouter} from 'react-router-dom'
import AppFooter from '@compoents/AppFooter'
import http from '@/fetch/http'
import {LOGIN_OUT,TEAM_LIST} from '@/fetch/apis'
import {LoadableCompoent} from '../utils/Loadable'
import Home from './Home/loadableCompoent'
import CRM from './CRM/loadableCompoent'
import Total from './Total/loadableCompoent'
import Mine from './Mine/loadableCompoent'
import Calendar from './Calendar/loadableCompoent'
class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  componentDidMount(){
   
  }
  render() {
    const {match} = this.props
    return (
      <div>
        <div style={{height:global.docHetght - 50+'px' ,backgroundColor:'#fff',overflow:'scroll'}}>
            <Switch>
                <Route path={`${match.url}/home` } component={Home}></Route>
                <Route path={`${match.url}/crm` } component={CRM}></Route>
                <Route path={`${match.url}/calendar`} component={Calendar}></Route>
                <Route path={`${match.url}/total`} component={Total}></Route>
                <Route path={`${match.url}/mine`} component={Mine}></Route>
            </Switch>
        </div>
        <AppFooter></AppFooter>
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return {
  }
}
const mapDispatchToProps = dispatch => {
  return {
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Container)
