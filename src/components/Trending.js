import React, { useEffect, useState } from 'react';
import '../style/GridLayout.css';

function Trending({ products, onButtonAdd }) {
  const [randomProducts, setRandomProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (products && products.length > 0) {
      const start = currentPage * 5;
      const end = Math.min(start + 5, products.length);
      let selectedProducts = products.slice(start, end);
      while (selectedProducts.length < 5) {
        selectedProducts = [...selectedProducts, ...products.slice(0, 5 - selectedProducts.length)];
      }

      setRandomProducts(selectedProducts);
    }
  }, [products, currentPage]);

  const nextPage = () => {
    setCurrentPage(prevPage => (prevPage === Math.ceil(products.length / 5) - 1 ? 0 : prevPage + 1));
  };

  const prevPage = () => {
    setCurrentPage(prevPage => (prevPage === 0 ? Math.ceil(products.length / 5) - 1 : prevPage - 1));
  };

  return (
    <div>
      <h2 className="text-center mb-4">POPULAR & TRENDING</h2>
      <div className="position-relative">
        <div className="row row-cols-5 g-4">
          {randomProducts.map((product, index) => (
            <div className="col" key={index}>
              <div className="">
                <img src={product.thumbnail} className="trending-img" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <button className="btn border-0 position-absolute top-50 translate-middle-y end-0 me-4" onClick={nextPage}>
                    <img src="https://www.511tactical.com/static/version1712763960/frontend/511/default/en_US/images/icon-arrow-right.svg" alt="Next" />
                  </button>
                  <button className="btn border-0 position-absolute top-50 translate-middle-y start-0 ms-4" onClick={prevPage}>
                    <img src="https://www.511tactical.com/static/version1712763960/frontend/511/default/en_US/images/icon-arrow-left.svg" alt="Previous" />
                  </button>
                  <button className="btn rounded-0" style={{ backgroundColor: '#F8862C' }} onClick={() => { onButtonAdd(product) }}>ADD TO CART</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending;
