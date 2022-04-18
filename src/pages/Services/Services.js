import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5">My Services</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </Container>
  );
};

export default Services;
