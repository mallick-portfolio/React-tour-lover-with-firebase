import React from "react";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const { id,title, image, description, price } = service;
  return (
    <div className="col">
      <div className="card serviceCard h-100">
        <img src={image} className="card-img-top serviceImg" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p title={description} className="card-text">
            {description.length <= 250
              ? description
              : description.slice(0, 250)}
            ...
          </p>
         <h4>${price}</h4>
         <Link to={`/checkout/${id}`} className="btn btn-info">Check Out</Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
