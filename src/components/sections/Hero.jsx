import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { personalInfo } from '../../data/mock';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(drawParticles);
    };

    resize();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(0,0%,4%)] z-10" />
      
      {/* Geometric Shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 border border-cyan-500/20 rounded-full animate-rotate-slow opacity-30" />
      <div className="absolute bottom-40 left-10 w-40 h-40 border border-cyan-500/10 rotate-45 animate-float opacity-20" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <div className="animate-fade-in-up">
          <p className="mono text-cyan-400 text-sm mb-4 tracking-wider">
            Hello, I'm
          </p>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 animate-fade-in-up delay-100">
          <span className="gradient-text font-semibold">{personalInfo.name}</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-400 font-light mb-8 animate-fade-in-up delay-200">
          {personalInfo.role}
        </h2>
        
        <p className="text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-300">
          {personalInfo.tagline}
        </p>
        
        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up delay-400">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-500">
          <Button
            onClick={() => scrollToSection('#projects')}
            className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-medium px-8 py-3 text-base transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection('#contact')}
            variant="outline"
            className="border-gray-700 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 px-8 py-3 text-base transition-all duration-300"
          >
            Get in Touch
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={() => scrollToSection('#about')}
          className="text-gray-500 hover:text-cyan-400 transition-colors"
          aria-label="Scroll to About"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
