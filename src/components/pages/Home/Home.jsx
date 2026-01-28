import React from 'react';
import Banner from '../../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Boi Poka | Home</title>
            </Helmet>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;