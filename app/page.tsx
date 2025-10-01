"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import { TypingAnimation } from "@/components/typing-animation"
import TextType from "./textType"
import ASCIIText from "./asciiAnimation"
import TerminalEffects from "./terminalEffects"
import MatrixAnimation from "./matrixAnimation"

export default function HomePage() {
  const [whoamiExecuted, setWhoamiExecuted] = useState(false)
  const [showProfileDetails, setShowProfileDetails] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const experienceData = [
    {
      company: "Smartzy Edu",
      role: "Technical Team Lead & Software Engineer",
      duration: "2025 - Present",
      location: "Hyderabad, India",
      description: [
        "Leading technical initiatives and development teams for educational technology solutions",
        "Architecting scalable full-stack applications using modern web technologies",
        "Implementing AI/ML solutions for educational content optimization",
        "Collaborating with cross-functional teams to deliver high-quality software products"
      ],
      technologies: ["React", "Tailwindcss", "next.js", "Supabase", "render", "Team Leadership", "project Management"]
    },
    {
      company: "METE Expo 2024",
      role: "AI Learning Platform Developer",
      duration: "6 hours",
      location: "College Hackathon",
      description: [
        "Developed innovative AI-powered learning platform achieving 2nd place recognition",
        "Implemented machine learning algorithms for personalized learning experiences",
        "Built responsive frontend with modern React and styling frameworks",
        "Integrated real-time analytics and performance tracking systems"
      ],
      technologies: ["AI/ML", "HTML, CSS, JavaScript", "Python", "TensorFlow", "Analytics"]
    },
    {
      company: "Open Source Contributions",
      role: "Software Developer",
      duration: "2023 - Present",
      location: "Remote",
      description: [
        "Active contributor to yasb-themes project and other open-source initiatives",
        "Developing and maintaining UI/UX components and themes",
        "Collaborating with global developer community on code improvements",
        "Contributing to documentation and community support"
      ],
      technologies: ["JavaScript", "CSS", "Yaml", "GitHub", "Open Source", "Community"]
    }
  ]

  const projects = [
    {
      title: "build_it_platform",
      excerpt:
        "Developing full-stack exam platform with real-time monitoring... Cross-platform security protocols initialized",
      date: "2024.12.15",
      category: "FULLSTACK",
      readTime: "",
      description: "A comprehensive full-stack examination platform featuring real-time monitoring capabilities, automated proctoring, and secure test delivery. Built with modern web technologies to ensure scalability and security.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Docker"],
      features: [
        "Real-time exam monitoring and proctoring",
        "Secure authentication and authorization",
        "Auto-save functionality for exam responses",
        "Admin dashboard for exam management",
        "Anti-cheating mechanisms"
      ],
      projectLink: "https://github.com/Rohithgg/build-it-platform",
      demoLink: null,
      status: "In Development"
    },
    {
      title: "speech_to_text_ai",
      excerpt: "Integrating Hugging Face transformers for production chatbot... Voice pipeline deployed successfully for a company as a intern.",
      date: "2024.11.28",
      category: "AI/ML",
      readTime: "",
      description: "Advanced speech-to-text AI system leveraging Hugging Face transformers for real-time voice recognition and processing. Designed for production-ready chatbot integration with high accuracy and low latency.",
      techStack: ["Python", "Hugging Face", "Transformers", "FastAPI", "PyTorch", "Whisper", "Docker"],
      features: [
        "Real-time speech recognition with 95%+ accuracy",
        "Multi-language support",
        "Noise reduction and audio preprocessing",
        "RESTful API for easy integration",
        "Scalable deployment architecture"
      ],
      projectLink: "https://github.com/Rohithgg/speech-to-text-ai",
      demoLink: "https://speech-demo.example.com",
      status: "Completed"
    },
    {
      title: "employee_attrition_analysis",
      excerpt: "XGBoost classifier achieving 94% accuracy... Tableau dashboard compiled for management insights",
      date: "2024.10.20",
      category: "DATA_SCIENCE",
      readTime: "",
      description: "Machine learning project analyzing employee attrition patterns using advanced algorithms. Features comprehensive data visualization and predictive modeling to help organizations reduce turnover rates.",
      techStack: ["Python", "XGBoost", "Pandas", "Scikit-learn", "Tableau", "Jupyter", "Seaborn"],
      features: [
        "94% accuracy in predicting employee attrition",
        "Interactive Tableau dashboard",
        "Feature importance analysis",
        "Data preprocessing and cleaning pipeline",
        "Statistical significance testing"
      ],
      projectLink: "https://github.com/Rohithgg/employee-attrition-analysis",
      demoLink: "https://tableau-dashboard.example.com",
      status: "Completed"
    },
    {
      title: "malware_detection_cli",
      excerpt: "Linux CLI tool with VirusTotal API integration... 95% detection accuracy achieved",
      date: "2024.09.15",
      category: "SECURITY",
      readTime: "",
      description: "Command-line malware detection tool built for Linux systems with VirusTotal API integration. Provides real-time scanning capabilities and detailed threat analysis reports.",
      techStack: ["Python", "VirusTotal API", "Linux", "Click", "Requests", "JSON", "Bash"],
      features: [
        "95% malware detection accuracy",
        "VirusTotal API integration",
        "Real-time file scanning",
        "Detailed threat analysis reports",
        "Cross-platform compatibility"
      ],
      projectLink: "https://github.com/Rohithgg/malware-detection-cli",
      demoLink: null,
      status: "Completed"
    },
  ]

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/rohith-resume.pdf"
    link.download = "Rohith_Gona_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleWhoamiClick = () => {
    if (!whoamiExecuted) {
      setWhoamiExecuted(true)
      setTimeout(() => setShowProfileDetails(true), 1500)
    } else {
      setWhoamiExecuted(false)
      setShowProfileDetails(false)
    }
  }

  const openProjectModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen bg-black text-emerald-400">
      {/* Matrix Animation Background */}
      <MatrixAnimation 
        density={0.98}
        speed={50}
        fontSize={12}
        color="#10b981"
        opacity={0.08}
      />
      
      {/* Terminal Effects Overlay */}
      <TerminalEffects />
      
      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        <div className="text-center font-mono w-full max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8 lg:mb-12">
            {/* ASCII Animation Container */}
            <div className="relative w-full h-30 sm:h-48 md:h-56 lg:h-70 xl:h-64 mb-4">
              <ASCIIText 
                text="ROHITH GONA"
                asciiFontSize={8}
                textFontSize={100}
                textColor="#10b981"
                planeBaseHeight={11}
                enableWaves={true}
              />
            </div>

            <div className="text-emerald-400 text-sm sm:text-base md:text-lg lg:text-xl space-y-1 sm:space-y-2">
              <TextType 
                text={["> Software Engineer | AI/ML Enthusiast", "> Full-Stack Developer | Hyderabad, India"]}
                className="font-mono"
                typingSpeed={30}
                pauseDuration={2000}
                loop={true}
                showCursor={true}
                cursorCharacter="|"
                textColors={["#10b981", "#34d399"]}
              />
              <p className="text-emerald-500 text-xs sm:text-sm">[SYSTEM]&gt; Welcome to Rohith's terminal blog v2.0</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
            <Button
              onClick={handleResumeDownload}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-black font-mono font-bold px-4 sm:px-6 py-2 sm:py-3 border-2 border-emerald-400 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-400/50 text-sm sm:text-base"
            >
              &gt; download_resume.pdf
            </Button>
            <Button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto bg-black hover:bg-gray-900 text-emerald-400 border-2 border-emerald-400 font-mono font-bold px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base transition-all duration-200"
            >
              &gt; explore_profile
            </Button>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce text-emerald-400">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 font-mono">
        <section id="about" className="mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/90 border-2 border-emerald-400 p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 rounded-lg">
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="text-emerald-400 mr-2 text-sm sm:text-base">rohith@dev:~$</span>
                <Button
                  onClick={handleWhoamiClick}
                  variant="ghost"
                  className="text-emerald-300 hover:text-emerald-200 hover:bg-emerald-900/20 p-0 h-auto font-mono text-sm sm:text-base"
                >
                  whoami
                </Button>
              </div>

              {whoamiExecuted && (
                <div className="text-emerald-300 text-xs sm:text-sm leading-relaxed space-y-1 sm:space-y-2">
                  <TextType
                    text="> Executing user_profile.sh..."
                    className="text-emerald-500 block font-mono"
                    typingSpeed={40}
                    loop={false}
                    showCursor={false}
                  />
                  <TextType
                    text="> Loading developer credentials..."
                    className="text-emerald-500 block font-mono"
                    typingSpeed={40}
                    loop={false}
                    showCursor={false}
                    initialDelay={1000}
                  />

                  {showProfileDetails && (
                    <div className="border-l-2 border-emerald-600 pl-3 sm:pl-4 mt-3 sm:mt-4 space-y-1 sm:space-y-2 animate-in slide-in-from-top duration-500">
                      <p>
                        <span className="text-emerald-400">Name:</span> Rohith Gona
                      </p>
                      <p>
                        <span className="text-emerald-400">Role:</span> Software Engineer & Technical Team Lead
                      </p>
                      <p>
                        <span className="text-emerald-400">Location:</span> Hyderabad, India
                      </p>
                      <p>
                        <span className="text-emerald-400">Education:</span> B.Tech Computer Science @ IARE
                      </p>
                      <p>
                        <span className="text-emerald-400">Current:</span> Leading tech initiatives at Smartzy Edu
                      </p>
                      <p>
                        <span className="text-emerald-400">Specialization:</span> AI/ML, Full-Stack Development, DevOps
                      </p>
                      <p>
                        <span className="text-emerald-400">Recent Achievement:</span> 2nd place at METE Expo for AI
                        learning platform
                      </p>
                      <p>
                        <span className="text-emerald-400">Open Source:</span> Contributor to yasb-themes project
                      </p>
                      <TextType
                        text="> Profile loaded successfully ✓"
                        className="text-emerald-500 block mt-3 sm:mt-4 font-mono"
                        typingSpeed={30}
                        loop={false}
                        showCursor={false}
                        initialDelay={2500}
                      />
                    </div>
                  )}
                </div>
              )}

              {!whoamiExecuted && (
                <p className="text-emerald-600 text-xs sm:text-sm italic">Click 'whoami' to execute command...</p>
              )}
            </div>
          </div>
        </section>

        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-mono text-lg sm:text-xl font-bold text-emerald-400 mb-6 sm:mb-8 text-center">
            <TextType 
              text="> cat /var/log/experience.log" 
              className="font-mono"
              typingSpeed={60} 
              loop={false}
              showCursor={false}
            />
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {experienceData.map((exp, index) => (
              <Card
                key={index}
                className="group bg-black/80 border-2 border-emerald-600 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/30"
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <CardTitle className="font-mono text-base sm:text-lg font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                        {exp.role}
                      </CardTitle>
                      <span className="font-mono text-emerald-500 text-sm">@ {exp.company}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <Badge className="bg-emerald-600 text-black font-mono text-xs font-bold border border-emerald-400 w-fit">
                        {exp.duration}
                      </Badge>
                      <span className="font-mono text-xs text-emerald-500">{exp.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    <ul className="space-y-1 sm:space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="font-mono text-emerald-300 text-xs sm:text-sm leading-relaxed flex items-start">
                          <span className="text-emerald-500 mr-2 mt-1 flex-shrink-0">&gt;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="bg-emerald-900/30 text-emerald-300 border-emerald-500 font-mono text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-mono text-lg sm:text-xl font-bold text-emerald-400 mb-6 sm:mb-8 text-center">
            <TextType 
              text="> ls -la ~/recent_projects/" 
              className="font-mono"
              typingSpeed={60} 
              loop={false}
              showCursor={false}
            />
          </h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-2">
            {projects.map((post, index) => (
              <Card
                key={index}
                className="group bg-black/80 border-2 border-emerald-600 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/30"
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <Badge className="bg-emerald-600 text-black font-mono text-xs font-bold border border-emerald-400">
                      {post.category}
                    </Badge>
                    <span className="font-mono text-xs text-emerald-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="font-mono text-base sm:text-lg font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="font-mono text-emerald-500 text-xs">{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-emerald-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() => openProjectModal(post)}
                    className="font-mono text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/30 p-0 h-auto font-bold text-xs sm:text-sm"
                  >
                    &gt; cat {post.title.toLowerCase()}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 sm:mb-16 lg:mb-20">
          <Card className="max-w-6xl mx-auto bg-black/80 border-2 border-emerald-400">
            <CardHeader>
              <CardTitle className="font-mono text-base sm:text-lg font-bold text-emerald-400 text-center">
                &gt; cat /proc/skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm">
                <div>
                  <h3 className="font-mono text-emerald-400 font-bold mb-2">Languages:</h3>
                  <p className="font-mono text-emerald-300">Python, Java, Kotlin, C#, C, JavaScript</p>
                </div>
                <div>
                  <h3 className="font-mono text-emerald-400 font-bold mb-2">AI/ML:</h3>
                  <p className="font-mono text-emerald-300">TensorFlow, PyTorch, scikit-learn, pandas, NumPy</p>
                </div>
                <div>
                  <h3 className="font-mono text-emerald-400 font-bold mb-2">Full-Stack:</h3>
                  <p className="font-mono text-emerald-300">React, Vite, FastAPI, Tailwind CSS, HTML, CSS</p>
                </div>
                <div>
                  <h3 className="font-mono text-emerald-400 font-bold mb-2">Databases:</h3>
                  <p className="font-mono text-emerald-300">MongoDB, PostgreSQL, SQLite, MySQL</p>
                </div>
                <div>
                  <h3 className="font-mono text-emerald-400 font-bold mb-2">DevOps:</h3>
                  <p className="font-mono text-emerald-300">WSL, Linux, Git, GitHub, Node.js, Docker</p>
                </div>
                <div>
                  <h3 className="font-mono text-emerald-400 font-bold mb-2">Analytics:</h3>
                  <p className="font-mono text-emerald-300">Tableau, Power BI, Seaborn</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8 sm:mb-12 text-center">
          <Card className="max-w-4xl mx-auto bg-black/80 border-2 border-emerald-400">
            <CardHeader>
              <CardTitle className="font-mono text-base sm:text-lg font-bold text-emerald-400">
                &gt; connect_with_me.sh
              </CardTitle>
              <CardDescription className="font-mono text-emerald-300 text-xs sm:text-sm">
                Establishing secure connection protocols...
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <a
                  href="mailto:atworkrohith.gona@gmail.com"
                  className="font-mono text-emerald-400 hover:text-emerald-300 text-xs sm:text-sm underline transition-colors"
                >
                  &gt; email_protocol
                </a>
                <a
                  href="https://linkedin.com/in/rohithgona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-emerald-400 hover:text-emerald-300 text-xs sm:text-sm underline transition-colors"
                >
                  &gt; linkedin_connect
                </a>
                <a
                  href="https://github.com/Rohithgg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-emerald-400 hover:text-emerald-300 text-xs sm:text-sm underline transition-colors"
                >
                  &gt; github_repos
                </a>
                <button
                  onClick={handleResumeDownload}
                  className="font-mono text-emerald-400 hover:text-emerald-300 text-xs sm:text-sm underline transition-colors bg-transparent border-none cursor-pointer"
                >
                  &gt; download_resume.pdf
                </button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t-2 border-emerald-400 bg-black/90 mt-12 sm:mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-center">
          <p className="font-mono text-emerald-500 text-xs sm:text-sm">
            &gt; © 2025 Rohith Gona | Software Engineer | Hyderabad, India
          </p>
          <p className="font-mono text-emerald-600 text-xs mt-1 sm:mt-2">
            [SYSTEM] Terminal blog v2.0 - Powered by passion for code
          </p>
        </div>
      </footer>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeProjectModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black border-2 border-emerald-400 rounded-lg shadow-2xl shadow-emerald-400/20">
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <h2 className="font-mono text-xl sm:text-2xl font-bold text-emerald-400">
                    &gt; cat {selectedProject.title}
                  </h2>
                  <Badge className="bg-emerald-600 text-black font-mono text-xs font-bold border border-emerald-400">
                    {selectedProject.category}
                  </Badge>
                </div>
                <Button
                  onClick={closeProjectModal}
                  variant="ghost"
                  className="font-mono text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/30 p-2"
                >
                  ✕
                </Button>
              </div>

              {/* Project Info */}
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h3 className="font-mono text-emerald-400 font-bold mb-3 text-sm">&gt; project_description:</h3>
                  <p className="font-mono text-emerald-300 text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="font-mono text-emerald-400 font-bold mb-3 text-sm">&gt; tech_stack:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech: string, idx: number) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="bg-emerald-900/30 text-emerald-300 border-emerald-500 font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-mono text-emerald-400 font-bold mb-3 text-sm">&gt; key_features:</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature: string, idx: number) => (
                      <li key={idx} className="font-mono text-emerald-300 text-sm flex items-start">
                        <span className="text-emerald-500 mr-2 mt-1 flex-shrink-0">&gt;</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-mono text-emerald-400 font-bold mb-2 text-sm">&gt; status:</h3>
                    <p className="font-mono text-emerald-300 text-sm">{selectedProject.status}</p>
                  </div>
                  <div>
                    <h3 className="font-mono text-emerald-400 font-bold mb-2 text-sm">&gt; date:</h3>
                    <p className="font-mono text-emerald-300 text-sm">{selectedProject.date}</p>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-emerald-600">
                  {selectedProject.projectLink && (
                    <a
                      href={selectedProject.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-emerald-400 hover:text-emerald-300 text-sm underline transition-colors flex items-center gap-2"
                    >
                      &gt; view_source_code
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {selectedProject.demoLink && (
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-emerald-400 hover:text-emerald-300 text-sm underline transition-colors flex items-center gap-2"
                    >
                      &gt; live_demo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
