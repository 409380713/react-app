import React, { Component } from 'react';
import './index.scss'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import AppHomeHeader from '@compoents/AppHomeHeader'
import MessageSwiper from './chilren/MessageSwiper'
import Entrance from './chilren/Entrance'
import { WhiteSpace } from 'antd-mobile';
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }
  }
  renderSwiperDom = (key)=>{
    return (
        <div key={key} className="message-swiper-item">
          <div className="tip-bell">
            <img src={require('@/assets/images/home/tip_bell.png')} alt="" />
          </div>
          <div className="message-text">
            <span style={{ color: '#ff1300' }}>【新客户提醒】</span>
            <span> 2018-07-02 19:15:15</span>
            <p className="message-content">收到汇款时记得哈就看看的借口萨拉大萨达阿斯顿撒大所</p>
          </div>
        </div>
    )
  }
  render() {
    return (
      <div>
        <AppHomeHeader></AppHomeHeader>
        <WhiteSpace style={{backgroundColor:'#f1f1f1',height:'10px'}} ></WhiteSpace>
        <MessageSwiper 
           vertical
           dots={false}
           dragging={false}
           swiping={false}
           autoplay
           infinite
           autoplayInterval={2000}
        >
        {[1,2].map(v => this.renderSwiperDom(v))}
        </MessageSwiper>
        <WhiteSpace style={{backgroundColor:'#f1f1f1',height:'10px'}} ></WhiteSpace>
        <Entrance></Entrance>
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
export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(Home))
