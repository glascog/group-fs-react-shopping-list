import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import axios from 'axios';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import AddItem from '../AddItem/AddItem.jsx';


function App() {

    const [shoppingList, setShoppingList] = useState ([]);
    
    useEffect(() => {
        getItems()
      }, [])

    const getItems = () => {
      console.log('insde the get')
        axios.get('/item')
          .then(response => {
            console.log('the reponse for the GET', response.data)
            setShoppingList(response.data)
          })
          .catch(err => {
            console.log('error getting Item');
            console.log(err);
          })
      }
      

    
    return (
        <div className="App">
            <Header />
            <main>
              <AddItem getItems={(getItems)}/>
              <ShoppingList shoppingList={shoppingList}/>

            </main>
        </div>
    );
}

export default App;





