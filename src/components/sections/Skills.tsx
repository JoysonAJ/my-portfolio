import React from "react";

const skills = {
  frontend: [
    "ReactJS",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
  ],
  backend: ["Node.js", "Express.js"],
  mobile: ["React Native"],
  database: ["MongoDB", "Firebase"],
  tools: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
};

export default function Skills() {
  return (
    <section className="container mx-auto px-4 max-w-6xl py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
          Skills & Tools
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Here&apos;s a quick overview of the technologies and tools I work with regularly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index} className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.toLocaleUpperCase()}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, i) => (
                <span
                  key={i}
                  className="inline-block bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full border border-blue-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
