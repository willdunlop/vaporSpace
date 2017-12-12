/*
*
* /$$    /$$                                         /$$$$$$
*| $$   | $$                                        /$$__  $$
*| $$   | $$ /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$ | $$  \__/  /$$$$$$   /$$$$$$   /$$$$$$$  /$$$$$$
*|  $$ / $$/|____  $$ /$$__  $$ /$$__  $$ /$$__  $$|  $$$$$$  /$$__  $$ |____  $$ /$$_____/ /$$__  $$
*\  $$ $$/  /$$$$$$$| $$  \ $$| $$  \ $$| $$  \__/ \____  $$| $$  \ $$  /$$$$$$$| $$      | $$$$$$$$
* \  $$$/  /$$__  $$| $$  | $$| $$  | $$| $$       /$$  \ $$| $$  | $$ /$$__  $$| $$      | $$_____/
*  \  $/  |  $$$$$$$| $$$$$$$/|  $$$$$$/| $$      |  $$$$$$/| $$$$$$$/|  $$$$$$$|  $$$$$$$|  $$$$$$$
*   \_/    \_______/| $$____/  \______/ |__/       \______/ | $$____/  \_______/ \_______/ \_______/
*                   | $$                                    | $$
*                   | $$                                    | $$                By William Dunlop
*                   |__/                                    |__/                 - 26/11/2017
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(<App />, document.querySelector('#root'));
