const ProductInfo = () => {
  const products = [
    { name: "Laptop", price: 1200, availability: "In stock" },
    { name: "Laptop", price: 1200, availability: "In stock" },
    { name: "Laptop", price: 1200, availability: "In stock" },
    { name: "Laptop", price: 1200, availability: "In stock" },
  ];
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];
  return (
    <>
      <div>UserList</div>
      <div>
        {users.map(({ id, name, age }) => {
          return (
            <div key={id}>
              <div>{name}</div>
              <div>{age}</div>
            </div>
          );
        })}
      </div>
      <div>ProductInfo</div>
      <div>
        {products.map(({ name, price, availability }) => {
          return (
            <ul key={Math.random()}>
              <li>{name}</li>
              <li>{price}</li>
              <li>{availability}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default ProductInfo;
