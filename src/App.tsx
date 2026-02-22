import './App.css'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Aurora from "@/components/Aurora"
import { useState } from "react"

// Interface for the Contact Form Props
interface ContactFormSectionProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  // FIX: Added React.MouseEvent type
  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsFormOpen(true);

    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      // FIX: Null check for the element
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 220);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-slate-950 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter text-white">Parth Vohra</div>

          <div className="space-x-8 text-sm font-medium hidden md:flex items-center">
            <a href="#projects" className="text-slate-400 hover:text-white transition">Projects</a>
            <a href="#about" className="text-slate-400 hover:text-white transition">About</a>
            <button
              onClick={handleContactClick}
              className="bg-white text-black px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-blue-500 hover:text-white transition-all cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </div>
      </nav>

      {/* Aurora Wrapper */}
      <div className="absolute top-0 left-0 right-0 h-[700px] pointer-events-none overflow-hidden -z-0">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_20%,transparent_95%)]">
          <Aurora
            amplitude={0}
            blend={0.5}
            colorStops={["#4085f3", "#06b6d4", "#8b5cf6"]}
          />
        </div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-2">
        {/* Hero Section */}
        <section className="relative py-12 md:py-24 flex flex-col md:flex-row items-center">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6">

            {/* Left Side: Text Content */}
            <div className="relative z-20 flex-1 text-center md:text-left">
              <h2 className="inline-block bg-slate-800 text-blue-500 font-mono mb-4 text-sm tracking-widest uppercase px-2 py-1 rounded-md">
                Hire me as an intern please
              </h2>
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Greetings <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  I am Parth.
                </span>
              </h1>

              <p className="text-lg text-slate-400 max-w-md mx-auto md:mx-0 mb-10 leading-relaxed">
                I'm a Computer Engineering Student at the University of Waterloo
              </p>

              <div className="flex justify-center md:justify-start gap-4">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 transition"
                >
                  View Projects
                </button>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="relative z-10 flex-shrink-0 mt-12 md:mt-0 md:-ml-40 lg:-ml-64 hover:scale-105 transition-transform duration-500">
              <img
                src="src/assets/picture_of_me.jpg"
                alt="Parth"
                className="w-64 h-80 md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[350px] rounded-2xl object-cover border border-slate-700/50 shadow-2xl transition-all duration-500"
              />
            </div>
          </div>
        </section>

        <hr className="border-slate-900" />

        {/* About Section */}
        <section id='about' className="py-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">About Me</h3>
            <p className="text-slate-400 text-lg leading-relaxed bg-slate-900/50 p-6 rounded-lg">
              I'm a passionate Computer Engineering student at the University of Waterloo, specializing in software development and AI. With a strong foundation in programming languages like Python, JavaScript, and C++, I enjoy building innovative projects that solve real-world problems.
            </p>
          </div>
        </section>

        <hr className="border-slate-900" />

        {/* Project Preview Carousel */}
        <section id="projects" className="py-20">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-2">Featured Projects</h3>
            <p className="text-slate-400">A glimpse into my recent development projects.</p>
          </div>

          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="-ml-6">
              {/* Project 1 */}
              <CarouselItem className="pl-6 md:basis-1/2">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-slate-900 rounded-2xl mb-4 overflow-hidden border border-slate-800 group-hover:border-blue-500/50 transition">
                    <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent p-8">
                      <div className="h-full w-full rounded-t-lg bg-slate-800 shadow-2xl rounded-lg overflow-hidden">
                        <img src="src/assets/mE40HHY.png" alt="E-Commerce Dashboard" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition">E-Commerce Dashboard</h4>
                  <p className="text-slate-400 text-sm">React • Tailwind • Stripe</p>
                </div>
              </CarouselItem>

              {/* Project 2 */}
              <CarouselItem className="pl-6 md:basis-1/2">
                <div className="group cursor-pointer">
                  <div className="aspect-video bg-slate-900 rounded-2xl mb-4 overflow-hidden border border-slate-800 group-hover:border-blue-500/50 transition">
                    <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent p-8">
                      <div className="h-full w-full rounded-lg bg-slate-800 shadow-2xl" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition">AI Task Manager</h4>
                  <p className="text-slate-400 text-sm">Next.js • OpenAI • PostgreSQL</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-slate-900/80 backdrop-blur-md border border-slate-700 hover:bg-slate-800 text-white rounded-full h-10 w-10 transition" />
            <CarouselNext className="bg-slate-900/80 backdrop-blur-md border border-slate-700 hover:bg-slate-800 text-white rounded-full h-10 w-10 transition" />
          </Carousel>
        </section>
      </main>

      {/* Contact Section */}
      <section id="contact">
        <div className="max-w-6xl mx-auto px-8">
          <div className="py-20 border-t border-slate-900">
            <h3 className="text-3xl font-bold text-white mb-4">Let's build something great together.</h3>
            <p className="text-slate-400 mb-8">
              I'm currently open to new opportunities. Whether you have a project in mind or just want to say hi, feel free to reach out!
            </p>
            <ContactFormSection open={isFormOpen} setOpen={setIsFormOpen} />
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-slate-900 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Parth Vohra. Built with React, Vite & Tailwind.
        </p>
      </footer>
    </div>
  )
}

function ContactFormSection({ open, setOpen }: ContactFormSectionProps) {
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        {open ? "Close Form" : "Get in Touch"}
      </button>

      <div className={`transition-all duration-500 overflow-hidden ${open ? "max-h-[600px] mt-10 opacity-100" : "max-h-0 opacity-0"}`}>
        <form className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-sm text-slate-400 mb-2">Name</label>
            <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Email</label>
            <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Message</label>
            <textarea rows={5} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell me about your project..." />
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default App