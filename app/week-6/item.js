export default function Item({ name, quantity, category }) 
{
  return (
    <li className="border border-gray-500 rounded-md p-4">
      <p className="font-medium">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}
