import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

function SearchBox() {

  const [keyword, setKeyword] = useState('')

  const navigate = useNavigate()

  const submitSearchHandler = (e) => {
    e.preventDefault()
    if(keyword) {
      navigate(`/products?keyword=${keyword}`)
      setKeyword('')
    } else {
      navigate(navigate(navigate.location.pathname))
    }
  }

  return (
    <form className='search-form' onSubmit={submitSearchHandler}>
      <input
        type="text"
        placeholder='search products'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}/>
      <button type="submit"><SearchIcon style={{color:'#FF4500'}} /></button>
    </form>
  )
}

export default SearchBox
