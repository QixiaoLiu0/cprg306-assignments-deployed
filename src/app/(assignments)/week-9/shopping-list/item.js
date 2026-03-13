export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="border border-[#797979] p-2 my-2 rounded-sm list-none cursor-pointer hover:bg-blue-50"
    >
      <h2 className="">{name}</h2>
      <div>
        <p>
          <span>Quantity: </span>
          <span>{quantity}</span>
        </p>
        {category !== "" && category != null && (
          <p>
            <span>Category: </span>
            <span>{category}</span>
          </p>
        )}
      </div>
    </li>
  );
}
