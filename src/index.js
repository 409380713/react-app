import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import './assets/css/reset.css'
import { Provider } from 'react-redux'
import configureStore from './store'
import 'antd-mobile/dist/antd-mobile.css';
global.docHetght = window.screen.height;
console.log('global.docHetght',global.docHetght)
console.log('branch dev')
const history = createHistory()
ReactDOM.render(
    <Provider store={configureStore(history)}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
