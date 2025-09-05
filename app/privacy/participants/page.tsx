"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"

export default function ParticipantsPrivacyPage() {
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Privacy Notice - Participants</h1>
            <p className="text-xl text-muted-foreground">
              How we collect, use, and protect your personal information as a hackathon participant
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">When you register for the Intellibus Hackathon 2025, we collect the following information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Educational information (university/institution, study level)</li>
                  <li>Professional information (programming experience, skills)</li>
                  <li>Team formation preferences and member details</li>
                  <li>Dietary restrictions and accessibility needs</li>
                  <li>Emergency contact information</li>
                  <li>Photos and videos during the event (with consent)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">We use your personal information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Event registration and participant verification</li>
                  <li>Team formation and matchmaking</li>
                  <li>Communication about event details and updates</li>
                  <li>Providing appropriate accommodations and meals</li>
                  <li>Emergency contact in case of incidents</li>
                  <li>Event documentation and promotion (with consent)</li>
                  <li>Follow-up communications about results and opportunities</li>
                  <li>Improvement of future events</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Event partners and sponsors (for networking and opportunity purposes)</li>
                  <li>Venue staff (for security and accommodation purposes)</li>
                  <li>Emergency services (if required for your safety)</li>
                  <li>Legal authorities (if required by law)</li>
                </ul>
                <p className="mt-4">We will never sell your personal information to third parties.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Secure data transmission using SSL/TLS encryption</li>
                  <li>Access controls and authentication systems</li>
                  <li>Regular security audits and updates</li>
                  <li>Data minimization principles</li>
                  <li>Staff training on data protection</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact our Data Protection Officer at{" "}
                  <a href="mailto:intellibusdpo@designprivacy.io" className="text-primary hover:underline">
                    intellibusdpo@designprivacy.io
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We will retain your personal data for as long as necessary to fulfill the purposes outlined in this notice, 
                  typically for a period of 2 years following the event. After this period, data will be securely deleted 
                  unless we have a legal obligation to retain it longer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">For any privacy-related questions or concerns, please contact:</p>
                <div className="bg-muted p-4 rounded-lg">
                  <p><strong>Data Protection Officer</strong></p>
                  <p>Email: <a href="mailto:intellibusdpo@designprivacy.io" className="text-primary hover:underline">intellibusdpo@designprivacy.io</a></p>
                  <p>Address: Intelligent Business Platforms LLC, Reston, VA, USA</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              This privacy notice was last updated on March 1, 2025
            </p>
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}