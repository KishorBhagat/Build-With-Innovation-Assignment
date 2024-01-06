import React, { useContext } from 'react'
import styled from 'styled-components'
import SearchInput from './SearchInput';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import IconCart from '../icons/IconCart';
import PriceRangeSelector from './PriceRangeSelector';
import PriceRangeSelector2 from './PriceRangeSelector2';

function Navbar() {

  const { cartCount } = useContext(CartContext);
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.replace('/login')
  }


  return (
    <StyledNavbar>
      <Link to="/" className='logo'>Home</Link>
      <SearchInput />
      <div className='tools'>
        <Link to="/cart" className='cart-link'><button className="cart-btn"><IconCart /><span>{cartCount}</span></button></Link>
        <button className='logout-btn' onClick={handleLogout}>Logout</button>
      </div>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #232f3e;
  color: white;
  .logo{
    text-decoration: none;
    color: white;
  }
  .tools{
    display: flex;
    gap: 30px;
    .logout-btn, .cart-btn{
        cursor: pointer;
        background-color: transparent;
        border: none;
        color: white;
        font-size: 16px;
    }
    .cart-btn{
      position: relative;
      span{
        background-color: #0075ff;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        position: absolute;
        top: -6px;
        right: -8px;
      }
    }
  }
  @media (max-width: 1000px){
    position: fixed;
    .logo, .price-range-selector{
      display: none;
    }
  }
`

export default Navbar