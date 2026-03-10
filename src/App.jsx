import {useState} from 'react'

import './App.css'
import Navbar from './Components/Navbar'

import ToptoBottom from './Components/ToptoBottom'
import SmoothScrollButton from './Components/SmoothScrollButton'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import StudyInRussia from './Pages/StudyInRussia'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Service from './Pages/Service'
import About from './Pages/About'
import ContactPage from './Pages/ContactPage'


function App() {
	const [count, setCount] = useState(0)

	return (<>
	  <BrowserRouter>
		<Navbar/>
		<SmoothScrollButton/>
	<ToptoBottom/>
	  <Routes>
<Route path="/" element={<HomePage />} />
<Route path="/study-in-russia" element={<StudyInRussia/>} />
<Route path="/service" element={<Service/>} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<ContactPage/>} />


    </Routes>
	<Footer/>
	</BrowserRouter>
	</>
	)
}

export default App
