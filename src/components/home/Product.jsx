import { useContext } from "react";
import styled from "styled-components"
import { CartContext } from "../../context/CartContext";

function Product({ product, removeCartBtn }) {
  const { id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = product;
  const { cartCount, setCartCount, cartItems, setCartItems } = useContext(CartContext);

  const handleAddToCart = (product) => {
    if (!cartItems.some((item) => item.id === product.id)) {
      setCartCount(prevCount => prevCount + 1);
      setCartItems([...cartItems, product]);
    }
  }
  const handleRemoveFromCart = (product) => {
    if (cartItems.some((item) => item.id === product.id)) {
      console.log("removed", product.id)
      setCartCount(prevCount => prevCount - 1);
      const indexToRemove = cartItems.findIndex(item => item.id === product.id);
      cartItems.splice(indexToRemove, 1);
      setCartItems([...cartItems])
    }
  }

  return (
    <StyledProduct>
      <img src={thumbnail} alt={title} />
      <div className="product-details">
        <span className="title ">{title}</span>
        <span className="price">${price}.00</span>
        {
          !removeCartBtn ?
            <button 
              className="add-to-cart-btn" 
              style={{backgroundColor: `${cartItems.some((item) => item.id === product.id)? "orange":"#0075ff"}`}}
              onClick={() => handleAddToCart(product)}
            >
              {cartItems.some((item) => item.id === product.id) ? "Item in the cart" : "Add to cart"}
            </button>
            :
            <button className="remove-from-cart-btn" onClick={() => handleRemoveFromCart(product)}>
              Remove from cart
            </button>
        }

      </div>
    </StyledProduct>
  )
}

const StyledProduct = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  width: 300px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  img{
    width: 100%;
    height: 200px;
    border-radius: 3px 3px 0 0;
    border-bottom: 1px solid #eae8e8;
  }
  .product-details{
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    gap: 5px;
    .title{
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .price{
      font-size: 20px;
      font-weight: 600;
    }
    .add-to-cart-btn, .remove-from-cart-btn{
      cursor: pointer;
      border: none;
      background-color: #0075ff;
      color: white;
      text-transform: uppercase;
      border-radius: 3px;
      padding: 7px 0px;
      width: 100%;
    }
  }
`
export default Product