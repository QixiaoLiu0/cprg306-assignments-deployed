import Item from "@/app/(assignments)/week-4/item";
import items from "@/app/(assignments)/week-4/data/items.json";

const categories = [...new Set(items.map(item => item.category).sort())];
console.log(categories);

export default function ItemList() {
  return (
    <main>
      {categories.map((cate, index) => (
        <section key={index}>
          <h1 className="text-lg font-semibold">
            {cate.charAt(0).toUpperCase() + cate.slice(1)}
          </h1>
          <ul className="p-4 list-disc list-inside">
            {items
              .filter(item => item.category === cate)
              .map(good => (
                <Item key={good.id} name={good.name} />
              ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
