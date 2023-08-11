import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import axios from 'axios';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import AddItem from '../AddItem/AddItem.jsx';


function App() {

    const [shoppingList, setShoppingList] = useState ([]);
    const [newItemName, setNewItemName] = useState ('');
    
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
      

    
    return (
        <div className="App">
            <Header />
            <main>
              {AddItem(SaveButton)}
                {ShoppingList(shoppingList)}

            </main>
        </div>
    );
}

export default App;





