const ADD_CONTER = '增加';
const REMOVE_CONTER = '减少';

//创建reducer
export const counterReducer = (state=0, action) => {
    switch (action.type) {
        case ADD_CONTER:
            return state + 1
        case REMOVE_CONTER:
            return state - 1
        default:
            return 10
    }
}

/*
 * 一. redux 的使用
 * 1.createStore() 初始化创建Store状态机；
 * 核心概念：Store state dispatch acton reducer
 * Store state=>政委  dispatch=>专员 acton=>具体指令 reducer=>更新者，如何更新state
 *
 * 1.redux dispatch默认只会处理同步;
 * 2.异步处理怎么办？
 * redux applyMiddleware中间件通过thunk来增强dispatch，使它具备异步处理的能力；
 * 具体场景，例如前端http get 需要获取数据，在得到数据之后才去disapatch action,reducer根据具体指令去更新store;
 *
 */
//action creater;
export const add = () => {
    return {type: ADD_CONTER}
}
export const httpGet = (params) => (dispatch,getState) => {
    console.log(params,'parms');

    dispatch({type: REMOVE_CONTER});
    console.log(getState())
}

export const remove = (parms) => (dispatch,getState) => {
    console.log(parms,'parms');

    dispatch({type: REMOVE_CONTER});
}


export const addAnync = () => {
    //调用此函数会发现会报错
    return dispatch => {
        setTimeout(() => {
            dispatch(add());
        },2000);
    }
}
