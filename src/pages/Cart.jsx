import { useContext } from "react"
import Navbar from "../components/ui/Navbar"
import { CartContext } from "../context/CartContext"
import styled from "styled-components"
import CartSummary from "../components/cart/CartSummary"
import CartItem from "../components/cart/CartItem"

function Cart() {
    const { cartItems } = useContext(CartContext)
    return (
        <StyledCart>
            <Navbar />
            <div className="cart-container">
                <div className="cart-items-wrapper">
                    <h2 className="heading">Shopping Cart</h2>
                    <div className="cart-items">
                        {
                            cartItems.map((product, idx) => {
                                return (
                                    <CartItem
                                        product={product}
                                        key={product.id}
                                        removeCartBtn={true}
                                    />
                                )
                            })
                        }
                        {
                            cartItems.length === 0 && <span className="no-items">No items in the cart</span>
                        }
                    </div>
                </div>
                <div className="cart-summary">
                    <CartSummary />
                </div>
            </div>
        </StyledCart>
    )
}

const StyledCart = styled.div`
    margin-top: 60px;
    padding: 20px 8%;
    min-height: calc(100vh - 60px);
    background-color: #e3e6e6;
    .cart-container{
        min-height: calc(100vh - 60px - 70px);
        width: 100%;
        display: flex;
        gap: 10px;
        .cart-items-wrapper {
            flex: 1;
            height: 100%;
            .heading{
                margin-bottom: 20px;
            }
            .cart-items{
                min-height: 100%;
                display: flex;
                flex-direction: column;
                gap: 15px;
                position: relative;
            }
        }
        .cart-summary{
            margin-top: 50px;
            width: 300px;
            padding: 20px;
            height: fit-content;
            background-color: #fff;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            border-radius: 3px;
        }
        .no-items{
            position: absolute;
            top: calc(50% + 100px);
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    @media (max-width: 769px){
        .cart-container{
            flex-direction: column-reverse;
            .cart-summary{
                width: 100%;
                margin-top: 0;
            }
        }
    }
`

export default Cart