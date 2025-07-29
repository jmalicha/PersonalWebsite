import React, { useRef } from 'react';
import PortfolioSection from './pages/PortfolioSection.tsx';
import {
  CircleUser,
  Mail,
  MapPin,
  FileText,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react';
import ContactForm from "./pages/ContactForm.tsx";
import emailjs from "@emailjs/browser";
import SeeMoreCertificates from './pages/SeeMoreCerts.tsx';
import SeeMoreCerts from './pages/SeeMoreCerts.tsx';
import Certificates from './pages/CertificatesPage.tsx';

function App() {
  // Create refs for each section to enable smooth scrolling
  const homeRef = useRef<HTMLDivElement>(null);
  // const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const blogsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Function to scroll to a section smoothly
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView(
{ behavior: 'smooth' });
    }
  };


  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Navigation - Fixed at the top */}
      <nav className="bg-gray-900 py-6 sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-2xl font-bold">
              J
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection(homeRef)}
              className="text-gray-300 hover:text-green-500 transition-colors duration-300"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection(educationRef)}
              className="text-gray-300 hover:text-green-500 transition-colors duration-300"
            >
              EDUCATION
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="text-gray-300 hover:text-green-500 transition-colors duration-300"
            >
              SKILLS
            </button>
            <button
              onClick={() => scrollToSection(experienceRef)}
              className="text-gray-300 hover:text-green-500 transition-colors duration-300"
            >
              EXPERIENCE
            </button>
            <button
              onClick={() => scrollToSection(certificatesRef)}
              className="text-gray-300 hover:text-green-500 transition-colors duration-300"
            >
              CERTIFICATES
            </button>
            <button
              onClick={() => scrollToSection(portfolioRef)}
              className="text-gray-300 hover:text-green-500 transition-colors duration-300"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => scrollToSection(blogsRef)}
              className="text-gray-300 hover:text-green-500 transition-colors duration-300"
            >
              BLOGS
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-gray-300 hover:text-green-500 transition-colors duration-300"
            >
              CONTACT
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section - Updated to match the card style in the image */}
      <section
        ref={homeRef}
        className="py-20 relative bg-cover bg-center flex items-center justify-center min-h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-80"></div>

        {/* Card container */}
        <div className="relative z-10 bg-gray-900 max-w-2xl mx-auto p-16 rounded-lg text-center">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <div className="w-32 h-32 relative">
              <div className="w-32 h-32 rounded-full border-2 border-green-500"></div>
              <div className="absolute inset-0 flex items-center justify-center text-green-500 text-7xl font-bold">
                J
              </div>
              <div
                className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-green-500 rounded-tr-full"
                style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
              ></div>
            </div>
          </div>

          {/* Main content */}
          <div className="mb-12">
            <div className="text-5xl font-bold mb-8">
              <div className="text-white">I'M JOYCE MALICHA</div>
            </div>
            <div className="text-xl text-gray-300 mb-8">
            CYBERSECURITY & AI SPECIALIST
            </div>
            <p className="text-gray-400 mb-10">
            Curiosity fuels my passion for technology, driving me to 
            continuously explore and adapt in the dynamic worlds of 
            cybersecurity and artificial intelligence. With a strong
             foundation in IT support and a keen understanding of 
             machine learning models and security principles, 
             I’m dedicated to bridging the gap between emerging 
             AI capabilities and robust security practices. Always eager 
             to learn and grow, I bring a proactive mindset and hands-on 
             experience that empower me to contribute effectively to any 
             team focused on securing the future of technology.
            </p>
          </div>

          {/* Download Resume Button */}

          <a
            href="https://drive.google.com/file/d/1fm1H_oJVp8vJnny3yCtnCus-3DHe2Aly/view?usp=sharing"
            download="Joyce_Malicha_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-2 border-green-500 text-white hover:bg-green-500 hover:text-white transition-colors duration-300 py-3 px-8 inline-block">
              DOWNLOAD RESUME
            </button>
          </a>
        </div>
      </section>
      
       {/* Education Section */}
<section
  ref={educationRef}
  className="py-20 bg-gray-900 bg-cover bg-center relative"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
  }}
