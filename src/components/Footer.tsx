import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/dhanushsrikakulapu",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/dhanush-srikakulapu",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:srikakulapudhanush@gmail.com",
    },
  ];

  return (
    <footer className="bg-gradient-to-t from-secondary/20 to-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-2">
              Dhanush Srikakulapu
            </h3>
            <p className="text-muted-foreground max-w-md">
              Full Stack Developer & Cloud Engineer passionate about creating innovative solutions 
              with modern technologies.
            </p>
          </div>

          {/* Center Section - Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/20 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-110 group"
                aria-label={social.name}
              >
                <div className="group-hover:text-primary transition-colors">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Right Section - Back to Top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="group hover:bg-primary/10 hover:border-primary/30"
          >
            <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© 2024 Dhanush Srikakulapu. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;