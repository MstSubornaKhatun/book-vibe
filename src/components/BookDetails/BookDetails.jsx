import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { ToastContainer, toast } from 'react-toastify';
  

const MySwal = withReactContent(Swal);

const BookDetails = () => {
    const {id} = useParams(); 
    const bookId = parseInt(id);

    const data = useLoaderData(); 
    const singleBook = data.find(book => book.bookId === bookId);

    const {bookName, image} = singleBook || {}; 

    const handleMarkRead = id => {
        addToStoredDB(id);

        // // SweetAlert after storing
        // MySwal.fire({
        //     title: 'Marked as Read!',
        //     text: `${bookName} has been added to your Read list.`,
        //     icon: 'success',
        //     confirmButtonText: 'OK'
        // });
        toast("Wow so easy")

    };

   

    return (
        <div>
            <div className='w-2/3 mx-auto'>
                <img className='w-48' src={image} alt="" />
                <h1>{bookName}</h1>
                <ToastContainer/>
                <button 
                    onClick={() => handleMarkRead(id)} 
                    className='btn btn-outline'
                >
                    Read
                </button>
                <button 
                     
                    className='btn btn-primary'
                >
                    Wishlist
                </button>
            </div>
        </div>
    );
};

export default BookDetails;
