import React, { Component } from 'react';

import {connect} from './react-redux';

class App extends Component {
  render() {
    return (
        <div>
            <h1 className="App-title">react redux conter demo!count:{this.props.num}</h1>
            <button onClick={this.props.add}>add</button>
        </div>
    );
  }
}
const mapStateToProps = (state) =>{
    return {
        num: state,
    }
}

const mapDispatchToProps = (dispatch) =>{
    
    return {
        add:()=>{
            dispatch({type: '增加'})
        }
    }
}

//mapDispatchToProps:
//如果传递的是一个对象，那么每个定义在该对象的函数都将被当作 Redux action creator，对象所定义的方法名将作为属性名；每个方法将返回一个新的函数，函数中dispatch方法会将action creator的返回值作为参数执行。这些属性会被合并到组件的 props 中
App = connect(mapStateToProps,mapDispatchToProps)(App);
export default App;
