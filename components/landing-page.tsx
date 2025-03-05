"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Shield, LineChart, Users, ArrowRight, Play, CheckCircle, Calendar, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import TestimonialCarousel from "@/components/testimonial-carousel"
import FaqAccordion from "@/components/faq-accordion"
import BlogPreview from "@/components/blog-preview"
import CustomerSupportChatbot from "@/components/customer-support-chatbot"

export default function LandingPage() {
  const [showDemo, setShowDemo] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }))
  }, [controls])

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-r from-turquoise-600 to-turquoise-400 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <motion.div
              className="flex flex-col justify-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none">
                Advanced Cognitive Health Monitoring & Care
              </h1>
              <p className="max-w-[600px] text-white/90 text-xl">
                Memoright combines AI technology with clinical expertise to provide early detection, personalized care
                plans, and continuous monitoring for better brain health.
              </p>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-turquoise-600 hover:bg-white/90 font-semibold text-lg">
                  <Link href="/register">Get Started</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setShowDemo(true)}
                  className="bg-transparent border-white text-white hover:bg-white hover:text-turquoise-600 font-medium text-lg"
                >
                  Watch Demo
                  <Play className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-1" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-1" />
                  <span>Clinically Validated</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto lg:mx-0 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                  alt="Doctor using digital tablet with patient"
                  width={600}
                  height={400}
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-turquoise-900/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="w-full py-10 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-center text-lg font-medium text-gray-600 mb-8">
            Trusted by leading healthcare providers
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <Image src="/placeholder.svg?height=40&width=120" alt="Partner logo" width={120} height={40} />
            <Image src="/placeholder.svg?height=40&width=120" alt="Partner logo" width={120} height={40} />
            <Image src="/placeholder.svg?height=40&width=120" alt="Partner logo" width={120} height={40} />
            <Image src="/placeholder.svg?height=40&width=120" alt="Partner logo" width={120} height={40} />
            <Image src="/placeholder.svg?height=40&width=120" alt="Partner logo" width={120} height={40} />
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Cognitive Care</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides a complete solution for cognitive health assessment, monitoring, and improvement
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Brain,
                title: "AI-Powered Assessment",
                description: "Clinically validated cognitive tests with real-time analysis and personalized insights",
              },
              {
                icon: LineChart,
                title: "Continuous Monitoring",
                description: "Track cognitive health trends over time with detailed progress reports and analytics",
              },
              {
                icon: Sparkles,
                title: "Personalized Brain Training",
                description:
                  "Custom exercises designed to target specific cognitive domains based on your assessment results",
              },
              {
                icon: Calendar,
                title: "Care Management",
                description: "Medication reminders, appointment scheduling, and daily activity planning in one place",
              },
              {
                icon: Users,
                title: "Caregiver Collaboration",
                description: "Secure sharing of cognitive health data with family members and healthcare providers",
              },
              {
                icon: Shield,
                title: "Early Detection",
                description:
                  "Advanced algorithms to identify subtle changes in cognitive function for early intervention",
              },
            ].map((feature, index) => (
              <motion.div key={index} custom={index} initial={{ opacity: 0, y: 20 }} animate={controls}>
                <Card className="h-full border-2 border-gray-100 hover:border-turquoise-100 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-lg bg-turquoise-50 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-turquoise-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Memoright Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple process makes cognitive health care accessible and effective
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {[
              {
                step: 1,
                title: "Complete Assessment",
                description:
                  "Take our comprehensive cognitive assessment, developed by neurologists and validated in clinical settings",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                step: 2,
                title: "Receive Care Plan",
                description:
                  "Get a personalized care plan based on your assessment results, including brain training exercises and lifestyle recommendations",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                step: 3,
                title: "Track Progress",
                description:
                  "Monitor your cognitive health over time with regular assessments and detailed progress reports",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={controls} custom={index + 3}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-turquoise-600 text-white flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-turquoise-200"></div>
                    )}
                  </div>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="rounded-lg mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from patients, caregivers, and healthcare providers who use Memoright
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* For Patients, Caregivers, and Doctors Section */}
      <section className="w-full py-20 bg-turquoise-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Support for Everyone</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Memoright provides specialized tools for patients, caregivers, and healthcare providers
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-gray-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-gray-900">For Patients</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-turquoise-600 mr-2 mt-0.5 shrink-0" />
                    <span>Personalized cognitive assessments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-turquoise-600 mr-2 mt-0.5 shrink-0" />
                    <span>Brain training exercises tailored to your needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-turquoise-600 mr-2 mt-0.5 shrink-0" />
                    <span>Progress tracking and detailed reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-turquoise-600 mr-2 mt-0.5 shrink-0" />
                    <span>Medication and appointment reminders</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/register?role=patient">Sign Up as Patient</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-gray-900">For Caregivers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-turquoise-600 mr-2 mt-0.5 shrink-0" />
                    <span>Monitor loved ones' cognitive health remotely</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-turquoise-600 mr-2 mt-0.5 shrink-0" />
                    <span>Receive alerts for significant changes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-turquoise-600 mr-2 mt-0.5 shrink-0" />
                    <span>Manage medications and appointments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-turquoise-600 mr-2 mt-0.5 shrink-0" />
                    <span>Access resources and support for caregivers</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/register?role=caregiver">Sign Up as Caregiver</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-gray-900">For Healthcare Providers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-turquoise-600 mr-2 mt-0.5 shrink-0" />
                    <span>Comprehensive patient cognitive data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-turquoise-600 mr-2 mt-0.5 shrink-0" />
                    <span>AI-assisted diagnosis and treatment planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-turquoise-600 mr-2 mt-0.5 shrink-0" />
                    <span>Remote monitoring and telehealth integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-turquoise-600 mr-2 mt-0.5 shrink-0" />
                    <span>EMR/EHR integration and clinical workflows</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/register?role=doctor">Sign Up as Provider</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest research and tips on cognitive health
            </p>
          </div>
          <BlogPreview />
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog">
                Explore All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find answers to common questions about Memoright</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-turquoise-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Take the First Step Toward Better Cognitive Health</h2>
          <p className="max-w-[600px] mx-auto mb-8 text-lg text-white/90">
            Join thousands who've discovered the power of AI-assisted cognitive care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-turquoise-600 hover:bg-white/90 font-semibold text-lg">
              <Link href="/register">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Support Chatbot */}
      <CustomerSupportChatbot />

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg max-w-3xl w-full"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">See Memoright in Action</h3>
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[400px] rounded-lg"
              ></iframe>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => setShowDemo(false)} className="bg-turquoise-600 hover:bg-turquoise-700 text-white">
                Close
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

