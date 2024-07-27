"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Feb 2024 — Present",
    currentPosition: "Mobile Development Learning Path - Student Participant",
    place: "BANGKIT ACADEMY LED BY GOOGLE, GOTO, & TRAVELOKA",
    previousPositions: [""],
    description:
      "Bangkit Academy is a prestigious career readiness program led by Google and supported by industry leaders. Specialized in Mobile Development (Android) using Kotlin and MVVM architecture, focusing on building scalable applications and applying SOLID principles with unit testing for robust solutions.",
    skills: [
      "Kotlin",
      "MVVM Architecture",
      "SOLID Principles",
      "Unit Testing",
      "Android Development",
      "Application Scalability",
      "Project Management",
      "Leadership",
      "Problem-Solving",
    ],
  },
  {
    timeline: "Aug 2023 — Dec 2023",
    currentPosition: "Mobile Developer - Internship",
    place: "URBAN LABS",
    previousPositions: [""],
    description:
      "Developed and deployed Android applications using Flutter at Urban Labs. Managed the full development lifecycle including UI design, advanced features integration, and automation of UI and performance testing.",
    skills: [
      "Flutter",
      "Android Development",
      "UI Design",
      "Maps Integration",
      "Payment Gateways",
      "Performance Testing",
      "API Management",
      "Automation",
    ],
  },
  {
    timeline: "May 2023 — Jul 2023",
    currentPosition: "Android Developer - Part Time",
    place: "CLEFER",
    previousPositions: [""],
    description:
      "Developed a responsive mobile application with a focus on UI/UX design and API integration. Emphasized application stability and machine learning integration for enhanced functionality.",
    skills: [
      "Figma",
      "API Integration",
      "Machine Learning",
      "MVVM Architecture",
      "Android Studio",
      "Kotlin",
      "UI/UX Design",
      "Performance Testing",
    ],
  },
  {
    timeline: "Mar 2023 — Apr 2023",
    currentPosition: "Mobile Application Developer - Project-Based Virtual Intern",
    place: "CORE INITIATIVE STUDIO",
    previousPositions: [""],
    description:
      "Developed mobile apps using Kotlin and integrated web services APIs. Worked closely with cross-functional teams to ensure high-performance solutions and best practices in app development.",
    skills: [
      "Kotlin",
      "Android Studio",
      "API Integration",
      "Unit Testing",
      "Code Reviews",
      "Continuous Integration",
      "Cross-Functional Collaboration",
    ],
  },
  {
    timeline: "Jul 2023 — Aug 2023",
    currentPosition: "Backend Developer - Project-Based Virtual Intern",
    place: "BTPN SYARIAH",
    previousPositions: [""],
    description:
      "Prepared for a role in Data Engineering by developing websites using Vue.js, completing a fullstack project with MySQL, and managing API integrations.",
    skills: [
      "Vue.js",
      "MySQL",
      "API Integration",
      "Backend Development",
      "Troubleshooting",
      "Fullstack Development",
    ],
  },
  {
    timeline: "Jul 2023 — Present",
    currentPosition: "Android Developer - Self Employed",
    place: "Freelancer",
    previousPositions: [""],
    description:
      "Completed over 10 projects specializing in Android app development using Kotlin and Flutter. Managed projects independently, delivering high-quality mobile solutions.",
    skills: [
      "Kotlin",
      "Flutter",
      "Android Development",
      "Project Management",
      "UI/UX Design",
      "API Integration",
      "Independent Work",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-primary font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-foreground group"
          href="/Salinan.pdf"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
