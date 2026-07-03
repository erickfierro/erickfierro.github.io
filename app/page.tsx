"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { LanguageProvider, useLanguage } from "@/components/language-context"
import { LanguageToggle } from "@/components/language-toggle"

const THEME_STORAGE_KEY = "theme"

function HomeContent() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])
  const { t } = useLanguage()

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === "light" || stored === "dark") {
      setIsDark(stored === "dark")
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light")
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <header className="fixed top-0 left-0 right-0 z-20 px-6 sm:px-8 lg:px-16 py-4 bg-background/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button
            onClick={toggleTheme}
            className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg
                className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <LanguageToggle />
        </div>
      </header>

      <nav className="fixed left-[max(2rem,calc(50%-32rem))] top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "projects", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`${t.navigateTo} ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el
          }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid md:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="md:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">{t.portfolioYear}</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Erick
                  <br />
                  <span className="text-muted-foreground">Fierro</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  {t.heroDescription[0]}{" "}
                  <span className="text-foreground font-medium">
                    {t.heroDescription[1]}
                  </span>{" "}
                  {t.heroDescription[2]}{" "}
                  <span className="text-foreground font-medium">
                    {t.heroDescription[3]}
                  </span>{" "}
                  {t.heroDescription[4]}{" "}
                  <span className="text-foreground font-medium">
                    {t.heroDescription[5]}
                  </span>{" "}
                  {t.heroDescription[6]}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    {t.availableForWork}
                  </div>
                  <div>{t.location}</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 md:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">{t.currently}</div>
                <div className="space-y-2">
                  <div className="text-foreground">{t.position}</div>
                  <div className="text-muted-foreground">{t.company}</div>
                  <div className="text-xs text-muted-foreground">{t.years}</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">{t.focus}</div>
                <div className="flex flex-wrap gap-2">
                  {["COBOL (Online/Batch)", "JCL", "IBM DB2", "VSAM", "z/OS (ISPF)", "CICS", "SQL", "Java", "Git"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[1] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">{t.selectedWork}</h2>
              <div className="text-sm text-muted-foreground font-mono">{t.workYears}</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {t.jobs.map((job, index) => (
                <div
                  key={index}
                  className="group grid md:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="md:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="md:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end mt-2 md:mt-0">
                    {job.stack?.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs text-muted-foreground bg-muted/50 rounded-md hover:bg-muted hover:text-foreground transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => {
            sectionsRef.current[2] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">{t.recentThoughts}</h2>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {t.projects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{project.date}</span>
                      <span>{project.language}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 mt-auto pt-4">
                    <span>{t.readMore}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[3] = el
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="grid md:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">{t.letsConnect}</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">{t.connectDescription}</p>

                <div className="space-y-4">
                  <Link
                    href="mailto:fierroperdomoerickstiven@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">Email</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">{t.elsewhere}</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@erickfierro", url: "https://github.com/erickfierro" },
                  { name: "LinkedIn", handle: "Erick Stiven Fierro", url: "https://www.linkedin.com/in/erick-stiven-fierro/" }
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">{t.copyright}</div>
            <div className="text-xs text-muted-foreground">{t.builtWith}</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  )
}
