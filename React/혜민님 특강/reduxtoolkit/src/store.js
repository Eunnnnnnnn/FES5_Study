import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: {name : 'zeon', age: 1 },
    reducers: {
        changeName(state) {
            state.name = 'zin';
        }
    }
})
let user2 = createSlice({
    name: 'user2',
    initialState: {name : 'zeon2', age: 20 },
    reducers: {
        changeAge(state,action) {
            state.age += action.payload;
        }
    }
  })

export let { changeName } = user.actions
export let { changeAge } = user2.actions

export default configureStore({
  reducer: {
    user: user.reducer,
    user2: user2.reducer
  }
})