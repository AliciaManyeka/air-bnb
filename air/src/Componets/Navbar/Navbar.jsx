import "./Navbar.css";
import Logo from "../../assets/images/Vector.jpg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={Logo} alt="Logo" />
      </nav>
    </div>
  );
};

export default Navbar;
