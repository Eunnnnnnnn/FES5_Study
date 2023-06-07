// import React, { useState, useEffect } from 'react';

// function App() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState(''); //초기값은 빈문자열로 설정

//   const handleCountUpdate = () => { //Update 버튼이 눌릴 때 함수가 실행됨
//     setCount(count + 1); //setCount 이용하여 카운트 값을 +1씩 증가함
//   };

//   const handleInputChange = (e) => {
//     setName(e.target.value);
//   };
  
//   // 랜더링될 때마다 매번 실행됨
//   useEffect(() => {
//     console.log('랜더링');
//   }); 

//   // 마운팅 + count가 변화될 때마다 매번 실행됨
//   useEffect(() => {
//     console.log('카운트 변화');
//   }, [count]); 

//   // 마운팅 + name이 변경될 때마다 매번 실행됨
//   useEffect(() => {
//     console.log('이름 변화');
//   }, [name]);

//   useEffect(() => {
//     console.log('마운팅');
//   }, []);

//   return (
//     <div>
//       <button onClick={handleCountUpdate}>Update</button>
//       <span>count: {count}</span>
//       <input type="text" value={name} onChange={handleInputChange} />
//       <span>name: {name}</span>
//     </div>
//   );
// }
// export default App;

import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';

function App() {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}
export default App;