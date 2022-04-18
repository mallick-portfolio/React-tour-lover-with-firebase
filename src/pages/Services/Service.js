import React from "react";

const Service = ({ service }) => {
  const { title, image, description } = service;
  console.log(service);
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p title={description} className="card-text">
            {description.length <= 250
              ? description
              : description.slice(0, 250)}
            ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
