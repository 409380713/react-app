import React, { Component } from 'react';
import { connect } from 'react-redux'
import Immutable from 'immutable'
import {onRequestStart} from './actions'
class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username:'',
      password:''
    }
  }
  render() {
    const {username,password} = this.state
    return (
      <div>
        <input onChange={ e => this.setState({
          username:e.target.value,
          password:password
        })} type="text"/>
         <input onChange={ e => this.setState({
          username:username,
          password:e.target.value
        })} type="password"/>
        <button onClick = { e =>this.props.onRequestStart({username,password})} style={{width:'90px',height:'90px'}}>登陆</button>
        <div>
          {this.props.value}
        </div>
    </div>
    )
  }
}
const mapStateToProps = state =>{
  return {
    value:state.demoCounter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onRequestStart:(data) => dispatch(onRequestStart(data))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Demo)
