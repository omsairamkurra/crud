import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App'

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}/>
        {/* <Route path='/create' element={}/> */}

    </Routes>

    </BrowserRouter>
  )
}
