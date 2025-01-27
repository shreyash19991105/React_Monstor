import { useState } from "react";

const ShoppingList = () => {
  const [shoppingItemList, setShoppingItemList] = useState([]);
  const [newShoppingItem, setNewShoppingItem] = useState({
    id: "",
    name: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewShoppingItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !newShoppingItem.name ||
      !newShoppingItem.quantity ||
      !newShoppingItem.price
    )
      return;

    setShoppingItemList((prev) => [
      ...prev,
      { ...newShoppingItem, id: new Date().getTime() },
    ]);

    setNewShoppingItem({ id: "", name: "", quantity: "", price: "" });
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <div>
        {shoppingItemList.length > 0 ? (
          shoppingItemList.map((shoppingItem) => (
            <ul key={shoppingItem.id}>
              <li>Name: {shoppingItem.name}</li>
              <li>Quantity: {shoppingItem.quantity}</li>
              <li>Price: {shoppingItem.price}</li>
            </ul>
          ))
        ) : (
          <p>List is empty</p>
        )}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newShoppingItem.name}
            onChange={handleChange}
          />
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={newShoppingItem.quantity}
            onChange={handleChange}
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={newShoppingItem.price}
            onChange={handleChange}
          />
          <button type="submit">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default ShoppingList;
