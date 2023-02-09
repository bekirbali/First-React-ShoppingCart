import { Products } from "../../Products";
import { Product } from "./Product";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>MyTech Shop</h1>
      </div>
      <div className="products">
        {Products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
