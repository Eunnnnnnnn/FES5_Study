import { BrowserRouter, Routes, Route, Link, useLocation, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='licat' />}/>
        <Route path="/two" element={<Two />}/>
        {/* 중첩라우트를 쓸거라면 Outlet 안에 들어가는 내용을 상관없이 보여주고싶다면 path안에 *을 추가로 작성함(붙여줌) / *은 모든 주소라는 의미 */}
        {/* Outlet은 라우트 안에서 작성한 컴포넌트를 빼내주는 애/ path안에 주소가 여러개인데 뭐 가져와야할지 모르겠어 > outlet이 가져와줌 */}
        <Route path="/three/*" element={<Outlet />}> 
          <Route path="" element={<HojunIndex/>}/>
          <Route path="hojunone/" element={<HojunOne/>}/>
          <Route path="hojuntwo/" element={<HojunTwo/>}/>
        </Route>
        <Route path="/blog/:id" element={<Blog />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One({name}){
  return <h1>{name} world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

function Blog(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Blog</h1>
}

function HojunIndex(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Hojun index</h1>
}

function HojunOne(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Hojun 1</h1>
}

function HojunTwo(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Hojun 2</h1>
}

export default App;