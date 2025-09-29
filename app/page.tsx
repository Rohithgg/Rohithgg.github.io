"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { TypingAnimation } from "@/components/typing-animation"

export default function HomePage() {
  const [whoamiExecuted, setWhoamiExecuted] = useState(false)
  const [showProfileDetails, setShowProfileDetails] = useState(false)

  const blogPosts = [
    {
      title: "build_it_platform",
      excerpt:
        "Developing full-stack exam platform with real-time monitoring... Cross-platform security protocols initialized",
      date: "2024.12.15",
      category: "FULLSTACK",
      readTime: "",
    },
    {
      title: "speech_to_text_ai",
      excerpt: "Integrating Hugging Face transformers for production chatbot... Voice pipeline deployed successfully",
      date: "2024.11.28",
      category: "AI/ML",
      readTime: "",
    },
    {
      title: "employee_performance_ml",
      excerpt: "XGBoost classifier achieving 94% accuracy... Tableau dashboard compiled for management insights",
      date: "2024.10.20",
      category: "DATA_SCI",
      readTime: "",
    },
    {
      title: "malware_detection_cli",
      excerpt: "Linux CLI tool with VirusTotal API integration... 95% detection accuracy achieved",
      date: "2024.09.15",
      category: "SECURITY",
      readTime: "",
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

  return (
    <div className="min-h-screen bg-black text-emerald-400">
      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="text-center font-mono w-full max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <div className="block sm:hidden">
              <pre className="text-emerald-300 text-[0.4rem] xs:text-[0.45rem] mb-2 leading-tight whitespace-pre select-none">
                {`    
    ██████╗  ██████╗ ██╗  ██╗██╗████████╗██╗  ██╗
    ██╔══██╗██╔═══██╗██║  ██║██║╚══██╔══╝██║  ██║
    ██████╔╝██║   ██║███████║██║   ██║   ███████║
    ██╔══██╗██║   ██║██╔══██║██║   ██║   ██╔══██║
    ██║  ██║╚██████╔╝██║  ██║██║   ██║   ██║  ██║
    ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝`}
              </pre>
              <pre className="text-emerald-300 text-[0.4rem] xs:text-[0.45rem] mb-4 leading-tight whitespace-pre select-none">
                {`        
        ██████╗  ██████╗ ███╗   ██╗ █████╗ 
        ██╔════╝ ██╔═══██╗████╗  ██║██╔══██╗
        ██║  ███╗██║   ██║██╔██╗ ██║███████║
        ██║   ██║██║   ██║██║╚██╗██║██╔══██║
        ╚██████╔╝╚██████╔╝██║ ╚████║██║  ██║
         ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝`}
              </pre>
            </div>

            <div className="hidden sm:block">
              <pre className="text-emerald-300 text-[0.5rem] xs:text-[0.6rem] sm:text-xs md:text-sm lg:text-base xl:text-lg mb-4 sm:mb-6 lg:mb-8 leading-tight whitespace-pre select-none">
                {`
██████╗  ██████╗ ██╗  ██╗██╗████████╗██╗  ██╗    ██████╗  ██████╗ ███╗   ██╗ █████╗ 
██╔══██╗██╔═══██╗██║  ██║██║╚══██╔══╝██║  ██║   ██╔════╝ ██╔═══██╗████╗  ██║██╔══██╗
██████╔╝██║   ██║███████║██║   ██║   ███████║   ██║  ███╗██║   ██║██╔██╗ ██║███████║
██╔══██╗██║   ██║██╔══██║██║   ██║   ██╔══██║   ██║   ██║██║   ██║██║╚██╗██║██╔══██║
██║  ██║╚██████╔╝██║  ██║██║   ██║   ██║  ██║   ╚██████╔╝╚██████╔╝██║ ╚████║██║  ██║
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝
`}
              </pre>
            </div>

            <div className="text-emerald-400 text-sm sm:text-base md:text-lg lg:text-xl space-y-1 sm:space-y-2">
              <TypingAnimation text="> Software Engineer | AI/ML Enthusiast" speed={30} />
              <TypingAnimation text="> Full-Stack Developer | Hyderabad, India" speed={30} />
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
                  <TypingAnimation
                    text="> Executing user_profile.sh..."
                    speed={40}
                    className="text-emerald-500 block"
                  />
                  <TypingAnimation
                    text="> Loading developer credentials..."
                    speed={40}
                    className="text-emerald-500 block"
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
                      <TypingAnimation
                        text="> Profile loaded successfully ✓"
                        speed={30}
                        className="text-emerald-500 block mt-3 sm:mt-4"
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
            <TypingAnimation text="> ls -la ~/recent_projects/" speed={60} />
          </h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-2">
            {blogPosts.map((post, index) => (
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
    </div>
  )
}
