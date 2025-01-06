import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import './store.css';
import Product from './Product';
import CartProduct from './CartProduct';
import { DataContext } from '../../util/DataContext';

const Store = () => {
    const {data, cart} = useContext(DataContext);

    return (
        <>
            <h1>Store</h1>
            <div className='main'>
                <section className='list-products'>
                    {
                        data.map((product, index) => (
                            <Product key={product.id} product={product} />
                        ))
                    } 
                </section>
                <aside className='cart'>
                    <h2>Carrito</h2>
                    { cart.length === 0 ? <p>No hay productos en el carrito</p> : null }
                    {
                        cart.map((product, index) => (
                            <CartProduct key={product.id} product={product} />
                        ))
                    } 
                </aside>
            </div>
        </>
    )
}

export default Store