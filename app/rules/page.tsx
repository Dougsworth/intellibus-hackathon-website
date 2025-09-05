"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, CheckCircle, AlertTriangle, Clock } from "lucide-react"
import Link from "next/link"

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

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4">
            <Shield className="h-4 w-4 mr-2" />
            Official Rules
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Rules of Engagement</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Ensure fair play and maximize your hackathon experience by following these comprehensive guidelines.
          </p>
        </div>

        {/* Important Notice */}
        <Card className="mb-8 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
              <AlertTriangle className="h-5 w-5" />
              Important Notice
            </CardTitle>
          </CardHeader>
          <CardContent className="text-amber-800 dark:text-amber-200">
            <p className="mb-2">
              <strong>All participants must read and agree to these rules during registration.</strong>
            </p>
            <p className="text-sm">
              Violation of any rule may result in disqualification from the hackathon. When in doubt, ask a mentor or organizer.
            </p>
          </CardContent>
        </Card>

        {/* Quick Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Quick Summary</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <h3 className="font-semibold mb-1">24 Hours</h3>
                <p className="text-sm text-muted-foreground">Total hacking time</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold mx-auto mb-2 text-green-500">3-5</div>
                <h3 className="font-semibold mb-1">Team Size</h3>
                <p className="text-sm text-muted-foreground">Members per team</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                <h3 className="font-semibold mb-1">AI Allowed</h3>
                <p className="text-sm text-muted-foreground">With documentation</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold mx-auto mb-2 text-red-500">5</div>
                <h3 className="font-semibold mb-1">Demo Time</h3>
                <p className="text-sm text-muted-foreground">Minutes maximum</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Rules */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Detailed Rules</h2>
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
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {rulesData
                    .filter((rule) => rule.category === category.title)
                    .map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex items-start gap-3">
                        <span className="text-lg flex-shrink-0">{rule.icon}</span>
                        <span className="text-sm leading-relaxed">{rule.rule}</span>
                      </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Submission Requirements */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Submission Requirements Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-3">Required Deliverables:</h4>
                <ul className="space-y-2">
                  {[
                    "Complete source code on GitHub/GitLab",
                    "README.md with setup instructions",
                    "Demo video (max 5 minutes)",
                    "Technical documentation",
                    "Live demo during presentation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Bonus Points:</h4>
                <ul className="space-y-2">
                  {[
                    "Deployed live application",
                    "Comprehensive test coverage",
                    "CI/CD pipeline setup",
                    "Security best practices",
                    "Accessibility compliance",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="h-4 w-4 rounded-full bg-blue-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact and Support */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Need Help or Have Questions?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have any questions about the rules or need clarification, don't hesitate to reach out to our organizing team.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="mailto:hackathon@intellibus.com">Contact Organizers</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}