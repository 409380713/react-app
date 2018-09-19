import React, { Component } from 'react';
import './index.scss'
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { Button, List, InputItem, Toast } from 'antd-mobile'
import { createForm } from 'rc-form';
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
    console.log(username,password)
  }
  render() {
    const { getFieldProps } = this.props.form;
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
export default createForm()(Login);
