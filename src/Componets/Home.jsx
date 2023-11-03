import React from 'react'

function Home() {
  return (
    <><header>
    <a href="#" class="logo"><img src="/img/logo.png" alt="logo"/></a>
    <div class="bx bx-menu" id="menu-icon"></div>
    <ul class="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#delivery">Delievery</a></li>
        <li><a href="#app">App</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact us">Contact us</a></li>
    </ul>
</header>
<section class="home" id="home">
    <div class="home-text">
        <span>Welcome To</span>
        <h1>Starbucks Coffee</h1>
        <h2>Free Coffee is a <br/>tap away</h2>
        <a href="#" class="btn">Join Now</a>
    </div>
    <div class="home-img">
        <img src="/img/home.png" alt="home"/>
    </div>
</section></>
  )
}

export default Home