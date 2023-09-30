import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Order from './order';

const showOrders = (props) => {
    return (<div>
        {props.orders.map(el => (
          <Order onDelete={props.onDelete} key={el.id} item={el } />
        ))}
    </div>)
}

const showNothing = () => {
    return (<div className='empty'>
        <h2>Корзина пустая</h2>
    </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)


  return (
    <header>
        <div>
            <span className='logo'>CS:GO Skins</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Отзывы</li>
                <li>Кабинет</li>
            </ul>
            <FaCartShopping onClick={()=> setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ? 
                showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
