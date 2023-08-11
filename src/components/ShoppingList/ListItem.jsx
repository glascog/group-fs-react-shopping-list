export default function ListItem(shoppingList) {
    console.log('inside ListItem', shoppingList)
    return ( <>
        
            
            <div key={item.id}>
                
                {item.name}
                {item.quantity}
                {item.unit}
                <button type='buy'>Buy</button>
                <button type='remove'>Remove</button>
                 
            
            </div>
        ))}
    </>);
}