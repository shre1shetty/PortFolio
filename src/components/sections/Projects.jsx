import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { projects } from '../../data/mock';

const Projects = () => {
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

  const renderTechStack = (techs) => {
    return techs.map((tech, i) => (
      <span
        key={i}
        className="mono text-xs px-3 py-1 rounded-full bg-gray-800/80 text-gray-400 border border-gray-700"
      >
        {tech}
      </span>
    ));
  };

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 reveal opacity-0">
          <p className="mono text-cyan-400 text-sm mb-4 tracking-wider">03. Projects</p>
          <h2 className="text-4xl md:text-5xl font-light">
            Featured <span className="gradient-text font-semibold">Work</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            A selection of projects I've built with passion and attention to detail
          </p>
        </div>

        {/* Featured Project 1 */}
        <div className="reveal opacity-0 delay-100 mb-8 group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-50" />
          
          <div className="relative p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-700/50 bg-gray-900/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                        <Code2 className="w-10 h-10 text-cyan-400" />
                      </div>
                      <p className="text-gray-400 text-sm">{projects[0].subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20">
                  Featured Project
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {projects[0].title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {projects[0].longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {renderTechStack(projects[0].technologies)}
                </div>

                <div className="flex items-center gap-4">
                  {projects[0].liveUrl && (
                    <a href={projects[0].liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-medium gap-2">
                        View Live <ExternalLink size={16} />
                      </Button>
                    </a>
                  )}
                  {projects[0].githubUrl && (
                    <a href={projects[0].githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-gray-700 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 gap-2">
                        <Github size={16} /> Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Project 2 */}
        <div className="reveal opacity-0 delay-200 mb-16 group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-500/20 opacity-50" />
          
          <div className="relative p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-700/50 bg-gray-900/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                        <Code2 className="w-10 h-10 text-cyan-400" />
                      </div>
                      <p className="text-gray-400 text-sm">{projects[1].subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20">
                  Featured Project
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {projects[1].title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {projects[1].longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {renderTechStack(projects[1].technologies)}
                </div>

                <div className="flex items-center gap-4">
                  {projects[1].liveUrl && (
                    <a href={projects[1].liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-medium gap-2">
                        View Live <ExternalLink size={16} />
                      </Button>
                    </a>
                  )}
                  {projects[1].githubUrl && (
                    <a href={projects[1].githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-gray-700 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 gap-2">
                        <Github size={16} /> Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-light text-center mb-10 reveal opacity-0 delay-300">
          Other <span className="text-cyan-400">Projects</span>
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="reveal opacity-0 delay-400 group glass rounded-xl p-6 hover-glow transition-all duration-500 hover:-translate-y-2">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-6 bg-gray-800/50">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Code2 className="w-12 h-12 text-cyan-400 opacity-50" />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
              {projects[2].title}
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              {projects[2].description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {projects[2].technologies.slice(0, 4).map((tech, i) => (
                <span key={i} className="mono text-xs px-2 py-1 rounded bg-gray-800/80 text-gray-500">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
