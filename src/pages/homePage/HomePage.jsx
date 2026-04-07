import React from 'react';
import Banner from '../../components/homepage/Banner';
import Books from '../../components/homepage/Books';

const booksPromise = fetch("/booksData.json").then(res => res.json());

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Books booksPromise={booksPromise}/>
        </div>
    );
};

export default HomePage;