import React from "react";

const BookCard = ({ image, title, description }) => {
    return (
        <div className="card ">
            <img src={image} className="card-img-top" />
            <div className="card-body">
                <h4 className="card-title fw-bold">{title}</h4>
                <p className="card-text fs-5">{description}</p>
                <button className="btn col-12 text-white">Read</button>
            </div>
        </div>
    )
}

export default BookCard;
