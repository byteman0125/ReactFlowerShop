import React from 'react';
import { Link } from 'react-router-dom';
const Jumbotron = () =>
{
    return (
        <div>
            <div className="jumbotron jumbotron-fluid main_welcome">
                <div className="container">
                    <p className=" text-center lead main_text_small"> Nothing is more beautiful than flowers</p>
                    <h1 className="display-3 text-center main_text_large">PERFECT GIFT</h1>
                    <p className=" text-center lead main_text_small">For who you love!</p>
                    <div className="text-center">
                        <Link to="/categories">
                            <button type="button" className="btn main_welcome_btn col-md-2">See Categories</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;