export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="border-4 border-black rounded-none p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:bg-yellow-100 transition-colors"
    >
      <p className="font-black text-lg text-black">{name}</p>
      <p className="text-black font-semibold">Quantity: {quantity}</p>
      <p className="text-black font-semibold">Category: {category}</p>
    </li>
  );
}