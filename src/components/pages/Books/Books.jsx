import React, { useEffect, useState } from 'react';

const Books = () => {

    const [allBooks, setAllBooks] = useState([]);

    // data load er ata ekta way
    useEffect(() => {
        fetch("booksData.json")
        .then(res => res.json())
        .then(data => {
            console.log(data) // (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
            setAllBooks(data)
        })
    })
    return (
        <div>
            <h1>Hello Books</h1>
        </div>
    );
};

export default Books;