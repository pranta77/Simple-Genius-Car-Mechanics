import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="">
      <h2 className="text-primary mt-5 mb-5 bg-info">Our Services</h2>
      <div className="service-container">
        {services.map((service) => (
          <Service key={service.id} allService={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
