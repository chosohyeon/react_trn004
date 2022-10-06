import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const NAVLINK = [
    { content: "Home", link: "/" },
    { content: "About", link: "/about" },
    { content: "Shop", link: "/shop" },
    { content: "Community", link: "/community" }
]

const NavMenu = () => {
    return (
        <ul>
            {
                NAVLINK.map((it, idx) => {
                    return (
                        <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                    )
                })
            }
        </ul>
    )
}

export default NavMenu