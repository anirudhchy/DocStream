import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Landing, Register, Home } from './pages'

const App = () => {
  return (
	<BrowserRouter>
	<div className="min-h-screen dark:bg-gray-800 dark:text-gray-100">
	<Routes>
		<Route path="/" element={ <Landing /> }/>
		<Route path="/home" element={ <Home /> }/>
		<Route path="/login" element={ <Login /> }/>
		<Route path="/register" element={ <Register /> }/>

	</Routes>
</div>
</BrowserRouter>
  )
}

export default App


