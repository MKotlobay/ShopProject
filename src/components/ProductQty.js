import React from 'react';

function ProductQty(props) {
    const { quantity, updateProductQuantity } = props;

    return (
        <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-sm btn-primary me-2" style={{ backgroundColor: '#F8862C', color: 'black', border: 'none', outline: 'none' }} onClick={() => updateProductQuantity(quantity + 1)}>+</button>
            <span>{quantity}</span>
            <button className="btn btn-sm btn-primary ms-2" style={{ backgroundColor: '#F8862C', color: 'black', border: 'none', outline: 'none' }} onClick={() => updateProductQuantity(Math.max(quantity - 1, 1))}>-</button>
        </div>
    );
}

export default ProductQty;
