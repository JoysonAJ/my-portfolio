const experiences = [
    {
      company: 'Logisian Technology Solutions Pvt',
      role: 'Software Engineer',
      website: 'https://logisian.in/',
      duration: 'July 2024 – June 2025',
      stack: ['React Native', 'ReactJS', 'Next.js', 'Firebase'],
      location: 'Mangalore, Karnataka, India',
    },
    {
      company: 'Nicozn Technologies',
      role: 'Junior Software Engineer',
      website: 'https://nicozn.com/',
      duration: 'April 2023 – May 2024',
      stack: ['ReactJS', 'Next.js', 'Firebase'],
      location: 'Mangalore, Karnataka, India',
    },
  ]
  
  export default function Experience() {
    return (
      <section
        id="experience"
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-center sm:text-left">Experience</h2>
  
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold hover:underline"
                  >
                    {exp.company}
                  </a>
                  <p className="text-muted-foreground text-sm">{exp.location}</p>
                </div>
                <div className="mt-2 sm:mt-0 text-sm text-muted-foreground">{exp.duration}</div>
              </div>
  
              <p className="mt-4 text-base text-muted-foreground">
                <span className="font-medium text-foreground">{exp.role}</span> using{' '}
                <span className="font-semibold">{exp.stack.join(', ')}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  