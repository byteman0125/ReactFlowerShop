import React from 'react';
import ItemTable from './cart/ItemTable';
import AddonsList from './cart/AddonsList';

const Cart = () =>
{
    return (
        <div class="container">
            <h1>Your Cart</h1>
            <ItemTable />
            <h2>Add-ons</h2>
            
            <div>
                <AddonsList />

                <div class="row">

                    <div class="col">
                        <h2>Message</h2>

                        <div class="form-group">
                            <label for="messageTextarea">Enter the message (max 150 characters)</label>
                            <textarea class="form-control" id="messageTextarea" rows="3" maxlength="150"></textarea>
                        </div>

                    </div>

                    <div class="col">
                        <h2>Cart Totals</h2>

                        <table class="table cartTotal-table">
                            <tbody>
                            <tr>
                                <th scope="row">Total</th>
                                <td>CAD 75.98</td>
                            </tr>
                            </tbody>
                        </table>

                        <button type="button" class="btn btn-success btn-lg btn-block">Proceed to checkout</button>

                    </div>

                </div>
            </div>
        </div>
    );
}


export default Cart;