import { createContext, useContext, useEffect, useState } from "react";

export const FilterContext = createContext({});

export const FilterContextProvider = ({ children }) => {

    const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });

    useEffect(() => {
        console.log(priceRange)
    }, [priceRange])

    return (
        <FilterContext.Provider value={{ priceRange, setPriceRange }}>
            {children}
        </FilterContext.Provider>
    )
}