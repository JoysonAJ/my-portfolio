const education = [
  {
    degree: "Master of Computer Applications",
    mode: "Full Time",
    years: "2021 – 2023",
    institution: "St Aloysius Institute of Management & Information Technology",
    website: "https://www.aimit.edu.in/",
    location: "Mangalore, Karnataka, India",
  },
  {
    degree: "Bachelor of Computer Applications",
    mode: "Full Time",
    years: "2018 – 2021",
    institution: "St. Aloysius College",
    website: "https://staloysius.edu.in/",
    location: "Mangalore, Karnataka, India",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center sm:text-left">
        Education
      </h2>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm">{edu.mode}</p>
              </div>
              <div className="mt-2 sm:mt-0 text-sm text-muted-foreground">
                {edu.years}
              </div>
            </div>

            <div className="mt-4">
              <a
                href={edu.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium hover:underline"
              >
                {edu.institution}
              </a>
              <p className="text-sm text-muted-foreground">{edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
