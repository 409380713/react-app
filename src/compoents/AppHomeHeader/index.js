import { Tabs, Carousel } from 'antd-mobile';
import React from 'react';
import { connect } from 'react-redux'
import './index.scss'
class AppHomeHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [
        { title: '个人数据' },
        { title: '团队数据' },
        { title: '分店数据' },
        { title: '全部数据' },
      ]
    }
  }
  renderContent = tab => {
    return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
      <p>Content of {tab.title}</p>
    </div>);
  }
  handleSwiperFn = (tab, index) => {
    console.log(tab, index)
  }
  render() {
    const { tabs } = this.state
    return (
      <div className="app-header">
        <Tabs
          tabBarActiveTextColor='#ff1300'
          tabBarTextStyle={{
            color: '#333333',
            fontSize: '0.28rem'
          }}
          tabBarUnderlineStyle={{ border: '1px solid red' }}
          onChange={(tab, index) => this.handleSwiperFn(tab, index)}
          tabs={tabs}
          renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
        </Tabs>
        {/* swiper */}
        <div className="content-box">
          <div className="left-slide"></div>
          <div style={{ width: '90%' }}>
            <Carousel
              autoplay={false}
              dots={false}
            >
              <div className="swiper-slide">
                <p>丨最新签单额</p>
                <div className="total-box">
                  <div className="total-item">
                    <p>56666</p>
                    <p style={{ fontSize: '0.28rem' }}>本周</p>
                    <p style={{ fontSize: '0.28rem' }}>5%</p>
                  </div>
                  <div className="total-item">
                    <p style={{ fontSize: '0.48rem' }}>56666</p>
                    <p style={{ fontSize: '0.34rem' }}>今日</p>
                  </div>
                  <div className="total-item">
                    <p>2333333</p>
                    <p style={{ fontSize: '0.28rem' }}>本月</p>
                    <p style={{ fontSize: '0.28rem' }}>5%</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <p>最新签单额</p>
              </div>
            </Carousel>
          </div>
          <div className="right-slide"></div>
        </div>
        <div className="user-show">
          <div>
            <p>今日新增用户</p>
            <p className="user-num">56666</p>
          </div>
          <div>
            <p>重点客户更新</p>
            <p className="user-num">56666</p>
          </div>
        </div>
      </div>
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(AppHomeHeader)
