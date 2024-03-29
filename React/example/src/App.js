import React from 'react'

import { ResetStyle } from './style/ResetStyle'
import { GlobalStyle } from './style/GlobalStyle'
import { TopBtn } from './components/common/TopButton'

function App() {
  return (
    <>
        <ResetStyle />
        <GlobalStyle />
        <TopBtn />
    </>

  )
}

export default App