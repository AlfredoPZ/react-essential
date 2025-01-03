import React from 'react'

const NotProducts = ({productsLength}) => {
    return (
        <>
            {
                productsLength === 0 && <p className='infoMessage'>No products available</p>
            }
        </>
    )
}

export default NotProducts