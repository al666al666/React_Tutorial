import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom'
import './Navigation.css';




export default function Navigation() {
    const data = [
        {
            id: 1,
            title: "Home",
            cName: "nav-link",
            lName: "nav-item",
            url: "/"
        },
        {
            id: 2,
            title: "Services",
            cName: "nav-link",
            lName: "nav-item",
            url: "/services"
        },
        {
            id: 3,
            title: "Information",
            cName: "nav-link",
            lName: "nav-item",
            url: "/information"
        },
        {
            id: 4,
            title: "Contact",
            cName: "nav-link",
            lName: "nav-item",
            url: "/contact"
        },
    ]
    return (

        <>
            <nav className="navigation-bar">
                <div className="nav-brand">
                    <h1> Brand Name</h1>
                    <FaIcons.FaBiking />
                </div>

                <ul className="nav-list">
                    {data.map(item => {
                        return <li key={item.id} className={item.cName} >
                            <Link className={item.lName} to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    })}
                </ul>
            </nav>
        </>
    )
}