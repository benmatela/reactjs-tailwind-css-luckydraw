import React from "react";

function Card(props) {
  return props.drawnNumbers.map((num, i) => {
    return (
      <div className="col-4">
        <div className="card">
          <div className="card-body">
            <p className="card-text">{num}</p>
          </div>
        </div>
      </div>
    );
  });
}

export default Card;
