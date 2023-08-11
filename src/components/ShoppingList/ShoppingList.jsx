import ListItem from "./ListItem";

export default function ShoppingList(props) {
    console.log('here is props!', props)
    return (
        {shoppingList.item?.map(item => (
            <div key={item.id}>
                
            {item.name}
            {item.quantity}
            {item.unit}
    
    <div>
      <h1>Shopping List</h1>
      <button type='reset'>Reset</button>
      <button type='clear'>Clear</button>
    
    
    </div>
    );
  }


// function add(num, numTwo) {
//     return num + numTwo
// }

// add(5, 2)

// function addLikeReactWithProps(props) {
//     return props.num + props.numTwo
// }

// addLikeReactWithProps({num: 5, numTwo: 2})