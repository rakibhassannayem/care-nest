"use client";
import { useParams } from "next/navigation";
import React from "react";

const ServiceDetails = () => {
  const { id } = useParams();
  return (
    <div className="container mx-auto">details of service number {id}</div>
  );
};

export default ServiceDetails;
