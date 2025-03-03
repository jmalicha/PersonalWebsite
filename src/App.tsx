import React, { useRef } from 'react';
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
              onClick={() => scrollToSection(skillsRef)}
              className="text-gray-300 hover:text-green-500 transition-colors duration-300"
            >
              SKILLS
            </button>
    
            <button
              onClick={() => scrollToSection(educationRef)}
              className="text-gray-300 hover:text-green-500 transition-colors duration-300"
            >
              EDUCATION
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
              CYBERSECURITY ANALYST
            </div>
            <p className="text-gray-400 mb-10">
              A cybersecurity professional transitioning from web development
              and IT support, with expertise in data security, threat analysis,
              and security operations. My background in frontend development,
              UI/UX, and ICT support gives me a unique edge in securing digital
              environments. Passionate about SOC operations, digital forensics,
              and ethical hacking, I am committed to protecting systems,
              detecting threats, and strengthening security defenses.
            </p>
          </div>

          {/* Download Resume Button */}

          <a
            href="https://drive.google.com/file/d/1BBMe5s74nnfT3OGJ77lcM8Co3hIeXdYh/view?usp=sharing"
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
      <section ref={skillsRef}id="skills" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center text-white-500 mb-12">
            Skills
          </h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* Security Operations & Threat Analysis */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-green-400 mb-4 flex justify-center items-center">
                <i className="fas fa-shield-alt text-green-400 text-3xl mr-2"></i>{' '}
                Security Operations & Threat Analysis
              </h3>
              <p className="text-gray-300">
                Threat Hunting, SIEM Monitoring (Splunk, ELK, QRadar), Incident
                Response, Cyber Threat Intelligence (CTI), Log Analysis,
                Endpoint Detection & Response (EDR).
              </p>
            </div>

            {/* Programming & Scripting */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-green-400 mb-4 flex justify-center items-center">
                <i className="fas fa-code text-green-400 text-3xl mr-2"></i>{' '}
                Programming & Scripting
              </h3>
              <p className="text-gray-300">
                Python, JavaScript, Bash, PowerShell, SQL, Security Automation,
                API Security, Secure Coding Practices.
              </p>
            </div>

            {/* Security Tools & Technologies */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-green-400 mb-4 flex justify-center items-center">
                <i className="fas fa-tools text-green-400 text-3xl mr-2"></i>{' '}
                Security Tools
              </h3>
              <p className="text-gray-300">
                Splunk, Wireshark, Metasploit, Nmap, Nessus, OpenVAS, Snort,
                Suricata, Autopsy, Volatility, Burp Suite, Cuckoo Sandbox,
                CyberChef.
              </p>
            </div>

            {/* Web Security */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-green-400 mb-4 flex justify-center items-center">
                <i className="fas fa-lock text-green-400 text-3xl mr-2"></i> Web
                Security
              </h3>
              <p className="text-gray-300">
                OWASP Top 10, Secure Authentication (JWT, OAuth), Web
                Application Firewalls (WAF), Input Validation & Sanitization,
                Content Security Policy (CSP), HTTPS & TLS, Cross-Site Scripting
                (XSS) & SQL Injection Prevention, Security Headers.
              </p>
            </div>

            {/* Network & System Security */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-green-400 mb-4 flex justify-center items-center">
                <i className="fas fa-network-wired text-green-400 text-3xl mr-2"></i>{' '}
                Network & System Security
              </h3>
              <p className="text-gray-300">
                Firewalls (pfSense, Cisco ASA, OPNsense), Network Monitoring
                (Wireshark, Zeek), Intrusion Detection & Prevention (Snort,
                Suricata), SIEM (Splunk, ELK, QRadar), VPNs, Endpoint Security,
                DDoS Mitigation.
              </p>
            </div>

            {/* Cloud Security & DevOps */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-green-400 mb-4 flex justify-center items-center">
                <i className="fas fa-cloud text-green-400 text-3xl mr-2"></i>{' '}
                Cloud Security & DevOps
              </h3>
              <p className="text-gray-300">
                AWS Security Hub, Azure Security Center, Google Security Command
                Center, Docker, Kubernetes, CI/CD Security, Terraform,
                Infrastructure as Code (IaC), Cloud Identity & Access Management
                (IAM), Security Automation.
              </p>
            </div>

            {/* Digital Forensics & Incident Response */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-green-400 mb-4 flex justify-center items-center">
                <i className="fas fa-user-secret text-green-400 text-3xl mr-2"></i>{' '}
                Digital Forensics & IR
              </h3>
              <p className="text-gray-300">
                Disk & Memory Forensics (Autopsy, FTK Imager, Volatility),
                Malware Analysis (Cuckoo Sandbox), Threat Intelligence, Incident
                Handling, Log Analysis (Splunk, ELK).
              </p>
            </div>

            {/* Open Source Intelligence (OSINT) */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-green-400 mb-4 flex justify-center items-center">
                <i className="fas fa-search text-green-400 text-3xl mr-2"></i>{' '}
                Open Source Intelligence (OSINT)
              </h3>
              <p className="text-gray-300">
                Maltego, theHarvester, Shodan, Recon-ng, SpiderFoot, WHOIS
                Lookups, Google Dorking, Social Media Recon, Domain & IP
                Enumeration.
              </p>
            </div>

            {/* Soft Skills */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold text-green-400 mb-4 flex justify-center items-center">
                <i className="fas fa-user-tie text-green-400 text-3xl mr-2"></i>{' '}
                Soft Skills
              </h3>
              <p className="text-gray-300">
                Critical Thinking, Incident Response Decision-Making, Security
                Awareness & Risk Management, Leadership, Communication &
                Documentation, Ethical Mindset, Continuous Learning, Team
                Collaboration.
              </p>
            </div>
          </div>
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
                  <p className="text-gray-300">
                    Specialized in cybersecurity operations with a focus on
                    threat detection, incident response, and data protection for
                    secure digital environments.
                  </p>
                  {/* <div className="text-teal-500 mb-2">GPA: 3.75</div> */}
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
                  <p className="text-gray-300">
                    Specialized in software development and system security with
                    a focus on designing efficient algorithms, optimizing system
                    performance, and building secure digital solutions.
                  </p>
                </div>
              </div>
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
      <section ref={certificatesRef} className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center text-white-500 mb-4">
            CERTIFICATES
          </h2>
          <p className="text-xl mb-8 text-white text-center">
            <span className="text-green-500"><button>SEE MORE &gt;</button></span>
          </p>
          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {/* Certificate 1 */}
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500 hover:scale-105 transition-transform duration-300">
              <img
                src="/googlecybersec-cert.png"
                alt="Google Cybersecurity Certificate"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">
                Google Cybersecurity Professional Certificate
              </h3>
              <span className="text-green-500">2024</span>
              <p className="text-gray-400 mb-4">Google</p>
              <p className="text-gray-300">
                Comprehensive certification covering cybersecurity fundamentals,
                network security, incident response, risk management, and
                hands-on threat detection using industry-standard tools.
              </p>
            </div>

            {/* Certificate 2 */}
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500 hover:scale-105 transition-transform duration-300">
              <img
                src="/cc-cert.png"
                alt="Certified in Cybersecurity Certificate"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">Certified in Cybersecurity</h3>
              <span className="text-green-500">2024</span>
              <p className="text-gray-400 mb-4">ISC2</p>
              <p className="text-gray-300">
                Foundational certification covering cybersecurity principles,
                network security, risk management, incident response, and
                security operations, validating core knowledge for entry-level
                cybersecurity roles.
              </p>
            </div>

            {/* Certificate 3 */}
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500 hover:scale-105 transition-transform duration-300">
              <img
                src="/splunk.png"
                alt="Splunk Security Operation & Defense Analyst"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">
                Security Operation & Defense Analyst
              </h3>
              <span className="text-green-500">2024</span>
              <p className="text-gray-400 mb-4">Splunk</p>
              <p className="text-gray-300">
                Certification covering security operations, SIEM fundamentals,
                threat detection, log analysis, incident response, and hands-on
                experience using Splunk for security monitoring and defense
                strategies.
              </p>
            </div>

            {/* Certificate 4 */}
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500 hover:scale-105 transition-transform duration-300">
              <img
                src="/wireshark.png"
                alt="Practical Wireshark Certificate"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">Practical Wireshark</h3>
              <span className="text-green-500">2024</span>
              <p className="text-gray-400 mb-4">EC Council</p>
              <p className="text-gray-300">
                Hands-on certification focused on network traffic analysis,
                packet inspection, and threat detection using Wireshark to
                identify security risks and troubleshoot network
                vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-5xl font-bold mb-4 text-white text-center">
            <span className="text-gray-400"></span> Projects
          </div>
          <div className="text-xl mb-16 text-white text-center">
            MY LATEST WORK.{' '}
            <span className="text-green-500">SEE MORE &gt;</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
                alt="Project 1"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6 opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold">PROJECT 01</h3>
              </div>
              <div className="absolute inset-0 bg-green-500 bg-opacity-90 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold mb-4">
                  E-Commerce Website
                </h3>
                <p className="text-white text-center mb-6">
                  A modern e-commerce platform with seamless user experience and
                  secure payment processing.
                </p>
                <button className="border-2 border-white text-white hover:bg-white hover:text-green-500 transition-colors duration-300 py-2 px-4 rounded-md">
                  VIEW PROJECT
                </button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
                alt="Project 2"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6 opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold">PROJECT 02</h3>
              </div>
              <div className="absolute inset-0 bg-green-500 bg-opacity-90 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold mb-4">
                  Mobile Banking App
                </h3>
                <p className="text-white text-center mb-6">
                  A secure and intuitive mobile banking application with
                  real-time transaction tracking.
                </p>
                <button className="border-2 border-white text-white hover:bg-white hover:text-green-500 transition-colors duration-300 py-2 px-4 rounded-md">
                  VIEW PROJECT
                </button>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Project 3"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6 opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold">PROJECT 03</h3>
              </div>
              <div className="absolute inset-0 bg-green-500 bg-opacity-90 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold mb-4">
                  SaaS Dashboard
                </h3>
                <p className="text-white text-center mb-6">
                  A comprehensive analytics dashboard for SaaS businesses with
                  data visualization tools.
                </p>
                <button className="border-2 border-white text-white hover:bg-white hover:text-green-500 transition-colors duration-300 py-2 px-4 rounded-md">
                  VIEW PROJECT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section ref={blogsRef} className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-5xl font-bold mb-4 text-white text-center">
            <span className="text-gray-400"></span> BLOGS
          </div>
          <div className="text-xl mb-16 text-white text-center">
            INSIGHTS & THOUGHTS ON DESIGN
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Blog 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-green-500 mb-2">April 15, 2023</div>
                <h3 className="text-xl font-bold mb-3">
                  The Future of UX Design in 2023
                </h3>
                <p className="text-gray-300 mb-4">
                  Exploring emerging trends and technologies that are shaping
                  the future of user experience design.
                </p>
                <a href="#" className="text-green-500 hover:underline">
                  Read More →
                </a>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Blog 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-green-500 mb-2">March 22, 2023</div>
                <h3 className="text-xl font-bold mb-3">
                  Designing for Accessibility: A Guide
                </h3>
                <p className="text-gray-300 mb-4">
                  Best practices for creating inclusive digital experiences that
                  work for users of all abilities.
                </p>
                <a href="#" className="text-green-500 hover:underline">
                  Read More →
                </a>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Blog 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-green-500 mb-2">February 8, 2023</div>
                <h3 className="text-xl font-bold mb-3">
                  The Psychology of Color in UI Design
                </h3>
                <p className="text-gray-300 mb-4">
                  How color choices influence user perception and behavior in
                  digital interfaces.
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
