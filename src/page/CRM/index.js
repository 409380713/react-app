import React, { Component } from 'react';
import './index.scss'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { Button, List, InputItem, Toast } from 'antd-mobile'
import http from '@/fetch/http'
class CRM extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }
  }
  render() {
    return (
      <div className="CRM-box">
          <header className="CRM-header">CRM</header>
          {/* swiper */}
          
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
export default connect(mapStateToProps,mapDispatchToProps)(CRM)
