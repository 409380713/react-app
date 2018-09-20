import React, { Component } from 'react';
import './index.scss'
import { connect } from 'react-redux'
class MessageSwiper extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }
  }
  render() {
    return (
      <div className="message-swiper">
         <div className="message-swiper-item">
            <div className="tip-bell">
                <img src={require('@/assets/images/home/tip_bell.png')} alt=""/>
            </div>
            <div className="message-text">
                <span style={{color:'#ff1300'}}>【新客户提醒】</span>
                <span> 2018-07-02 19:15:15</span>
                <p className="message-content">收到汇款时记得哈就看看的借口萨拉大萨达阿斯顿撒大所</p>
            </div>
         </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(MessageSwiper)
