import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components"
import { FilterContext } from "../../context/FilterContext";

function PriceRangeSelector(props) {

  const [inputMinRange, setInputMinRange] = useState(props.min);
  const [inputMaxRange, setInputMaxRange] = useState(props.max);

  
  useEffect(() => {
    console.log(`${inputMinRange}-${inputMaxRange}`)
  }, [inputMinRange, inputMaxRange, props])

  const handleMinRangeInput = (e) => {
    setInputMinRange(e.target.value)
  }
  const handleMaxRangeInput = (e) => {
    setInputMaxRange(e.target.value)
  }
  return (
    <StyledPriceRangeSelector>
      <div className="range-value">{
        // inputMinRange>inputMaxRange ? `${inputMaxRange}-${inputMinRange}`: `${inputMinRange}-${inputMaxRange}`
      }
      {inputMinRange}-{inputMaxRange}
      </div>
      <br />
      <br />
      <div className="range-slider">
        <span className="range-selected"
          style={{
            backgroundColor: "#2268f3",
            left: `${inputMinRange/(props.max-props.min)*100}%`,
            right: `${100-(inputMaxRange/(props.max-props.min)*100)}%`
          }}
        >
        </span>
      </div>
      <div className="range-input">
        <input type="range"
          className="min-range-input"
          onChange={handleMinRangeInput}
          min={props.min}
          max={props.max}
          step={props.step}
          defaultValue={props.min}
        />
        <input type="range"
          className="max-range-input"
          onChange={handleMaxRangeInput}
          min={props.min}
          max={props.max}
          step={props.step}
          defaultValue={props.max}
        />
      </div>
    </StyledPriceRangeSelector>
  )
}

const StyledPriceRangeSelector = styled.div`
  margin-bottom: 100px;
  width: 500px;
  .range-slider{
    height: 5px;
    position: relative;
    background-color: #e1e9f6;
    border-radius: 2px;
  }
  .range-selected{
    height: 5px;
    /* left: 0%;
    right: 0%; */
    position: absolute;
    border-radius: 5px;
    /* background-color: #2268f3; */
  }

  .range-input{
    position: relative;
  }
  .range-input input{
    position: absolute;
    width: 100%;
    height: 5px;
    top: -7px;
    background: none;
    pointer-events: none;
    appearance: none; 
    -webkit-appearance: none;
  }
  .range-input input::-webkit-slider-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 3px solid #2268f3;
    background-color: #fff;
    pointer-events: auto;
    -webkit-appearance: none;
  }
`

export default PriceRangeSelector