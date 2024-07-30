import React from 'react'
import bg from '../img/contact.jpg'
function Navbar() {
    return (
      
      <header className="w-full md:h-72 h-32 bg-header-bg bg-cover relative overflow-x-hidden" style={{ backgroundImage: `url(${bg})` }}>
        <h1  style={{
          color: 'white', // Make the text color transparent to see the stroke
          WebkitTextStroke: '2px red', // Border color and thickness
          WebkitTextFillColor: 'white', // Fills the text with black color
        }} className="absolute inset-0 flex items-center justify-center text-stone-100 md:text-[70px] text-[40px] font-sans font-bold drop-shadow-xl shadow-black">CAREERS</h1>
      
    </header>

  )
}

export default Navbar