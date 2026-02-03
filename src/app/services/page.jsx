import { LuBaby } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa6";
import ServiceCard from "./_component/ServiceCard";

const services = [
  {
    id: 1,
    icon: <LuBaby size={28}/>,
    title: "Baby Care",
    subtitle: "Professional and loving care for your little ones",
    hourlyRate: 150,
    dailyRate: 1200,
    description:
      "Our certified baby care professionals provide nurturing, safe, and stimulating care for infants and toddlers. From feeding and diaper changes to playtime and nap routines, we ensure your child receives the best care while you're away.",
    includings: [
      "Certified caregivers",
      "Feeding & diaper care",
      "Daily progress reports",
      "Age-appropriate activities",
      "Sleep routine management",
    ],
  },
  {
    id: 2,
    icon: <FaRegHeart size={26}/>,
    title: "Elderly Care",
    subtitle: "Compassionate care for your senior family members",
    hourlyRate: 180,
    dailyRate: 1500,
    description:
      "We provide dignified, respectful care for elderly family members who need assistance with daily activities. Our caregivers are trained in senior care, including mobility assistance, medication reminders, and companionship.",
    includings: [
      "Trained senior caregivers",
      "Mobility assistance",
      "Light housekeeping",
      "Medication reminders",
      "Companionship",
    ],
  },
  {
    id: 3,
    icon: <FaHandHoldingMedical size={26}/>,
    title: "Sick People Care",
    subtitle: "Specialized care for family members recovering at home",
    hourlyRate: 200,
    dailyRate: 1800,
    description:
      "Our specialized caregivers assist family members recovering from illness or surgery. We provide medical support, medication management, and ensure a comfortable recovery environment at home.",
    includings: [
      "Medical background caregivers",
      "Medication management",
      "Health monitoring",
      "Post-surgery care",
      "24/7 availability",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-primary/3 py-5 h-screen">
      <div className="text-center my-8">
        <h2 className="font-bold text-4xl">Our Specialized Care Services</h2>
        <p className="text-gray-500 text-lg mt-2">
          Whether it&apos;s for your child, aging parents, or yourself, we have
          specialized professionals
          <br /> ready to help.
        </p>
      </div>
      <div className="container mx-auto mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
