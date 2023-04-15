import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

//Selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

/*const BUY_CAKE = 'BUY_CAKE'
function buyCake(){
    return {
        type:BUY_CAKE,
        info: 'First redux action'
    }
}
const initialState ={
    numOfCakes: 10
}
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
} **/
