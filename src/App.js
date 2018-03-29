import React, { Component } from 'react';
import {add, remove,addAnync,httpGet} from './index.redux';
import {connect} from '../node_modules/react-redux/dist/react-redux';

class App extends Component {
    httpGet = (params) => {
        this.props.httpGet(params);
    }

    whyWrite = (p) =>{
        if (p) {
            console.log(p,'hh');
        } else {
            console.log('hh');
        }
    }

  render() {
      const {num,add,remove,addAnync,httpGet} = this.props;
      /* react事件和普通html事件处理差异
       * react 中 <组件 onClick={whyWrite}/>,
       * html 中 <button onclick="whyWrite()">html</button>
       * 二者区别就是带不带（）
       * 那么问题来了？组件中如果需要给whyWrite函数传递参数怎么办？
      */
      console.log(this.props.httpGet,'----');
    return (
        <div>
            <h1 className="App-title">react redux conter demo!count:{num}</h1>
            <button onClick={add}>add</button>
            <button onClick={()=>this.props.httpGet(12123)}>httpGet</button>

            <button onClick={()=>{this.whyWrite('params')}}>whyWrite params</button>
            <button onClick={this.whyWrite}>whyWrite no params</button>
        </div>
    );
  }
}
const mapStatetoProps = (state) =>{
    return {
        num: state,
    }
}

//mapDispatchToProps:
//如果传递的是一个对象，那么每个定义在该对象的函数都将被当作 Redux action creator，对象所定义的方法名将作为属性名；每个方法将返回一个新的函数，函数中dispatch方法会将action creator的返回值作为参数执行。这些属性会被合并到组件的 props 中
const actionCreater = {add, remove,addAnync,httpGet};
App = connect(mapStatetoProps,actionCreater)(App);
export default App;
