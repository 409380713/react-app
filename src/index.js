import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './assets/css/reset.css'
import { Provider } from 'react-redux'
import configureStore from './store'
import 'antd-mobile/dist/antd-mobile.css';
global.docHetght = document.body.clientHeight;
console.log('global.docHetght',global.docHetght)
ReactDOM.render(
    <Provider store={configureStore()}>
    <BrowserRouter basename="/">
        <App />
    </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
