"use client";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
        I embarked on my tech journey as a Software Developer specializing in Mobile Applications. My passion for creating innovative solutions has led me to develop various mobile apps and contribute to numerous tech projects. With over 1+ year of experience in the startup industry, I've honed my skills in Android and iOS development, working with technologies such as Kotlin, Swift, and Flutter. And earning several relevant {" "} <a
            className="no-wrap text-primary dark:text-white"
            href="https://drive.google.com/drive/folders/1Ab9g0XKzWZaidj_YuBVFT7A0UrwfOrOW?usp=sharing"
            target="blank"
            rel="noopener noreferrer"
          >
            certifications.
          </a>  
          {" "}
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
        My professional path includes roles
          at{" "}
          <a
            className="no-wrap text-primary dark:text-white"
            href="https://grow.google/intl/id_id/bangkit/?tab=mobile-development"
            target="blank"
            rel="noopener noreferrer"
          >
            Bangkit Academy (Google, GoTo, and Traveloka)
          </a>{" "}
          where I developed and deployed high-quality applications and integrated advanced features. I also gained valuable experience as a Backend Developer and a freelancer, handling diverse projects and collaborating with cross-functional teams.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
        Outside of work, I&#39;m enjoy staying up-to-date with the latest in mobile technology and exploring new trends in software development. I aim to leverage my expertise in mobile app development to create impactful and user-centric applications.
        </p>
      </div>
    </section>
  );
}
