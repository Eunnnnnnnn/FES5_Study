const [count, setCount] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count)
  }
  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1)
    console.log(countTwo)
  }

  console.log('랜더링!!')
  //

  const result = useMemo(()=>{
    return 부하()
  }, [countTwo])

  return (
    <div className="App">
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
    </div>
  );