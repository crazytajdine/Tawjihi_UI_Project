import React from "react";

export default function BourseCard({ bourse }) {
  const { nom, date_limite, image, programme } = bourse;

  return (
    <div
      className="
        w-full rounded-md shadow-md 
        bg-[var(--collection-1-main)]  /* Fond orange */
        text-black                    /* Texte noir */
        p-4 flex flex-col items-start gap-4
        transition-all duration-300 
        hover:shadow-lg hover:scale-[1.01]
      "
    >
      {/* Image pas trop grande (h-32) */}
      <img
        src={image || "/placeholder-image.jpg"}
        alt={nom}
        className="w-full h-32 object-cover rounded"
      />

      <h3 className="text-lg font-bold">{nom}</h3>
      <p className="text-sm">
        Date limite: {date_limite || "Non spécifiée"}
      </p>

      <div className="flex flex-col gap-2">
        {programme.map((link, idx) => (
          <a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block text-white bg-black
              px-3 py-1 rounded-md text-sm
              hover:bg-opacity-80 transition-colors
            "
          >
            Voir Programme {idx + 1}
          </a>
        ))}
      </div>
    </div>
  );
}
