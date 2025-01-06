// Generate a hook to fetch data from an API

import { useState, useEffect } from 'react';

export const useGetData = (url) => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error en la petición');
                }
                return response.json();
            })
            .then((info) => {
                setData(info);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })
        }, [url]);
    
    return { data, loading, error };
}