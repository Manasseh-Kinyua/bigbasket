import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

function SearchBox() {

  const navigate = useNavigate()

  const submitSearchHandler = (e) => {
    e.preventDefault()
  }

  return (
    <form className='search-form' onSubmit={submitSearchHandler}>
      <input type="text" />
      <button type="submit"><SearchIcon style={{color:'#FF4500'}} /></button>
    </form>
  )
}

export default SearchBox
