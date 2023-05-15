// 실습코드
// function Licat() {
//   const name = '라이캣!';
//   const someStyle = {backgroundColor:"black", color:"white"};
//   return(
//     <div>
//       <h1 style={someStyle}>안녕, {name} 1호</h1>{/* 이렇게하면 나옵니다. */}
//       <h1>안녕, 라이캣 2호!</h1>
//       <div className="newClass"/> {/* class대신 className=""로 진행! */}
//     </div>
//   )
// }

// function Time() {
//   const today = new Date();
//   const year = today.getFullYear();
//   const month = today.getMonth()+1;
//   const date = today.getDate();
//   const hour = today.getHours();
//   const min = today.getMinutes();
//   const sec = today.getSeconds();
//   return(
//     <div style={{backgroundColor:"black", color:"white"}}>
//       <h1 style={{color:'red'}}>년 : {year}</h1>
//       <h1>월/일 : {month}/{date}</h1>
//       <h1>시간 : {hour}시 {min}분 {sec}초</h1>
//     </div>
//   ) 
// }

// function App() {
//   return (
//     <div>
//       <Licat name="Gary" /> {/*프롭스를 넘겨줄 때에는 부모요소(App()에서 전달하는 것임) */}
//       <Time />
//     </div>
//   );
// }

// export default App;


import Hello from './Components/Hello'
import Time from './Components/Time'
import Resume from './Components/Resume'
import ColorText from './Components/ColorText';

function HelloProps(props) {
  console.log(props);
  return (
    <div>
      <p>my name is {props.name} and age is {props.age}</p>
      <strong>you are {props.someFunc()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </div>
  )
}




function App() {
  return (
    <div>
      <Hello name="Gary" />
      <Time />
      <HelloProps
        name="jaehyun"
        age={25}
        someFunc={() => 'awesome!!!'}
        someJSX={<img src="https://picsum.photos/id/237/200/300" />}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }} />
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue" />
      <ColorText color="red" />
      <ColorText color="blue" />
      <ColorText color="green" />
    </div>
  );
}

export default App;