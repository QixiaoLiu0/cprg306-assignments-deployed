export default function Item({ name, quantity, category }) {
  return (
    // <ul className="my-3">
    //   <li className="my-2">{name}</li>
    //   <li className="my-2">{quantity}</li>
    //   <li className="my-2">{category}</li>
    // </ul>

    <li className="border border-[#797979] p-2 my-2 rounded-sm list-none">
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
