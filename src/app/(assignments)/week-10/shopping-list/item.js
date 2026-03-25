export default function Item({ name, quantity, category, onSelect, onDelete }) {
  return (
    <li
      onClick={onSelect}
      className="border border-[#797979] p-2 my-2 rounded-sm list-none cursor-pointer hover:bg-blue-50 flex justify-between items-center w-140"
    >
      <div>
        <h2 className="text-xl text-amber-600">{name}</h2>

        <p>
          <span>Quantity: </span>
          <span>{quantity}</span>
        </p>
        {category !== "" && category != null && (
          <p>
            <span>Category: </span>
            <span className="font-bold">{category}</span>
          </p>
        )}
      </div>
      <button
        onClick={e => {
          e.stopPropagation();
          onDelete();
        }}
        className=" hover:bg-red-500 cursor-pointer bg-red-400 text-white px-1 rounded"
      >
        Delete
      </button>
    </li>
  );
}
