import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">BiteBud</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ingredients">Ingredients</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/nutrition">Nutrition</Link>
              </li> 
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-3">
        <Outlet />
      </div>


      <footer className="bg-light py-1 d-flex flex-column justify-content-end fixed-bottom d-none d-sm-block" >
      <div className="text-center">
        <p>&copy; 2023 BiteBud</p>
      </div>
    </footer>

    </>
  )
};

export default Layout;
