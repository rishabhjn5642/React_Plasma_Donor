import React from "react";
import "./CardsGrid.css";
function Cards(props) {
  return (
    <div>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="my pic" className="card_img" />
          <div className="card_info">
            <span className="card_category"></span>

            <h3 className="card_title">Name : {props.name}</h3>
            <h3 className="card_title">BloodGroup : {props.BloodGroup}</h3>
            <h3 className="card_title">price RS : {props.price}</h3>
            <a href={props.link}>
              <button>call {props.phonenumber}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
