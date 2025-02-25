import React from 'react'
import "./homePage.scss"

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
            <h1 className="title">Welcome to our website</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quod et, ipsam sequi error, tenetur ipsa voluptate expedita commodi deserunt consequatur, eligendi qui ducimus doloremque incidunt inventore repellat maxime culpa?
            Animi ex facilis, consequatur nulla earum labore laudantium impedit vel magni quae iste similique nostrum quis, ducimus quod? Nobis nisi maiores voluptas, tenetur facere eaque sequi est? Ullam, adipisci obcaecati.
            </p>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage
