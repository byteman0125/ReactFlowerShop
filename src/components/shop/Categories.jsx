import React from 'react';
import Menu from './categories/Menu';
import Product from './shared/Product';
import Search from './categories/Search';

const Categories = () =>
{
    return (
        <div className="container">

            <div className="category_menu_container row">
                <Menu />
            </div>

            <div>
                <Search />
            </div>

            <section className="row container">
                <Product />
            </section>
        </div>
    );
}

export default Categories;