import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d3m9l0v76dty0.cloudfront.net/system/photos/731181/extra_large/cf8aeab28f6e669ca682d841eeff3328.jpg?1663749350"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d3m9l0v76dty0.cloudfront.net/system/photos/875181/original/bb95a0325a0db193f80e6ed3472be0be.png?1706779847"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d3m9l0v76dty0.cloudfront.net/system/photos/760637/extra_large/2c8fccf8b0fc39ad295e4e8d42ed5e03.jpg?1671981243"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
