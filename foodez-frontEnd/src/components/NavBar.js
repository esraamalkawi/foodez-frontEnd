import { NavProduct } from "./Styles";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-secondary navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavProduct to="/" className="nav-link">
              AE Burger Restaurant
            </NavProduct>
          </li>
          <li className="nav-item">
            <NavProduct to="/categories" className="nav-link">
              Menu
            </NavProduct>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
