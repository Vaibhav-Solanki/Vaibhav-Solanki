import logo from "../logo.png";
function Navbar() {
  return (
    <header className="p-3 mb-3 border-bottom blr">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
          >
            <img src={logo} alt="Logo" height="32" />
            {/* <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlink:href="#bootstrap"></use>
            </svg> */}
          </a>

          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 link-secondary">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Inventory
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Customers
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Products
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
