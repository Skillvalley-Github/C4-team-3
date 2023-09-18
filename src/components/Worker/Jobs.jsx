import React from "react";

function Jobs() {
  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "New York, NY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "San Francisco, CA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Los Angeles, CA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="max-w-3xl flex flex-col items-center  mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Job Listings</h1>
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li key={job.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.location}</p>
            <p className="mt-2">{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Jobs;
