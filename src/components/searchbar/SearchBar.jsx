import React, { useState } from 'react'
import "./SearchBar.scss"

const types = ["buy", "rent"]

const SearchBar = () => {
    const [query, setQuery] = useState({
        type: "buy",
        location :"",
        minPrice: 0,
        maxPrice: 0,
    });

    const switchTypes = (val) =>{
        setQuery(prev => ({...prev, type:val}));
    }
  return (
    <div className='searchBar'>
        <div className="type">
        {types.map((type)=>(
            <button key={type} onClick={()=>{
                switchTypes(type)
            }} className={query.type === type ? "active" : ""}>{type}</button>
        ))} 
        </div>
        <form action="/">
            <input type="text" name="location" placeholder='City Location' />
            <input type="number" name="minPrice" min={0} max={100000} placeholder="Minimum Price" />
            <input type="number" name="maxPrice" min={0} max={100000} placeholder='Maximum Price'/>
            <button>
                <img src="/search.png" alt="" />
            </button>
        </form>
    </div>
  )
}

export default SearchBar
