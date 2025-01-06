import React, { useContext } from 'react'
import './product.css'
import { DataContext } from '../../util/DataContext';

const CartProduct = ({product}) => {
    const {title, category, description, price} = product;
    const {setCart, cart} = useContext(DataContext);

    const removeProduct = () => {
        const newCart = cart.filter(item => item.id !== product.id);
        setCart(newCart);
    }

    return (
        <article className='card'>
            <div className='img-container'>
                <img src={JSON.parse(product.images)[0] } alt={title} />
                <span className='category'>{category.name}</span>
            </div>
            <div className='card-content'>
                <h2>{title}</h2>
                <p className='price'>${price}</p>
                <button className='btnRemove' onClick={removeProduct} >Remove</button>
            </div>
        </article>
    )
}

export default CartProduct