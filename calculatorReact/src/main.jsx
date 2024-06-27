import React from 'react'
import ReactDOM from 'react-dom/client'
import Calc from './Calc.jsx'
import CalcBackground from './CalcBackground.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Calc />
      <CalcBackground />
    </>
  </React.StrictMode>,
)
