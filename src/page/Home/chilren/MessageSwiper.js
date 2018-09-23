import React, { Component } from 'react';
import './index.scss'
import { connect } from 'react-redux'
import { Carousel, WingBlank } from 'antd-mobile';
class MessageSwiper extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Carousel
        {...this.props}
        className="message-swiper">
        
      </Carousel>
    )
  }
}
const mapStateToProps = state => {
  return {
  }
}
const mapDispatchToProps = dispatch => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageSwiper)
