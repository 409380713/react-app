import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,Redirect,withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import {updateData} from '@/actions'
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
         app
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
