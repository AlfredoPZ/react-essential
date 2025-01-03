import React from 'react'
import './catalog.css'
import Item from './Product';
import ListItem from './ListItem';
import NotProducts from './notProducts';

const Catalog = () => {

    const products = [  
        // {id: 1, name: 'Product 1', price: 99.99},
        // {id: 2, name: 'Product 2', price: 200.50},
        // {id: 4, name: 'Product 3', price: 300.99},
    ];

    return (
        <>
            <h1>Catalog</h1>

            <NotProducts productsLength={products.length} />
            <ListItem products={products} />
        </>
    )
}

export default Catalog