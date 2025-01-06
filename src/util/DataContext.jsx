import { createContext, useState } from "react";
import { useGetData } from "../hooks/useGetData";

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const { data, loading, error } = useGetData('https://api.escuelajs.co/api/v1/products');
    if (loading) {
        return <h1>Cargando...</h1>
    }
    
    if (error) {
        return <h1>Error: {error.message}</h1>
    }


    return (
        <DataContext.Provider value={{data, cart, setCart}}>
            {children}
        </DataContext.Provider>
    )
}
