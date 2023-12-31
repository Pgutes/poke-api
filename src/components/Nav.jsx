import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/pokemon">Pokemon</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav