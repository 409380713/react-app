import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './assets/css/reset.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './rootReducer'
import 'antd-mobile/dist/antd-mobile.css';
let store = createStore(todoApp)
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter basename="/stst/">
        <App />
    </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
