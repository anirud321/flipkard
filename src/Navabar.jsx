import React from 'react'
import './Navabar.css'
function Navabar() {
  return (
    <div className='main'>
    <nav className='navmain'>
      <div>
          <img src='flipkart.webp'></img>
        <input type="search " placeholder='Search for products, brands and more'></input>
        <button>Login</button>
      </div>
      <div>become a seller</div>
      <div>more</div>
      <div>card</div>
    </nav>
  </div>
)
}

export default Navabar