import React from 'react';

const { useState } = React;

const Squares = () =>{

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div id="AspectRatioSquare-container">
      <div id="AspectRatioSquare-content">
        <div id="AspectRatioSquare-writing">
          {nums.map((item) => {
            // let id = 'AspectRatioSquareItem' + item;
            // console.log('id: ', id);
            return <div className="square-item" id={'square-item' + item}>{item}</div>
          })}
          {/* <div className="square-item"></div>
          <div className="square-item"></div>
          <div className="square-item"></div>
          <div className="square-item"></div>
          <div className="square-item"></div>
          <div className="square-item"></div>
          <div className="square-item"></div>
          <div className="square-item"></div>
          <div className="square-item"></div>
          <div className="square-item"></div>
          <div className="square-item"></div>
          <div className="square-item"></div>
          <div className="square-item"></div>
          <div className="square-item"></div>
          <div className="square-item"></div>
          <div className="square-item"></div> */}
        </div>
      </div>
    </div>
  )
}

export default Squares;