import React from 'react';

function Banner() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
      </div>
      {/* carosel not works.. check that */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://d3m9l0v76dty0.cloudfront.net/system/photos/731181/extra_large/cf8aeab28f6e669ca682d841eeff3328.jpg?1663749350"
            className="d-block w-100" alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://d3m9l0v76dty0.cloudfront.net/system/photos/760637/extra_large/2c8fccf8b0fc39ad295e4e8d42ed5e03.jpg?1671981243"
            className="d-block w-100" alt="..."
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banner;
