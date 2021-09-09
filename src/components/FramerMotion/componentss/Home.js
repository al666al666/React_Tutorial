import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const exitVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1.5
        }
    },
    exit: {
        x: "-100vw"
    }
}
const Home = () => {
    return (
        <motion.div
            className="home container has-text-centered"
            variants={exitVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <h2> Welcome To Pizza Join</h2>
            <Link to="/base" >
                <motion.button
                    className="button is-outlined  is-large mt-6 has-text-white"
                    whileHover={{ scale: 1.1, color: "#fff", boxShadow: "0px 0px 8px rgb(255,255,255" }}
                >
                    Create Your Pizza
                </motion.button>
            </Link>
        </motion.div>
    )
}

export default Home;