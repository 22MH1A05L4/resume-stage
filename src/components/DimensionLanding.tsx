import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Github, Zap, Cloud, Code, Users } from "lucide-react";
import { Scene3D } from "./Scene3D";

const DimensionLanding = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Enhanced Floating Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 lg:px-12">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">Dimension</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-purple-300 transition-colors">About</a>
          <a href="#" className="hover:text-purple-300 transition-colors">Careers</a>
          <a href="#" className="hover:text-purple-300 transition-colors">Blog</a>
          <a href="#" className="hover:text-purple-300 transition-colors">Changelog</a>
        </div>

        <Button variant="outline" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
          Join waitlist
        </Button>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Announcement Banner */}
        <div className="flex justify-center mt-8 mb-12 animate-fade-in">
          <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/30 px-4 py-2">
            🎉 Announcing our $1.4M Fundraise
          </Badge>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
              Dimension is the new{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                standard
              </span>{" "}
              for{" "}
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                collaboration
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Chat, code, cloud, deployments, and more.
            </p>

            {/* Email Signup */}
            <div className="max-w-md mx-auto mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-400 focus:border-purple-500"
                    required
                  />
                  <Button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Join waitlist
                  </Button>
                </form>
              ) : (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
                  ✓ You've joined the waitlist!
                </div>
              )}
            </div>
          </div>

          {/* App Preview */}
          <div className="relative max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-600/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">App Preview</h3>
                  <p className="text-gray-400">The complete developer experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted by Section */}
          <div className="mt-24 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <p className="text-gray-400 mb-8">
              Join the maintainers and contributors to the largest open-source projects on our waitlist.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["React", "Vue", "Angular", "Svelte", "Next.js"].map((tech) => (
                <div key={tech} className="text-lg font-semibold">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 mt-32">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Build software{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                faster, together.
              </span>
            </h2>
            <p className="text-xl text-gray-300">The most complete developer experience.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Collaborate on everything",
                description: "From deployments to tasks, work with your team every step of the way.",
                delay: "0s"
              },
              {
                icon: Cloud,
                title: "Cloud Integration",
                description: "Deploy to your favorite platforms with seamless integration and monitoring.",
                delay: "0.1s"
              },
              {
                icon: Code,
                title: "Code Together",
                description: "Real-time collaborative coding with powerful development tools.",
                delay: "0.2s"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 animate-fade-in hover:scale-105"
                style={{ animationDelay: feature.delay }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations Section */}
        <section className="container mx-auto px-6 mt-32 mb-32">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Crafted for your{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                favorite tools
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Connect your tools - we'll handle the rest. Many integrations, with more to come.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
            {["GitHub", "Vercel", "AWS", "Docker", "Figma", "Slack"].map((tool, index) => (
              <div
                key={tool}
                className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-sm font-semibold text-gray-300">{tool}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Dimension</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <p className="text-gray-400 text-sm">© 2024 Dimension. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DimensionLanding;