import React from "react";

export default function BourseCard({ bourse }) {
  const { nom, date_limite, image, programme } = bourse;

  return (
    <div className="w-full rounded-md shadow-md bg-white p-4 flex flex-col items-start gap-4">
      <img
        src={image || "/placeholder-image.jpg"}
        alt={nom}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-bold">{nom}</h3>
      <p className="text-sm text-gray-600">
        Date limite: {date_limite || "Non spécifiée"}
      </p>
      <div className="flex flex-col gap-2">
        {programme.map((link, idx) => (
          <a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline text-sm"
          >
            Voir Programme {idx + 1}
          </a>
        ))}
      </div>
    </div>
  );
}
