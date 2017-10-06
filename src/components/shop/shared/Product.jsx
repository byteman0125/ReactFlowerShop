import React from 'react';
import placeholder from '../../../assets/placeholder.png';
const Product = () =>
{
    return (
        <div>
            <div className="col-md-12 text-center">
                <a href="{{ url('shop', $product->slug) }}">
                    <img src={placeholder} alt="product image" height="300" width="230" />
                </a>
                
                <div className="text-center">
                    <a href="{{ url('shop', $product->slug) }}">
                        <p className="display_product_name">Flower Name</p>
                    </a>
                    <p className="display_product_price">CAD 10</p>
                </div>
            </div>
        </div>
    );
}

export default Product;