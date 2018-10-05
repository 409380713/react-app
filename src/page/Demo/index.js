import React, { Component } from 'react';
import { connect } from 'react-redux'
import Immutable from 'immutable'
import {onRequestStart} from './actions'
import Dialog from './Dialog'
class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show:false
    }
  }
  handleOpenDialog = () => {
    this.setState({
      show:true
    })
  }
  
  render() {
    const {show} = this.state
    return (
      <div style={{width:'100%',height:'100%'}}>
         {
            show && <Dialog handleCloseDialog={e=> this.setState({show:false})}></Dialog>
         }
          <button onClick={this.handleOpenDialog} style={{width:'50px',height:'50px'}}>open dialog</button>
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
