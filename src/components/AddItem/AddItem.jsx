import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function AddItem({getItems}) {
  const [newItemQuantity, setNewItemQuantity] = useState ('');
    const [newItemUnit, setNewItemUnit] = useState ('');
    const [newItemName, setNewItemName] = useState ('');

  function SaveButton(newItemName, addItem) {
    return (event) => {
      event.preventDefault();
      if (newItemName) {
        addItem();
      }
      else {
        alert('The new Item needs a name!');
      }
    };
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

  return <div>
    <h1>Add Item</h1>
    <form onSubmit={SaveButton}>
      <input type="text" placeholder='Item' />
      <input type="text" placeholder='Quantity' />
      <input type="text" placeholder='Unit' />
      <button type='submit'>Save</button>
    </form>
  </div>;
}
