import React from 'react'
import "./homePage.scss"
import SearchBar from '../../components/searchbar/SearchBar'

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
            <h1 className="title">Welcome to our website</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quod et, ipsam sequi error, tenetur ipsa voluptate expedita commodi deserunt consequatur, eligendi qui ducimus doloremque incidunt inventore repellat maxime culpa?
            </p>
            <SearchBar/>
            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <p>Years of experience</p>
              </div>
              <div className="box">
                <h1>45</h1>
                <p>Cities Covered</p>
              </div>
              <div className="box">
                <h1>1000+</h1>
                <p>Happy Customers</p>
              </div>
            </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage
