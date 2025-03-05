"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Dr. Emily Chen",
    role: "Chief Neuroscientist",
    image: "/team/emily-chen.jpg",
    bio: "Dr. Chen leads our neuroscience research, bringing over 15 years of experience in cognitive health studies. Her groundbreaking work on neural plasticity has been pivotal in developing our cognitive enhancement techniques.",
    linkedin: "https://www.linkedin.com/in/dr-emily-chen",
    email: "emily.chen@memoright.com",
  },
  {
    name: "Alex Rodriguez",
    role: "AI Lead",
    image: "/team/alex-rodriguez.jpg",
    bio: "Alex oversees the development of our AI algorithms, ensuring cutting-edge technology in cognitive assessment. With a PhD in Machine Learning from MIT, he's pushing the boundaries of AI in healthcare.",
    linkedin: "https://www.linkedin.com/in/alex-rodriguez",
    email: "alex.rodriguez@memoright.com",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Product",
    image: "/team/sarah-johnson.jpg",
    bio: "Sarah drives our product strategy, focusing on user-centric design and impactful features. Her background in UX design and cognitive psychology helps create intuitive experiences for our users.",
    linkedin: "https://www.linkedin.com/in/sarah-johnson",
    email: "sarah.johnson@memoright.com",
  },
  {
    name: "Dr. Michael Lee",
    role: "Medical Director",
    image: "/team/michael-lee.jpg",
    bio: "Dr. Lee ensures the medical accuracy and ethical implementation of our cognitive health solutions. With over 20 years in geriatric medicine, he brings invaluable expertise to our team.",
    linkedin: "https://www.linkedin.com/in/dr-michael-lee",
    email: "michael.lee@memoright.com",
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function TeamMember({ member, index }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
        <CardHeader className="p-6">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            width={300}
            height={300}
            className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
          />
          <CardTitle className="text-center text-2xl font-bold">{member.name}</CardTitle>
          <CardDescription className="text-center text-lg text-turquoise-600">{member.role}</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-700 mb-4">{member.bio}</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={`mailto:${member.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function TeamsPage() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div className="bg-gradient-to-b from-turquoise-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div ref={ref} animate={controls} initial="hidden" variants={fadeInUp} transition={{ duration: 0.5 }}>
          <h1 className="text-5xl font-bold text-center mb-4">Our Team</h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Meet the experts behind Memoright's innovative cognitive health technology. Our diverse team of
            neuroscientists, AI specialists, and healthcare professionals is dedicated to improving cognitive health
            worldwide.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={member.name} member={member} index={index} />
          ))}
        </div>

        <motion.div
          animate={controls}
          initial="hidden"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            At Memoright, we're on a mission to revolutionize cognitive health care. By combining cutting-edge
            neuroscience with advanced AI technology, we aim to provide accessible, personalized cognitive assessment
            and enhancement tools for people of all ages.
          </p>
        </motion.div>

        <motion.div
          animate={controls}
          initial="hidden"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're always looking for passionate individuals to join our mission. If you're excited about making a
            difference in cognitive health, we'd love to hear from you.
          </p>
          <Button size="lg" asChild>
            <a href="/careers">View Open Positions</a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

