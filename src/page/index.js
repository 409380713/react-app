import React, { Component } from 'react';
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { Button, List, InputItem, Toast } from 'antd-mobile'
import {BrowserRouter,Route,Switch,Redirect,withRouter} from 'react-router-dom'
import AppFooter from '@compoents/AppFooter'
import http from '@/fetch/http'
import Home from './Home'
import CRM from './CRM'
import Total from './Total'
import Mine from './Mine'
import Calendar from './Calendar'
class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }
  }
  render() {
    return (
      <div>
        <div style={{height:global.docHetght - 50+'px'}}>
            <Switch>
                <Route path="/container/home" component={Home}></Route>
                <Route path="/container/crm" component={CRM}></Route>
                <Route path="/container/calendar" component={Calendar}></Route>
                <Route path="/container/total" component={Total}></Route>
                <Route path="/container/mine" component={Mine}></Route>
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
