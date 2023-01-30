import { React, Fragment } from 'react'
import './Cards.css'
import Header from '/src/components/Header/Header'
import AlbumData from '/src/AlbumData'
import { Link } from "react-router-dom";

function Cards() {
  const images = AlbumData.map(image => {
    return (
      <div className="card">
        <div key={image.id}>
          <img className="cardImg" src={image.img} alt="Placeholder" />
          <div className="cardBody">
            <p className="cardText">
                {image.description}
            </p>
            <div className="bodyBtn">
              <Link to={`/image/${image.name}`}> 
                 <button className="bodyBtn" id="viewBtn">View</button>
              </Link>
              <button className="bodyBtn" id="editBtn">Edit</button>
            </div>
            <small className="time">{image.time}</small>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <div className="Header">
        <Header />
      </div>
      <div className="Wrapper">
        {images}
      </div>
    </Fragment>
  );
}

export default Cards