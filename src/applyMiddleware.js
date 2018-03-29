import compose from './compose'


 /*
  *
  * 代码是如何执行到内部呢？
 */
export default function applyMiddleware(...middlewares) {
  return (createStore) => (reducer, preloadedState, enhancer) => {
    //console.log('thunk',middlewares);

    //store会被初始化俩个次
    const store = createStore(reducer, preloadedState, enhancer)
    let dispatch = store.dispatch
    let chain = []

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action)
    }
    chain = middlewares.map((middleware) => {
        console.log(middleware(middlewareAPI),'middleware---');
        return middleware(middlewareAPI)
    });
    //console.log(chain,'chain');


    dispatch = compose(...chain)(store.dispatch)
    return {
      ...store,
      dispatch
    }
  }
}
