  
import React from 'react';

const Navbar = ({ setPage }) => {
  return ( 
    <nav className="buttons  is-justify-content-center ">
      <button className=" button is-outlined  is-primary  " onClick={() => setPage(true)}>Planets</button>
      <button className=" button is-outlined is-warning" onClick={() => setPage(false)}>People</button>
    </nav>
  );
}
 
export default Navbar;