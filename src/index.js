import React from 'react';
import ReactDOM from 'react-dom';

import createStore from './createStore';
import {Provider} from './react-redux';


import App from './App';
import {counterReducer} from './index.redux'

const store = createStore(counterReducer);


ReactDOM.render((<Provider store={store} ><App/></Provider>), document.getElementById('root'));




//subscribe 监听器 每当 dispatch action 的时候就会执行
//store.subscribe(render);
