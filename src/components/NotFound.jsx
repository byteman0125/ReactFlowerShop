import React from 'react';
import notFoundImg from '../assets/404.png';

const NotFound = () =>
{
    return (
        <div className="container text-center">
            <img src={notFoundImg} alt="Not found" />
            <p className="text-center main_text_small">Ops... Page not found!</p>
        </div>
    );
}

export default NotFound;