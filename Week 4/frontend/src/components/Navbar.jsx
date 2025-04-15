import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4 text-white flex justify-between">
      <h1 className="text-2xl font-bold">My Store</h1>
      <ul className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
