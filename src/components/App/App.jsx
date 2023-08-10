import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import axios from 'axios';

function App() {

    const [shoppingList, setShoppingList] = useState ([]);
    const [newItemName, setNewItemName] = useState ('');
    const [newItemQuantity, setNewItemQuantity] = useState ('');
    const [newItemUnit, setNewItemUnit] = useState ('');

    useEffect(() => {
        getItems()
      }, [])

    const getItems = () => {
        axios.get('/item')
          .then(response => {
            setShoppingList(response.data)
          })
          .catch(err => {
            alert('error getting Item');
            console.log(err);
          })
      }
      const addItem = () => {
        axios.post('/item', { name: newItemName, quantity: newItemQuantity, unit: newItemUnit })
          .then(response => {
            // clear inputs
            setNewItemName('');
            setNewItemQuantity('');
            setNewItemUnit('');
    
            getItems();
          })
          .catch(err => {
            alert('Error Adding Item');
            console.log(err);
          })
      };

    const handleSubmit = (event) => {
    event.preventDefault();
    if (newItemName) {
      addItem();
    }
    else {
      alert('The new Item needs a name!');
    }
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
