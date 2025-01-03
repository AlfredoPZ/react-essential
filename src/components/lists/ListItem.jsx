import React from 'react'
import Item from './Product'

const ListItem = ({products}) => {
    return (
        <ul>
            {products.map(product => (
                <Card key={product.id} product={product} />
            ))}
        </ul>
    )
}

export default ListItem