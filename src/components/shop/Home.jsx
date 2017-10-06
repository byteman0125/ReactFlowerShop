import React from 'react';
import Jumbotron from './home/Jumbotron'
import Product from './shared/Product';

const Home = () =>
{
    return (
        <div>
            <Jumbotron />
            <div className="container">
                <section>
                    <div className="row">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;