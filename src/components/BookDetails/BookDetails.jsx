import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    // const id = useParams();
    const {id} = useParams(); // useParams() kno use korlam note a bekkha korba
    console.log(id)
    const bookId = parseInt(id);

    const data = useLoaderData(); // useLoaderData(); kno use korlam note a bekkha korba
    console.log(data);

    const singleBook = data.find(book=>book.bookId === bookId);
    console.log(singleBook)
    console.log(typeof id, data);

    const {bookName, image} = singleBook; 



    return (
        <div>
            <div className='w-2/3 mx-auto'>
                <img className='w-48' src={image} alt="" />
                <h1>{bookName}</h1>
                <button className='btn btn-outline'>Read</button>
                <button className='btn btn-primary'>Wishlist</button>

            </div>
            {/* 
            <div>
            author, publisher, rating, yearOfPublishing, category, review, tags, totalPages
                <p>By: {author}</p>
                <hr />
                <p>{category}</p>
                <hr />
                <p>Review: {review}</p>
                <p>Tag: {
                    tags.map(tag=><p>{tag}</p>)
                    }</p>
                    <hr />
                <p>Number of pages: {totalPages}</p> 
                <p>Publisher: {publisher}</p>   
                <p>Year of Publishing: {yearOfPublishing}</p>
                <p>Rating: {rating}</p>
            </div> */}


        </div>
    );
};

export default BookDetails;