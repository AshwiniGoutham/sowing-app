import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './components/generic/header.css'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store'
import { runWithAdal } from 'react-adal';
import { authContext } from './components/aad/adalConfig';
import AuthConfig from './components/aad/AuthConfig'

const DO_NOT_LOGIN = false;

runWithAdal(
    authContext,
    () => {
        ReactDOM.render(
            <Provider store={store}>
            <BrowserRouter>
            <App />
            </BrowserRouter>
            </Provider>, document.getElementById('root'));
    },
    DO_NOT_LOGIN
  );

// Handle possible callbacks on id_token or access_token


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
