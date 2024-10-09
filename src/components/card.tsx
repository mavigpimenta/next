import React from "react";

interface CardProps {
  image: string;
  name: string;
  id: string;
}

const Card: React.FC<CardProps> = ({ image, name, id }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">ID: {id}</p>
      </div>
    </div>
  );
};

export default Card;
