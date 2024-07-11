import React from "react";


export default function Header() {
    return (
        <header>
            <nav className="d-flex flex-row align-items-center text-white">
                <a className="navbar-brand ms-4" href="#">
                    <i className="bi bi-book-half"></i>
                    <span className="ms-2">Library</span>
                </a>
                <ul className="navbar-nav d-flex flex-row ms-auto">
                    <li className="navbar-item me-4"><a href="#" className="nav-link">All Library</a></li>
                    <li className="navbar-item me-4">
                        <a href="#" className="nav-link"><i className="bi bi-telephone"></i> +7(701)-742-88-23</a>
                    </li>
                    <li className="navbar-item me-4">
                    <a href="#" className="nav-link"><i className="bi bi-envelope"></i> library@email.com</a>
                    </li>
                </ul>
            </nav>
        </header>   
    )
}