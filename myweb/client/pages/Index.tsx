import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const Star = ({ className = "" }) => (
  <svg
    className={`inline-block ${className}`}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark");
    setIsDark(!isDark);
    localStorage.setItem(
      "theme",
      htmlElement.classList.contains("dark") ? "dark" : "light"
    );
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-primary" />
      ) : (
        <Moon className="w-5 h-5 text-primary" />
      )}
    </button>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold serif text-primary hover:opacity-80 transition"
          >
            Kidus
          </button>

          <div className="hidden md:flex gap-8 items-center">
            {[
              { label: "Portfolio", id: "intro" },
              { label: "About", id: "about" },
              { label: "Skills", id: "skills" },
              { label: "Experience", id: "experience" },
              { label: "Works", id: "portfolio" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground hover:text-primary transition"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-secondary"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-fade-in-down">
            {[
              { label: "Portfolio", id: "intro" },
              { label: "About", id: "about" },
              { label: "Skills", id: "skills" },
              { label: "Experience", id: "experience" },
              { label: "Works", id: "portfolio" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 rounded-lg hover:bg-secondary text-foreground"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-4 bg-background relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 text-primary/40 animate-float">
        <Star className="w-8 h-8" />
      </div>
      <div className="absolute bottom-20 right-12 text-primary/40">
        <Star className="w-10 h-10" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in-up">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto lg:mx-0">
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary rounded-full opacity-40 blur-lg"></div>
              <div className="relative bg-gradient-to-br from-primary/20 to-primary/30 rounded-3xl overflow-hidden border-8 border-primary/20 shadow-2xl">
                <img
                  src="myweb/kiduss.jpg"
                  alt="Kidus David"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-30"></div>
            </div>
          </div>

          <div className="animate-fade-in-down space-y-8">
            <div>
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary animate-scale-in" style={{ animationDelay: "0s" }}></div>
                <div className="w-3 h-3 rounded-full bg-primary animate-scale-in" style={{ animationDelay: "0.1s" }}></div>
                <div className="w-3 h-3 rounded-full bg-primary animate-scale-in" style={{ animationDelay: "0.2s" }}></div>
              </div>
              <p className="text-primary text-lg italic font-medium">Portfolio</p>
              <h1 className="text-5xl lg:text-6xl font-bold serif text-foreground mt-2 leading-tight">
                Graphic Designer
              </h1>
            </div>

            <div className="space-y-4">
              <p className="text-2xl font-semibold serif text-foreground">Kidus David</p>
              <p className="text-foreground/70 max-w-md leading-relaxed">
                A passionate designer crafting beautiful visuals and immersive experiences. Let's bring your ideas to life.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="tel:+251913887401"
                className="contact-badge hover:shadow-lg transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +251913887401
              </a>
              <a
                href="https://instagram.com/kidus.2high"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-badge hover:shadow-lg transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 100-8 4 4 0 000 8zm4.965-10.322a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
                </svg>
                kidus.2high
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IntroSection = () => {
  return (
    <section id="intro" className="py-20 px-4 bg-background relative">
      <div className="absolute top-10 left-8 text-primary/30">
        <Star className="w-8 h-8" />
      </div>
      <div className="absolute bottom-20 right-10 text-primary/40">
        <Star className="w-12 h-12" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=400&fit=crop"
              alt="Portfolio work"
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            />
          </div>

          <div className="space-y-6 animate-fade-in-down">
            <p className="text-foreground/70 italic border-l-4 border-primary pl-4 py-2">
              I'm a professional Graphic Designer with more than 3 years
              experience. I love to try something new for my project.
            </p>

            <h2 className="text-5xl serif font-bold">
              <span className="text-primary italic">Welcome</span>
              <br />
              To My Portfolio !
            </h2>

            <p className="text-foreground/70 leading-relaxed max-w-md">
              Explore my creative journey through carefully curated design
              works that showcase my passion for visual excellence and
              innovation.
            </p>

            <button className="px-8 py-3 bg-primary text-background font-medium rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg">
              View More
            </button>
          </div>
        </div>

        <div className="absolute w-48 h-48 bg-primary rounded-full opacity-20 blur-3xl -bottom-20 -right-20"></div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-background relative">
      <div className="absolute top-20 right-8 text-primary/30">
        <Star className="w-10 h-10" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-5xl serif font-bold">
              <span className="text-primary italic">My</span>
              <br />
              Skill & Expertise
            </h2>

            <div className="space-y-4 pl-4 border-l-4 border-primary">
              {["Design", "Photography", "Marketing"].map((skill, i) => (
                <div key={i} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <span className="text-primary font-bold mt-1">•</span>
                  <p className="text-lg font-medium italic text-foreground">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-96 animate-fade-in-down">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
              <div className="w-full h-full bg-background/50 rounded-lg shadow-inner flex items-center justify-center text-center">
                <p className="text-sm text-foreground/50">
                  Portfolio showcase of design expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-background relative">
      <div className="absolute bottom-20 right-12 text-primary/40">
        <Star className="w-12 h-12" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-5xl serif font-bold">
              <span className="text-primary italic">My</span>
              <br />
              Work Experiences
            </h2>

            <p className="text-foreground/70 leading-relaxed max-w-md">
              In my +3 years career, I took a part in different places and help
              them growing up. Being a professional Graphic Designer is my dream,
              so I enjoy finishing design and try something new for my project.
            </p>

            <div className="flex gap-8">
              {[
                { number: "50+", label: "Project" },
                { number: "+3", label: "Years Experiences" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 animate-scale-in"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-background flex items-center justify-center font-bold">
                    {item.number.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-primary">{item.number}</p>
                    <p className="text-sm text-foreground/60">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-80 animate-fade-in-down">
            <div className="absolute inset-0 bg-black rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="text-center text-white">
                <h3 className="text-4xl font-bold serif">GK</h3>
                <p className="text-lg">Production : Presents</p>
              </div>
            </div>
            <div className="absolute w-32 h-32 bg-primary rounded-full -bottom-16 -right-16 opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const works = [
    { id: 1, title: "Event Flyer Design", category: "Design" },
    { id: 2, title: "Road Rides Branding", category: "Branding" },
    { id: 3, title: "Aviators Campaign", category: "Campaign" },
    { id: 4, title: "TRAILS Tour Branding", category: "Branding" },
    { id: 5, title: "Profile Design", category: "Design" },
    { id: 6, title: "Signature Work", category: "Design" },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-background relative">
      <div className="absolute top-20 left-8 text-primary/30">
        <Star className="w-10 h-10" />
      </div>
      <div className="absolute bottom-10 right-8 text-primary/30">
        <Star className="w-8 h-8" />
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl serif font-bold text-center mb-4">
          <span className="text-primary italic">My</span> custom and simple works
        </h2>
        <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
          A curated selection of my recent design projects showcasing various
          styles and techniques
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <div
              key={work.id}
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                <div className="text-center">
                  <p className="text-sm text-primary font-medium">{work.category}</p>
                  <p className="text-lg font-semibold text-foreground mt-2">
                    {work.title}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-foreground/60">{work.category}</p>
                <h3 className="font-semibold text-foreground">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FooterSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background relative">
      <div className="absolute top-20 left-12 text-primary/30">
        <Star className="w-8 h-8" />
      </div>

      <div className="max-w-6xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in-up">
          <p className="text-primary italic text-2xl">Thank You</p>
          <h2 className="text-6xl lg:text-7xl serif font-bold">
            For Watching
          </h2>
        </div>

        <div className="w-24 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 mx-auto"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
          {[
            {
              icon: "phone",
              label: "+251913887401",
              href: "tel:+251913887401",
            },
            {
              icon: "email",
              label: "kidudavid00@gmail.com",
              href: "mailto:kidudavid00@gmail.com",
            },
            {
              icon: "location",
              label: "Ethiopia, Addis Ababa",
              href: "#",
            },
          ].map((contact, i) => (
            <a
              key={i}
              href={contact.href}
              className="flex items-center justify-center gap-3 p-4 rounded-lg hover:bg-primary/10 transition-colors group animate-fade-in-down"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-full bg-primary text-background flex items-center justify-center group-hover:scale-110 transition-transform">
                {contact.icon === "phone" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                )}
                {contact.icon === "email" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                {contact.icon === "location" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                  </svg>
                )}
              </div>
              <span className="text-sm font-medium text-foreground hidden sm:block">
                {contact.label}
              </span>
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-foreground/60 text-sm">
            © 2024 Kidus David. All rights reserved. Crafted with passion.
          </p>
        </div>
      </div>

      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
};

export default function Index() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <SkillsSection />
      <ExperienceSection />
      <PortfolioSection />
      <FooterSection />
    </div>
  );
}
