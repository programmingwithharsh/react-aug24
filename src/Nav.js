import { Outlet, Link } from "react-router-dom";
import './nav.css';

function Nav() {
    return (<>
        <nav className="navbar bg-primary navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Dashboard</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to="/">Home</Link>
                        <Link className="nav-link" to="/products">Products</Link>
                        <Link className="nav-link" to="/addproduct">Add Product</Link>
                        <Link className="nav-link" to="/title">Title</Link>
                        <Link className="nav-link" to="/users">Users</Link>
                        <Link className="nav-link" to="/corebootstrap">Core Bootstrap</Link>
                        <Link className="nav-link" to="/setlc">Set Item</Link>
                        <Link className="nav-link" to="/getlc">Get Item</Link>
                    </div>
                </div>
            </div>
        </nav>
        <div className="container">
            <Outlet />
        </div>
    </>);
}

export default Nav;

