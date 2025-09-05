"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Book, Code, Cloud, Database, Zap, Shield, Cpu } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
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
            <Book className="h-4 w-4 mr-2" />
            Documentation
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Hackathon Documentation</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Everything you need to know to build amazing real-time experiences. From tech stack guides to deployment tutorials.
          </p>
        </div>

        <Tabs defaultValue="overview" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tech-stack">Tech Stack</TabsTrigger>
            <TabsTrigger value="deployment">Deployment</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Quick Start Guide
                  </CardTitle>
                  <CardDescription>
                    Get up and running with your real-time experience in minutes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Clone the starter template repository</li>
                    <li>Set up your development environment</li>
                    <li>Configure AWS credentials</li>
                    <li>Install dependencies with npm/yarn</li>
                    <li>Start building your real-time features</li>
                  </ol>
                  <Button className="mt-4" asChild>
                    <Link href="https://github.com/intellibus/hackathon-starter" target="_blank">
                      Get Started Template
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    SPAIN Framework
                  </CardTitle>
                  <CardDescription>
                    Build stable, performant, available, integral, and novel solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div><strong>S</strong> - Stability: Reliable operation</div>
                    <div><strong>P</strong> - Performance: Fast and responsive</div>
                    <div><strong>A</strong> - Availability: Always accessible</div>
                    <div><strong>I</strong> - Integrity: Secure and accurate</div>
                    <div><strong>N</strong> - Novelty: Innovative approach</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tech-stack" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Backend Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">Java Spring Boot</h4>
                      <p className="text-sm text-muted-foreground">Build robust REST APIs and microservices</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Apache Kafka</h4>
                      <p className="text-sm text-muted-foreground">Real-time event streaming and messaging</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">PostgreSQL</h4>
                      <p className="text-sm text-muted-foreground">Reliable relational database</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Snowflake</h4>
                      <p className="text-sm text-muted-foreground">Data warehousing and analytics</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="h-5 w-5" />
                    Frontend Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">React/Next.js</h4>
                      <p className="text-sm text-muted-foreground">Modern React framework with SSR</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">TypeScript</h4>
                      <p className="text-sm text-muted-foreground">Type-safe JavaScript development</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Angular/Vue</h4>
                      <p className="text-sm text-muted-foreground">Alternative frontend frameworks</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">WebSockets</h4>
                      <p className="text-sm text-muted-foreground">Real-time client-server communication</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="h-5 w-5" />
                    Cloud & Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">AWS EKS</h4>
                      <p className="text-sm text-muted-foreground">Managed Kubernetes service</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">AWS Lambda</h4>
                      <p className="text-sm text-muted-foreground">Serverless compute functions</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">API Gateway</h4>
                      <p className="text-sm text-muted-foreground">Managed API service</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Terraform</h4>
                      <p className="text-sm text-muted-foreground">Infrastructure as code</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="deployment" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Deployment Guidelines</CardTitle>
                  <CardDescription>
                    Step-by-step guide to deploy your application to AWS
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">1. Prepare Your Application</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Containerize your application with Docker</li>
                        <li>Create Kubernetes manifests</li>
                        <li>Set up environment variables</li>
                        <li>Configure health checks</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">2. Infrastructure Setup</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Use provided Terraform templates</li>
                        <li>Configure AWS credentials</li>
                        <li>Set up VPC and networking</li>
                        <li>Create EKS cluster</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">3. CI/CD Pipeline</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Set up GitHub Actions workflow</li>
                        <li>Configure automated testing</li>
                        <li>Enable deployment automation</li>
                        <li>Set up monitoring and alerts</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="examples" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Smart ER Queue System</CardTitle>
                  <CardDescription>
                    Real-time patient queue management with dynamic prioritization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Features:</strong>
                      <ul className="list-disc list-inside text-muted-foreground ml-2">
                        <li>Real-time queue updates</li>
                        <li>Symptom-based triage</li>
                        <li>Wait time predictions</li>
                        <li>Mobile notifications</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Tech Stack:</strong>
                      <p className="text-muted-foreground">React + Spring Boot + Kafka + PostgreSQL</p>
                    </div>
                  </div>
                  <Button className="mt-4" variant="outline" asChild>
                    <Link href="https://github.com/intellibus/er-queue-example" target="_blank">
                      View Example
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Surplus Crop Marketplace</CardTitle>
                  <CardDescription>
                    Connect farmers with local consumers in real-time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Features:</strong>
                      <ul className="list-disc list-inside text-muted-foreground ml-2">
                        <li>Location-based matching</li>
                        <li>Real-time inventory updates</li>
                        <li>Price negotiation system</li>
                        <li>Delivery tracking</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Tech Stack:</strong>
                      <p className="text-muted-foreground">Vue.js + Spring Boot + Kafka + Snowflake</p>
                    </div>
                  </div>
                  <Button className="mt-4" variant="outline" asChild>
                    <Link href="https://github.com/intellibus/crop-marketplace-example" target="_blank">
                      View Example
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Grid Outage Predictor</CardTitle>
                  <CardDescription>
                    Predict and alert users about potential power outages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Features:</strong>
                      <ul className="list-disc list-inside text-muted-foreground ml-2">
                        <li>ML-powered predictions</li>
                        <li>Real-time grid monitoring</li>
                        <li>Geographic alerts</li>
                        <li>Historical data analysis</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Tech Stack:</strong>
                      <p className="text-muted-foreground">Angular + Python + Kafka + Snowflake</p>
                    </div>
                  </div>
                  <Button className="mt-4" variant="outline" asChild>
                    <Link href="https://github.com/intellibus/grid-predictor-example" target="_blank">
                      View Example
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Real-time Chat Platform</CardTitle>
                  <CardDescription>
                    Scalable messaging platform with advanced features
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Features:</strong>
                      <ul className="list-disc list-inside text-muted-foreground ml-2">
                        <li>WebSocket connections</li>
                        <li>Message encryption</li>
                        <li>File sharing</li>
                        <li>User presence</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Tech Stack:</strong>
                      <p className="text-muted-foreground">React + Node.js + Socket.io + Redis</p>
                    </div>
                  </div>
                  <Button className="mt-4" variant="outline" asChild>
                    <Link href="https://github.com/intellibus/chat-platform-example" target="_blank">
                      View Example
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional Resources */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Additional Resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <Database className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">API Reference</h3>
                <p className="text-sm text-muted-foreground mb-4">Complete API documentation and examples</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://api-docs.intellibus.com" target="_blank">View Docs</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Code className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Code Samples</h3>
                <p className="text-sm text-muted-foreground mb-4">Ready-to-use code snippets and templates</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/intellibus/code-samples" target="_blank">Browse Code</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Security Guidelines</h3>
                <p className="text-sm text-muted-foreground mb-4">Best practices for secure development</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://security.intellibus.com" target="_blank">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}