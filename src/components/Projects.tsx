import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Cloud, Database, BarChart3, ShoppingCart, CloudLightning, Activity } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Machine Learning Model with Azure",
      description: "Built and deployed a machine learning model using Azure Machine Learning Studio, including dataset preparation, model training, and web service deployment via Azure Container Instance. Integrated automated ML and custom Python scripts for real-time predictions through REST API.",
      icon: <Cloud className="w-8 h-8" />,
      technologies: ["Azure ML", "Python", "REST API", "Container Instance", "Machine Learning"],
      category: "Cloud & AI",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-Time Dashboard with BigQuery",
      description: "Designed and implemented a real-time data visualization dashboard using Google BigQuery and Looker Studio. Connected BigQuery datasets to visualize KPIs, automate reporting, and enable real-time decision-making through interactive dashboards.",
      icon: <BarChart3 className="w-8 h-8" />,
      technologies: ["Google BigQuery", "Looker Studio", "Data Visualization", "Real-time Analytics"],
      category: "Data Analytics",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Serverless API with AWS Lambda",
      description: "Developed a serverless REST API using AWS Lambda and API Gateway to handle backend logic efficiently without managing servers. Integrated with DynamoDB for data storage ensuring scalability, high availability, and low operational overhead.",
      icon: <CloudLightning className="w-8 h-8" />,
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "Serverless", "Node.js"],
      category: "Cloud Architecture",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Multi-Cloud Kubernetes Cluster",
      description: "Deployed and managed a Kubernetes cluster across multiple cloud platforms (AWS, Azure, GCP) to ensure high availability and fault tolerance. Implemented CI/CD pipelines, load balancing, and network policies for seamless multi-cloud application deployments.",
      icon: <Database className="w-8 h-8" />,
      technologies: ["Kubernetes", "AWS", "Azure", "GCP", "CI/CD", "Docker"],
      category: "DevOps",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Full Stack E-Commerce Platform",
      description: "Built end-to-end e-commerce platform using Java Spring Boot (RESTful APIs, JWT auth, MySQL) and React.js (Redux, Bootstrap), handling 500+ concurrent users with real-time inventory. Delivered 99.8% data consistency via optimized database design and processed 1,000+ daily transactions via secure payment gateway integrations.",
      icon: <ShoppingCart className="w-8 h-8" />,
      technologies: ["Spring Boot", "React.js", "MySQL", "JWT", "Redux", "Payment Gateway"],
      category: "Full Stack",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Real-Time Weather Analytics Dashboard",
      description: "Engineered a full-stack weather analytics platform using Python Flask backend and JavaScript frontend, processing real-time data from multiple APIs for 10+ cities. Developed interactive web interface with Chart.js visualizations that enhanced user experience and improved query performance by 35% through optimized indexing.",
      icon: <Activity className="w-8 h-8" />,
      technologies: ["Python", "Flask", "JavaScript", "Chart.js", "MySQL", "Weather APIs"],
      category: "Web Application",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise across cloud computing, full-stack development, and data analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105 group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary" 
                      className="text-xs hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn hover:bg-primary/10 hover:border-primary/30"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn hover:bg-accent/10 hover:border-accent/30"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-card-gradient p-8 rounded-2xl border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on innovative projects and explore new technologies. 
              Let's build something amazing together!
            </p>
            <Button variant="premium" size="lg" className="group">
              <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;