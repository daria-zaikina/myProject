import React, { Component, PureComponent, Carusel } from 'react';
// import { Carusel } from 'bootstrap/dist/css/bootstrap.css';

class Slider extends PureComponent {
    state = {
        slides: [
            {img: 'https://odis.homeaway.com/odis/destination/1d9c46c7-59f7-4991-bb79-d1bf145d4dd3.hw1.jpg'},
            {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWev-pAIF_lMuYeqN7FdnXiBLPWFeC74OWD01JIKGJWqXPH1km5Q'}

        ]
    }
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="d-block img-fluid" src='https://odis.homeaway.com/odis/destination/1d9c46c7-59f7-4991-bb79-d1bf145d4dd3.hw1.jpg' alt="First slide"/>
                    </div>
                </div>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWev-pAIF_lMuYeqN7FdnXiBLPWFeC74OWD01JIKGJWqXPH1km5Q' alt="First slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );

}
}

export default Slider;