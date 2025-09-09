import React from 'react';
import { Github, Linkedin, Mail, Code2, Database, Globe, Server, Smartphone, Brain, ExternalLink, GraduationCap, Folder, FolderOpen, Sun, Moon, Monitor } from 'lucide-react';
import DecryptedText from './components/DecryptedText';
import LetterGlitch from './components/LetterGlitch';
import FolderProject from './components/FolderProject';
import Dock from './components/Dock';
import { ThemeProvider, useTheme } from './ThemeContext';
import { motion } from 'framer-motion';

function AppContent() {
  const { isDark, toggleTheme } = useTheme();

  const handleThemeChange = (theme: 'light' | 'dark' | 'auto') => {
    if (theme === 'light' || theme === 'dark') {
      // Toggle to the opposite if it matches current, or set to the specified theme
      if ((theme === 'dark' && !isDark) || (theme === 'light' && isDark)) {
        toggleTheme();
      }
    }
  };

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      isDark 
        ? 'bg-custom-bg text-white' 
        : 'bg-light-bg text-light-text'
    }`}>
      <LetterGlitch 
        spacing={45}
        opacity={0.15}
        color={isDark ? "#FFFFFF" : "#1a365d"}
        fontSize={16}
      />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-left">
          <div className="mb-8">
            <p className={`text-lg md:text-xl font-light mb-4 ${
              isDark ? 'text-gray-400' : 'text-light-text-secondary'
            }`}>
              <DecryptedText 
                text="Hello World!, I am..."
                delay={200}
                duration={2000}
                className={isDark ? 'text-gray-400' : 'text-light-text-secondary'}
              />
            </p>
            <h1 className={`text-5xl md:text-7xl font-light mb-4 tracking-tight ${
              isDark ? 'text-custom-accent' : 'text-light-accent'
            }`}>
              <DecryptedText 
                text="Eshwara Pandiyan"
                delay={1000}
                duration={3000}
                className={isDark ? 'text-custom-accent' : 'text-light-accent'}
              />
            </h1>
            <p className={`text-lg max-w-2xl leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-light-text-secondary'
            }`}>
              AI/ML Engineer and Software Developer specializing in deep learning, graph neural networks, and intelligent systems. 
              Currently pursuing Master's in Applied Computing at University of Windsor, with expertise in Python, TensorFlow, and knowledge graphs.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-light mb-12 text-center ${
            isDark ? 'text-custom-accent' : 'text-light-accent'
          }`}>Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              icon: <Code2 className={`w-8 h-8 ${isDark ? 'text-custom-accent' : 'text-light-accent'}`} />,
              title: 'Languages & Frameworks',
              desc: 'Core programming languages and development frameworks',
              tech: [
                'Python • NumPy • Pandas • TensorFlow • Keras',
                'Java • OOP • Multithreading',
                'JavaScript • React • Node.js',
                'C++ • STL • Algorithm Optimization'
              ]
            }, {
              icon: <Brain className={`w-8 h-8 ${isDark ? 'text-custom-accent' : 'text-light-accent'}`} />,
              title: 'AI & Machine Learning',
              desc: 'Advanced AI/ML technologies and neural networks',
              tech: [
                'Deep Learning • CNNs • RNNs • LSTMs',
                'Reinforcement Learning • Q-learning • Policy Gradients',
                'Graph Neural Networks • GCN',
                'NLP • TF-IDF • Word Embeddings • Transformers'
              ]
            }, {
              icon: <Database className={`w-8 h-8 ${isDark ? 'text-custom-accent' : 'text-light-accent'}`} />,
              title: 'Database & Backend',
              desc: 'Data management and server-side technologies',
              tech: [
                'Neo4j • MongoDB • FastAPI',
                'Multi-Agent Systems • Knowledge Graphs',
                'REST APIs • Data Structures',
                'Systems Programming • Computer Networks'
              ]
            }, {
              icon: <Server className={`w-8 h-8 ${isDark ? 'text-custom-accent' : 'text-light-accent'}`} />,
              title: 'Tools & Methodologies',
              desc: 'Development tools and project management practices',
              tech: [
                'Scikit-Learn • TensorFlow • Keras',
                'Agile • Scrum • Sprint Planning',
                'Feature Engineering • Model Deployment',
                'Statistical Analysis • Predictive Modeling'
              ]
            }].map((item, idx) => (
              <motion.div
                key={item.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
              >
                <div className={`w-16 h-16 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  isDark ? 'bg-custom-accent' : 'bg-light-accent'
                }`}>
                  {item.icon}
                </div>
                <h3 className={`text-xl font-medium mb-4 ${
                  isDark ? 'text-custom-accent' : 'text-light-accent'
                }`}>{item.title}</h3>
                <p className={`mb-4 ${
                  isDark ? 'text-gray-400' : 'text-light-text-secondary'
                }`}>{item.desc}</p>
                <div className="space-y-2">
                  {item.tech.map((t, i) => (
                    <div key={i} className={`text-sm ${isDark ? 'text-gray-500' : 'text-light-text-secondary'}`}>{t}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`py-24 px-6 ${
        isDark ? 'bg-custom-bg' : 'bg-light-bg'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-light mb-12 text-center ${
            isDark ? 'text-custom-accent' : 'text-light-accent'
          }`}>Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              title: 'Adaptive Workforce Intelligence System',
              description: 'Neo4j-powered pipeline with multi-agent architecture for skill gap analysis, job matching, and career path prediction. Achieved 90%+ skill forecasting accuracy.',
              technologies: ["Neo4j", "FastAPI", "Python", "Multi-Agent Systems", "Knowledge Graphs"],
              link: "https://github.com/EshwaraP",
              delay: 0
            }, {
              title: 'HomeConnect App',
              description: 'Unified platform for landlord-tenant-roommate communication with maintenance request tracking. Built using Scrum-based Agile methodology.',
              technologies: ["React", "Node.js", "MongoDB", "Agile/Scrum"],
              link: "https://github.com/EshwaraP",
              delay: 200
            }, {
              title: 'Fake Review Detection System',
              description: 'ML-based model using Graph Convolution Network and NLP techniques (TF-IDF, word embedding) for classifying fake reviews in movie recommendations.',
              technologies: ["Scikit-Learn", "PCA-DAEGCN", "TensorFlow", "NLP"],
              link: "https://github.com/EshwaraP",
              delay: 400
            }, {
              title: 'Fraud Detection System',
              description: 'Ensemble machine learning model combining Random Forests, Naive Bayes, and KNN with feature selection for efficient fraud detection.',
              technologies: ["SVC", "GaussianNB", "Ensemble", "Feature Engineering"],
              link: "https://github.com/EshwaraP",
              delay: 600
            }, {
              title: 'Netflix Stock Price Prediction',
              description: 'LSTM-based RNN for forecasting Netflix stock prices using time-series data, market trends, and technical indicators with hyperparameter optimization.',
              technologies: ["yFinance", "Deep Learning", "LSTM", "Time Series"],
              link: "https://github.com/EshwaraP",
              delay: 800
            }, {
              title: 'Smart Car Parking System',
              description: 'IoT-based automated parking space detection system using Arduino and sensors with mobile app interface for real-time availability updates.',
              technologies: ["Arduino", "IoT", "Mobile App", "Sensors"],
              link: "https://github.com/EshwaraP",
              delay: 1000
            }].map((proj, idx) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.18 }}
              >
                <FolderProject {...proj} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className={`py-24 px-6 ${
        isDark ? 'bg-custom-bg' : 'bg-light-bg'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-light mb-12 text-center ${
            isDark ? 'text-custom-accent' : 'text-light-accent'
          }`}>Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-lg shadow-sm ${
              isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
            }`}>
              <div className="flex items-center mb-4">
                <GraduationCap className={`w-8 h-8 mr-3 ${
                  isDark ? 'text-custom-accent' : 'text-light-accent'
                }`} />
                <div>
                  <h3 className={`text-xl font-medium ${
                    isDark ? 'text-custom-accent' : 'text-light-accent'
                  }`}>Master of Applied Computing</h3>
                  <p className={`${
                    isDark ? 'text-gray-400' : 'text-light-text-secondary'
                  }`}>University of Windsor</p>
                </div>
              </div>
              <p className={`mb-2 ${
                isDark ? 'text-gray-400' : 'text-light-text-secondary'
              }`}>Windsor, Ontario</p>
              <p className={`mb-4 ${
                isDark ? 'text-gray-400' : 'text-light-text-secondary'
              }`}>Sep 2024 - Present • Available for Co-Op from Sep 2025</p>
              <p className={`${
                isDark ? 'text-gray-400' : 'text-light-text-secondary'
              }`}>
                Relevant coursework: Software Engineering, Systems Programming, Computing Concepts
              </p>
            </div>
            <div className={`p-8 rounded-lg shadow-sm ${
              isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
            }`}>
              <div className="flex items-center mb-4">
                <GraduationCap className={`w-8 h-8 mr-3 ${
                  isDark ? 'text-custom-accent' : 'text-light-accent'
                }`} />
                <div>
                  <h3 className={`text-xl font-medium ${
                    isDark ? 'text-custom-accent' : 'text-light-accent'
                  }`}>Bachelor of Computer Science</h3>
                  <p className={`${
                    isDark ? 'text-gray-400' : 'text-light-text-secondary'
                  }`}>AI/ML Specialization</p>
                </div>
              </div>
              <p className={`mb-2 ${
                isDark ? 'text-gray-400' : 'text-light-text-secondary'
              }`}>Hindustan Institute of Technology and Science</p>
              <p className={`mb-4 ${
                isDark ? 'text-gray-400' : 'text-light-text-secondary'
              }`}>Jul 2019 - May 2023 • GPA: 8.26/10</p>
              <p className={`${
                isDark ? 'text-gray-400' : 'text-light-text-secondary'
              }`}>
                Relevant coursework: OOPS, Python, Data Structures, OS, Computer Networks
              </p>
            </div>
            <div className={`p-8 rounded-lg shadow-sm ${
              isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
            }`}>
              <div className="flex items-center mb-4">
                <Brain className={`w-8 h-8 mr-3 ${
                  isDark ? 'text-custom-accent' : 'text-light-accent'
                }`} />
                <div>
                  <h3 className={`text-xl font-medium ${
                    isDark ? 'text-custom-accent' : 'text-light-accent'
                  }`}>Certifications</h3>
                  <p className={`${
                    isDark ? 'text-gray-400' : 'text-light-text-secondary'
                  }`}>Professional Development</p>
                </div>
              </div>
              <ul className={`space-y-3 ${
                isDark ? 'text-gray-400' : 'text-light-text-secondary'
              }`}>
                <li>• Advanced Data Analytics, Google</li>
                <li>• Introduction to Packet Tracer, Cisco</li>
                <li>• Data Science Internship, Sparks Foundation</li>
                <li>• AI & ML Workshop, Google</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-light mb-8 ${
            isDark ? 'text-custom-accent' : 'text-light-accent'
          }`}>Let's Connect</h2>
          <p className={`text-xl mb-12 max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-light-text-secondary'
          }`}>
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together to create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:eshwarap25@gmail.com"
              className={`px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-200 flex items-center justify-center ${
                isDark 
                  ? 'bg-custom-accent text-custom-bg' 
                  : 'bg-light-accent text-white'
              }`}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </a>
            <a 
              href="#"
              className={`px-8 py-3 border rounded-lg hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center ${
                isDark 
                  ? 'border-custom-accent text-custom-accent hover:bg-custom-accent' 
                  : 'border-light-accent text-light-accent hover:bg-light-accent'
              }`}
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t border-opacity-30 ${
        isDark 
          ? 'bg-custom-bg border-custom-accent' 
          : 'bg-light-bg border-light-accent'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <p className={`${
            isDark ? 'text-gray-500' : 'text-light-text-secondary'
          }`}>
            © 2024 Eshwara Pandiyan. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Dock */}
      <Dock 
        currentTheme={isDark ? 'dark' : 'light'}
        onThemeChange={handleThemeChange}
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;