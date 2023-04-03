import React from 'react'
import './Search.css'
import  {AiOutlineSearch} from 'react-icons/ai' 

const  Search = () => {
  return (
    <div className='search' >
      <div className='secContainer container'>
        <h3 className='title'>
          which vehicle you are looking for ?
        </h3>

        <div className="searchDiv grid">
          <input type='type' placeholder='Type'></input>
          <input type='type' placeholder='year'></input>
          <input type='type' placeholder='model'></input>
          <input type='type' placeholder='price'></input>
         <button className='btn primaryBtn flex'>
         <AiOutlineSearch className="icon"/>
         <span>
          Search
         </span>
         </button>
        </div>
      </div>

    </div>
  )
}

export default Search