import React, { useState } from "react";
// import "fridygoapp/styles/global.css"
import {burn, burnImgs} from '../data/food_data'

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

//   if(modal) {
//     document.body.classList.add('active-modal')
//   } else {
//     document.body.classList.remove('active-modal')
  
// src={burn[burnImgs[0]].img}
  return (
    <>
      {/* <button><img src= {burn[burnImgs[0]]} onClick={toggleModal} className="btn-modal">
       
      </img></button> */}

        <button onClick={toggleModal} className="btn-modal"> </button> 

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Food Info</h2>
            <h4>How many are left</h4>
            <p>
              3
            </p>
            <h4>How Long it Can Last?</h4>
            <p>
              In our fridges we try to stick with the store shell recomended experation date as best as we can!
            </p>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}