import React from 'react'
import Hero from '../Components/Hero'
import StatsBanner from '../Components/StatsBAnner'
import Topuni from '../Components/Topuni'
import Steps from '../Components/Steps'
import Awaits from '../Components/Awaits'
import Counselor from '../Components/Counselor'
import SuccessStories from '../Components/SuccessStories'
import Courses from '../Components/Courses'
import Reach from '../Components/Reach'
import FAQAccordion from '../Components/Faqs'

const HomePage = () => {
  return (
    <>
    <Hero/>
		<StatsBanner/>
		<Topuni/>
		<Steps/>
		 <Awaits/>
    <Counselor/>
  <SuccessStories/>
    <Courses/>
    <Reach/>
    <FAQAccordion/>
    </>
  )
}

export default HomePage