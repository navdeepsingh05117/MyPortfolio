import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Code2, Zap, Sparkles, Heart, ArrowRight, Mail, Github, Linkedin, ChevronRight } from "lucide-react";

export default function App() {
  const navRef = useRef(null);

  const { scrollY } = useScroll();
  const navBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const navPadding = useTransform(scrollY, [0, 100], [16, 12]);

  return (
    <div className="min-h-screen bg-background">
      {/* Apple-style Navbar */}
      <motion.nav
        ref={navRef}
        style={{
          backdropFilter: useTransform(navBlur, (v) => `blur(${v}px)`),
          WebkitBackdropFilter: useTransform(navBlur, (v) => `blur(${v}px)`)
        }}
        className="fixed top-0 left-0 right-0 z-50 bg-card/80 border-b border-border"
      >
        <motion.div
          style={{ paddingTop: navPadding, paddingBottom: navPadding }}
          className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all"
        >
          <div className="font-medium">Navdeep Singh</div>
          <div className="hidden md:flex items-center gap-8">
            {["Work", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs tracking-[0.2em] text-muted-foreground mb-4 uppercase"
          >
            Fullstack Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3rem,10vw,6rem)] leading-[1.05] tracking-tight mb-6 font-semibold"
          >
            Navdeep Singh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Crafting elegant digital experiences with modern web technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="px-7 py-3 bg-primary text-primary-foreground rounded-full font-medium cursor-pointer shadow-sm"
            >
              View my work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="px-7 py-3 bg-secondary text-secondary-foreground rounded-full font-medium cursor-pointer border border-border"
            >
              Get in touch
            </motion.a>
          </motion.div>
        </div>

        {/* Hero visual mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto mt-20"
        >
          <div className="relative aspect-[16/10] rounded-[1.5rem] bg-card border border-border overflow-hidden shadow-2xl shadow-black/5">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-3xl bg-white/80 backdrop-blur-sm shadow-lg border border-border flex items-center justify-center">
                <Code2 className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Get to Know Me Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-semibold tracking-tight mb-4">Get to know me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Values that drive everything I build
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Precision",
                description: "Every detail matters. Clean code, pixel-perfect design."
              },
              {
                icon: Zap,
                title: "Performance",
                description: "Fast, optimized, and efficient. No compromises."
              },
              {
                icon: Code2,
                title: "Clean Code",
                description: "Readable, maintainable, and built to last."
              },
              {
                icon: Heart,
                title: "Thoughtful Design",
                description: "User-first experiences that feel effortless."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-[1.125rem] p-8 border border-border transition-transform cursor-default"
              >
                <value.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-semibold tracking-tight mb-4">What I do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Full-stack development with modern tools and technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                description: "Building responsive, interactive interfaces with React, Next.js, and TypeScript",
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion"]
              },
              {
                title: "Backend Development",
                description: "Scalable server-side solutions with Node.js and modern databases",
                skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"]
              },
              {
                title: "Design & UX",
                description: "Creating beautiful, intuitive user experiences from concept to delivery",
                skills: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"]
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="bg-background rounded-[1.125rem] p-8 border border-border"
              >
                <h3 className="text-2xl font-semibold mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-semibold tracking-tight mb-4">Featured projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recent work that showcases my skills and passion
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Zenith Commerce",
                tagline: "Modern e-commerce platform",
                description: "Full-stack solution with real-time inventory and seamless checkout",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                color: "from-blue-100 to-purple-100"
              },
              {
                title: "Nexus Workspace",
                tagline: "Team collaboration tool",
                description: "Real-time project management for distributed teams",
                tech: ["Next.js", "PostgreSQL", "WebSocket"],
                color: "from-orange-100 to-pink-100"
              },
              {
                title: "Pulse Analytics",
                tagline: "Data visualization platform",
                description: "Transform complex data into actionable insights",
                tech: ["React", "D3.js", "Express", "Redis"],
                color: "from-green-100 to-teal-100"
              },
              {
                title: "Nova Design System",
                tagline: "Component library",
                description: "Comprehensive design system for modern web apps",
                tech: ["React", "TypeScript", "Storybook"],
                color: "from-indigo-100 to-purple-100"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group bg-card rounded-[1.125rem] overflow-hidden border border-border cursor-pointer transition-transform"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className={`aspect-[16/10] bg-gradient-to-br ${project.color} flex items-center justify-center`}
                >
                  <div className="w-24 h-24 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-border flex items-center justify-center">
                    <Code2 className="w-12 h-12 text-primary" />
                  </div>
                </motion.div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-primary mb-3">{project.tagline}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6">
                    <a href="#" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                      Learn more <ChevronRight className="w-4 h-4" />
                    </a>
                    <a href="#" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                      View project <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-5xl font-semibold tracking-tight mb-6">Let's work together</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
              Have a project in mind? I'd love to hear about it and help bring your ideas to life.
            </p>

            <div className="flex gap-3 justify-center mb-10">
              {[
                { icon: Mail, href: "mailto:navdeep@example.com", label: "Email" },
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center cursor-pointer hover:border-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <motion.a
              href="mailto:navdeep@example.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium cursor-pointer shadow-sm"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Navdeep Singh. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed and built with care
          </p>
        </div>
      </footer>
    </div>
  );
}
