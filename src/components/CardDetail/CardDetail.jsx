import React from 'react'
import './CardDetail.css'
import AlbumData from '/src/AlbumData'
import { useParams, useNavigate } from "react-router-dom"


function CardDetail() {

  function NavigateBack() {
    const navigate = useNavigate();
    const clickHandler = () => {
      navigate('/', {replace: true});
    }
    return (
      <button className="backBtn" onClick={clickHandler}>&#8249;</button>	
    )
  }

  const { imageName } = useParams()
  const thisImage = AlbumData.find(image => image.name === imageName)
    
  return (
    <div id="container">
      <div className="button">
        <NavigateBack />
      </div>

      <div className="card-details">
        <p className="cardDetailName"> {thisImage.name} </p>
        <p className="cardDetailDesc"> {thisImage.description} </p>
      </div>
      
      <div className="card-image">
        <img className="cardDetailImg" src={thisImage.img} alt="Placeholder" />
      </div>

    </div>
  );
}


export default CardDetail