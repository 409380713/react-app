import React, { Component } from 'react';
import './index.scss'
import { connect } from 'react-redux'
import {updateUserMessage} from './actions'
import {withRouter} from "react-router-dom";
import { Button, List, InputItem, Toast } from 'antd-mobile'
import http from '@/fetch/http'
import {LOGIN} from '@/fetch/apis'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }
  handleLogin = () =>{
    const {username,password} = this.state;
    if(username.trim() === ''){
        Toast.info('请输入用户名',1)
        return
    } 
    if(password.trim() === ''){
        Toast.info('请输入密码',1)
        return
    } 
    
    http.post(LOGIN,{username,password}).then(res => {
      const {status} = res;
      if(status === 1){
        Toast.loading('登录中...',1,()=>{
          // 登录成功等待跳转
          this.props.updateUserMessage(res)
          this.props.history.push('/container/home')
        })
      }
    })
  }
  render() {
    return (
      <div className="content">
        <div style={{ width: '100%' }}>
          <List >
            <InputItem
              clear
              onChange={v => this.setState({ username: v, password: this.state.password })}
              placeholder="请输入用户名"
            />

          </List>
          <List style={{ marginTop: '0.3rem' }}>
            <InputItem
              clear
              type="password"
              onChange={v => this.setState({ username: this.state.username, password: v })}
              placeholder="请输入密码"
            />
          </List>
          <Button onClick={this.handleLogin} className="submit-login">登陆</Button>
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
    updateUserMessage:(data)=>dispatch(updateUserMessage(data))
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login))
