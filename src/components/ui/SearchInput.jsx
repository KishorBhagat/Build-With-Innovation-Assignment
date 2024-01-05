import { useContext, useState } from "react"
import styled from "styled-components"
import { SearchContext } from "../../context/SearchContext"

const SearchInput = () => {
  
  const {searchValue, setSearchValue} = useContext(SearchContext);
  
  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <StyledSearchInput>
      <input
        spellCheck={false}
        className="search-input"
        type="text"
        onChange={handleSearch}
        value={searchValue}
        placeholder="Search"
      />
    </StyledSearchInput>
  )
}

const StyledSearchInput = styled.div`
  input{
    height: 40px;
    width: 400px;
    padding: 0 10px;
    outline: none;
    border-radius: 5px;
    border: none;
    &:focus{
      outline: 4px solid #0075ff;
    }
  }
  @media (max-width: 769px){
    input{
      width: 200px;
    }
  }
`

export default SearchInput