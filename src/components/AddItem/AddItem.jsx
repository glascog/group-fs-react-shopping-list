import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function AddItem({getItems}) {
  const [newItemQuantity, setNewItemQuantity] = useState ('');
    const [newItemUnit, setNewItemUnit] = useState ('');
    const [newItemName, setNewItemName] = useState ('');


  const addItem = () => {
    console.log('inside the POST')
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
  
  const SaveButton = (event) => {
      event.preventDefault();
      if (newItemName) {
        addItem();
      }
      else {
        console.log('The new Item needs a name!');
      }
    
  }

  return <div>
    <h1>Add Item</h1>
    <form onSubmit={SaveButton}>
      <input 
      type="text" 
      placeholder='Item' 
      value={newItemName}
      onChange={(evt) => setNewItemName(evt.target.value)}
      />
      <input type="text" 
      placeholder='Quantity' 
      value={newItemQuantity}
      onChange={(evt) => setNewItemQuantity(evt.target.value)}/>
      <input type="text" 
      placeholder='Unit' 
      value={newItemUnit}
      onChange={(evt) => setNewItemUnit(evt.target.value)}
      />
      <button type='submit'>Save</button>
    </form>
  </div>;
}
