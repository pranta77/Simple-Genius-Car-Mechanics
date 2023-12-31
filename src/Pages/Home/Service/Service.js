import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";

const Service = ({ allService }) => {
  //   const { allService } = props;
  const { id, Name, Price, description, img } = allService;
  return (
    <div className="service pb-5">
      <img width={350} src={img} alt="" />
      <h3>{Name}</h3>
      <h4>Price: {Price}</h4>
      <p className="px-3">{description}</p>
      <Link to={`/booking/${id}`}>
        <button className="btn btn-warning">Book {Name.toLowerCase()}</button>
      </Link>
    </div>
  );
};

export default Service;
