import { Tabs } from 'antd-mobile';
import React from 'react';
import { connect } from 'react-redux'
import './index.scss'
class AppHomeHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [
        { title: '1st Tab' },
        { title: '2nd Tab' },
        { title: '3rd Tab' },
        { title: '4th Tab' },
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
          {this.renderContent}
        </Tabs>
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
