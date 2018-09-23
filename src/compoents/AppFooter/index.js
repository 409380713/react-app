import React, { Component } from 'react';
import './index.scss'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import { TabBar } from 'antd-mobile';
class AppFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      footerArr: [
        {
          title: '首页',
          icon: require('@/assets/images/footer/main_home_no.png'),
          selectedIcon: require('@/assets/images/footer/main_home.png'),
          key: 'home',
        },
        {
          title: 'CRM',
          icon: require('@/assets/images/footer/main_scrm_no.png'),
          selectedIcon: require('@/assets/images/footer/main_scrm.png'),
          key: 'crm',
        },
        {
          title: '统计',
          icon: require('@/assets/images/footer/main_statistic_no.png'),
          selectedIcon: require('@/assets/images/footer/main_statistic.png'),
          key: 'total',
        },
        {
          title: '日程',
          icon: require('@/assets/images/footer/main_calendar_no.png'),
          selectedIcon: require('@/assets/images/footer/main_calendar.png'),
          key: 'calendar',
        },
        {
          title: '我的',
          icon: require('@/assets/images/footer/main_mine_no.png'),
          selectedIcon: require('@/assets/images/footer/main_mine.png'),
          key: 'mine',
        },
      ]
    };
  }
  static getDerivedStateFromProps(nextProps,prevState){
    if(nextProps.location.pathname.split('/')[2] !== prevState.selectedTab){
      return {
        selectedTab:nextProps.location.pathname.split('/')[2]
      }
    }else{
      return null
    }
  }
  componentDidMount() {
    document.title = 'home'
  }
  handleJumpPage = (key) =>{
      document.title = key
      this.props.history.push(`/container/${key}`)
  }
  render() {
    const { footerArr } = this.state;
    return (
      <div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#ff1300"
          barTintColor="white"
        >
          {
            footerArr.length > 0 ?
              footerArr.map(v => {
                return (
                  <TabBar.Item
                    title={v.title}
                    key={v.key}
                    icon={<div style={{
                      width: '21px',
                      height: '21px',
                      background: 'url('+v.icon+') center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    selectedIcon={<div style={{
                      width: '21px',
                      height: '21px',
                      background: 'url('+v.selectedIcon+') center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    selected={this.state.selectedTab === v.key}
                    onPress={e => this.handleJumpPage(v.key)}
                  >
                  </TabBar.Item>
                )
              })
              :
              null
          }

        </TabBar>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppFooter))
