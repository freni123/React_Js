import React from 'react'

function Shop() {
  return (
    <><section class="shop" id="shop">
    <div class="heading">
        <span>Shop Now</span>
        <h1>SHOP COFFEE</h1>
    </div>
    <div class="shop-container">
        <div class="box">
            <div class="box-img">
                <img src="/img/shop1.png"/>
            </div>
            <div class="stars">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half' ></i>
            </div>
            <h2>Starbucks Coffee</h2>
            <span>$ 12.4</span>
            <a href="#" class="btn">Order Now</a>
        </div>
        <div class="box">
            <div class="box-img">
                <img src="/img/shop2.png" alt="shop"/>
            </div>
            <div class="stars">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half' ></i>
            </div>
            <h2>Starbucks Coffee</h2>
            <span>$ 12.4</span>
            <a href="#" class="btn">Order Now</a>
        </div>
        <div class="box">
            <div class="box-img">
                <img src="/img/shop3.png" alt="shop"/>
            </div>
            <div class="stars">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half' ></i>
            </div>
            <h2>Starbucks Coffee</h2>
            <span>$ 12.4</span>
            <a href="#" class="btn">Order Now</a>
        </div>
    </div>
        </section>
        </>
  )
}

export default Shop