import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,Redirect,withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import {updateData} from '@/actions'
import Login from '@page/Login'
import Container from './page/index.js'
import Demo from './page/Demo'
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
            <Route path="/" exact component={Demo}></Route>
            {/* <Route path="/" exact component={Login}></Route>
            <Route path="/container" component={Container}></Route> */}
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
