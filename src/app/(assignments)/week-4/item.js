export default function Item({ name, quantity, category }) {
  return (
    <li className="my-2">
      {name}
      {/* <p>quantity: {quantity}</p>
      <p>category: {category}</p> */}
    </li>
  );
}
