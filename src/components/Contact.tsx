import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "srikakulapudhanush@gmail.com",
      href: "mailto:srikakulapudhanush@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 7815877033",
      href: "tel:+917815877033",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Visakhapatnam, India",
      href: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/dhanushsrikakulapu",
      color: "hover:bg-gray-500/20 hover:text-gray-400"
    },
    {
      name: "LinkedIn", 
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://linkedin.com/in/dhanush-srikakulapu",
      color: "hover:bg-blue-500/20 hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-hero-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having 
                a conversation about technology. Whether you're looking for a developer, have a question, 
                or want to collaborate, feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index}
                  className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                >
                  <CardContent className="p-6">
                    <a 
                      href={contact.href}
                      className="flex items-center gap-4 group-hover:scale-105 transition-transform duration-300"
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${contact.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {contact.title}
                        </h4>
                        <p className="text-muted-foreground">{contact.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl bg-card border border-border/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Send me a message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Name</label>
                      <Input 
                        placeholder="Your name"
                        className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input 
                      placeholder="What's this about?"
                      className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>
                  
                  <Button variant="premium" size="lg" className="w-full group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-card-gradient p-8 rounded-2xl border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to start a project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can bring your ideas to life with modern web technologies and cloud solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Email Me
              </Button>
              <Button variant="outline" size="lg" className="group">
                <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform" />
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;