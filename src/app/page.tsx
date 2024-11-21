"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Puzzle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to TaskMaster
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Your ultimate task management solution. Simple, powerful, and
                  designed for modern productivity.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/signup">
                  <Button size="lg" className="px-8">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" size="lg" className="px-8">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose TaskMaster?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <Card>
                <CardHeader>
                  <div className="p-2 bg-primary/10 rounded-full w-fit mb-4">
                    <Puzzle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Smart Task Management</CardTitle>
                  <CardDescription>Organize with ease</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Intuitive task creation</li>
                    <li>Smart categorization</li>
                    <li>Priority management</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card>
                <CardHeader>
                  <div className="p-2 bg-primary/10 rounded-full w-fit mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Real-time Updates</CardTitle>
                  <CardDescription>Stay in sync with your team</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Live collaboration</li>
                    <li>Instant notifications</li>
                    <li>Progress tracking</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card>
                <CardHeader>
                  <div className="p-2 bg-primary/10 rounded-full w-fit mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Secure & Reliable</CardTitle>
                  <CardDescription>Your data is protected</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>End-to-end encryption</li>
                    <li>Automatic backups</li>
                    <li>Data privacy controls</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to boost your productivity?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join thousands of productive users today
              </p>
              <Link href="/signup">
                <Button size="lg" className="px-8">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
