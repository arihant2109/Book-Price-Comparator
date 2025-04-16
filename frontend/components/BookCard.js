
import React from "react";
import Image from "next/image";
const BookCard = ({ image, name, author }) => {
  return (
    <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg bg-white p-4 hover:shadow-xl transition-shadow">
      <Image
        className="w-full h-60 object-contain mb-4"
        src={image}
        alt={name}

      />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">by {author}</p>
      </div>
    </div>
  );
};

export default BookCard;
