import { useState } from "react"
import { NavLink } from "react-router-dom"


import { Container } from "./styles"
import listIcon from "../../assets/list-menu.svg"
import drinksIcon from "../../assets/drinks.svg"
import houseIcon from "../../assets/house.svg"
import addIcon from "../../assets/add.svg"
import profileIcon from "../../assets/profile.svg"

export function Sidebar (){

    const [menuOpen, setMenuOpen] = useState(false)
    
    const handleToggleMneu = () => {
        setMenuOpen(!menuOpen)
    };

    return <Container isMenuOpen={menuOpen}>
        <button type="button" onClick={handleToggleMneu}>
            <img src={listIcon}/>
        </button>
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>
                        <img src={houseIcon}/>
                        <span>Home</span> 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='drinks'>
                        <img src={drinksIcon}/> 
                        <span>Drinks</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='addproducts'>
                        <img src={addIcon}/>
                        <span>add products</span> 
                    </NavLink>
                </li>
                <li>
                    <NavLink to='profile'>
                        <img src={profileIcon}/>
                        <span>Profile</span> 
                    </NavLink>
                </li>
            </ul>
        </nav>
    </Container>
}