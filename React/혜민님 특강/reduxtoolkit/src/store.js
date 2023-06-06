// import { configureStore, createSlice } from '@reduxjs/toolkit'

// let user = createSlice({
//     name: 'user',
//     initialState: {name : 'zeon', age: 1 },
//     reducers: {
//         changeName(state) {
//             state.name = 'zin';
//         }
//     }
// })
// let user2 = createSlice({
//     name: 'user2',
//     initialState: {name : 'zeon2', age: 20 },
//     reducers: {
//         changeAge(state,action) {
//             state.age += action.payload;
//         }
//     }
//   })

// export let { changeName } = user.actions
// export let { changeAge } = user2.actions

// export default configureStore({
//   reducer: {
//     user: user.reducer,
//     user2: user2.reducer
//   }
// })

import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user',
  initialState: { name: "zeon", age: 1 },
  reducers: {
    changeName(state) {
      state.name = "zin" // name의 zeon를 zin으로 변경 
    },
    changeAge(state, actions) {
      state.age += actions.payload
    }
  }
})

export let { changeName, changeAge } = user.actions //위에서 만든 변경함수 export

export default configureStore({
  reducer: {
    user: user.reducer //user createSlice state를 등록(useSelector에서 이곳에 등록되어 있는 state들을 받아옴)
  }
})