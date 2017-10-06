import React from 'react';

const Footer = () =>
{
    return (
        <div>
            <footer className="page-footer footer_container">

                    <div className="container mt-5 mb-4 text-center text-md-left">
                        <div className="row mt-3">

                            <div className="col-md-4 col-lg-4 col-xl-4 mb-r dark-grey-text">
                                <h6 className="title font-bold"><strong>Hannah & Samuel Flower Shop</strong></h6>
                                <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto footer_title_accent" />
                                <p>
                                    We are a full service florists providing Flower & Gift Delivery to the Vancouver area over 18 years.
                                    Send flowers for any occasion. We offer a large variety of fresh flowers and gifts.
                                    <br />Enjoy the convenience of safe and secure ordering online 24 hours a day.
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-4 col-xl-4 dark-grey-text footer_second_column">
                                <h6 className="title font-bold"><strong>Location</strong></h6>
                                <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto footer_title_accent" />
                                <p><i className="fa fa-home mr-2"></i> 2130 Western Pky, Vancouver,<br /> BC V6T 1V6</p>
                                <p><i className="fa fa-envelope mr-2"></i> <a href="mailto:hsflowers@gmail.com">Send Email</a> </p>
                                <p><i className="fa fa-phone mr-2"></i> +1(604) 228-0113</p>
                            </div>

                            <div className="col-md-4 col-lg-4 col-xl-4 dark-grey-text footer_second_column">
                                <h6 className="title font-bold"><strong>Store Hours</strong></h6>
                                <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto footer_title_accent" />
                                <p><i className="fa fa-circle-thin mr-2"></i>Mon - Fri : 9:30AM - 6:30PM</p>
                                <p><i className="fa fa-circle-thin mr-2"></i>Sat : 10:00AM - 6:30PM</p>
                            </div>

                        </div>
                    </div>

                    <div className="footer-copyright">
                        <div className="container-fluid">
                            © 2017 Hannah & Samuel Flower Shop. Developed by <a target="_blank" href="http://timoshockness.com" rel="noopener noreferrer">Timoteo</a> and <a target="_blank" href="http://kateyeeum.com" rel="noopener noreferrer">Kate</a>
                        </div>
                    </div>

            </footer>

        </div>
    );
}

export default Footer;