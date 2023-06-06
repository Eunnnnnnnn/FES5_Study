import { useSelector, useDispatch } from 'react-redux'
import { changeName, changeAge } from './store.js'


function App() {

  let state = useSelector((state) => { return state })
  console.log(state);
  console.log(state.user);
  console.log(state.user2);

  let dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => {
        dispatch(changeName())
      }}>이름바꿔~</button>
      <button onClick={() => {
        dispatch(changeAge())
      }}>나이바꿔~</button>
    </div>
  );
}
export default App;