"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, Trophy, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    university: "",
    studyLevel: "",
    experience: "",
    skills: [],
    hasTeam: "",
    teamMembers: "",
    dietaryRestrictions: "",
    emergencyContact: "",
    emergencyPhone: "",
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Registration submitted! We'll be in touch soon.")
  }

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
            Intellibus Hackathon 2025 🚀
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Register for the Hackathon</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join us for 24 hours of innovation, learning, and building real-time experiences that solve real-world problems.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>AC Hotel Kingston, Jamaica</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>March 15-16, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="h-4 w-4" />
              <span>$15,000+ in Prizes</span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Registration Form</CardTitle>
              <CardDescription>
                Please fill out all required fields. Registration is free and includes meals, mentorship, and swag!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Academic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Academic Information</h3>
                  <div className="space-y-2">
                    <Label htmlFor="university">University/Institution *</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, university: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your institution" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uwi">University of the West Indies</SelectItem>
                        <SelectItem value="utech">University of Technology</SelectItem>
                        <SelectItem value="cmu">Caribbean Maritime University</SelectItem>
                        <SelectItem value="mico">Mico University College</SelectItem>
                        <SelectItem value="ncu">Northern Caribbean University</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="working">Working Professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studyLevel">Study Level</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, studyLevel: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="undergraduate">Undergraduate</SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                        <SelectItem value="professional">Working Professional</SelectItem>
                        <SelectItem value="self-taught">Self-Taught</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Experience</h3>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Programming Experience *</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                        <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                        <SelectItem value="expert">Expert (5+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Team Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Team Information</h3>
                  <div className="space-y-2">
                    <Label>Do you have a team? *</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="hasTeamYes"
                          name="hasTeam"
                          value="yes"
                          onChange={(e) => setFormData({ ...formData, hasTeam: e.target.value })}
                        />
                        <Label htmlFor="hasTeamYes">Yes, I have a team (3-5 members)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="hasTeamNo"
                          name="hasTeam"
                          value="no"
                          onChange={(e) => setFormData({ ...formData, hasTeam: e.target.value })}
                        />
                        <Label htmlFor="hasTeamNo">No, I need help finding a team</Label>
                      </div>
                    </div>
                  </div>
                  {formData.hasTeam === "yes" && (
                    <div className="space-y-2">
                      <Label htmlFor="teamMembers">Team Member Names & Emails</Label>
                      <Textarea
                        id="teamMembers"
                        value={formData.teamMembers}
                        onChange={(e) => setFormData({ ...formData, teamMembers: e.target.value })}
                        placeholder="List your team members with their email addresses"
                        rows={4}
                      />
                    </div>
                  )}
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Additional Information</h3>
                  <div className="space-y-2">
                    <Label htmlFor="dietaryRestrictions">Dietary Restrictions/Allergies</Label>
                    <Textarea
                      id="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                      placeholder="Please list any dietary restrictions or allergies"
                      rows={2}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                      <Input
                        id="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                      <Input
                        id="emergencyPhone"
                        type="tel"
                        value={formData.emergencyPhone}
                        onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Agreements */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Agreements</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                        required
                      />
                      <Label htmlFor="agreeTerms" className="text-sm">
                        I agree to the <Link href="/terms" className="text-primary hover:underline">Terms and Conditions</Link> and <Link href="/rules" className="text-primary hover:underline">Hackathon Rules</Link> *
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreePrivacy"
                        checked={formData.agreePrivacy}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreePrivacy: checked as boolean })}
                        required
                      />
                      <Label htmlFor="agreePrivacy" className="text-sm">
                        I have read and agree to the <Link href="/privacy/participants" className="text-primary hover:underline">Privacy Policy</Link> *
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeMarketing"
                        checked={formData.agreeMarketing}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreeMarketing: checked as boolean })}
                      />
                      <Label htmlFor="agreeMarketing" className="text-sm">
                        I would like to receive updates about future Intellibus events and opportunities
                      </Label>
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={!formData.agreeTerms || !formData.agreePrivacy}>
                  Complete Registration
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}