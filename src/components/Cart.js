import React from 'react'
import'../style/Cart.css'
function Cart() {
    const monSteraPrice =15;
    const ivyPrice =10;
    const flowerPrice =12;
   
  return (
    <div className='jh-cont'>
      <h2>
        Panier
      </h2>
      <ul>
      <li>Monstera: {monSteraPrice} €</li>
      <li>Lierre: {ivyPrice} €</li>
      <li>Fleurs: {flowerPrice} €</li>
      </ul>
      <h3>
      Total: {monSteraPrice+ivyPrice+flowerPrice} €
      </h3>
      

    </div>
  )
}

export default Cart
