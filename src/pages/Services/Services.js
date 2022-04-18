import React from "react";
import { Container } from "react-bootstrap";
import useServices from "../../hooks/useServices";
import Service from "./Service";

const Services = () => {
  const [services] = useServices()
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5">My Services</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </Container>
  );
};

export default Services;
