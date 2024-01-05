import { useContext } from "react"
import styled from "styled-components"
import { CartContext } from "../../context/CartContext"

function CartSummary() {
  const {cartCount, cartTotal} = useContext(CartContext);

  return (
    <StyledCartSummary>
        <h3>Summary</h3>
        <div>Total Items: <span>{cartCount}</span></div>
        <div>Sub total: <span>${cartTotal}</span></div>
    </StyledCartSummary>
  )
}

const StyledCartSummary = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3{
    font-weight: 500;
    padding-bottom: 8px;
    border-bottom: 1px solid #dbd8d8;
    margin-bottom: 10px;
  }
  span{
    font-weight: 600;
  }
`

export default CartSummary