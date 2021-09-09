import React from 'react';
import { motion } from 'framer-motion';
const Order = ({ pizza }) => {

  return (

    <div className="container order">
     
    
          <h2>Thank you for your order :)</h2>
  
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <p>You ordered a <span className="is -capitalized has-text-primary is-size-1">{pizza.base} </span> pizza with:</p>
        {pizza.toppings.map(topping => <div className="is-capitalized has-text-primary has-text-weight-bold is-size-2" key={topping}>{topping}</div>
        )}
      </motion.div>
    </div>
  )
}

export default Order;