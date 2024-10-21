import React from "react";
import Image from "next/image";

const LearnMore = () => {
  const processSteps = [
    {
      title: "Upload",
      description: "Easily upload your files to FileDrive",
      imageSrc: "/dashboard-upload.png",
    },
    {
      title: "Organize",
      description: "Categorize and manage your files efficiently",
      imageSrc: "/dashboard-organize.png",
    },
    {
      title: "Share",
      description: "Securely share files with your team or clients",
      imageSrc: "/dashboard-share.png",
    },
    {
      title: "Collaborate",
      description: "Work together on files in real-time",
      imageSrc: "/dashboard-collaborate.png",
    },
  ];

  return (
    <div className="container mx-auto mb-20 px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">How FileDrive Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <Image
              src={step.imageSrc}
              alt={step.title}
              width={400}
              height={300}
              className="mb-4 rounded-lg shadow-sm"
            />
            <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
            <p className="text-gray-600 text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnMore;
