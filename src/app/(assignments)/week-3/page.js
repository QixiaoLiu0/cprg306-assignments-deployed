import ItemList from "./GroceryItemList.js";

export default function Week3Page() {
  return (
    <main className="flex flex-col items-center ">
      <div className="w-full max-w-xl">
        <h1 className="text-xl font-semibold">Shopping List</h1>

        <ItemList />
      </div>
    </main>
  );
}
