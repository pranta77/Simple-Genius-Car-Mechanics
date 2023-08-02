import React from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>this is an Booking --{serviceId}</h2>
      <h1>is this book service</h1>
    </div>
  );
};

export default Booking;
