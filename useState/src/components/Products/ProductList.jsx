import { useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: "Məhsul 1", price: 10 },
    { id: 2, name: "Məhsul 2", price: 15 },
    { id: 3, name: "Məhsul 3", price: 20 },
  ]);

  const [newProduct, setNewProduct] = useState("");

  const addProduct = () => {
    if (newProduct.trim() === "") return;
    const newItem = {
      id: Date.now(), 
      name: newProduct,
      price: Math.floor(Math.random() * 100),
    };
    setProducts([...products, newItem]);
    setNewProduct(""); 
  };


  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h2>Məhsullar</h2>

   
      <input
        type="text"
        placeholder="Yeni məhsul adı"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
      />
      <button onClick={addProduct}>Əlavə et</button>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} 
            <button onClick={() => deleteProduct(product.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
