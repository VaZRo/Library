import React from "react";

export default function Footer() {
    return(
<footer>
        <div className="container d-flex  h-100">
            <div className="footer-brand my-auto fs-4 fw-bold">
                <i className="bi bi-book-half"></i>
                <span className="ms-2">Library</span>
            </div>
            <div className="social-links ms-auto my-auto">
                <a href="#" className="footer-link fs-3 me-3"><i class="bi bi-linkedin"></i></a>
                <a href="#" className="footer-link fs-3 me-3"><i class="bi bi-twitter-x"></i></a>
                <a href="#" className="footer-link fs-3 me-3"><i class="bi bi-instagram"></i></a>
            </div>
        </div>
    </footer>
    )
}