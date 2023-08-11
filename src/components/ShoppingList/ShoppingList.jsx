import ListItem from "../ListItem/ListItem";

export default function ShoppingList(shoppingList) {
    return <div>
      <h1>Shopping List</h1>
      <button type='reset'>Reset</button>
      <button type='clear'>Clear</button>
  
      {ListItem(shoppingList)}
    </div>;
  }


