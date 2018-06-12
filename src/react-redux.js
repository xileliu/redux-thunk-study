import React from 'react';
import PropTypes from 'prop-types';


/**
 * Provider解决将store手动传递下去
 * 
*/


class Provider extends React.Component {
    static childContextTypes = {
        store: PropTypes.object
    }

    //通过context的特，将初始化的store保存，方便子组件的使用
    getChildContext(){
        
        return {store: this.props.store}
    }

    render() {
        
        const { children } = this.props;
        return children;
    }

};

/**
 * connect:将store存储的state value 和action  绑定到组件的props属性上方便使用
 * mapStateToProps：返回的是个对象
 * Component：是个要被包装的原始组件
*/
const connect = (mapStateToProps,mapDispatchToProps) => (Component)=>{
    
    return class Proxy extends React.Component {
        static contextTypes = {
            store: PropTypes.object
        }
        constructor(props,context) {
            super(props);
            
            this.state = {
               ...mapStateToProps(context.store.getState())
            }
        }
        
        componentDidMount() {
            this.context.store.subscribe(()=>{
                this.setState(mapStateToProps(this.context.store.getState()));
            })
        }

        render() {
            return <Component {...this.state} {...mapDispatchToProps(this.context.store.dispatch)}/>
        }
    }
};


export {Provider, connect};