import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { FilterContext } from "../../context/FilterContext"

function PriceRangeSelector2() {

    const { priceRange, setPriceRange } = useContext(FilterContext);
    const [minPrice, setMinPrice] = useState(priceRange.min);
    const [maxPrice, setMaxPrice] = useState(priceRange.max);

    useEffect(() => {
        setMinPrice(priceRange.min)
        setMaxPrice(priceRange.max)
    }, [priceRange])

    const handlePriceMinChange = (e) => {
        setMinPrice(e.target.value)
    }
    const handlePriceMaxChange = (e) => {
        setMaxPrice(e.target.value)
    }

    const handleFilterByPrice = () => {
        setPriceRange({min: minPrice, max: maxPrice})
    }

    return (
        <StyledPriceRangeSelector2 className="price-range-selector">
            <label htmlFor="price-min">min</label>
            <input type="number"
                id="price-min"
                onChange={(e) => handlePriceMinChange(e)}
                value={minPrice}
            />
            -
            <label htmlFor="price-min">max</label>
            <input type="number"
                id="price-max"
                onChange={(e) => handlePriceMaxChange(e)}
                value={maxPrice}
            />
            <button onClick={handleFilterByPrice}>Go</button>
        </StyledPriceRangeSelector2>
    )
}

const StyledPriceRangeSelector2 = styled.div`
    display: flex;
    width: fit-content;
    height: 20px;
    gap: 5px;
    input{
        width: 60px;
        padding: 0 5px;
        border: none;
        outline: none;
        border-radius: 2px;
        &:focus{
            outline: 2px solid #0075ff;
        }
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0; 
    }
    button{
        height: 20px;
        width: 30px;
        border: none;
        background-color: #0075ff;
        color: white;
        border-radius: 2px;
        cursor: pointer;
    }
`
export default PriceRangeSelector2