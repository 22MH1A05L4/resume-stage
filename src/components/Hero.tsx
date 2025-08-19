import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import heroAvatar from "@/assets/hero-avatar.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block bg-hero-gradient bg-clip-text text-transparent">
                  Dhanush Srikakulapu
                </span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Full Stack Developer & Cloud Engineer
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Passionate about building scalable web applications and cloud solutions. 
                  Currently pursuing B.Tech in Computer Science with expertise in modern technologies.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="group">
                <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform" />
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a 
                href="https://github.com/dhanushsrikakulapu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/in/dhanush-srikakulapu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:srikakulapudhanush@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-glow-pulse"></div>
              
              {/* Avatar Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img 
                  src={heroAvatar} 
                  alt="Dhanush Srikakulapu" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-card rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute top-1/2 -right-6 w-14 h-14 bg-card rounded-xl flex items-center justify-center shadow-lg animate-bounce delay-500">
                <span className="text-xl">☁️</span>
              </div>
              <div className="absolute -bottom-2 left-1/4 w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-lg animate-bounce delay-1000">
                <span className="text-lg">🐍</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;