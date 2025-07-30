import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, TrendingUp, Users, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Multicloud and DevOps Trainee",
      company: "TechnicalHub",
      location: "Surampalam, AP",
      duration: "09/2024 – 12/2024",
      type: "Internship",
      description: [
        "Deployed applications on AWS, Azure, and GCP using containerization (Docker) and orchestration (Kubernetes)",
        "Automated CI/CD pipelines (GitHub Actions/Jenkins) with multi-cloud strategies, reducing deployment time by 40%",
        "Implemented infrastructure-as-code (Terraform) for consistent cloud resource provisioning across platforms"
      ],
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      icon: <Building className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Full Stack Development Trainee",
      company: "TechnicalHub",
      location: "Surampalam, AP", 
      duration: "06/2024 – 07/2024",
      type: "Internship",
      description: [
        "Developed and optimized 5+ web applications, improving performance by 30%",
        "Designed scalable features using React.js, Node.js, and Express.js, achieving 99.5% responsiveness"
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Full Stack"],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Class Representative",
      company: "Aditya College of Engineering and Technology",
      location: "Kakinada",
      duration: "01/2024 – Present",
      type: "Leadership",
      description: [
        "Advocated for 80+ students, liaising with faculty to address concerns and enhance academic experiences",
        "Coordinated events and meetings, increasing student participation by 75%"
      ],
      skills: ["Leadership", "Communication", "Event Management", "Student Advocacy"],
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const certifications = [
    "Cisco Certified Network Associate (CCNA)",
    "IT-Specialist Certiport: HTML and CSS, Python, Java Certifications",
    "Cisco Networking Academy: C++, C Programming, Python",
    "Google Cloud Engineer Track Certification",
    "AWS Cloud Practitioner Certification",
    "Azure Fundamentals"
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="bg-hero-gradient bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey through internships, leadership roles, and continuous learning
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative animate-slide-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  
                  {/* Content Card */}
                  <div className="ml-20">
                    <Card className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                              {exp.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {exp.title}
                              </h3>
                              <p className="text-primary font-medium">{exp.company}</p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {exp.duration}
                                </span>
                                <Badge variant="outline" className="text-xs">
                                  {exp.type}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <ul className="space-y-2">
                            {exp.description.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2 pt-2">
                            {exp.skills.map((skill, skillIndex) => (
                              <Badge 
                                key={skillIndex}
                                variant="secondary" 
                                className="text-xs hover:bg-primary/20 hover:text-primary transition-all duration-300"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-1">B.Tech in Computer Science</h4>
                    <p className="text-primary font-medium">Aditya College of Engineering and Technology</p>
                    <p className="text-sm text-muted-foreground mb-2">Kakinada • July 2022 – June 2026 (Expected)</p>
                    <Badge variant="secondary">Computer Science</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-1">Intermediate (Maths, Physics, Chemistry)</h4>
                    <p className="text-primary font-medium">Narayana Junior College</p>
                    <p className="text-sm text-muted-foreground mb-2">Anakapalle • June 2020 – May 2022</p>
                    <Badge variant="secondary">Science Stream</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="p-4 bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;