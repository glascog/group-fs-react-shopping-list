export default function ListItem(shoppingList) {
    return <div>
        {shoppingList.map(item => (
            <>
                {item.name}
                {item.quantity}
                {item.unit}
                <button type='buy'>Buy</button>
                <button type='remove'>Remove</button>
            </>
        ))}
    </div>;
}