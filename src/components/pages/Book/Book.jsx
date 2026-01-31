


import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const Book = ({singleBook}) => {
    console.log(singleBook);

    
    //distaring
    const {bookName, author, bookId, image, category,rating, tags, yearOfPublishing} = singleBook;

    return (
<Link to={`/bookDetails/${bookId}`}>
       <div className="card bg-base-100 w-96 shadow-sm border p-3">
  <figure className='p-3 bg-gray-100 w-2/3 mx-auto'>
    <img 
        className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
     <div className='flex justify-center gap-10'>
       {
        tags.map(tag => <button>{tag}</button>)
      }
     </div>
    <p className='flex space-x-3'>
        <span className='text-[#23BE0A] bg-[#23BE0A]/10 p-1 rounded-2xl px-3'>Young Adult</span>
        <span className='text-[#23BE0A] bg-[#23BE0A]/10 p-1 rounded-2xl px-3'>Identity</span>
    </p>
    <h2 className="card-title">
      {bookName}
      <div className='badge badge-secondary'>{yearOfPublishing}</div>
      
    </h2>
    <p>By: {author}</p>

    <div className='border-t-1 border-dashed'></div>

    <div className="card-actions justify-end">
      <div className="  badge badge-outline ">{category}</div>
      <div className="badge badge-outline">{rating}<FaStarHalfAlt />
</div>
    </div>
  </div>
</div>
</Link>
    );
};

export default Book;