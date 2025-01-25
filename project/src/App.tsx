import React, { useState } from 'react';
import {
  Code2,
  BookOpen,
  Trophy,
  Rocket,
  Database,
  GraduationCap,
  Brain,
  Users,
  Mail,
  Phone,
  Linkedin,
  Github,
  X,
  Briefcase,
  Calendar
} from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Central Circle with Photo */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white bg-white shadow-lg mx-auto overflow-hidden">
              <img
                src="\image\WhatsApp Image 2024-11-30 at 21.28.41_e93ab745.jpg"
                alt="Professional Portrait"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Icons */}
            <div className="absolute inset-0 -m-16">
              <div className="relative w-full h-full animate-spin-slow">
                {[
                  { Icon: Code2, position: 'top-0 left-1/2 -translate-x-1/2', color: 'bg-blue-500' },
                  { Icon: BookOpen, position: 'top-1/4 right-0', color: 'bg-indigo-500' },
                  { Icon: Trophy, position: 'bottom-1/4 right-0', color: 'bg-purple-500' },
                  { Icon: Rocket, position: 'bottom-0 left-1/2 -translate-x-1/2', color: 'bg-pink-500' },
                  { Icon: Database, position: 'bottom-1/4 left-0', color: 'bg-red-500' },
                  { Icon: GraduationCap, position: 'top-1/4 left-0', color: 'bg-orange-500' },
                  { Icon: Brain, position: 'top-1/3 left-1/4', color: 'bg-green-500' },
                  { Icon: Users, position: 'bottom-1/3 right-1/4', color: 'bg-teal-500' }
                ].map(({ Icon, position, color }, index) => (
                  <div
                    key={index}
                    className={`absolute ${position} transform -translate-x-1/2 -translate-y-1/2`}
                  >
                    <div className={`p-3 rounded-full ${color} shadow-lg text-white`}>
                      <Icon size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-8 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">ANUP KUMAR TIWARI</h1>
            <p className="text-xl text-gray-600">Full Stack Developer & Technical Trainer</p>
            
            {/* Professional Experience Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
                <Briefcase className="text-blue-600" />
                Professional Experience
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md text-left transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-600">Java Development Intern</h3>
                      <p className="text-gray-700 font-medium">Genaile Solution</p>
                    </div>
                    <div className="flex items-center text-gray-500 gap-1">
                      <Calendar size={16} />
                      <span className="text-sm">Jan 2024 – Jun 2024</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Contributed to the development of a Spring Boot-based microservices architecture for an e-commerce platform</li>
                    <li>Debugged and optimized Java code to improve system performance</li>
                    <li>Collaborated with a cross-functional team to integrate third-party APIs</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md text-left transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-600">Front End Web Developer Intern</h3>
                      <p className="text-gray-700 font-medium">Yhills, Remote</p>
                    </div>
                    <div className="flex items-center text-gray-500 gap-1">
                      <Calendar size={16} />
                      <span className="text-sm">Oct 2022 – Dec 2022</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Contributed to an e-commerce website interface project</li>
                    <li>Utilized HTML, CSS, Bootstrap, and JavaScript to design and develop user-friendly web interfaces</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md text-left transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Online Bookstore Application</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Full-stack web app using Java, Spring Boot, and ReactJS</li>
                    <li>RESTful APIs for inventory and order management</li>
                    <li>Spring Security authentication</li>
                    <li>MySQL database integration</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-left transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Student Management System</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Java desktop application with JavaFX UI</li>
                    <li>JDBC database connectivity</li>
                    <li>Complete CRUD operations</li>
                    <li>Student performance tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Education</h2>
              <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-blue-600">Bachelor of Technology in Computer Science</h3>
                <p className="text-gray-600 mt-2">Sri Krishna Institute Of Technology, Bangalore</p>
                <p className="text-gray-600">Graduated: 2023 • CGPA: 7.9</p>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Achievements</h2>
              <div className="bg-white p-6 rounded-xl shadow-md text-left transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <ul className="list-disc list-inside text-gray-600 space-y-3">
                  <li>Successful freelance Technical Trainer for Java, Spring Boot, and ReactJS</li>
                  <li>Provided hands-on mentorship and project guidance to students and professionals</li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <a 
                href="https://github.com/Anup7102"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center gap-2"
              >
                <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>View Projects</span>
              </a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group px-6 py-3 bg-white text-blue-600 rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center gap-2"
              >
                <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Contact Me</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-lg transform transition-all duration-300 scale-100">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X size={24} className="text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="mailto:anupt6028@gmail.com"
                  className="group flex items-center gap-3 p-4 rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                    <Mail className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Email</span>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">anupt6028@gmail.com</span>
                  </div>
                </a>

                <a 
                  href="tel:+916306137338"
                  className="group flex items-center gap-3 p-4 rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                    <Phone className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Phone</span>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">+91-6306137338</span>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/anup-kumar-tiwari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                    <Linkedin className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">LinkedIn</span>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Anup Kumar Tiwari</span>
                  </div>
                </a>

                <a 
                  href="https://github.com/Anup7102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                    <Github className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">GitHub</span>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">Anup7102</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;