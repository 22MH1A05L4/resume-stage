import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Code, Award } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: <Code className="w-5 h-5" />, text: "5+ Programming Languages" },
    { icon: <Award className="w-5 h-5" />, text: "6+ Certifications" },
    { icon: <GraduationCap className="w-5 h-5" />, text: "B.Tech Computer Science" },
    { icon: <MapPin className="w-5 h-5" />, text: "Visakhapatnam, India" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a strong foundation in full-stack development and cloud technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Building the Future with Code
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a dedicated computer science student and full-stack developer with a passion for 
                  creating innovative solutions. Currently pursuing my B.Tech at Aditya College of 
                  Engineering and Technology, I've developed expertise across multiple domains including 
                  web development, cloud computing, and DevOps.
                </p>
                <p>
                  My journey spans from building responsive web applications with React and Node.js to 
                  deploying scalable solutions on AWS, Azure, and GCP. I believe in writing clean, 
                  efficient code and staying updated with the latest technologies.
                </p>
                <p>
                  As a Class Representative, I've honed my leadership skills while maintaining high 
                  academic standards and contributing to various technical projects.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="text-primary">{highlight.icon}</div>
                  <span className="text-sm font-medium">{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats & Skills */}
          <div className="space-y-6 animate-fade-in">
            {/* Experience Cards */}
            <div className="space-y-4">
              <Card className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">Current Focus</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Specializing in multicloud and DevOps technologies while completing my degree
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Kubernetes</Badge>
                        <Badge variant="secondary">AWS</Badge>
                        <Badge variant="secondary">Docker</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">Education & Training</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Hands-on experience through internships and practical projects
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Full Stack</Badge>
                        <Badge variant="secondary">DevOps</Badge>
                        <Badge variant="secondary">Leadership</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary">2024</div>
                <div className="text-sm text-muted-foreground">Graduation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;