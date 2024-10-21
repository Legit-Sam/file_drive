import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">About FileDrive</h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <Image
            src="/logo.png"
            width={300}
            height={300}
            alt="FileDrive logo"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <p className="text-lg">
            FileDrive is the easiest way to upload and share files with your company. Our mission is to simplify file management and collaboration for businesses of all sizes.
          </p>
          <p className="text-lg">
            Founded in 2023, we've quickly become a trusted partner for thousands of organizations worldwide. Our platform combines powerful features with an intuitive interface, making file sharing and storage effortless.
          </p>
          <p className="text-lg">
            At FileDrive, we prioritize security, reliability, and user experience. Our team of dedicated professionals works tirelessly to ensure your data is safe and accessible whenever you need it.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Security: Your data's safety is our top priority.</li>
          <li>Simplicity: We believe in making file management as easy as possible.</li>
          <li>Innovation: We're constantly improving our platform to meet evolving needs.</li>
          <li>Customer-focus: Your success is our success.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
