import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const mystyle = {
    cursor: "pointer",
    borderRadius: "25px",
    border: "3px solid #fff",
    padding: "6px 10px",
    fontSize: "1rem",
    marginTop: "20px",
    fontWeight: "600"
}

const hoverButton = {
    hover: {
        backgroundColor: "rgb(100, 0, 123)",
        color: "#fff",
        fontWeight: 600,
        transition: {
            duration: .3,
            yoyo: Infinity
        }
    }

}
export default function Button({ name, link }) {

    return (
        <Link to={link}>
            <motion.button
                style={mystyle}
                variants={hoverButton}
                whileHover="hover"
             
            >
                {name}
            </motion.button>
        </Link >
    )
}