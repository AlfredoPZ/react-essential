import React from 'react'

const Product = ({product}) => {
    return (
        <li key={product.id}>
            {product.name} - {product.price}
        </li>
    )
}

export default Product