import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Code2, Zap, Sparkles, Heart, Mail, Github, Linkedin, ChevronRight, Send, ArrowUpRight, Menu, X } from "lucide-react";
import smartSortImg from "../assets/projects/Smart sort Visual AI.png";
import taskFlowImg from "../assets/projects/TaskFlow.png";

export default function App() {
  const navRef = useRef(null);
  const { scrollY } = useScroll();
  const navBlur = useTransform(scrollY, [0, 100], [0, 32]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navLinks = ["Work", "About", "Contact"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f5f7] via-[#ffffff] to-[#fafafa]">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/20 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-40 floating-gradient" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-purple-100/15 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-30 floating-gradient" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-gradient-to-tr from-blue-50/15 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-25 floating-gradient" style={{ animationDelay: '4s' }} />
      </div>

      {/* Navigation */}
      <header className="fixed left-0 right-0 z-50 pointer-events-none" style={{ top: '14px' }}>
        <motion.nav
          ref={navRef}
          style={{
            backdropFilter: useTransform(navBlur, (v) => `blur(${v}px)`),
            WebkitBackdropFilter: useTransform(navBlur, (v) => `blur(${v}px)`)
          }}
          className="glass-nav pointer-events-auto"
        >
          <div className="flex items-center justify-between w-full gap-3">
            <div className="text-sm font-semibold tracking-wider text-foreground">Navdeep Singh</div>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((item) => (
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

            <button
              type="button"
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/75 text-foreground shadow-sm backdrop-blur-md transition hover:bg-white"
              onClick={() => setMobileNavOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={mobileNavOpen}
            >
              {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>

        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden mx-4 mt-3 overflow-hidden rounded-[28px] border border-white/75 bg-white/90 backdrop-blur-2xl shadow-2xl"
          >
            <div className="flex flex-col divide-y divide-slate-200/60">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileNavOpen(false)}
                  className="px-5 py-4 text-sm font-semibold text-foreground transition hover:bg-slate-50"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      <section className="min-h-[84vh] md:min-h-[92vh] flex items-center">
        <div className="max-w-5xl mx-auto text-center relative z-10 py-24 md:py-32 px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(0.65rem,3vw,0.85rem)] font-medium tracking-[0.45em] text-muted-foreground mb-8 uppercase"
          >
            Fullstack Developer & Designer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3rem,10vw,6rem)] md:text-[clamp(4.5rem,16vw,9rem)] leading-[0.95] tracking-tighter font-bold text-foreground mb-6 sm:mb-8"
          >
            Navdeep Singh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(0.98rem,2vw,1.1rem)] sm:text-[1.05rem] text-muted-foreground max-w-2xl mx-auto mb-16 leading-8 font-light"
          >
            Crafting elegant digital experiences with refined motion, premium interfaces, and modern engineering
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-16"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="#work"
              className="primary-btn text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-4 w-full sm:w-auto justify-center"
            >
              View my work
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="secondary-btn text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-4 w-full sm:w-auto justify-center"
            >
              Get in touch
            </motion.a>
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
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">What I value</h2>
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.12, duration: 0.8 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-[24px] border border-white/70 rounded-[32px] p-7 h-full flex flex-col items-start hover:border-white/85 hover:shadow-xl hover:shadow-black/8 transition-all duration-300 group-hover:bg-white/85"
                  style={{
                    boxShadow: '0 16px 40px rgba(0,0,0,0.06), inset 1px 1px 0 rgba(255,255,255,0.5)'
                  }}>
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-gradient-to-br from-blue-50 to-blue-100/60 backdrop-blur-md border border-blue-200/60 rounded-full p-4 mb-5"
                  >
                    <value.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground mb-2.5">{value.title}</h3>
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
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Services</h2>
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.12, duration: 0.8 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/15 to-transparent rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-[24px] border border-white/70 rounded-[32px] p-8 h-full flex flex-col hover:border-white/85 hover:shadow-xl hover:shadow-black/8 transition-all duration-300 group-hover:bg-white/85"
                  style={{
                    boxShadow: '0 16px 40px rgba(0,0,0,0.06), inset 1px 1px 0 rgba(255,255,255,0.5)'
                  }}>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm flex-grow">{category.description}</p>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <motion.span 
                        key={skill} 
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="px-4 py-2 bg-gradient-to-br from-blue-50 to-blue-100/50 backdrop-blur-sm border border-blue-200/60 text-xs font-semibold text-primary rounded-full transition-all duration-300 cursor-default hover:shadow-md hover:shadow-blue-200/40"
                      >
                        {skill}
                      </motion.span>
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
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Featured projects</h2>
            <p className="text-base text-muted-foreground">Recent work that showcases my skills and passion</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              {
                title: "Smart Sort Visual AI",
                tagline: "Intelligent visual sorting",
                description: "A machine-vision powered visual sorting tool",
                tech: ["Python", "TensorFlow", "React"],
                image: smartSortImg
              },
              {
                title: "TaskFlow",
                tagline: "Productivity workflow",
                description: "A lightweight task management experience for teams",
                tech: ["React", "TypeScript", "Node.js"],
                image: taskFlowImg
              }
            ].map((project, index) => (
              <motion.a
                key={project.title}
                href="#contact"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.12, duration: 0.8 }}
                whileHover={{ y: -6 }}
                className="group relative block overflow-hidden rounded-[32px] shadow-[0_18px_60px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.12)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative glass-card overflow-hidden h-full flex flex-col min-h-[520px] sm:min-h-[560px] lg:min-h-[590px]">
                  <div className="relative project-preview flex items-center justify-center overflow-hidden rounded-t-[32px] h-[260px] sm:h-[300px]">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="absolute inset-0 w-full h-full object-cover rounded-t-[32px]"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/1200x700?text=Project+Preview'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/6 to-transparent" />
                  </div>

                  <div className="p-6 sm:p-8 lg:p-9 flex-grow flex flex-col">
                    <span className="glass-badge mb-4 inline-flex text-[11px] uppercase tracking-[0.3em] letter-spacing-[0.18em]">Case Study</span>
                    <h3 className="text-2xl font-semibold text-foreground mb-2.5">{project.title}</h3>
                    <p className="text-sm font-medium text-primary mb-3">{project.tagline}</p>
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-grow">{project.description}</p>

                    <div className="flex flex-wrap gap-2.5 mb-5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1.5 text-[11px] font-semibold text-muted-foreground bg-white/85 border border-slate-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/20">
                      <span className="text-sm font-semibold text-primary">View Case Study</span>
                      <ArrowUpRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Let's work together</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and help bring your ideas to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
            <div className="relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-[24px] border border-white/70 rounded-[32px] p-8 lg:p-12 hover:border-white/85 hover:shadow-xl hover:shadow-black/8 transition-all duration-300 group-hover:bg-white/85"
              style={{
                boxShadow: '0 16px 40px rgba(0,0,0,0.06), inset 1px 1px 0 rgba(255,255,255,0.5)'
              }}>
              
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Contact Info */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-8">Get in touch</h3>
                    <div className="space-y-8">
                      <motion.div whileHover={{ x: 4 }} className="transition-all duration-300">
                        <p className="text-xs font-semibold tracking-wider text-muted-foreground mb-2.5">Email</p>
                        <p className="text-lg font-medium text-foreground">navdeep@example.com</p>
                      </motion.div>
                      <motion.div whileHover={{ x: 4 }} className="transition-all duration-300">
                        <p className="text-xs font-semibold tracking-wider text-muted-foreground mb-2.5">Location</p>
                        <p className="text-lg font-medium text-foreground">San Francisco, CA</p>
                      </motion.div>
                      <motion.div whileHover={{ x: 4 }} className="transition-all duration-300">
                        <p className="text-xs font-semibold tracking-wider text-muted-foreground mb-2.5">Availability</p>
                        <p className="text-lg font-medium text-foreground">Open for new projects</p>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="pt-8 border-t border-white/20">
                    <p className="text-xs font-semibold tracking-wider text-muted-foreground mb-4.5">Follow</p>
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
                          whileHover={{ scale: 1.15, y: -3 }}
                          className="w-11 h-11 rounded-full bg-gradient-to-br from-white/60 to-white/40 border border-white/80 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-white/75 hover:shadow-lg hover:border-white/90 transition-all duration-300"
                        >
                          <social.icon className="w-4.5 h-4.5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-5.5 flex flex-col justify-between">
                  <div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="glass-input w-full px-6 py-4 rounded-[18px] text-foreground font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3 mt-6">Email</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="glass-input w-full px-6 py-4 rounded-[18px] text-foreground font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3 mt-6">Message</label>
                      <textarea
                        rows={3}
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="glass-input w-full px-6 py-4 rounded-[18px] text-foreground font-medium resize-none"
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#0071e3] to-[#0066cc] text-white rounded-full font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
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
