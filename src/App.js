import React, { Component } from 'react';
import './App.css';
import {Route,Switch,withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
// import Login from '@page/Login'
// import Container from './page/index.js'
import Demo from './page/Demo'
import asyncComponent from './utils/bundle'
const Login  =  asyncComponent(() => import("@page/Login"))
const Container  =  asyncComponent(() => import("./page/index.js"))
class App extends Component {
  constructor(){
    super()
    this.state = {
       
    }
  }
  componentDidMount(){
    console.log('props',this.props)
  }
  render() {
    return (
      <div className="App">
        <Switch>
            {/* <Route path="/" exact component={Demo}></Route> */}
            <Route path="/" exact component={Login}></Route>
            <Route path="/container" component={Container}></Route>
        </Switch>
      </div>
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
