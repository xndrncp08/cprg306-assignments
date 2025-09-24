const Item = ({ name, quantity, category }) => {
    <li>
        <div>
            <p className="">{name}</p>
            <p className="">Quantity: {quantity}</p>
            <p className="">Category: {category}</p>
        </div>
    </li>
}