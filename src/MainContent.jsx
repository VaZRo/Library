import React from "react";
import BookCard from "./BookCard";

const books = [
    {
        image: '/placeholder.png',
        title: 'Book 1',
        description: 'Book1',
    },
    {
        image: '/placeholder.png',
        title: 'Book 2',
        description: 'Book2',
    },
    {
        image: '/placeholder.png',
        title: 'Book 3',
        description: 'Book3',
    },
    {
        image: '/placeholder.png',
        title: 'Book 4',
        description: 'Book4',
    },
    {
        image: '/placeholder.png',
        title: 'Book 5',
        description: 'Book5',
    },
    {
        image: '/placeholder.png',
        title: 'Book 6',
        description: 'Book6',
    },
]

export default function MainContent() {
    return (
        <main className="text-black">
            <div className="container">
                <div className="row d-flex align-items-center justify-content-between my-5">
                    <h3 className="col-4 fw-bold">Welcome to the Library</h3>
                    <div className="rounded books-amount d-flex justify-content-center">
                        <p className="my-auto"><b>Total Books:</b> 10,000</p>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {books.map((book, index) => (
                        <div className="col">
                            <BookCard
                                key={index}
                                image={book.image}
                                title={book.title}
                                description={book.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}