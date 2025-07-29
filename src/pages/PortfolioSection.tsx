import React, { useState } from "react";

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
            id: 1,
            title: "IoT Monitoring Station",
            description: "A full-stack IoT system for collecting, processing, and visualizing sensor data using MQTT, Docker, InfluxDB, and Grafana.",
            image:
              "src/images/IoT.png",
            details: `Welcome to the IoT Monitoring Station project repository.
    The goal is to design and deploy a complete IoT system that collects, processes, and visualizes live sensor data.

Main components:
- IoT Devices: Simulated with Python or real ESP32 microcontrollers sending data via MQTT.
- MQTT Broker: Manages all incoming sensor messages and routes them to the backend.
- Backend: Subscribes to the MQTT Broker, processes data, and writes it to InfluxDB.
- InfluxDB: Stores time-series sensor data.
- Grafana: Provides dashboards to monitor and visualize the data in real time.

This project is structured into 8 weeks covering:
1. Setup & introduction
2. MQTT and client-server communication
3. Docker basics
4. Docker Compose for multi-container apps
5. InfluxDB for time-series storage
6. Grafana dashboards for live monitoring
7. Deployment using Play with Docker
8. Final presentations and ESP32 hardware demo

Skills: Python, MQTT, Docker, Docker Compose, InfluxDB, Grafana, end-to-end IoT architecture.`,
      link: "https://github.com/yourusername/iot-monitoring-station"
      },
    {
      id: 2,
      title: "Credit Card Fraud Detection (Colab)",
      description: "A machine learning project to detect credit card fraud using Python and scikit-learn.",
      image: "src/images/fraud-detection.jpg",
      details: `This collaborative project was completed with my classmates to build a fraud detection model.

We used a real-world dataset to identify fraudulent transactions using machine learning algorithms.

Key steps included data cleaning, feature engineering, model training, and evaluation.

Skills: Python, Google Colab, pandas, scikit-learn, data visualization.

Open the notebook below to explore the code and results:`,
      link: "https://colab.research.google.com/drive/1FSyNjL3wz7gjXLooirzZ41wHQpmDMK_U?usp=sharing"
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      description:
        "A comprehensive analytics dashboard for SaaS businesses with data visualization tools.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      details: `A responsive SaaS analytics dashboard.
Features:
- User roles and permissions
- Interactive charts and graphs (Chart.js)
- Real-time data updates with WebSockets
- Exportable reports
Skills: React, Chart.js, Node.js, Express, Socket.io, JWT auth.`
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-5xl font-bold mb-4 text-white text-center">
          Projects
        </div>
        <div className="text-xl mb-16 text-white text-center">
          MY LATEST WORK. <span className="text-green-500">SEE MORE &gt;</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">
                  {`PROJECT 0${project.id}`}
                </h3>
              </div>
              <div className="absolute inset-0 bg-green-500 bg-opacity-90 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-white text-center mb-6">
                  {project.description}
                </p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="border-2 border-white text-white hover:bg-white hover:text-green-500 transition-colors duration-300 py-2 px-4 rounded-md"
                >
                  VIEW PROJECT
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4"
            style={{ animation: "fadeIn 0.3s ease-in-out" }}
          >
            <style>{`
              @keyframes fadeIn {
                from {opacity: 0;}
                to {opacity: 1;}
              }
            `}</style>
            <div className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-900 max-w-3xl w-full rounded-xl shadow-2xl p-8 overflow-y-auto max-h-[85vh] font-sans">
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 text-gray-700 hover:text-green-600 text-4xl font-bold transition-colors"
              >
                &times;
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-72 object-cover rounded-lg mb-6 shadow-lg"
              />

              <h2 className="text-4xl font-extrabold mb-4 tracking-wide drop-shadow-sm">
                {selectedProject.title}
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-gray-800">
                {selectedProject.description}
              </p>

              <div
                className="bg-white p-6 rounded-lg shadow-inner text-gray-900 whitespace-pre-line mb-6 leading-relaxed text-base"
                style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", lineHeight: 1.6 }}
              >
                {selectedProject.details}
              </div>

              {selectedProject.link && (
                <div>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
                  >
                    View Project Link
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
