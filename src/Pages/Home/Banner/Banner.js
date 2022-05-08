import React from 'react';
import slider1 from '../../../images/slider/slider1.jpg';
import slider2 from '../../../images/slider/slider2.jpg';
import slider3 from '../../../images/slider/slider3.jpg';

const Banner = () => {
    return (
       
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" >
    <div class="carousel-item active">
      <img class="d-block w-100" src={slider1} alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={slider2} alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={slider3} alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" style={{color:'purple'}} aria-hidden="true"></span>
    <span class="sr-only" style={{color:'purple'}}>Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only" style={{color:'purple'}}>Next</span>
  </a>
</div>

    );
};

export default Banner;