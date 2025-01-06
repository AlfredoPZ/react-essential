import React, { useState } from 'react'
import { useEffect } from 'react';
import './store.css';
import Product from './Product';
import CartProduct from './CartProduct';

const Store = () => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error en la petición');
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
                console.log(data[0].images);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h1>Cargando...</h1>
    }

    if (error) {
        return <h1>Error: {error.message}</h1>
    }

    return (
        <>
            <h1>Store</h1>
            <div className='main'>
                <section className='list-products'>
                    {
                        products.map((product, index) => (
                            <Product key={product.id} product={product} />
                        ))
                    } 
                </section>
                <aside className='cart'>
                    <h2>Carrito</h2>
                    {
                        products.map((product, index) => (
                            <CartProduct key={product.id} product={product} />
                        ))
                    } 
                </aside>
            </div>
        </>
    )
}

export default Store