>
  <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
  <div className="container mx-auto px-6 relative z-10">
    <div className="text-5xl font-bold mb-16 text-white text-center">
      <span className="text-gray-400"></span> EDUCATION
    </div>

    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500"></div>

      {/* Education 1 */}
      <div className="mb-24 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-green-500"></div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-10 md:text-right mb-10 md:mb-0">
            <div className="text-green-500 mb-2">2024-2025</div>
            <h3 className="text-2xl font-bold mb-2">
              GRAND VALLEY STATE UNIVERSITY
            </h3>
            <h4 className="text-xl mb-4">
              Master of Science in Cybersecurity
            </h4>
            <p className="text-gray-300 mb-2">
              Specialized in cybersecurity operations with a focus on
              threat detection, incident response, and data protection for
              secure digital environments.
            </p>
            <div className="text-green-500 mb-2">GPA: 3.83</div>
          </div>
          <div className="md:w-1/2 md:pl-10"></div>
        </div>
      </div>

      {/* Education 2 */}
      <div className="mb-24 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-green-500"></div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-10"></div>
          <div className="md:w-1/2 md:pl-10">
            <div className="text-green-500 mb-2">2016-2020</div>
            <h3 className="text-2xl font-bold mb-2">
              CATHOLIC UNIVERSITY OF EASTERN AFRICA
            </h3>
            <h4 className="text-xl mb-4">
              Bachelor of Science in Computer Science
            </h4>
            <p className="text-gray-300 mb-2">
              Specialized in software development and system security with
              a focus on designing efficient algorithms, optimizing system
              performance, and building secure digital solutions.
            </p>
            <div className="text-green-500 mb-2">GPA: 3.15</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <section ref={skillsRef} id="skills" className="py-20 bg-gray-900 text-white">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-white mb-12">
      Skills
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">

      {/* Cybersecurity Operations & Forensics */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          🛡️ Cybersecurity Operations & Forensics
        </h3>
        <p className="text-gray-300 mb-1">
          Threat Hunting, Incident Response, SIEM, EDR, CTI, Disk & Memory Forensics, Malware Analysis.
        </p>
        <p className="text-gray-300">
          Tools: Splunk, ELK, QRadar, CrowdStrike, SentinelOne, Autopsy, Volatility, Cuckoo Sandbox.
        </p>
      </div>

      {/* Programming & Scripting */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          💻 Programming & Scripting
        </h3>
        <p className="text-gray-300 mb-1">
          Python, JavaScript, TypeScript, Bash, PowerShell, C++.
        </p>
        <p className="text-gray-300">
          Automation, API Dev, Secure Coding.
        </p>
      </div>

      {/* Operating Systems & IT Admin */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          🖥️ OS & IT Administration
        </h3>
        <p className="text-gray-300 mb-1">
          Windows, Linux (Kali), macOS.
        </p>
        <p className="text-gray-300">
        Microsoft Entra ID, Active Directory, Microsoft Office 365, Group Policy, System Imaging & Updates, Troubleshooting.
        </p>
      </div>

      {/* Web Application Security */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          🔒 Web Application Security
        </h3>
        <p className="text-gray-300 mb-1">
          OWASP Top 10, WAFs, Secure Auth (JWT, OAuth), Input Validation, HTTPS/TLS, API Security.
        </p>
        <p className="text-gray-300">
          Tools: Burp Suite, ZAP Proxy, Postman.
        </p>
      </div>

      {/* Network Security */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          🌐 Network Security
        </h3>
        <p className="text-gray-300 mb-1">
          Firewalls, IDS/IPS, VPNs, Network Monitoring, DDoS Mitigation.
        </p>
        <p className="text-gray-300">
          Tools: pfSense, Cisco ASA, Wireshark, Snort, Suricata, Zeek.
        </p>
      </div>

      {/* Cloud Security & DevOps */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          ☁️ Cloud Security & DevOps
        </h3>
        <p className="text-gray-300 mb-1">
          AWS Security Hub, Azure Security Center, Google SCC, Docker, Kubernetes, CI/CD, IaC, Cloud IAM.
        </p>
        <p className="text-gray-300">
          Tools: Terraform, GitHub Actions.
        </p>
      </div>

      {/* AI & Machine Learning */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          🤖 AI & Machine Learning
        </h3>
        <p className="text-gray-300 mb-1">
          NLP, LLM Orchestration, Agents, Prompt Engineering, Model Training & Tuning.
        </p>
        <p className="text-gray-300">
          Tools: TensorFlow, LangChain, n8n, OpenAI API, Azure AI, AWS AI Services.
        </p>
      </div>

      {/* OSINT */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          🔍 Open Source Intelligence (OSINT)
        </h3>
        <p className="text-gray-300 mb-1">
          Recon, Footprinting, Social Engineering, Dark Web Monitoring.
        </p>
        <p className="text-gray-300">
          Tools: Maltego, theHarvester, Shodan, SpiderFoot.
        </p>
      </div>

      {/* Professional Strengths */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          🎯 Professional Strengths
        </h3>
        <p className="text-gray-300">
          Critical Thinking, Incident Handling, Communication, Leadership, Teamwork, Ethical Hacking Mindset.
        </p>
      </div>

    </div>
  </div>
</section>


    

      {/* Experience Section */}
      <section
        ref={experienceRef}
        className="py-20 bg-gray-800 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-5xl font-bold mb-16 text-white text-center">
            <span className="text-gray-400"></span> WORK EXPERIENCE
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-[920px] w-2 bg-green-500"></div>

            {/* Experience 1 */}
            <div className="mb-24 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-green-500"></div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 pr-10 md:text-right mb-10 md:mb-0">
                  <div className="text-green-500 mb-2">2024-2025</div>
                  <h3 className="text-2xl font-bold mb-2">
                    GRAND VALLEY STATE UNIVERSITY
                  </h3>
                  <h4 className="text-xl mb-4">Graduate Teaching Assistant</h4>
                  <p className="text-gray-300">
                    Designed and configured interactive cybersecurity lab
                    environments while guiding students through hands-on
                    security exercises in penetration testing, network analysis,
                    and digital forensics using industry-standard tools.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-10"></div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="mb-24 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-green-500"></div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 pr-10"></div>
                <div className="md:w-1/2 md:pl-10">
                  <div className="text-green-500 mb-2">2022-2024</div>
                  <h3 className="text-2xl font-bold mb-2">SMARTSWIFT</h3>
                  <h4 className="text-xl mb-4">
                    Frontend Developer & UI/UX Designer
                  </h4>
                  <p className="text-gray-300">
                    Developed and optimized responsive web applications,
                    enhancing user experience through intuitive UI/UX design
                    while implementing modern frontend technologies to improve
                    performance, accessibility, and engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-green-500"></div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 pr-10 md:text-right">
                  <div className="text-green-500 mb-2">2021-2022</div>
                  <h3 className="text-2xl font-bold mb-2">EQUITY AFIA</h3>
                  <h4 className="text-xl mb-4">IT System Administrator</h4>
                  <p className="text-gray-300">
                    Managed and secured IT infrastructure by troubleshooting
                    system issues, optimizing network performance, and
                    implementing security configurations to ensure system
                    reliability and compliance with IT policies.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-10"></div>
              </div>
            </div>
          </div>
          {/* Experience 2 */}
          <div className="mb-24 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-green-500"></div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 pr-10"></div>
              <div className="md:w-1/2 md:pl-10">
                <div className="text-green-500 mb-2">2020-2021</div>
                <h3 className="text-2xl font-bold mb-2">RADIO JANGWANI</h3>
                <h4 className="text-xl mb-4">IT Support - Intern</h4>
                <p className="text-gray-300">
                  Provided technical support by troubleshooting hardware,
                  software, and network issues, ensuring system functionality,
                  reducing downtime, and assisting with IT infrastructure
                  maintenance and security configurations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section ref={certificatesRef}><>
      <Certificates/>
    </></section>
      
<section ref = {portfolioRef}><>
      {/* other sections */}
      <PortfolioSection />
      {/* other sections */}
    </>
</section>
    
      {/* Blogs Section */}
<section ref={blogsRef} className="py-20 bg-gray-900">
  <div className="container mx-auto px-6">
    <div className="text-5xl font-bold mb-4 text-white text-center">
      BLOGS
    </div>
    <div className="text-xl mb-16 text-white text-center">
      INSIGHTS & THOUGHTS ON CYBERSECURITY, AI & ML
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Blog 1 */}
      <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src="src/images/deepfake.jpg"
          alt="Deepfake Detection"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="text-green-500 mb-2">July 10, 2024</div>
          <h3 className="text-xl font-bold mb-3">
            Understanding Deepfake Detection
          </h3>
          <p className="text-gray-300 mb-4">
            A look at how AI is used to detect manipulated media, the challenges of deepfake forensics, and why this matters for digital trust.
          </p>
          <a href="#" className="text-green-500 hover:underline">
            Read More →
          </a>
        </div>
      </div>

      {/* Blog 2 */}
      <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src="src/images/cyber-threats.jpeg"
          alt="Cyber Threat Trends"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="text-green-500 mb-2">June 18, 2024</div>
          <h3 className="text-xl font-bold mb-3">
            Latest Trends in Cyber Threats
          </h3>
          <p className="text-gray-300 mb-4">
            An overview of modern cybersecurity threats, from phishing to ransomware, and insights on how organizations can strengthen defenses.
          </p>
          <a href="#" className="text-green-500 hover:underline">
            Read More →
          </a>
        </div>
      </div>

      {/* Blog 3 */}
      <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src="src/images/AI:ML.jpeg"
          alt="Machine Learning Ethics"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="text-green-500 mb-2">May 25, 2025</div>
          <h3 className="text-xl font-bold mb-3">
            The Ethics of AI & Machine Learning
          </h3>
          <p className="text-gray-300 mb-4">
            Thoughts on responsible AI development, bias in ML models, and the importance of fairness and accountability in AI systems.
          </p>
          <a href="#" className="text-green-500 hover:underline">
            Read More →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section ref={contactRef} className="py-2 bg-gray-900">
  <div className="container mx-auto px-6 ">
    {/* <div className="text-5xl font-bold mb-4 text-white text-center">
      CONTACT
    </div>
    <div className="text-xl mb-16 text-white text-center">
      GET IN TOUCH WITH ME
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
        <p className="text-gray-400">You can reach out via the form or email me directly.</p>
        */}
      </div> 
      <ContactForm />
  
</section>


      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Joyce Malicha. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
