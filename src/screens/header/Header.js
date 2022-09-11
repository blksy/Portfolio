import React from 'react'
import './header.css'
import Typed from 'react-typed'

function Header() {
  return (
    <div className='header'>
    <h1>Who Am I?</h1>
    <Typed 
        strings={[
          "My name is Bartosz", 
          "A self taught programmer", 
          "Or more specifically", 
          "Front-end developer", 
          "OR!", 
          "Full stack developer", 
          "Want to know more?", 
          "Just scroll down"]}
          typeSpeed={40}
          backSpeed={50}
          loop
      />
    </div>
  )
}

export default Header