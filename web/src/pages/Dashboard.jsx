
import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>İlanlarım</h2>
      <ul>
        {products.map((p, i) => (
          <li key={i}>{p.title} - {p.price === 0 ? "Bağış" : p.price + " TL"}</li>
        ))}
      </ul>
    </div>
  );
}
