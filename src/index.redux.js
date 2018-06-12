const ADD_CONTER = '增加';
const REMOVE_CONTER = '减少';

//创建reducer
export const counterReducer = (state=0, action) => {
    
    switch (action.type) {
        case ADD_CONTER:
        console.log(state,'====action');
            return state + 1
        case REMOVE_CONTER:
            return state - 1
        default:
            return 10
    }

   
}