import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Code2, Zap, Sparkles, Heart, Mail, Github, Linkedin, ChevronRight, Send, ArrowUpRight } from "lucide-react";

export default function App() {
  const navRef = useRef(null);
  const { scrollY } = useScroll();
  const navBlur = useTransform(scrollY, [0, 100], [0, 32]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f5f7] via-[#ffffff] to-[#fafafa]">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/20 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-40 floating-gradient" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-purple-100/15 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-30 floating-gradient" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-gradient-to-tr from-blue-50/15 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-25 floating-gradient" style={{ animationDelay: '4s' }} />
      </div>

      {/* Navigation */}
      <motion.nav
        ref={navRef}
        style={{
          backdropFilter: useTransform(navBlur, (v) => `blur(${v}px)`),
          WebkitBackdropFilter: useTransform(navBlur, (v) => `blur(${v}px)`)
        }}
        className="glass-nav fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-sm font-semibold tracking-wider text-foreground">Navdeep Singh</div>
          <div className="hidden md:flex items-center gap-12">
            {["Work", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen px-6 flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-[600px] h-[400px] bg-gradient-to-b from-blue-200/20 via-blue-100/10 to-transparent blur-3xl rounded-full" />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm font-medium tracking-[0.3em] text-muted-foreground mb-6 uppercase"
          >
            Fullstack Developer & Designer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3.5rem,12vw,7rem)] leading-[1.1] tracking-tight font-semibold text-foreground mb-8"
          >
            Navdeep Singh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Crafting elegant digital experiences with refined motion, premium interfaces, and modern engineering
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#work"
              className="px-8 py-4 bg-gradient-to-r from-[#0071e3] to-[#0066cc] text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 text-base"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/60 border border-white/80 backdrop-blur-lg text-foreground rounded-full font-semibold hover:bg-white/80 hover:shadow-md shadow-lg shadow-white/20 transition-all duration-300 hover:-translate-y-1 text-base"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-semibold text-foreground mb-3">What I value</h2>
            <p className="text-base text-muted-foreground">Core principles that guide my work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Sparkles, title: "Precision", description: "Every detail matters. Clean code, pixel-perfect design." },
              { icon: Zap, title: "Performance", description: "Fast, optimized, and efficient. No compromises." },
              { icon: Code2, title: "Clean Code", description: "Readable, maintainable, and built to last." },
              { icon: Heart, title: "Thoughtful Design", description: "User-first experiences that feel effortless." }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative bg-white/72 backdrop-blur-[24px] border border-white/65 rounded-[28px] p-6 h-full flex flex-col items-start hover:shadow-lg hover:shadow-black/10 transition-all duration-300"
                  style={{
                    boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
                  }}>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 backdrop-blur-md border border-blue-200/50 rounded-full p-3 mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-semibold text-foreground mb-3">Services</h2>
            <p className="text-base text-muted-foreground">How I bring products to life</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
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
                title: "UI/UX Design",
                description: "Creating beautiful, intuitive user experiences from concept to delivery",
                skills: ["Figma", "Design Systems", "Prototyping", "User Research"]
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/15 to-transparent rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative bg-white/72 backdrop-blur-[24px] border border-white/65 rounded-[28px] p-8 h-full flex flex-col hover:shadow-lg hover:shadow-black/10 transition-all duration-300"
                  style={{
                    boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
                  }}>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm flex-grow">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-blue-100/60 backdrop-blur-sm border border-blue-200/50 text-xs font-semibold text-primary rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-semibold text-foreground mb-3">Featured projects</h2>
            <p className="text-base text-muted-foreground">Recent work that showcases my skills and passion</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {[
              {
                title: "Zenith Commerce",
                tagline: "Modern e-commerce platform",
                description: "Full-stack solution with real-time inventory and seamless checkout",
                tech: ["React", "Node.js", "MongoDB", "Stripe"]
              },
              {
                title: "Nexus Workspace",
                tagline: "Team collaboration tool",
                description: "Real-time project management for distributed teams",
                tech: ["Next.js", "PostgreSQL", "WebSocket"]
              },
              {
                title: "Pulse Analytics",
                tagline: "Data visualization platform",
                description: "Transform complex data into actionable insights",
                tech: ["React", "D3.js", "Express", "Redis"]
              },
              {
                title: "Nova Design System",
                tagline: "Component library",
                description: "Comprehensive design system for modern web apps",
                tech: ["React", "TypeScript", "Storybook"]
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[28px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative bg-white/72 backdrop-blur-[24px] border border-white/65 rounded-[28px] overflow-hidden h-full flex flex-col hover:shadow-lg hover:shadow-black/10 transition-all duration-300"
                  style={{
                    boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
                  }}>
                  <div className="relative h-56 bg-gradient-to-br from-blue-100/50 via-purple-100/40 to-pink-100/30 flex items-center justify-center overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-300/30 to-purple-300/20 rounded-[20px] blur-2xl" />
                      <div className="relative bg-white/60 backdrop-blur-md border border-white/80 rounded-[20px] p-5"
                        style={{
                          boxShadow: '0 8px 32px rgba(0,0,0,0.05)'
                        }}>
                        <Code2 className="w-12 h-12 text-primary" />
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm font-medium text-primary mb-3">{project.tagline}</p>
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-grow">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium text-muted-foreground bg-gray-100/60 border border-gray-200/50 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all cursor-pointer">
                      <span>Learn more</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-semibold text-foreground mb-3">Let's work together</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and help bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 to-transparent rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative bg-white/72 backdrop-blur-[24px] border border-white/65 rounded-[28px] p-8 lg:p-10 flex flex-col justify-between h-full hover:shadow-lg hover:shadow-black/10 transition-all duration-300"
                style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
                }}>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-8">Get in touch</h3>
                  <div className="space-y-7">
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-muted-foreground mb-2">Email</p>
                      <p className="text-lg font-medium text-foreground">navdeep@example.com</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-muted-foreground mb-2">Location</p>
                      <p className="text-lg font-medium text-foreground">San Francisco, CA</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-muted-foreground mb-2">Availability</p>
                      <p className="text-lg font-medium text-foreground">Open for new projects</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-white/20">
                  <p className="text-xs font-semibold tracking-wider text-muted-foreground mb-4">Follow</p>
                  <div className="flex gap-3">
                    {[
                      { icon: Github, href: "https://github.com", label: "GitHub" },
                      { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                      { icon: Mail, href: "mailto:navdeep@example.com", label: "Email" }
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-10 h-10 rounded-full bg-white/50 border border-white/70 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-white/70 hover:shadow-md transition-all duration-300"
                      >
                        <social.icon className="w-4 h-4" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              onSubmit={(e) => { e.preventDefault(); }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/15 to-transparent rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative bg-white/72 backdrop-blur-[24px] border border-white/65 rounded-[28px] p-8 lg:p-10 space-y-5 hover:shadow-lg hover:shadow-black/10 transition-all duration-300"
                style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
                }}>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2.5">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3 bg-white/50 border border-white/60 backdrop-blur-md rounded-[14px] text-foreground placeholder-muted-foreground focus:bg-white/70 focus:border-blue-300/60 focus:ring-0 focus:outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2.5">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3 bg-white/50 border border-white/60 backdrop-blur-md rounded-[14px] text-foreground placeholder-muted-foreground focus:bg-white/70 focus:border-blue-300/60 focus:ring-0 focus:outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3 bg-white/50 border border-white/60 backdrop-blur-md rounded-[14px] text-foreground placeholder-muted-foreground focus:bg-white/70 focus:border-blue-300/60 focus:ring-0 focus:outline-none transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#0071e3] to-[#0066cc] text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 flex items-center justify-center gap-2 group/btn transition-all duration-300 hover:-translate-y-1 mt-2"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/30 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Navdeep Singh. All rights reserved.</p>
          <p>Designed and built with care</p>
        </div>
      </footer>
    </div>
  );
}
