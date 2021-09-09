import { animate, motion } from 'framer-motion';
import React from 'react';
import Button from './Button';


const variantContainer = {
    initial: {
        x: "250",
        opacity: 0
    },
    animate: {
        x: -"300",
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 300
        }
    }
}

const nextContainer = {
    initial: {
        x: "-250"
    },
    animate: {
        x: 0
    }
}

const Base = ({ addBase, pizza }) => {
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

    return (
        <motion.div
            className="base container"
            variants={variantContainer}
            initial="initial"
            animate='animate'
        >

            <h3>Step 1: Choose Your Base</h3>


            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? "active" : " "
                    return (
                        <motion.li

                            key="base" onClick={() => addBase(base)}
                            whileHover={{ scale: 1.3, originX: 0, color: "#f8e122" }}
                            transition={{ type: 'spring', stiffness: 500 }}
                        >
                            <span className={spanClass} >{base}</span>
                        </motion.li>
                    )
                })}
            </ul>



            {pizza.base && (
                <motion.div
                    variants={nextContainer}
                //   no need to state:   initial="initial"
                // animate='animate' cause it is inherited from parent class "base container"  
                >
                    <Button link="/toppings" name="Next" />
                </motion.div>
            )}


        </motion.div>
    )
}

export default Base;


