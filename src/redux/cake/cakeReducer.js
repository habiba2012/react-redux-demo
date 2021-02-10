import BUY_CAKE from './CakeAction'
const initialState = {
    numOfCakes:10
}

export const cakeReducer = (state=initialState,action) =>{
   switch (action.type) {
       case BUY_CAKE :return{
           ...state,
            numOfCakes:state.numOfCakes -1
        }
        default:
           return state;
   }
}

