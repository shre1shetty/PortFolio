import React, { useEffect, useRef } from 'react';
import { MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { personalInfo, education, experience } from '../../data/mock';

const About = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 reveal opacity-0">
          <p className="mono text-cyan-400 text-sm mb-4 tracking-wider">01. About Me</p>
          <h2 className="text-4xl md:text-5xl font-light">
            Who <span className="gradient-text font-semibold">I Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <div className="reveal opacity-0 delay-200">
            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              {personalInfo.about}
            </p>
            
            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-800 hover:border-cyan-500/30 transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <MapPin size={20} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white">{personalInfo.location}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-800 hover:border-cyan-500/30 transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Briefcase size={20} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Current Role</p>
                  <p className="text-white">{experience[0].role} @ {experience[0].company}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-800 hover:border-cyan-500/30 transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <GraduationCap size={20} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Education</p>
                  <p className="text-white">{education[0].degree} - {education[0].institution}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="reveal opacity-0 delay-300 relative">
            <div className="relative">
              {/* Code Block Decoration */}
              <div className="glass rounded-xl p-6 glow-cyan">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <pre className="mono text-sm text-gray-400 overflow-x-auto">
                  <code>
{`const developer = {
  name: "${personalInfo.name}",
  role: "${personalInfo.role}",
  experience: "2+ years",
  skills: [
    "React", "Node.js",
    "MongoDB", "TypeScript"
  ],
  passion: "Building scalable apps",
  available: true
};`}
                  </code>
                </pre>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-cyan-500/20 rounded-lg rotate-12 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-cyan-500/10 rounded-full animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
