"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
            <FileText className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-xl text-muted-foreground">
              Terms of participation for the Intellibus Hackathon 2025
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  By registering for and participating in the Intellibus Hackathon 2025 ("the Event"), 
                  you agree to be bound by these Terms and Conditions, the Event Rules, and all applicable 
                  laws and regulations. If you do not agree with any of these terms, you may not participate 
                  in the Event.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Eligibility</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Participants must be at least 18 years of age</li>
                  <li>Students, professionals, and self-taught individuals are welcome</li>
                  <li>Teams must consist of 3-5 members</li>
                  <li>All team members must be registered participants</li>
                  <li>Employees of Intellibus and immediate family members are eligible but not eligible for prizes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Event Participation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Participants must attend the event in person at AC Hotel Kingston, Jamaica</li>
                  <li>Remote participation is not permitted</li>
                  <li>Participants must remain at the venue for the duration of the hacking phase</li>
                  <li>All participants must follow the event schedule and checkpoint requirements</li>
                  <li>Participants must respect fellow participants, mentors, judges, and organizers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Project Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All projects must be built from scratch during the hackathon period</li>
                  <li>Projects must address the specified challenge theme</li>
                  <li>Use of open-source libraries, APIs, and frameworks is permitted</li>
                  <li>AI tools may be used but must be properly documented</li>
                  <li>Projects must be submitted by the specified deadline</li>
                  <li>Submissions must include source code, documentation, and demo video</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Participants retain ownership of their intellectual property created during the hackathon. 
                  However, by participating, you grant Intellibus:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Right to use your project for promotional and educational purposes</li>
                  <li>Right to showcase your project in event materials and publications</li>
                  <li>Right to document and photograph your participation</li>
                  <li>Non-exclusive license to use, reproduce, and distribute submitted materials</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Prizes and Awards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Prizes are awarded based on judging criteria outlined in the event rules</li>
                  <li>Prize decisions are final and not subject to appeal</li>
                  <li>Winners may be subject to tax obligations based on local laws</li>
                  <li>Employment offers are subject to separate terms and conditions</li>
                  <li>Scholarship opportunities are subject to academy enrollment requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Code of Conduct</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Harassment, discrimination, or inappropriate behavior is strictly prohibited</li>
                  <li>Participants must respect the diversity and inclusion of all attendees</li>
                  <li>Plagiarism or cheating will result in immediate disqualification</li>
                  <li>Sabotage of other teams' work is prohibited</li>
                  <li>Violation of the code of conduct may result in removal from the event</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Liability and Indemnification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Participants participate at their own risk. Intellibus, its partners, sponsors, and venues 
                  are not liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal injury or property damage during the event</li>
                  <li>Loss of personal belongings</li>
                  <li>Technical failures or equipment malfunctions</li>
                  <li>Travel or accommodation issues</li>
                  <li>Intellectual property disputes between participants</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Event Changes and Cancellation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Intellibus reserves the right to modify event details, rules, or cancel the event 
                  due to unforeseen circumstances. In case of cancellation, participants will be 
                  notified as soon as possible. No compensation will be provided for travel or 
                  accommodation expenses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Your participation is subject to our{" "}
                  <Link href="/privacy/participants" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  . By participating, you consent to the collection and use of your personal 
                  information as described in the privacy policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  These terms and conditions are governed by the laws of Virginia, United States. 
                  Any disputes arising from participation in the event shall be resolved through 
                  binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">For questions about these terms and conditions, contact:</p>
                <div className="bg-muted p-4 rounded-lg">
                  <p><strong>Intellibus Hackathon Team</strong></p>
                  <p>Email: <a href="mailto:hackathon@intellibus.com" className="text-primary hover:underline">hackathon@intellibus.com</a></p>
                  <p>Address: Intelligent Business Platforms LLC, Reston, VA, USA</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              These terms and conditions were last updated on March 1, 2025
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