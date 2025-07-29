// src/pages/SeeMoreCertificates.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function SeeMoreCertificates() {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");


 
  const openModal = (img: string) => {
    setModalImg(img);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImg("");
  };


  const certificates = [
    // First 4 — same as above
    {
      img: "/cc-cert.png",
      title: "Google Cybersecurity Professional Certificate",
      year: "2024",
      issuer: "Google",
      description:
        "Covers cybersecurity fundamentals, network security, incident response, risk management, and hands-on threat detection.",
    },
    {
      img: "/Azure AI cert_page-0001.jpg",
      title: "Microsoft Azure AI Fundamental Certificate",
      year: "2025",
      issuer: "Microsoft",
      description:
        "Core AI concepts, machine learning, NLP, computer vision, and responsible AI with Azure services.",
    },
    {
      img: "/cc-cert.png",
      title: "Certified in Cybersecurity",
      year: "2024",
      issuer: "ISC2",
      description:
        "Foundational certification covering network security, risk management, incident response, and security operations.",
    },
    {
      img: "/splunk.png",
      title: "Security Operation & Defense Analyst",
      year: "2024",
      issuer: "Splunk",
      description:
        "SIEM fundamentals, threat detection, log analysis, incident response, and hands-on with Splunk.",
    },
    {
        img: "/Microsoft Security Essentials Professional Certificate_page-0001.jpg",
        alt: "Microsoft Security Essentials Professional Certificate",
        title: "Microsoft Security Essentials Professional Certificate",
        year: "2025",
        issuer: "Microsoft",
        description:
          "Builds practical knowledge of core cybersecurity principles, including threat detection and response, identity and access management, and securing data across networks and cloud environments. It provides hands-on skills for protecting systems, managing security risks, and applying best practices to real-world IT and security challenges.",
      },
      {
        img: "/splunk.png",
        title: "Security Operation & Defense Analyst",
        year: "2024",
        issuer: "Splunk",
        description:
          "SIEM fundamentals, threat detection, log analysis, incident response, and hands-on with Splunk.",
      },
      {
        img: "/cc-cert.png",
        alt: "Certified in Cybersecurity",
        title: "Certified in Cybersecurity",
        year: "2024",
        issuer: "ISC2",
        description:
          "Foundational certification covering cybersecurity principles, network security, risk management, incident response, and security operations, validating core knowledge for entry-level cybersecurity roles.",
      },
      {
        img: "/wireshark.png",
        alt: "Practical Wireshark Certificate",
        title: "Practical Wireshark Certificate",
        year: "2024",
        issuer: "EC Council",
        description:
          "Hands-on certification focused on network traffic analysis, packet inspection, and threat detection using Wireshark to identify security risks and troubleshoot network vulnerabilities.",
      },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          ALL CERTIFICATES
        </h2>
        <p className="text-xl mb-8 text-center">
          <Link to="/" className="text-green-500 hover:underline">
            &lt; Back
          </Link>
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => openModal(cert.img)}
              className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl text-white font-bold">{cert.title}</h3>
              <span className="text-green-500">{cert.year}</span>
              <p className="text-gray-400 mb-4 inline-block ml-2">
                {cert.issuer}
              </p>
              <p className="text-gray-300">{cert.description}</p>
            </div>
          ))}
        </div>

        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-gray-900 p-4 rounded-lg max-w-3xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <img
                src={modalImg}
                alt="Certificate"
                className="w-full h-auto object-contain rounded"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}