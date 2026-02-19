import services from "@/Data/services.json";
import ServiceCard from "./_component/ServiceCard";

const ServicesPage = () => {
  return (
    <div className="">
      <div className="text-center my-8 flex flex-col items-center">
        <h2 className="font-bold text-4xl">Our Specialized Care Services</h2>
        <p className="text-gray-500 flex text-lg mt-2 max-w-150">
          Whether it&apos;s for your child, aging parents, or yourself, we have
          specialized professionals ready to help.
        </p>
      </div>
      <div className="container mx-auto my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
