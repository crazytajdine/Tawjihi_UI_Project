import React from "react";

export default function CategoryCard({ category }) {
  const { category: categoryName, description, image, jobs } = category;

  return (
    <div className="w-full rounded-md shadow-md bg-white p-4 flex flex-col items-start gap-4">
      <img
        src={image || "/placeholder-image.jpg"}
        alt={categoryName}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-bold">{categoryName}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="flex flex-col gap-2">
        {jobs.slice(0, 3).map((job, idx) => (
          <a
            key={idx}
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline text-sm"
          >
            {job.title}
          </a>
        ))}
        {jobs.length > 3 && (
          <p className="text-sm text-gray-400">...et plus</p>
        )}
      </div>
    </div>
  );
}
