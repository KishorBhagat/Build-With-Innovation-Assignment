import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SearchContextProvider } from './context/SearchContext.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import { FilterContextProvider } from './context/FilterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <SearchContextProvider>
    <FilterContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </FilterContextProvider>
  </SearchContextProvider>

  //</React.StrictMode>
)
