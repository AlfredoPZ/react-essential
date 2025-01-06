import React from 'react'
import { useParams } from 'react-router'
import { useGetData } from '../../hooks/useGetData';

export const ProductDetail = () => {

    const params = useParams();
    const {data, loading, error} = useGetData(`https://api.escuelajs.co/api/v1/products/${params.id}`);

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error: {error.message}</h1>
    }



    return (
        <div>
            <h1>{data.title}</h1>            
            <img src={JSON.parse(data.images)[0]} alt={data.title} />
            <p>{data.description}</p>
        </div>
    )
}
