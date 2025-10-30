"use client"
import React, { useEffect, useState } from "react";
import { FaTrash } from 'react-icons/fa';

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
  const {title, description, img, price, quantity} = item;
  const total = (price * quantity).toFixed(2);
  return (
    <div className="grid grid-cols-[3fr_1fr_1fr_0fr] items-center border-white shadow-2xl rounded-2xl bg-orange-100 overflow-hidden p-4">
      <div className="flex flex-row items-center">
        <button 
        onClick={onRemove}
        className='mr-4 text-red-600 hover:text-red-700'><FaTrash size={20}/></button>
        <img
          src={img}
          alt={title}
          className="w-[120px] h-[120px] object-cover mr-4 rounded-xl"
        />
        <div>
          <h1 className="font-bold text-2xl text-black">{title}</h1>
          <p className="text-gray-500 text-sm max-w-[260px]">{description}</p>
        </div>
      </div>

      <p className="text-lg text-cyan-600 font-semibold">${price}</p>

      <div className="flex  rounded">
        <button 
        onClick={onDecrease}
        className="px-2 py-1 text-lg font-bold hover:bg-gray-200 border border-gray-400"
        >-</button>
        <p className="px-4 py-1 text-black text-center border border-gray-400">{quantity}</p>
        <button 
        onClick={onIncrease}
        className="px-2 py-1 text-lg font-bold hover:bg-gray-200 border border-gray-400">+</button>
      </div>

      <p className="text-lg text-cyan-600 font-semibold">${total}</p>
    </div>
  )
}

const Cart = () => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (title) => {
    setCartItems(cartItems.filter((item) => item.title !== title))
  }

  const increaseQuantity = (title) => {
    const updatedCart = cartItems.map((item) => {
        if(item.title === title){
            return {
                title: item.title,
                description: item.description,
                img: item.img,
                price: item.price,
                quantity: item.quantity + 1
            };
        } else{
            return item;
        };
    });
    setCartItems(updatedCart);
  }

  const decreaseQuantity = (title) => {
    const updatedCart = cartItems.map((item) => {
        if(item.title === title && item.quantity > 0){
            if(item)
            return {
                title: item.title,
                description: item.description,
                img: item.img,
                price: item.price,
                quantity: item.quantity - 1
            };
        } else{
            return item;
        };
    });
    setCartItems(updatedCart);
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  )
  const taxes = (subtotal * .1)
  const total = taxes + subtotal;

  return (
    <div className="flex flex-col items-center min-h-screen pt-20">
      <h1 className="text-center text-4xl text-orange-600 font-bold mb-8 mt-8">
        Your Shopping Cart
      </h1>

      <div className="w-[60%] flex flex-col">
        <div className="grid grid-cols-[3fr_1fr_1fr_0fr] text-gray-700 font-semibold text-lg border-b-2 border-gray-300 pb-2 px-4 mb-4">
          <p className="text-left">Item</p>
          <p className="text-left">Price</p>
          <p className="text-left">Amount</p>
          <p className="text-left">Total</p>
        </div>

        <div className="flex flex-col gap-4">
          {cartItems.map((item, index) => (
            <CartItem
              key= {index}
              item = {item}
              onRemove={() => removeFromCart(item.title)}
              onDecrease={() => decreaseQuantity(item.title)}
              onIncrease={() => increaseQuantity(item.title)}
            />
          ))}
        </div>

        <div className="flex flex-col items-end border-t border-gray-300 pt-8 mr-4 mb-4">
          <div className="w-[40%] flex justify-between text-lg font-semibold border-b-2 border-gray-300 pb-2">
            <p>Subtotal: {subtotal.toFixed(2)}</p>
          </div>
          <div className="w-[40%] flex justify-between text-lg font-semibold border-b-2 border-gray-300 pb-2">
            <p>Taxes: {taxes.toFixed(2)}</p>

          </div>
          <div className="w-[40%] flex justify-between text-lg font-semibold border-b-2 border-gray-300 pb-2">
            <p>Total: {total.toFixed(2)}</p>
          </div>
          <div>
            <button className='bg-red-500 hover:bg-red-600 p-2 text-2xl mt-4 rounded-2xl'>Check Out</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart