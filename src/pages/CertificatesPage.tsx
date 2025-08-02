import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Certificates() {
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
  {
    img: "/googleCybersec-cert.png",
    alt: "Google Cybersecurity Certificate",
    title: "Google Cybersecurity Professional Certificate",
    year: "2024",
    issuer: "Google",
    description:
      "Comprehensive certification covering cybersecurity fundamentals, network security, incident response, risk management, and hands-on threat detection using industry-standard tools.",
  },
  {
    img: "/Azure AI cert_page-0001.jpg",
    alt: "Azure AI Certificate",
    title: "Microsoft Azure AI Fundamental Certificate",
    year: "2025",
    issuer: "Microsoft",
    description:
      "It covers core AI concepts, machine learning, and how to use Azure services to build and deploy AI solutions. Through this, I gained a solid understanding of responsible AI, natural language processing, and computer vision.",
  },
  {
    img: "/Red Teaming LLM Application.png",
    alt: "Red Teaming LLM Application.png",
    title: "Red Teaming LLM Application.png",
    year: "2025",
    issuer: "Deep Learning AI",
    description:
      "Developed a Red Teaming LLM Application to explore how large language models can be tested and evaluated for security vulnerabilities, helping improve AI system robustness and safe deployment.",
  },
  {
    img: "/Security Risks in AI and Machine Learning_page-0001.jpg",
    alt: "Security Risks in AI and Machine Learning",
    title: "Security Risks in AI and Machine Learning",
    year: "2025",
    issuer: "LinkedIn Learning",
    description:
      "Explores common security risks in AI and machine learning, including data poisoning,model evasion, adversarial attacks, and privacy concerns. Focuses on how these risks can impact model integrity and reliability,and highlights practical strategies to identify, test, and mitigate vulnerabilities to ensure safer AI systems.",
  },
  
];

return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          CERTIFICATES
        </h2>
        <p className="text-xl mb-8 text-center">
          <Link to="/src/pages/SeeMoreCerts.tsx" className="text-green-500 hover:underline">
            SEE MORE &gt;
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
              <h5 className="text-xl font-bold">{cert.title}</h5>
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