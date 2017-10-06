import React from 'react';

const ItemTable = () => (
    <table class="table yourCart-table">

                <thead>
                    <tr>
                        <th>ITEM</th>
                        <th></th>
                        <th>QTY</th>
                        <th>SUBTOTAL</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>
                            <img 
                                src="https://demo.woothemes.com/storefront/wp-content/plugins/woocommerce/assets/images/placeholder.png"
                                alt="product image" 
                                width="80" 
                            />
                        </td>
                        <td>Sunflower Arrangement</td>
                        <td>
                            <input 
                                type="number" 
                                name="quantity"
                                min="1" 
                                max="100" 
                                step="1" 
                                value="1" 
                            />
                        </td>
                        <td>$39.99</td>
                        <td>
                            <button type="button" class="btn btn-outline-danger btn-sm btn-table-cancel">x</button>
                        </td>
                    </tr>
                        
                <tr>
                    <td>
                        <img 
                            src="https://demo.woothemes.com/storefront/wp-content/plugins/woocommerce/assets/images/placeholder.png"
                            alt="product image" 
                            width="80"
                        />
                    </td>
                    <td>Aloe Plant</td>

                    <td>
                        <input 
                            type="number" 
                            name="quantity"
                            min="1" 
                            max="100" 
                            step="1" 
                            value="1"
                        />
                    </td>

                    <td>$35.99</td>
                    <td>
                        <button type="button" class="btn btn-outline-danger btn-sm btn-table-cancel">x</button>
                    </td>
                </tr>
                        
                </tbody>
            </table>
);

export default ItemTable;