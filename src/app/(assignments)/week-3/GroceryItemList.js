import Item from "./GroceryItem.js";
import items from "./data/item.json";

export default function GroceryItemList() {
  return (
    <ul>
      {console.log(items)}

      {items.map((item, i) => (
        <Item
          key={i}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}
