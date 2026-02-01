import React, { useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import { personalInfo } from '../../data/mock';

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: 'Drop me a line anytime',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      description: 'Available for calls',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      description: 'Based in India',
    },
  ];

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal opacity-0">
          <p className="mono text-cyan-400 text-sm mb-4 tracking-wider">04. Contact</p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Let's <span className="gradient-text font-semibold">Connect</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="reveal opacity-0 delay-200">
            <h3 className="text-2xl font-medium text-white mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              {contactMethods.map((method) => (
                <div
                  key={method.label}
                  className="group flex items-start gap-4 p-4 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <method.icon size={22} className="text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">{method.label}</p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-white hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"
                      >
                        {method.value}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <p className="text-white">{method.value}</p>
                    )}
                    <p className="text-xs text-gray-600 mt-1">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="text-sm text-gray-500 mb-4">Connect on social</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="reveal opacity-0 delay-300">
            <div className="glass rounded-2xl p-8 lg:p-10 glow-cyan relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6">
                  <Send size={28} className="text-cyan-400" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Ready to start a project?
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Whether you have a project in mind, need help with development, or just want to say hello — I'd love to hear from you.
                </p>
                
                <a href={`mailto:${personalInfo.email}`}>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-medium py-6 text-base transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 gap-2">
                    <Mail size={18} />
                    Send me an Email
                  </Button>
                </a>
                
                <p className="text-center text-xs text-gray-600 mt-6">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
