export default function Item({ name, quantity, category }) {
  return (
    <li>
      <h2>{name}</h2>
      <div>
        <p>
          <span>Quantity: </span>
          <span>{quantity}</span>
        </p>
        <p>
          <span>Category: </span>
          <span>{category}</span>
        </p>
      </div>
    </li>
  );
}
