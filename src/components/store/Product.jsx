import React, { useContext, useState } from 'react'
import './product.css'
import { DataContext } from '../../util/DataContext';
import { useNavigate } from 'react-router';

const Product = ({product}) => {
    const {title, category, description, price} = product;
    const {setCart, cart} = useContext(DataContext);
    const navigate = useNavigate();

    const addProduct = () => {
        setCart([...cart, product]);
    }

    const navigateToDetail = () => {
        navigate(`/store/${product.id}`);
    }


    return (
        <article className='card' >
            <div className='img-container' onClick={navigateToDetail}>
                <img src={JSON.parse(product.images)[0] || "https://images.pexels.com/photos/30052232/pexels-photo-30052232/free-photo-of-campo-de-trigo-verde-exuberante-meciendose-con-la-brisa.jpeg?auto=compress&cs=tinysrgb&w=600"} alt={title} />
                <span className='category'>{category.name}</span>
            </div>
            <div className='card-content'>
                <h2>{title}</h2>
                <p className='price'>${price}</p>
                <button className='btnAdd' onClick={addProduct}>Add to cart</button>
            </div>
        </article>
    )
}

export default Product