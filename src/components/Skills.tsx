import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Globe, 
  Server, 
  Database, 
  Cloud, 
  Settings, 
  TestTube, 
  GitBranch,
  Monitor
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "C++", "JavaScript", "HTML", "CSS", "Java", "DSA"],
      color: "text-blue-500"
    },
    {
      title: "Frontend Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React.js", "Angular", "Bootstrap", "Tailwind CSS"],
      color: "text-green-500"
    },
    {
      title: "Backend Frameworks",
      icon: <Server className="w-6 h-6" />,
      skills: ["Spring Boot", "Node.js", "Express.js", "Flask", "RESTful APIs"],
      color: "text-purple-500"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL", "MongoDB", "MySQL"],
      color: "text-orange-500"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Jenkins", "Ansible"],
      color: "text-cyan-500"
    },
    {
      title: "Development Tools",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Git", "GitHub", "Visual Studio Code", "Postman"],
      color: "text-red-500"
    },
    {
      title: "Testing Tools",
      icon: <TestTube className="w-6 h-6" />,
      skills: ["Manual Testing", "Selenium", "JIRA"],
      color: "text-yellow-500"
    },
    {
      title: "Methodologies",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Agile/Scrum", "Test-Driven Development", "CI/CD", "Microservices", "SDLC", "STLC"],
      color: "text-pink-500"
    },
    {
      title: "Operating Systems",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Linux/Unix", "Windows"],
      color: "text-indigo-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-hero-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, cloud computing, and modern DevOps practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className={`${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <span className="group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary" 
                      className="text-xs hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coding Profiles Section */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Coding Profiles
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "LeetCode", url: "https://leetcode.com/22MH1A05L4", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
              { name: "CodeChef", url: "https://codechef.com/Dhanushreddy", color: "bg-brown-500/20 text-amber-400 border-amber-500/30" },
              { name: "GeeksforGeeks", url: "https://geeksforgeeks.org/dhanush2tm", color: "bg-green-500/20 text-green-400 border-green-500/30" },
              { name: "HackerRank", url: "https://hackerrank.com/22MH1A05L4", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
              { name: "CodeForces", url: "https://codeforces.com/srikakulapudhanush", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" }
            ].map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-lg ${profile.color}`}
              >
                {profile.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;