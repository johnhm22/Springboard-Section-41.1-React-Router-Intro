import React from 'react';
import {BrowserRouter, Route, Link, NavLink} from "react-router-dom";
import EnergyDrink from "./EnergyDrink";
import ProteinBar from "./ProteinBar";
import  CarrotSticks from "./CarrotSticks";
import './VendingMachine.css'



function VendingMachine () {

    // <Route exact path ='./'>
    //             </Route>
    // </BrowserRouter>
    // <BrowserRouter>


    return (
        <div className='VendingMachine'>
            <BrowserRouter>
            <Route exact path='/'>
            <h1>Vending Heaven</h1>
            <img src="https://www.easyvend.com/images/page/1/755x370-Main_image2.jpg" alt="Vending machine heaven" />
                <nav className='Navbar'>
                <NavLink exact to='/EnergyDrink'>Energy Drink</NavLink>
                <NavLink exact to='/ProteinBar'>Protein Bar</NavLink>
                <NavLink exact to='/CarrotSticks'>Carrot sticks</NavLink>
                </nav>
            </Route>

                <Route exact path='/EnergyDrink'>
                <nav className='Navbar'>
                    <NavLink exact to='/'>Home</NavLink>
                </nav>
                <EnergyDrink />
                </Route>

                <Route exact path='/ProteinBar'>
                <nav className='Navbar'>
                    <NavLink exact to='/'>Home</NavLink>
                </nav>
                <ProteinBar />
                </Route>

                <Route exact path='/CarrotSticks'>
                <nav className='Navbar'>
                    <NavLink exact to='/'>Home</NavLink>
                </nav>
                <CarrotSticks />
                </Route>
            </BrowserRouter>
        </div>
    )

}

export default VendingMachine;