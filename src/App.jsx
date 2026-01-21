import {useState} from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import StatsBanner from './Components/StatsBAnner'
import Topuni from './Components/Topuni'
import Steps from './Components/Steps'
import Counselor from './Components/Counselor'
import Awaits from './Components/Awaits'
import Courses from './Components/Courses'
import Blog from './Components/Blog'
import Faqs from './Components/Faqs'
import SuccessStories from './Components/SuccessStories'
import Reach from './Components/Reach'
import ToptoBottom from './Components/ToptoBottom'
import SmoothScrollButton from './Components/SmoothScrollButton'
import Footer from './Components/Footer'

function App() {
	const [count, setCount] = useState(0)

	return (<>
		<Navbar/>
		<SmoothScrollButton/>
	<ToptoBottom/>
		<Hero/>
		<StatsBanner/>
		<Topuni/>
		<Steps/>
		 <Awaits/>
    <Counselor/>
  <SuccessStories/>
    <Courses/>
    <Blog/>
    <Reach/>
    <Faqs/>
    
	<Footer/>
	</>)
}

export default App
