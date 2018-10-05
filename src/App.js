import React, { Component } from 'react';
import './App.css';
import {Route,Switch,withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import Login from '@page/Login/loadableCompoent'
import Container from './page/loadableCompoent'
import Demo from './page/Demo/loadableCompoent'
// const Login  =  asyncComponent(() => import("@page/Login"))
// const Container  =  asyncComponent(() => import("./page/index.js"))
class App extends Component {
  constructor(){
    super()
    this.state = {
       
    }
  }
  componentDidMount(){
  }
  render() {
    return (
        <Switch>
            {/* <Route path="/" exact component={Demo}></Route> */}
            <Route path="/" exact component={Login}></Route>
            <Route path="/container" component={Container}></Route>
            <Route path="" component={e => <div>404</div>}></Route>
        </Switch>
    );
  }
}
const mapStateToProps = state =>{
  return {
    test:state.firstReducer.get('test')
  }
}
const mapDispatchToProps = dispatch => {
  return {
    
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
