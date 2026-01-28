import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    // const [allBooks, setAllBooks] = useState([]);

    // // data load er ata ekta way
    // useEffect(() => {
    //     fetch("booksData.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllBooks(data)
    //     })
    // })

    // // avabeo data load korte pari
    // const booksPromise = fetch('./booksData.json').then(res =>res.json())


    // routes er vitor theke loader er madhome data pathano jai. so, open Routes.jsx



    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>
            <Suspense fallback={<span>Loading....</span>}>
                {/* {<Book booksPromise={booksPromise}></Book>} */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                    {
                        data.map((singleBook) =><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }

                </div>
            </Suspense>
        </div>
    );
};

export default Books;