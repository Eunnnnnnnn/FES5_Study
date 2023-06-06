// import { useSelector, useDispatch } from 'react-redux'
// import { changeName, changeAge } from './store.js'


// function App() {

//   let state = useSelector((state) => { return state })
//   console.log(state);
//   console.log(state.user);
//   console.log(state.user2);

//   let dispatch = useDispatch();

//   return (
//     <div>
//       <button onClick={() => {
//         dispatch(changeName())
//       }}>이름바꿔~</button>
//       <button onClick={() => {
//         dispatch(changeAge())
//       }}>나이바꿔~</button>
//     </div>
//   );
// }
// export default App;


import { useSelector, useDispatch } from "react-redux";
import { changeName } from "./store";

function App() {

  //등록된 state 다 가져옴
  // const state = useSelector((state) => { return state });

  // 등록된 state 중에서 user 가져옴
  const state = useSelector((state) => { return state.user });
  const dispatch = useDispatch();

  return (
    <div>
      {/* 버튼을 누르면 hailey에서 ham으로 변경되는 것을 확인할 수 있음 */}
      <h1>{state.name}</h1>
      <button onClick={() => { dispatch(changeName()) }}>Name Change</button>
    </div>
  );
}
export default App;