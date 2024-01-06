import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styled from "styled-components";
import StarRating from "../ui/StarRating";

function CartItem({product}) {
  const { id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = product;
  const { cartCount, setCartCount, cartItems, setCartItems } = useContext(CartContext);

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
    <StyledCartItem>
      <img src={thumbnail} alt={title} />
      <div className="product-details">
        <span className="title ">{title}</span>
        <StarRating id={id} rating={rating}/>
        <span className="price">${price}.00</span>
        <button className="remove-from-cart-btn" onClick={() => handleRemoveFromCart(product)}>
          Remove from cart
        </button>
      </div>
    </StyledCartItem>
  )
}

const StyledCartItem = styled.div`
  background-color: #fff;
  display: flex;
  border-radius: 3px;
  width: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  img{
    width: 300px;
    height: 200px;
    border-radius: 3px 0 0 3px;
    border-right: 1px solid #eae8e8;
  }
  .product-details{
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    justify-content: flex-end;
    gap: 8px;
    padding: 0px 10px;
    flex: 1;
    .price{
      font-weight: 600;
    }

    .remove-from-cart-btn{
      cursor: pointer;
      border: none;
      background-color: #0075ff;
      color: white;
      text-transform: uppercase;
      border-radius: 3px;
      padding: 7px 20px;
      width: fit-content;
      margin-bottom: 5px;
    }
  }
  @media (max-width: 769px){
    height: 100px;
    img{
      width: 150px;
      height: 100%;
    }
    .product-details{
      gap: 2px;
      justify-content: space-between;
      padding: 10px 10px;
      .title{
        font-size: 14px;
      }
      .remove-from-cart-btn{
        margin-bottom: 0px;
        font-size: 12px;
      }
      .star-rating{
        display: none;
      }
    }
  }
`

export default CartItem