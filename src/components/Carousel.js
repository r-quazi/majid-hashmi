import React from "react";
import Slider from "react-slick";
import './Main.css';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "blue" ,position:"absolute",zIndex:"1", marginRight:"2%"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", position:"absolute",zIndex:"1", marginLeft:"2%" }}
      onClick={onClick}
    />
  );
}

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplayspeed:300,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (

    <div className="main-container">
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://images.pexels.com/photos/3993529/pexels-photo-3993529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="images" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/4499227/pexels-photo-4499227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="images" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/8726372/pexels-photo-8726372.jpeg?auto=compress&cs=tinysrgb&w=600" className="images" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/7429322/pexels-photo-7429322.jpeg?auto=compress&cs=tinysrgb&w=600" className="images" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/4499243/pexels-photo-4499243.jpeg?auto=compress&cs=tinysrgb&w=600" className="images" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/8758401/pexels-photo-8758401.jpeg?auto=compress&cs=tinysrgb&w=600" className="images" />
        </div>
      </Slider>
    </div>
    </div>
  );
}

export default SimpleSlider;
