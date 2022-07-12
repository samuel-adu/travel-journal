import logo from "../images/globe-icon.png";

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="" />
      <span className="brand-name">my travel journal.</span>
    </nav>
  );
}

export default Navbar;
