"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Calendar,
  MapPin,
  Trophy,
  Rocket,
  PenTool as Tool,
  Gift,
  Users,
  CheckCircle,
  CalendarDays,
  Clock,
  Presentation,
  Code,
  Bug,
  Cloud,
  Mic,
  Layout,
  Database,
  Brain,
} from "lucide-react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const rulesData = [
  { category: "Eligibility", icon: "✅", rule: "Participants must be 18 years or older to participate." },
  { category: "Eligibility", icon: "✅", rule: "No prior hackathon experience required." },
  { category: "Eligibility", icon: "✅", rule: "Open to students, professionals, and self-taught coders." },
  { category: "Team Formation", icon: "👥", rule: "Teams must have a minimum of 3 and a maximum of 5 members." },
  {
    category: "Team Formation",
    icon: "👥",
    rule: "Pre-formed teams are allowed, but individuals can also join and be assigned to a team.",
  },
  { category: "Team Formation", icon: "📋", rule: "Teams must be finalized before the coding phase begins." },
  {
    category: "Project Requirements",
    icon: "🛠️",
    rule: "All projects must be built from scratch during the hackathon.",
  },
  {
    category: "Project Requirements",
    icon: "📚",
    rule: "Participants may use open-source libraries, APIs, and datasets, but must credit sources properly.",
  },
  {
    category: "Project Requirements",
    icon: "💡",
    rule: "Projects must fall within the specified hackathon themes/categories.",
  },
  {
    category: "AI & External Assistance",
    icon: "🤖",
    rule: "AI tools (e.g., GitHub Copilot, ChatGPT) may be used, but all AI-generated content must be clearly documented.",
  },
  {
    category: "AI & External Assistance",
    icon: "🚫",
    rule: "Fully AI-generated code without human contribution is not allowed.",
  },
  {
    category: "AI & External Assistance",
    icon: "❌",
    rule: "No external paid development or consulting assistance is allowed.",
  },
  { category: "Programming Language", icon: "💻", rule: "Any programming language or framework may be used." },
  {
    category: "Programming Language",
    icon: "⌨️",
    rule: "Recommended languages: Python, JavaScript, Java, Swift, Solidity, C++.",
  },
  { category: "Development & Submission", icon: "💾", rule: "All projects must be submitted via GitHub/GitLab." },
  {
    category: "Development & Submission",
    icon: "📄",
    rule: "Submission must include codebase, README file, demo video, and documentation.",
  },
  { category: "Development & Submission", icon: "⏳", rule: "Late submissions will not be accepted." },
  {
    category: "Judging Criteria",
    icon: "⚙️",
    rule: "Technical Execution (30%) – Code quality, scalability, efficiency.",
  },
  {
    category: "Judging Criteria",
    icon: "🧠",
    rule: "Innovation & Creativity (20%) – Novelty and problem-solving approach.",
  },
  { category: "Judging Criteria", icon: "🎨", rule: "User Experience & Design (15%) – UI/UX and accessibility." },
  { category: "Judging Criteria", icon: "📈", rule: "Impact & Business Viability (20%) – Real-world relevance." },
  {
    category: "Judging Criteria",
    icon: "🎤",
    rule: "Presentation & Communication (15%) – Clarity and demonstration effectiveness.",
  },
  { category: "Demo & Presentation", icon: "🎥", rule: "Teams must present a live demo of their project." },
  {
    category: "Demo & Presentation",
    icon: "🗣️",
    rule: "Judges will ask questions to evaluate problem-solving and implementation.",
  },
  { category: "Demo & Presentation", icon: "⏱️", rule: "Demo presentations must be limited to 5 minutes." },
  {
    category: "Fair Play & Ethical Conduct",
    icon: "🚫",
    rule: "Plagiarism is strictly prohibited – all code must be original or properly credited.",
  },
  {
    category: "Fair Play & Ethical Conduct",
    icon: "🤝",
    rule: "Teams must respect fellow participants, mentors, and judges.",
  },
  { category: "Fair Play & Ethical Conduct", icon: "❌", rule: "No sabotage or disruption of other teams' work." },
  {
    category: "Fair Play & Ethical Conduct",
    icon: "⛔",
    rule: "No use of offensive, discriminatory, or unethical content in projects.",
  },
  {
    category: "Security & Compliance",
    icon: "🛡️",
    rule: "All participants must comply with hackathon security guidelines.",
  },
  {
    category: "Security & Compliance",
    icon: "🔐",
    rule: "Projects must follow ethical AI practices and data privacy standards.",
  },
  {
    category: "Hacking Phase & Checkpoints",
    icon: "⏰",
    rule: "Hacking phase runs for 24 hours – teams must work within this timeframe.",
  },
  {
    category: "Hacking Phase & Checkpoints",
    icon: "📋",
    rule: "Checkpoints will occur every 6 hours for mentoring and progress validation.",
  },
  {
    category: "Event Conduct & Behavior",
    icon: "🏢",
    rule: "Teams must remain at the venue for the entire hackathon duration (no remote participation).",
  },
  {
    category: "Event Conduct & Behavior",
    icon: "🛌",
    rule: "Sleeping/rest areas will be available, but participants must be actively engaged.",
  },
  {
    category: "Event Conduct & Behavior",
    icon: "🚨",
    rule: "Harassment, discrimination, or inappropriate behavior will result in immediate disqualification.",
  },
  { category: "Post-Hackathon Follow-Up", icon: "🏆", rule: "Winners will be announced at the closing ceremony." },
  {
    category: "Post-Hackathon Follow-Up",
    icon: "💼",
    rule: "Top teams may receive job offers or invites to the Intellibus Academy.",
  },
  {
    category: "Post-Hackathon Follow-Up",
    icon: "🤝",
    rule: "Participants will receive feedback and networking opportunities.",
  },
]

