import React from 'react';
import Cards from './Cards/Index';
import Header from './Header/Index';

const Home = (props) => (
    <div className="cards">
        <Header/>
        <Cards/>
    </div>
);
export default Home;