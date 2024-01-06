import styled from "styled-components"
import PriceRangeSelector2 from "./PriceRangeSelector2"

function MobileNav() {
  return (
    <StyledMobileNav>
        <div>
            Filter by price:
        </div>
        <PriceRangeSelector2 />
    </StyledMobileNav>
  )
}

const StyledMobileNav = styled.div`
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    /* height: 40px; */
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #3e4753;
    color: white;
    gap: 10px;
    @media (min-width: 1000px) {
        display: none;
    }
`

export default MobileNav