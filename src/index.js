import React from 'react';
import ReactDOM from 'react-dom';

import createStore from './createStore';
import applyMiddleware from './applyMiddleware';
import thunk from './thunk';
import {Provider} from 'react-redux';


import App from './App';
import {counterReducer} from './index.redux'


//console.log(applyMiddleware(thunk),'applyMiddleware执行返回的样子');
/*
* 创建store = createStore();
* Store 具有以下功能: dispatch, subscribe, getState, replaceReducer,
* dispatch: 默认只能处理同步action,这样并不满足现有的应用场景，大部分应用场景都是异步action,如何增强dispatch的能力？
*
* 借助applyMiddleware中间件，redux-thunk插件来增强dispatch的异步处理能力
* applyMiddleware(thunk),处理了什么？运行机制是怎么样的？
*/
const store = createStore(counterReducer,applyMiddleware(thunk));
//console.log(store.dispatch,'store---');

ReactDOM.render((<Provider store={store} ><App/></Provider>), document.getElementById('root'));




//subscribe 监听器 每当 dispatch action 的时候就会执行
//store.subscribe(render);
