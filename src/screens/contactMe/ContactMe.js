import React from 'react'
import './contactMe.css'
import {navigationLinks} from '../../helpers/navigationLinks'

function createLinks(){
    return navigationLinks.map((e, idx)=>(
        <p key={idx}><a href={e.ref}>{e.name}</a></p>
    ))
}

function contactMe() {
  return (
    <div className='contactMe__container' id="contact">
       <div className='contactMe__data__links'>
          <div>
           <p>Os.Bolesława Chrobrego 16/111, Poznań</p>
           <p>Bartosz Oleksy</p>
           <p><a href="tel: +48 605 992 154">+48 605 992 154</a></p>
           <p><a href="mailto:boleksy14@gmail.com">boleksy14@gmail.com</a></p>
          </div>
          <div>
            {createLinks()}
          </div>
       </div>
       <div style={{textAlign:'center'}}>Copyright&copy; {new Date().getFullYear()} All right reserved</div>
    </div>
  )
}

export default contactMe