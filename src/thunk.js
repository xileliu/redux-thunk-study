function createThunkMiddleware(extraArgument) {
    /*
    * next是什么？
    * action： 是什么？
    */
    // const httpGet = (params)=> (dispatch)=>{}
    // httpGet(123): httpGet =  (dispatch)=>{}
    //
    //store.dispatch(httpGet(123));
    // store.dispatch()
  return ({ dispatch, getState }) => next => action => {
      //console.log(dispatch,'dispatch-thunk');

    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
