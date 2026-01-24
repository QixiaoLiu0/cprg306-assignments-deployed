export default function Item({ name, quantity, category }) {
  return (
    <li className="border border-[#797979] p-2 my-2 rounded-sm">
      <h2 className="">{name}</h2>
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
