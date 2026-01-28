import React from 'react';
import Banner from '../../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data); // (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    return (
        <div>
            <Helmet>
                <title>Boi Poka | Home</title>
            </Helmet>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;