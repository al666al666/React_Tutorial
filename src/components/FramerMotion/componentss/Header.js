import React from 'react';
import * as FaIcon from 'react-icons/fa';
import { motion } from 'framer-motion';
function Header() {
    return (
        <header style={{ display: "flex", alignItems: "baseline", margin: " 30px auto" }}>
            <div className="logo is-size-1 ">
                <FaIcon.FaAdobe />
            </div>
            <motion.div className="title  ml-3 has-text-white " style={{ borderBottom: "1px solid rgba(255,255,255,.7) ", width: "100%" }}
                initial={{ y: -250 }}
                animate={{ y: -10 }}
                transition={{
                    delay: .2, type: 'spring',stiffness:200
                }}
            >
                <h1>Pizza Joint</h1>
            </motion.div>
        </header >


    )
}

export default Header;