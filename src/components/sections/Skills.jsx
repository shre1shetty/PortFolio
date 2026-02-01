import React, { useEffect, useRef, useState } from 'react';
import { Code2, Server, Wrench } from 'lucide-react';
import { skills } from '../../data/mock';

const SkillBar = ({ name, level, delay }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={barRef} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 text-sm group-hover:text-cyan-400 transition-colors duration-300">
          {name}
        </span>
        <span className="mono text-xs text-gray-500 group-hover:text-cyan-400 transition-colors duration-300">
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ title, icon: Icon, items, delay }) => {
  const cardRef = useRef(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="opacity-0 glass rounded-2xl p-8 hover-glow transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
          <Icon size={24} className="text-cyan-400" />
        </div>
        <h3 className="text-xl font-medium text-white">{title}</h3>
      </div>
      <div className="space-y-5">
        {items.map((skill, idx) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={delay + idx * 100}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="mono text-cyan-400 text-sm mb-4 tracking-wider">02. Skills</p>
          <h2 className="text-4xl md:text-5xl font-light">
            My <span className="gradient-text font-semibold">Tech Stack</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Technologies I work with to build modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory
            title="Frontend"
            icon={Code2}
            items={skills.frontend}
            delay={100}
          />
          <SkillCategory
            title="Backend"
            icon={Server}
            items={skills.backend}
            delay={200}
          />
          <SkillCategory
            title="Tools & DevOps"
            icon={Wrench}
            items={skills.tools}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
