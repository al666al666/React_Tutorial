import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <div className="toppings container">

      <h3>Step 2: Choose Toppings</h3>

      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : " "
          return (
            <motion.li
              key={topping} onClick={() => addTopping(topping)}
              whileHover={{scale:1.3 ,originX:0 ,  color:"#f8e122"}}
              transition={{type:'spring' ,stiffness:500}}
            >
              <span class={spanClass}>{topping} </span>
            </motion.li>
          )
        })}
      </ul>


      <Button link="/order" name="Order" />

    </div>
  )
}

export default Toppings;