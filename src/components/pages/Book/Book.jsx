// import React, { use } from 'react';

// const Book = ({booksPromise}) => {

//     const data = use(booksPromise);
//     console.log(data); // (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Book;


import React from 'react';

const Book = ({singleBook}) => {
    console.log(singleBook);

    //distaring
    const {bookName, author, image, review} = singleBook;

    return (
       <div className="card bg-base-100 w-96 shadow-sm">
  <figure className='p-3'>
    <img
        className=''
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{review}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default Book;