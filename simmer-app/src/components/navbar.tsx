import * as React from "react";

function NavBar({ totalCounters }: any) {
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar{" "}
                    <span className="badge bg-pill bg-secondary">
                        {totalCounters}
                    </span>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;