export default function Page() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Rocket className="h-6 w-6" />
            <span className="font-bold">Intellibus Hackathon</span>
          </Link>
          <nav className="ml-auto flex gap-4">
            <Link href="#prizes" className="text-sm font-medium hover:underline underline-offset-4">
              Prizes
            </Link>
            <Link href="#tech-stack" className="text-sm font-medium hover:underline underline-offset-4">
              Tech Stack
            </Link>
            <Link href="#challenge" className="text-sm font-medium hover:underline underline-offset-4">
              Challenge
            </Link>
            <Link href="#rules" className="text-sm font-medium hover:underline underline-offset-4">
              Rules
            </Link>
            <Link href="#schedule" className="text-sm font-medium hover:underline underline-offset-4">
              Schedule
            </Link>
            <Link href="#jobs" className="text-sm font-medium hover:underline underline-offset-4">
              Jobs
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Button variant="default" size="sm" asChild>
              <Link href="#register">Register Now</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container space-y-8 py-16 md:py-24 lg:py-32">
          <div className="flex flex-col items-center gap-6 text-center">
            <Badge variant="secondary" className="h-7 items-center rounded-full px-4 text-sm font-medium">
              Intellibus Hackathon 2025 🚀
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Build. Innovate. Win.
            </h1>
            <p className="max-w-[48rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Launch groundbreaking solutions in real-time experiences with cutting-edge technology and cloud-native
              deployments.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>AC Hotel Kingston, Jamaica</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>March 15-16, 2025</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Trophy className="h-4 w-4" />
                <span>$15,000+ in Prizes</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Button size="lg" className="h-12 px-8 text-base font-semibold" asChild>
                <Link href="#register">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base font-semibold" asChild>
                <Link href="/docs">
                  Explore Documentation <span className="ml-2">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section id="challenge" className="container py-12 md:py-24 lg:py-32 border-t scroll-mt-20">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
              Challenge: Real-Time Experience
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Build a Real-Time Experience that solves real-world problems with cutting-edge technology
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Overview</h3>
                <p className="text-muted-foreground mb-4">
                  Your team is tasked with building a Real-Time Experience, where users can securely store, search, and
                  personalize their data, with automated deployments and multi-platform accessibility.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Key Functionalities:</h4>
                  <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                    <li>Real-Time Updates using Kafka or WebSockets</li>
                    <li>User Authentication & Authorization</li>
                    <li>Search & Personalization</li>
                    <li>Persisted Data Storage</li>
                    <li>Automated Deployments</li>
                    <li>Cloud-Native Deployment</li>
                    <li>Multi-Platform Support</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Tech Stack Requirements</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Backend:</h4>
                    <p className="text-muted-foreground">Java (Spring Boot), Kafka, Postgres, Snowflake</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Frontend:</h4>
                    <p className="text-muted-foreground">Typescript (React, Angular, or Vue)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cloud & Infrastructure:</h4>
                    <p className="text-muted-foreground">AWS (EKS, Lambda, API Gateway), Terraform for provisioning</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">CI/CD & Deployments:</h4>
                    <p className="text-muted-foreground">GitHub Actions, Terraform, AWS CodePipeline</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Example Use Cases</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Smart ER Queue",
                  problem: "ER patients wait hours without knowing when they'll be seen.",
                  solution: "A real-time ER wait tracker with dynamic priority based on symptoms and capacity.",
                },
                {
                  title: "Surplus Crop Marketplace",
                  problem: "Farmers have surplus crops that go to waste due to supply chain inefficiencies.",
                  solution: "Real-time marketplace connecting farmers to local consumers and food banks.",
                },
                {
                  title: "Grid Outage Predictor",
                  problem: "Power outages disrupt businesses and homes unexpectedly.",
                  solution: "Real-time outage prediction system monitoring grid health and alerting users.",
                },
              ].map((useCase, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">{useCase.title}</h4>
                    <div className="space-y-2">
                      <div>
                        <span className="text-red-500">🛑 Broken Experience:</span>
                        <p className="text-muted-foreground text-sm">{useCase.problem}</p>
                      </div>
                      <div>
                        <span className="text-green-500">💡 Solution:</span>
                        <p className="text-muted-foreground text-sm">{useCase.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Judging Criteria</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Technical Implementation",
                "Scalability & Performance",
                "Security & Authentication",
                "Innovation & Use Case Fit",
                "Deployment & Cloud Readiness",
                "User Experience",
                "Fun Factor",
              ].map((criterion, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{criterion}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Build?</h3>
            <p className="text-muted-foreground mb-6">Make it real-time, make it fun, and get coding!</p>
            <Button size="lg" asChild>
              <Link href="/register">Start Building Now</Link>
            </Button>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="container py-12 md:py-24 lg:py-32 scroll-mt-20">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Built for Developers</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Solve real-world broken experiences with AI, Cloud, and Real-Time Systems
            </p>
          </div>

          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8">
            {/* Tech Stack Cards */}
            <Card className="mt-8">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <Tool className="h-12 w-12" />
                <h3 className="text-xl font-bold">Tech Stack</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Java | React | TypeScript | Kafka | Postgres | Snowflake | AWS | Terraform
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <Rocket className="h-12 w-12" />
                <h3 className="text-xl font-bold">Build & Deploy</h3>
                <ul className="text-sm text-muted-foreground">
                  <li>🔹 Build Scalable, Cloud-Native Applications</li>
                  <li>🔹 Real-Time Streaming & Personalization</li>
                  <li>🔹 Automated CI/CD Pipelines</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <Users className="h-12 w-12" />
                <h3 className="text-xl font-bold">Features</h3>
                <ul className="text-sm text-muted-foreground">
                  <li>☑️ Live Mentorship</li>
                  <li>☑️ Hands-On Workshops</li>
                  <li>☑️ Job & Scholarship Opportunities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SPAIN Framework Section */}
        <section className="container py-12 md:py-24 lg:py-32 border-t scroll-mt-20">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-balance">What is SPAIN?</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-pretty">
              At the AI Hackathon, we focus on building solutions that are not just innovative but functional, reliable,
              and impactful. That's where SPAIN comes in – a structured framework to guide your development process.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-8">SPAIN Framework</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="font-bold text-lg">S – Stability</span>
                  <span className="text-blue-500">◆</span>
                </div>
                <p className="text-muted-foreground">
                  Does your product work reliably without crashing? Ensure it runs smoothly under different conditions.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="font-bold text-lg">P – Performance</span>
                  <span className="text-blue-500">◆</span>
                </div>
                <p className="text-muted-foreground">
                  Is your application fast and responsive? Optimize speed to create a seamless user experience.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="font-bold text-lg">A – Availability</span>
                  <span className="text-blue-500">◆</span>
                </div>
                <p className="text-muted-foreground">
                  Can users access your solution when they need it? Make sure it's always up and running.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="font-bold text-lg">I – Integrity</span>
                  <span className="text-blue-500">◆</span>
                </div>
                <p className="text-muted-foreground">
                  Is your data accurate and secure? Maintain consistency and prevent corruption or loss.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="font-bold text-lg">N – Novelty</span>
                  <span className="text-blue-500">◆</span>
                </div>
                <p className="text-muted-foreground">
                  Does your solution bring something fresh to the table? While innovation is encouraged, it should come
                  after ensuring everything else works flawlessly.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-6">Why It Matters</h3>
            <p className="text-center text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The best projects are those that fix broken experiences while maintaining high quality. At the hackathon,
              we value stability and usability over just being "cool". Follow SPAIN to build a solution that isn't just
              impressive, but actually works!
            </p>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Get ready to create something game-changing! 🚀</h3>
          </div>
        </section>

        {/* Team Formation Section */}
        <section className="container py-12 md:py-24 lg:py-32 border-t scroll-mt-20">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl text-balance">
              Team Formation: Collaborate & Innovate Together!
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-pretty">
              At Intellibus Hackathon 2025, teamwork is at the heart of innovation. Whether you're joining with a
              pre-formed group or looking to find teammates at the event, we ensure that everyone gets a chance to
              collaborate, contribute, and build something amazing.
            </p>
          </div>

          <div className="mt-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">How Teams Work</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-blue-500 flex-shrink-0">◆</span>
                    <div>
                      <span className="font-bold text-muted-foreground">Team Size:</span>
                      <span className="text-muted-foreground ml-2">3-5 members</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-blue-500 flex-shrink-0">◆</span>
                    <div>
                      <span className="font-bold text-muted-foreground">Diverse Roles Encouraged:</span>
                      <span className="text-muted-foreground ml-2">
                        Developers, Designers, Business Strategists, and Project Leads
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-blue-500 flex-shrink-0">◆</span>
                    <div>
                      <span className="font-bold text-muted-foreground">At Least One Technical Member:</span>
                      <span className="text-muted-foreground ml-2">
                        Every team should have at least one person comfortable with development
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Don't Have a Team? No Worries!</h3>
                <p className="text-muted-foreground">
                  If you don't have a team yet, we'll help you find the perfect fit during the event. We'll host a team
                  formation session where you can meet other participants, share ideas, and connect with people who
                  complement your skills.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Why Teamwork Matters</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-muted-foreground">Learn from others</span>
                      <span className="text-muted-foreground"> & improve your skills</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-muted-foreground">Divide and conquer</span>
                      <span className="text-muted-foreground"> tasks efficiently</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-muted-foreground">Get inspired</span>
                      <span className="text-muted-foreground"> by different perspectives</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-muted-foreground">Build lasting</span>
                      <span className="text-muted-foreground"> professional relationships</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Your Contribution Matters!</h3>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Great ideas come to life when different skill sets come together. Whether you code, design, strategize, or
              just love solving problems, your role is important!
            </p>
            <Button size="lg" className="h-12 px-8 text-base font-semibold bg-slate-900 hover:bg-slate-800 text-white" asChild>
              <Link href="/register">Join a Team Now</Link>
            </Button>
          </div>
        </section>

        {/* Prizes Section */}
        <section id="prizes" className="container py-12 md:py-24 lg:py-32 scroll-mt-20">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Prizes & Rewards</h2>
          </div>

          <div className="mx-auto mt-8 grid gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8">
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <Trophy className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Top 20</h3>
                <p className="text-center text-sm text-muted-foreground">Employment Opportunities at Intellibus</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <Gift className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Next 20</h3>
                <p className="text-center text-sm text-muted-foreground">3-Month Scholarship to Intellibus Academy</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <Rocket className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Next 60</h3>
                <p className="text-center text-sm text-muted-foreground">Fast-Track Admissions with fee waivers</p>
              </CardContent>
            </Card>
          </div>

          <div className="mx-auto mt-12 max-w-[58rem] text-center">
            <h3 className="text-xl font-bold mb-4">🎁 All Participants Receive</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary">👕 Intellibus T-Shirt</Badge>
              <Badge variant="secondary">🥤 Intellibus Tumbler</Badge>
              <Badge variant="secondary">🍗 KFC, Drinks & More!</Badge>
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section id="rules" className="container py-12 md:py-24 lg:py-32 border-t scroll-mt-20">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Rules of Engagement</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Ensure fair play and maximize your hackathon experience by following these guidelines.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {[
              { title: "Eligibility", icon: "✅" },
              { title: "Team Formation", icon: "👥" },
              { title: "Project Requirements", icon: "🛠️" },
              { title: "AI & External Assistance", icon: "🤖" },
              { title: "Programming Language", icon: "💻" },
              { title: "Development & Submission", icon: "💾" },
              { title: "Judging Criteria", icon: "⚙️" },
              { title: "Demo & Presentation", icon: "🎥" },
              { title: "Fair Play & Ethical Conduct", icon: "🤝" },
              { title: "Security & Compliance", icon: "🛡️" },
              { title: "Hacking Phase & Checkpoints", icon: "⏰" },
              { title: "Event Conduct & Behavior", icon: "🏢" },
              { title: "Post-Hackathon Follow-Up", icon: "🏆" },
            ].map((category, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="mr-2">{category.icon}</span>
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {rulesData
                      .filter((rule) => rule.category === category.title)
                      .map((rule, ruleIndex) => (
                        <li key={ruleIndex} className="flex items-start">
                          <span className="mr-2">{rule.icon}</span>
                          <span className="text-sm text-muted-foreground">{rule.rule}</span>
                        </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="container py-12 md:py-24 lg:py-32 border-t scroll-mt-20">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Event Schedule</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              The Hackathon will take place over two days with structured events, checkpoints, and workshops to ensure
              teams receive the support they need while staying on track for submission.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-6 w-6" />
                  Day 1 – March 15, 2025 (Kickoff & Development Begins)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Time</TableHead>
                      <TableHead>Activity</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { time: "08:00 AM", activity: "Check-in & Registration" },
                      { time: "09:00 AM", activity: "Opening Ceremony & Hackathon Challenge Release" },
                      { time: "10:00 AM", activity: "Team Finalization & Strategy Session" },
                      { time: "11:00 AM", activity: "🚀 Hacking Begins! Teams start developing their solutions." },
                      {
                        time: "12:00 NOON – 6:00 AM (Next Day)",
                        activity: "Coaching Sessions (See Parallel Workshop Schedule)",
                      },
                      { time: "01:00 PM", activity: "✅ Checkpoint #1 – Mentor feedback" },
                      { time: "04:00 PM", activity: "✅ Checkpoint #2 – Midway review" },
                      { time: "09:00 PM", activity: "✅ Checkpoint #3 – Code optimization & debugging" },
                      { time: "11:00 PM", activity: "🌙 Midnight Hacking Session" },
                    ].map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.time}</TableCell>
                        <TableCell>{item.activity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-6 w-6" />
                  Day 2 – March 16, 2025 (Finalizing & Presentations)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Time</TableHead>
                      <TableHead>Activity</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { time: "06:00 AM", activity: "✅ Final Checkpoint #4 – Last debugging & testing" },
                      { time: "09:00 AM", activity: "🔍 Last Debugging & Testing Session" },
                      { time: "11:00 AM", activity: "📝 Project Submission Deadline" },
                      { time: "12:00 NOON", activity: "🍽️ Lunch Break" },
                      { time: "01:00 PM", activity: "🏆 Judging Begins" },
                      { time: "03:00 PM", activity: "🎤 Finalist Presentations to Judges" },
                      { time: "05:00 PM", activity: "🏅 Winner Announcement & Awards Ceremony" },
                      { time: "06:00 PM", activity: "🎉 Closing Remarks & Networking" },
                    ].map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.time}</TableCell>
                        <TableCell>{item.activity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-6 w-6" />
                  Parallel Workshop Schedule
                </CardTitle>
                <CardDescription>
                  Each workshop is two hours long and designed to accommodate varying skill levels, providing hands-on
                  guidance for key aspects of hackathon development.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      title: "How to Create Awesome Experiences",
                      icon: Presentation,
                      learn:
                        "How to design engaging, real-time user experiences that people love. Learn UI/UX fundamentals, motion design, and interactivity strategies.",
                      teachers:
                        "Industry-leading UX designers from Intellibus and guest speakers from top tech companies.",
                    },
                    {
                      title: "How to Code",
                      icon: Code,
                      learn:
                        "Essential coding principles for building scalable, cloud-native applications. Learn best practices in Java, TypeScript, and backend development.",
                      teachers:
                        "Senior software engineers from Intellibus with experience in AI-driven and real-time systems.",
                    },
                    {
                      title: "How to Debug",
                      icon: Bug,
                      learn:
                        "Advanced debugging techniques for identifying and resolving errors efficiently. Learn about logging, tracing, and real-time monitoring.",
                      teachers: "Expert DevOps engineers and debugging specialists.",
                    },
                    {
                      title: "How to Deploy",
                      icon: Cloud,
                      learn: "Deployment strategies using AWS, Terraform, Kubernetes, and CI/CD automation.",
                      teachers: "Cloud engineers and DevOps specialists from Intellibus.",
                    },
                    {
                      title: "How to Demo",
                      icon: Mic,
                      learn:
                        "Techniques to present your project effectively. Learn storytelling, structuring a compelling pitch, and handling live Q&A.",
                      teachers: "Public speaking and business strategy experts from Intellibus.",
                    },
                  ].map((workshop, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <workshop.icon className="h-5 w-5" />
                          <span>{workshop.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p>
                            <strong>What You'll Learn:</strong> {workshop.learn}
                          </p>
                          <p>
                            <strong>Who's Teaching:</strong> {workshop.teachers}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-semibold">
              📢 Join the workshops, sharpen your skills, and create something amazing! 🚀
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
              Think You're Not Good Enough?
              <br />
              Think Again!
            </h2>
            <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
              At Intellibus Hackathon 2025, we believe innovation comes from curiosity and passion, not just experience.
              Whether you're a beginner or a seasoned pro, you belong here.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-card p-8 rounded-lg border text-left">
                <h3 className="text-2xl font-bold mb-4">No Experience? No Problem!</h3>
                <p className="text-muted-foreground">
                  Many participants come in thinking they're "not good enough"—but end up building something incredible.
                  This hackathon isn't just about competition; it's about learning, experimenting, and growing in a
                  supportive environment.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border text-left">
                <h3 className="text-2xl font-bold mb-6">Workshops & Mentorship to Help You Succeed</h3>
                <p className="text-muted-foreground mb-4">
                  Not confident in your coding, design, or problem-solving skills? We've got you covered! Throughout the
                  event, we offer interactive workshops led by industry experts to help you learn essential skills in:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    AI & Cloud Computing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    UI/UX & Product Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    Debugging & Deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    Real-Time Data Processing
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  You'll also have mentors and coaches to guide you every step of the way.
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border mb-12">
              <h3 className="text-2xl font-bold mb-4">Teamwork Makes It Easier</h3>
              <p className="text-muted-foreground">
                Hackathons aren't solo battles—you'll work in teams of 3-5 people, so you don't need to know everything
                yourself. Each team needs diverse skills—whether you code, design, or just have big ideas, there's a
                place for you.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Step Out of Your Comfort Zone & Join Us!</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Be part of something bigger and challenge yourself to grow!
              </p>
              <Button size="lg" className="h-12 px-8 text-base font-semibold" asChild>
                <Link href="/register">Register Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section id="jobs" className="container py-12 md:py-24 lg:py-32 border-t scroll-mt-20">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Intellibus Careers</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Join Our Elite Engineering Team
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Java Engineer",
                description:
                  "Write applications in Java using Object-Oriented Design Principles, create Java Spring Boot REST Services, and more.",
                qualifications:
                  "Bachelor's degree in Computer Science or related field preferred. Experience with AWS, Java 8, REST-based Microservices, Hibernate ORM, Relational Databases, Kafka, Linux/Unix.",
                icon: Code,
              },
              {
                title: "React Engineer",
                description:
                  "Design and implement scalable React-based applications, develop and maintain architecture documentation, and collaborate cross-functionally.",
                qualifications:
                  "Strong understanding of UI frameworks, performance optimization, and cloud deployments. Experience with ReactJS, TypeScript, Jest & Enzyme, REST APIs, AWS.",
                icon: Layout,
              },
              {
                title: "Snowflake Data Engineer",
                description:
                  "Design & maintain ETL pipelines using Snowflake's Snowpipe, Streams, and Tasks, optimize query performance & warehouse scalability.",
                qualifications:
                  "Strong command of SQL, Python (AWS Boto3, JSON), and Unix/Linux. Hands-on expertise in ETL, Data Warehousing, Airflow, and AWS (Glue, S3, Step Functions, Lambda).",
                icon: Database,
              },
              {
                title: "AI/MLOps Engineer",
                description:
                  "Define MLOps strategies, implement end-to-end ML deployment pipelines, and architect ML workloads on cloud platforms.",
                qualifications:
                  "Expertise in MLflow, Kubeflow, ECS/ECR, CI/CD, PyTorch, TensorFlow. Strong JavaScript, Scala, REST APIs, Python, and UNIX skills.",
                icon: Brain,
              },
            ].map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <job.icon className="h-6 w-6" />
                    {job.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Job Description</h4>
                  <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                  <h4 className="font-semibold mb-2">Qualifications</h4>
                  <p className="text-sm text-muted-foreground">{job.qualifications}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-semibold">📢 Join us to build the future of intelligent platforms!</p>
            <Button size="lg" asChild>
              <Link href="https://intellibus.com/careers" target="_blank">View All Openings</Link>
            </Button>
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Our Partners</h2>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <img src="/stuff/trees.avif" alt="Life Club - Fruitful Trees Foundation" className="h-16 w-auto mx-auto mb-2" />
                <div className="text-lg font-bold">Fruitful Trees Foundation</div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <img src="/stuff/aws.png" alt="AWS" className="h-16 w-auto mx-auto mb-2" />
                <div className="text-lg font-bold">AWS</div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <img src="/stuff/west.png" alt="UWI" className="h-16 w-auto mx-auto mb-2" />
                <div className="text-sm font-bold">The University of the West Indies</div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <img src="/stuff/tech.jpg" alt="UTECH" className="h-16 w-auto mx-auto mb-2" />
                <div className="text-sm font-bold">University of Technology</div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <img src="/stuff/maritime.png" alt="CMU" className="h-16 w-auto mx-auto mb-2" />
                <div className="text-sm font-bold">Caribbean Maritime University</div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <img src="/stuff/mico.png" alt="MICO" className="h-16 w-auto mx-auto mb-2" />
                <div className="text-sm font-bold">Mico University College</div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <img src="/stuff/ncu.jpg" alt="NCU" className="h-16 w-auto mx-auto mb-2" />
                <div className="text-sm font-bold">Northern Caribbean University</div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Explore the Venue</h2>
            <p className="text-lg text-muted-foreground">AC Hotel Kingston, Jamaica</p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <img
                src="/stuff/venue1.jpg"
                alt="AC Hotel Kingston exterior"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white font-bold text-xl">AC HOTEL KINGSTON</div>
            </div>

            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <img src="/stuff/venue2.jpg" alt="AC Hotel Kingston lobby" className="w-full h-full object-cover" />
            </div>

            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <img
                src="/stuff/venue3.jpg"
                alt="AC Hotel Kingston restaurant"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <img
                src="/stuff/venue4.jpg"
                alt="AC Hotel Kingston lounge"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Parking Information</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              We've got you covered! The AC Hotel Kingston offers ample parking for all event attendees. The venue has
              multiple parking floors, ensuring that you can find a convenient spot upon arrival.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Key Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <span className="font-semibold text-muted-foreground">On-site Parking:</span>
                      <span className="text-muted-foreground ml-2">Available within the hotel premises.</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <span className="font-semibold text-muted-foreground">Event-Friendly Capacity:</span>
                      <span className="text-muted-foreground ml-2">
                        The hotel regularly hosts large events, so there is sufficient space.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <span className="font-semibold text-muted-foreground">Secure & Accessible:</span>
                      <span className="text-muted-foreground ml-2">
                        The parking area is monitored for your convenience and safety.
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Plan Ahead</h3>
                <p className="text-muted-foreground text-center">
                  We recommend arriving early to secure a spot and allow time for check-in. If there are any last-minute
                  updates regarding parking arrangements, they will be posted here before the event.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Coaches</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src="/stuff/celu.jpg"
                    alt="Celu Ramaswamy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">Celu Ramaswamy</h3>
                <p className="text-sm text-muted-foreground">CEO, Blockgenic</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src="/stuff/anubis.jpg"
                    alt="Anubis Watal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">Anubis Watal</h3>
                <p className="text-sm text-muted-foreground">Platform Lead — Lab & Open Source, Intellibus</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src="/stuff/sid.jpg"
                    alt="Sid Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">Sid Sharma</h3>
                <p className="text-sm text-muted-foreground">Solutions Architect, Intellibus</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src="/stuff/vishnu.jpg"
                    alt="Vishnu Patel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">Vishnu Patel</h3>
                <p className="text-sm text-muted-foreground">Solutions Architect, Intellibus</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src="/stuff/roger.jpg"
                    alt="Roger Hu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">Roger Hu</h3>
                <p className="text-sm text-muted-foreground">Financial Services Industry Leader, Intellibus</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src="/stuff/manish.jpg"
                    alt="Manish Modh"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">Manish Modh</h3>
                <p className="text-sm text-muted-foreground">Founder & CEO, Andromeda 360</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Judges</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src="/stuff/ed.jpg"
                      alt="Ed Watal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Ed Watal</h3>
                  <p className="text-sm text-muted-foreground">Founder & CTO, Intellibus</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src="/stuff/chris.jpg"
                      alt="Chris Reckord"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Chris Reckord</h3>
                  <p className="text-sm text-muted-foreground">Industry Expert</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src="/stuff/ross.jpg"
                      alt="Lt. Gen. Ross Coffman"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Lt. Gen. Ross Coffman</h3>
                  <p className="text-sm text-muted-foreground">Strategic Advisor</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src="/stuff/matthew.jpg"
                      alt="Matthew Stone"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Matthew Stone</h3>
                  <p className="text-sm text-muted-foreground">Technical Lead</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src="/stuff/michael.jpg"
                      alt="Michael Marcotte"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Michael Marcotte</h3>
                  <p className="text-sm text-muted-foreground">Senior Architect</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src="/stuff/almando.jpg"
                      alt="Almando Cox"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Almando Cox</h3>
                  <p className="text-sm text-muted-foreground">Technical Expert</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Additional Mentors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src="/stuff/aditya.jpg"
                      alt="Aditya Mulik"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Aditya Mulik</h3>
                  <p className="text-sm text-muted-foreground">Cloud Architect</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src="/stuff/balvinder.jpg"
                      alt="Balvinder Banjardar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Balvinder Banjardar</h3>
                  <p className="text-sm text-muted-foreground">Data Engineer</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src="/stuff/lechen.jpg"
                      alt="Lechen Li"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Lechen Li</h3>
                  <p className="text-sm text-muted-foreground">AI/ML Expert</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src="/stuff/mukesh.jpg"
                      alt="Mukesh Jain"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Mukesh Jain</h3>
                  <p className="text-sm text-muted-foreground">Platform Engineer</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src="/stuff/narendra.jpg"
                      alt="Narendra Gowda"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Narendra Gowda</h3>
                  <p className="text-sm text-muted-foreground">DevOps Lead</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src="/stuff/sai.jpg"
                      alt="Sai Krishnan Subramanian"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Sai Krishnan Subramanian</h3>
                  <p className="text-sm text-muted-foreground">Solutions Engineer</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src="/stuff/vihar.jpg"
                      alt="Vihar Manchala"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold">Vihar Manchala</h3>
                  <p className="text-sm text-muted-foreground">Frontend Architect</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Learn from industry experts with years of experience in building scalable, real-time systems.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-12 md:py-24 lg:py-32 border-t scroll-mt-20">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">About Intellibus</h2>
          </div>

          <div className="mt-12 space-y-8">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Intellibus is an international platform engineering and IT consulting firm, based in Reston, VA., USA
                  dedicated to creating intelligent business platforms.
                </p>
                <p className="text-muted-foreground mb-4">
                  The company's mission is to make life simple through intelligent platforms using ethically-sourced
                  data and AI. It focuses on simplification of large-scale systems, and its clients are primarily global
                  banks, insurers, fintech firms, and other financial institutions.
                </p>
                <p className="text-muted-foreground">
                  Its elite team of engineers, architects and developers are drawn from the world's top professionals
                  who have been serial entrepreneurs, founders and domain experts before coming to Intellibus.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Achievements</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Intellibus was named in Inc. Magazine's top 100 fastest-growing software companies in the USA in
                    2024.
                  </li>
                  <li>
                    California Business Journal named founder Ed Watal as one of the innovation entrepreneurs to watch
                    in 2024.
                  </li>
                  <li>
                    Ed Watal has been honored as one of the Worthy 100 for 2024 by the L'Oréal Group and Worth Media,
                    recognizing individuals who are transforming industries through innovation, leadership, and
                    meaningful contributions.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <p className="text-muted-foreground mb-4">
                  Mr Watal is also Lead Faculty of the NYU School of Professional Studies (NYU SPS) & Intellibus AI
                  Masterclass.
                </p>
                <Button variant="outline" asChild>
                  <Link href="https://intellibus.com/ai-masterclass" target="_blank">Learn More About AI Masterclass</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section id="register" className="container py-12 md:py-24 lg:py-32 space-y-8 scroll-mt-20">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Join the Challenge</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Real Problems. Real-Time Solutions. From Smart ER Queues to Surplus Crop Marketplaces, build something
              that fixes real-world inefficiencies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/register">Register Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/rules">Read the Rules</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">INTELLIBUS</h3>
              <p className="text-sm text-muted-foreground mb-2">Intelligent Business Platforms LLC</p>
              <p className="text-sm text-muted-foreground">Built with ❤️ by Intellibus.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">PRIVACY</h3>
              <div className="space-y-2">
                <Link
                  href="/privacy/data-protection"
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  Data Protection Policy
                </Link>
                <Link href="/privacy/dpia" className="block text-sm text-muted-foreground hover:text-foreground">
                  DPIA Report
                </Link>
                <Link
                  href="/privacy/participants"
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  Privacy Notice - Participants
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">PRIVACY NOTICES</h3>
              <div className="space-y-2">
                <Link href="/privacy/job-offers" className="block text-sm text-muted-foreground hover:text-foreground">
                  Privacy Notice - Job Offers
                </Link>
                <Link href="/privacy/minors" className="block text-sm text-muted-foreground hover:text-foreground">
                  Privacy Notice - Minors
                </Link>
                <Link href="/privacy/winners" className="block text-sm text-muted-foreground hover:text-foreground">
                  Privacy Notice - Winners
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">CONTACT</h3>
              <p className="text-sm text-muted-foreground mb-2">For privacy inquiries:</p>
              <Link
                href="mailto:intellibusdpo@designprivacy.io"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                intellibusdpo@designprivacy.io
              </Link>
            </div>
          </div>

          <div className="border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">© 2025 Intellibus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
