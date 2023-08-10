import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    const [shoppingList, setShoppingList] = useState ([]);

    
    function handleSubmit() {

    }
    
    return (
        <div className="App">
            <Header />
            <main>
                <h1>Add Item</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Item' />
                <input type="text" placeholder='Quantity' />
                <input type="text" placeholder='Unit' />   
                <button type='submit'>Save</button>
                </form>

                <h1>Shopping List</h1>
             <button type='reset'>Reset</button>
             <button type='clear'>Clear</button>

             <div>
                {shoppingList.map(item => (
                   <>
                   {item.name}
                   {item.quantity}
                   {item.unit}
                   </>
                ))}
             </div>

            </main>
        </div>
    );
}

export default App;
