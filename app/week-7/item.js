export default function Item({ name, quantity, category }) {
  return (
    <li className="border-4 border-black rounded-none p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <p className="font-black text-lg text-black">{name}</p>
      <p className="text-black font-semibold">Quantity: {quantity}</p>
      <p className="text-black font-semibold">Category: {category}</p>
    </li>
  );
}
