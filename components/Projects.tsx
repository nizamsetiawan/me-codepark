"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const projects = [
  {
    imagePath: "/village-tour.png",
    title: "Village Tour",
    description:
      "Village Tour is a tourism booking application that offers a comprehensive service for exploring the charm of villages in Indonesia. With its booking capabilities, village information, and tour guides, Village Tour is the primary resource for those looking to organize trips to Indonesian villages.",
    skills: [
      "React Native",
      "Redux",
      "GraphQL",
      "Stripe",
      "Mapbox",
      "Apollo Client",
    ],
    link: "https://github.com/nizamsetiawan/Vtour",
  },
  {
    imagePath: "/urban-scholaria.png",
    title: "Urban Scholaria",
    description:
      "Urban Scholaria is an application that simplifies the process of requesting educational permits online, anytime, anywhere. With Urban Scholaria, the educational permit application process becomes more efficient and convenient. Urban Scholaria also provides various additional features such as permit status tracking and notifications, ensuring that users are always informed about the progress of their applications.",
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "RESTful APIs",
      "Google Maps",
      "State Management",
      "Push Notifications",
    ],
    link: "https://github.com/nizamsetiawan/urbansch",
  },
  {
    imagePath: "/storysnap.png",
    title: "Story Snap",
    description:
      "Story Snap is an Android application that utilizes a private API from Dicoding and Google APIs to allow users to create and share stories with pictures and text. With user login authentication, users can upload their stories, view stories from others, and add their current location to stories using the Google Maps API.",
    skills: [
      "Android",
      "Firebase Authentication",
      "Google Maps API",
      "Image Uploads",
      "Realtime Database",
    ],
    link: "https://github.com/nizamsetiawan/Dicoding-FundamentalAndroid",
  },
  {
    imagePath: "/sehatqik.png",
    title: "Sehat Qik",
    description:
      "Sehat Qik is an innovative Android-based health application designed to provide users with efficient and practical access to medical services. With Sehat Qik, users can easily book appointments, select doctors, order medications, and interact with healthcare facilities based on their location. This comprehensive health solution aims to streamline the healthcare experience, making it more accessible and user-friendly.",
    skills: [
      "Kotlin",
      "Firebase",
      "Google Maps API",
      "Booking System",
      "Medication Ordering",
      "Location Services",
    ],
    link: "https://github.com/nizamsetiawan/Sehatqik_app",
  },
  {
    imagePath: "/mokpos.png",
    title: "MokPos",
    description:
      "MokPos is an advanced Android-based point of sale (POS) application designed to streamline and simplify the checkout process for businesses of all sizes. Whether you run a retail store, café, or any other type of business, MokPos provides an efficient and user-friendly solution for managing sales, inventory, and customer interactions. With its comprehensive features, MokPos aims to enhance business operations and improve customer service.",
    skills: [
      "Android",
      "Kotlin",
      "SQLite",
      "Payment Gateway Integration",
      "Receipt Printing",
      "Offline Mode",
    ],
    link: "https://github.com/nizamsetiawan/flutter-mokPOS",
  },
  {
    imagePath: "/informatic-connect.png",
    title: "Informatic Connect",
    description:
      "Informatic Connect is a social platform specifically designed for technology enthusiasts. Users can interact, share, and discuss various aspects of technology, from the latest developments to current issues in the world of technology. This application also provides the opportunity to connect with mentors in the IT field of your choice and seek consultations.",
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "WebSocket",
      "JWT Authentication",
    ],
    link: "https://github.com/nizamsetiawan/InformaticConnect_App",
  },
  {
    imagePath: "/github-connect.png",
    title: "Github Connect",
    description:
      "Github Connect is an Android application that utilizes the Github API to allow users to search for Github users, view their profiles, and add them to favorites. The app stores favorite users' data locally using Room, a SQLite object mapping library for Android. Developed as part of the Belajar Fundamental Aplikasi Android course at Dicoding Indonesia, this project represents the developer's first endeavor in building an Android app by integrating APIs and databases.",
    skills: [
      "Android",
      "Java",
      "GitHub API",
      "Room Database",
      "MVVM Architecture",
      "Retrofit",
    ],
    link: "https://github.com/nizamsetiawan/Dicoding-FundamentalAndroid",
  },
  {
    imagePath: "/gemini.png",
    title: "Gemini Apps",
    description:
      "Gemini Apps is a cutting-edge application featuring a generative artificial intelligence chatbot designed to enhance user interaction through natural language processing and advanced machine learning. This AI chatbot is capable of understanding and generating human-like responses, making it an invaluable tool for businesses, educators, and individuals seeking efficient and intelligent conversational experiences.",
    skills: [
      "Python",
      "OpenAI API",
      "Natural Language Processing",
      "Machine Learning",
      "Dialogflow",
      "AWS Lambda",
    ],
    link: "https://github.com/nizamsetiawan/GeminiApps",
  },
  {
    imagePath: "/cleafer.png",
    title: "CLEFER",
    description:
      "CLEFER is an advanced mobile application designed to swiftly and accurately identify diseases in corn leaves. Leveraging the power of artificial intelligence and machine learning, CLEFER provides farmers and agricultural professionals with a reliable tool to diagnose corn diseases on the spot, ensuring timely and effective intervention.",
    skills: [
      "Flutter",
      "TensorFlow Lite",
      "Google ML Kit",
      "Image Recognition",
      "Local Storage",
    ],
    link: "https://github.com/TeamClefer-C241-PS201",
  },
  {
    imagePath: "/aceplus.png",
    title: "Aceplus AI",
    description:
      "Aceplus AI is an advanced healthcare application designed to revolutionize the early detection and diagnosis of cancer. By leveraging state-of-the-art artificial intelligence and machine learning technologies, Aceplus AI provides a reliable, comprehensive solution for identifying various types of cancer, helping healthcare professionals and patients take timely and informed action.",
    skills: [
      "Kotlin",
      "TensorFlow",
      "Google Cloud AI",
      "Healthcare Data Analysis",
      "Real-Time Detection",
    ],
    link: "https://github.com/nizamsetiawan/Dicoding-MachineLearningAndroid",
  },
  {
    imagePath: "/bemunesa.png",
    title: "BEM UNESA Kabinet Titik Temu",
    description:
      "Kabinet Titik Temu is a project focused on providing a digital platform for efficient cabinet meetings and decision-making processes. Developed with Laravel, this project aims to streamline administrative tasks, enhance collaboration, and facilitate effective communication within organizations.",
    skills: [
      "Laravel",
      "PHP",
      "MySQL",
      "RESTful APIs",
      "Authentication",
      "Authorization",
    ],
    link: "https://bem.unesa.ac.id/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
