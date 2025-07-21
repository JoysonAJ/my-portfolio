import { Mail, Github, Linkedin,Phone } from 'lucide-react'

const contacts = [
    {
      title: 'Email',
      value: 'joysondsouzaaj@gmail.com',
      href: 'mailto:joysondsouzaaj@gmail.com',
      icon: Mail,
    },
    {
      title: 'GitHub',
      value: '@JoysonAJ',
      href: 'https://github.com/JoysonAJ',
      icon: Github,
    },
    {
      title: 'LinkedIn',
      value: 'Antony Joyson D Souza',
      href: 'https://www.linkedin.com/in/antony-joyson/',
      icon: Linkedin,
    },
    {
      title: 'Phone',
      value: '+91 8217063887',
      href: 'tel:+918217063887',
      icon: Phone,
    },
  ];

export default function Contact() {

  return (
    <section className="container mx-auto px-4 max-w-6xl pt-16 pb-10" id='contact'>
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 mb-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
            Let&apos;s Connect
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto pb-16">
        {contacts.map(({ title, value, href, icon: Icon }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl p-3 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
                <p className="mt-1 text-gray-600">{value}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
