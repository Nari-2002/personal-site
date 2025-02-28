import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, BookOpen, GraduationCap, Briefcase } from 'lucide-react';
import passportPhoto from "../passportsizephoto.jpg";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Kamepalli Narendra</h1>
              <h2 className="text-xl md:text-2xl font-medium mb-6">Django Developer & Computer Science Student</h2>
              <p className="text-lg mb-8 opacity-90">
                Passionate about backend development, web application architecture, and database management.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:nari73092@gmail.com" className="bg-white text-indigo-700 hover:bg-opacity-90 px-4 py-2 rounded-md font-medium flex items-center">
                  <Mail className="mr-2 h-5 w-5" /> Contact Me
                </a>
                <a href="https://github.com/Nari-2002" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-white hover:bg-white hover:text-indigo-700 px-4 py-2 rounded-md font-medium flex items-center transition-colors">
                  <Github className="mr-2 h-5 w-5" /> GitHub
                </a>
              </div>
            </div>

            <div className="md:w-1/3">
                <div className="bg-white p-1 rounded-full shadow-xl">
                  <img 
                    src="/passportsizephoto.jpg"  // Using the public folder path
                    alt="Kamepalli Narendra" 
                    className="rounded-full w-48 h-48 object-cover mx-auto"
                  />
                </div>
            </div>

          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm an ambitious Computer Science undergraduate, set to graduate in May 2025, seeking a Django Developer Intern position at a forward-thinking company. I'm passionate about backend development, web application architecture, and database management, with a solid foundation in Python and the Django framework.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Known for a proactive approach to problem-solving and a dedication to continuous learning, I'm eager to leverage my technical skills and contribute to innovative projects in a dynamic, growth-focused environment.
            </p>
            <div className="flex flex-wrap justify-center mt-10">
              <div className="flex items-center m-2 px-4 py-2 bg-gray-100 rounded-full">
                <Mail className="h-5 w-5 text-indigo-600 mr-2" />
                <span>nari73092@gmail.com</span>
              </div>
              <div className="flex items-center m-2 px-4 py-2 bg-gray-100 rounded-full">
                <Briefcase className="h-5 w-5 text-indigo-600 mr-2" />
                <span>Addanki, India, 523201</span>
              </div>
              <div className="flex items-center m-2 px-4 py-2 bg-gray-100 rounded-full">
                <Github className="h-5 w-5 text-indigo-600 mr-2" />
                <span>github.com/Nari-2002</span>
              </div>
              <div className="flex items-center m-2 px-4 py-2 bg-gray-100 rounded-full">
                <Linkedin className="h-5 w-5 text-indigo-600 mr-2" />
                <span>linkedin.com/in/narendra-kamepalli-6828b7269</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Technical Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'jQuery'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Other Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['Django', 'Flask', 'DBMS', 'Machine Learning', 'Deep Learning'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Workshops</h3>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-indigo-600 mr-2" />
                <span>Django for Web Development by PurpleGene</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Projects</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-indigo-600">StudyBud</h3>
                <span className="text-sm text-gray-500">June 2023 – July 2023</span>
              </div>
              <p className="text-gray-700 mb-4">
                Developed a comprehensive StudyBud platform using the Django framework and SQLite. 
                This project allows users to engage in meaningful discussions through chat rooms, fostering 
                collaborative learning. Key features include template rendering, user authentication, and 
                secure session management, enabling an interactive and user-friendly experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Django</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SQLite</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Web Development</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-indigo-600">Multi-Class Lung Disease Classification</h3>
                <span className="text-sm text-gray-500">August 2024 – September 2024</span>
              </div>
              <p className="text-gray-700 mb-4">
                Developed a lung disease classification system using deep learning techniques to accurately 
                classify Tuberculosis, COVID-19, and Pneumonia from medical imaging data. Leveraged the 
                InceptionV3 model architecture, fine-tuned on a dataset of chest X-ray images, achieving an 
                impressive 94% classification accuracy.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Deep Learning</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">InceptionV3</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Medical Imaging</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Education</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-indigo-200 transform -translate-x-1/2"></div>
              
              {/* Education items */}
              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800">Seshadri Rao Gudlavalleru Engineering College</h3>
                    <p className="text-indigo-600 font-medium">Bachelor of Technology in Computer Science</p>
                    <p className="text-gray-600">CGPA: 9.09/10</p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full shadow-md">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 md:pl-8">
                    <p className="text-gray-600">2021 - 2025 (Expected)</p>
                    <p className="text-gray-600">Gudlavalleru, India</p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800">Sri Chaitanya Junior College</h3>
                    <p className="text-indigo-600 font-medium">Intermediate (M.P.C)</p>
                    <p className="text-gray-600">Marks: 956/1000</p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full shadow-md">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 md:pl-8">
                    <p className="text-gray-600">2019 - 2021</p>
                    <p className="text-gray-600">Addanki, India</p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800">Lakshmi High School</h3>
                    <p className="text-indigo-600 font-medium">SSC</p>
                    <p className="text-gray-600">GPA: 9.8/10</p>
                  </div>
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full shadow-md">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 md:pl-8">
                    <p className="text-gray-600">2019</p>
                    <p className="text-gray-600">Addanki, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
            <a href="mailto:nari73092@gmail.com" className="flex items-center justify-center bg-white text-indigo-700 hover:bg-opacity-90 px-6 py-3 rounded-lg font-medium transition-colors">
              <Mail className="mr-2 h-5 w-5" /> Email Me
            </a>
            <a href="https://github.com/Nari-2002" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-transparent border border-white hover:bg-white hover:text-indigo-700 px-6 py-3 rounded-lg font-medium transition-colors">
              <Github className="mr-2 h-5 w-5" /> GitHub Profile
            </a>
            <a href="https://www.linkedin.com/in/narendra-kamepalli-6828b7269/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-transparent border border-white hover:bg-white hover:text-indigo-700 px-6 py-3 rounded-lg font-medium transition-colors">
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </a>
            <a href="tel:9392421404" className="flex items-center justify-center bg-transparent border border-white hover:bg-white hover:text-indigo-700 px-6 py-3 rounded-lg font-medium transition-colors">
              <span className="mr-2">📞</span> +91 9392421404
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Kamepalli Narendra</h3>
              <p className="text-gray-400">Django Developer & Computer Science Student</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/Nari-2002" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/narendra-kamepalli-6828b7269/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:nari73092@gmail.com" className="hover:text-indigo-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Kamepalli Narendra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
