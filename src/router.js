import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Home from './components/shop/Home';
import Categories from './components/shop/Categories'
import Cart from './components/shop/Cart';
import NotFound from './components/NotFound';

const Routes = () => {
    return (
        <BrowserRouter>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/categories" component={ Categories } />
                    <Route path="/cart" component={ Cart } />
                    <Route component={ NotFound } />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
)};

export default Routes;