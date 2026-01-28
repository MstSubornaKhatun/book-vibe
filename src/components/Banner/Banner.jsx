import React from 'react';
import bookImage from '../../assets/book.png';

const Banner = () => {
    return (
        <div className='flex justify-between bg-[#131313] p-10 rounded-2xl mb-10'>
           
            <div className=''>
                <h1 className='text-6xl my-20'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn bg-[#23BE0A] text-white '>View The List</button>
            </div>
            <div>
                <img src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;