import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <HiOutlineShoppingCart size={"32px"} color={"white"} />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
