import React from 'react'

const addonsList = () => (
            <div className="row add-ons-container">
                <div class="col-md-3 text-center">

                    <img 
                        src="https://demo.woothemes.com/storefront/wp-content/plugins/woocommerce/assets/images/placeholder.png"
                        alt="product image" 
                        height="200" 
                    />
                    <div class="text-center">
                        <p class="display_product_name">Teddy Bear</p>
                        <p class="display_product_price">CAD 10.00</p>
                        <button type="button" class="btn btn-sm add_to_cart_btn" href="#">Add to cart</button>
                    </div>
                </div>

                <div class="col-md-3 text-center">
                    <img src="https://demo.woothemes.com/storefront/wp-content/plugins/woocommerce/assets/images/placeholder.png"
                        alt="product image" height="200" />
                    <div class="text-center">
                        <p class="display_product_name">Chocolate</p>
                        <p class="display_product_price">CAD 15.00</p>
                        <button type="button" class="btn btn-sm add_to_cart_btn" href="#">Add to cart</button>
                    </div>
                </div>

                <div class="col-md-3 text-center">
                    <img 
                        src="https://demo.woothemes.com/storefront/wp-content/plugins/woocommerce/assets/images/placeholder.png"
                        alt="product image" 
                        height="200"
                    />
                    <div class="text-center">
                        <p class="display_product_name">Balloon</p>
                        <p class="display_product_price">CAD 5.00</p>
                        <button type="button" class="btn btn-sm add_to_cart_btn" href="#">Add to cart</button>
                    </div>
                </div>

                <div class="col-md-3 text-center">
                    <img 
                        src="https://demo.woothemes.com/storefront/wp-content/plugins/woocommerce/assets/images/placeholder.png"
                        alt="product image" 
                        height="200" 
                    />
                    <div class="text-center">
                        <p class="display_product_name">Card</p>
                        <p class="display_product_price">CAD 3.50</p>
                        <button type="button" class="btn btn-sm add_to_cart_btn" href="#">Add to cart</button>
                    </div>
                </div>
            </div>
);

export default addonsList;
