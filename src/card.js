import React from "react";

const Card = (props) =>{
  const { id, name, email } = props;
  return(
    <div className="cards grow">
      <img alt='avtar' src={`https://robohash.org/${id}`} />
      <div>
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;