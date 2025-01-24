import React from 'react';
import { FaHeartbeat, FaMicrochip, FaHeart, FaSyringe } from 'react-icons/fa'; // Import required icons

// Create a mapping for the icons
const iconMapping = {
  FaHeartbeat: FaHeartbeat,
  FaMicrochip: FaMicrochip,
  FaHeart: FaHeart,
  FaSyringe: FaSyringe
};

const services = [
  {
    service: "Coronary and peripheral Angiography",
    icon: "FaHeartbeat"
  },
  {
    service: "Coronary Simple and Complex Angioplasty",
    icon: "FaHeartbeat"
  },
  {
    service: "Coronary analysis by IVUS/FFR",
    icon: "FaHeartbeat"
  },
  {
    service: "Permanent Pacemaker",
    icon: "FaMicrochip"
  },
  {
    service: "Balloon Mitral Valve Valvuloplasty",
    icon: "FaHeart"
  },
  {
    service: "Balloon Aortic Valve Valvuloplasty",
    icon: "FaHeart"
  },
  {
    service: "Balloon Pulmonary Valve Valvuloplasty",
    icon: "FaHeart"
  },
  {
    service: "Device Closure of ASD & PDA for Pediatric & Adult patients",
    icon: "FaSyringe"
  }
];

const Specialist = () => {
  return (
    <div className="services-container">
      <h2 className="text-xl font-bold mb-5 text-center mt-3 tracking-[2px] text-orange-500">Speciality</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[60%] m-auto gap-10 ">
        {services.map((service, index) => {
          const Icon = iconMapping[service.icon]; 
          return (
            <div key={index} className="service-item p-6 bg-white shadow-md rounded-lg items-center ">
              <Icon size={40} color="#e67e22" />
              <h3 className="mt-4 text-lg font-semibold">{service.service}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Specialist;
