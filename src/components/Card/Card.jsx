import React from 'react'
import './Card.css'

const Card = ({cardInfo, addReview, callBackFunction}) => {
    const {img, title, rating, reviews, description} = cardInfo
    const newTitle = title + ' - New Title';
    return (
        <article>
            <img src={img} alt="placeholder" />
            <section className='cardInfo'>
                <div className='top'>
                    <h2>{title}</h2>
                    <div className="rating">
                        <span>{rating}</span>
                        <span>{reviews}</span>
                    </div>
                </div>

                <p className='description'>{description}</p>

                <div className='actions'>
                    <button>Like</button>
                    <button onClick={() => callBackFunction(newTitle)}>Share</button>
                </div>
                <button className='buyingBtn' onClick={addReview}>Buy</button>
            </section>

        </article>
    )
}

export default Card