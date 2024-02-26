import React from 'react';

function ProductQty(props) {
    const {productId, quantity, updateProductQuantity} = props

    return (
        <div>
            <button onClick={() => updateProductQuantity(productId, quantity + 1)}>+</button>
            <span>{quantity}</span>
            <button onClick={() => updateProductQuantity(productId, Math.max(quantity - 1, 1))}>-</button>
        </div>
    );
}

export default ProductQty;
