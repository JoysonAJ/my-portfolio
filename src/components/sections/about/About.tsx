import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20 "
    >
      <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          My name is{" "}
          <span className="font-medium text-foreground">
            Antony Joyson D Souza
          </span>
          . I have 2 years of experience in development, which includes 2 years
          in web app development using ReactJS and Next.js. I also have 1 year
          of experience in mobile application development using React Native.
        </p>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-4">
          I have worked in a startup-level environment where I was responsible
          for taking full ownership of projects and often worked as the solo
          developer.
        </p>
      </div>
    </section>
  );
}
