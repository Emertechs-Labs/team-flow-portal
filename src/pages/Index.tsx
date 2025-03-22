
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { AuthForm } from "@/components/AuthForm";
import { TaskList } from "@/components/TaskList";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, Clock, LineChart, MessageSquareText, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Designed for modern teams
            </h2>
            <p className="text-muted-foreground text-lg">
              Features that help your team stay connected, organized, and efficient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquareText className="h-6 w-6" />,
                title: "Streamlined Communication",
                description: "Keep all task-related discussions organized and accessible in one place."
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: "Real-time Updates",
                description: "Instant notifications and live updates keep everyone on the same page."
              },
              {
                icon: <Check className="h-6 w-6" />,
                title: "Task Management",
                description: "Create, assign, and track tasks with detailed progress monitoring."
              },
              {
                icon: <LineChart className="h-6 w-6" />,
                title: "Performance Analytics",
                description: "Visualize team productivity and identify areas for improvement."
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Team Collaboration",
                description: "Work together seamlessly with integrated collaboration tools."
              },
              {
                icon: <ArrowRight className="h-6 w-6" />,
                title: "Customizable Workflows",
                description: "Design processes that match how your team works best."
              }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="glass-card p-6 flex flex-col items-start animate-fade-in animate-once"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Tabs defaultValue="tasks" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="tasks">Task View</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>
                
                <TabsContent value="tasks" className="animate-fade-in animate-once">
                  <TaskList />
                </TabsContent>
                
                <TabsContent value="reports" className="animate-fade-in animate-once">
                  <div className="glass-card p-8 text-center">
                    <LineChart className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-display font-semibold mb-3">Performance Reports</h3>
                    <p className="text-muted-foreground mb-6">
                      Track team productivity, task completion rates, and identify trends over time.
                    </p>
                    <div className="w-full h-40 bg-accent rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Report visualization preview</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Boost your team's productivity
              </h2>
              <p className="text-muted-foreground text-lg">
                Our internal memo app helps teams communicate effectively, track progress on tasks, and ensure that everyone stays on the same page.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Reduce time spent in unnecessary meetings",
                  "Keep all communications in a single organized space",
                  "Set clear expectations and deadlines for every task",
                  "Track progress with visual indicators and reports"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-green-800" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button size="lg">
                <span>Get started today</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Auth Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to transform your team's workflow?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Create your account in seconds and start experiencing the benefits of structured, clear communication.
              </p>
              
              <div className="glass-card p-8 rounded-xl">
                <AuthForm />
              </div>
            </div>
            
            <div className="glass-panel rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold">Free trial</h3>
                    <p className="text-muted-foreground">14 days of full access, no credit card required</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold">Easy setup</h3>
                    <p className="text-muted-foreground">Get started in minutes, not days</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold">Cancel anytime</h3>
                    <p className="text-muted-foreground">No long-term commitments or hidden fees</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t mt-8 pt-8">
                <div className="flex justify-between items-baseline mb-4">
                  <span className="text-xl font-display font-semibold">Basic Plan</span>
                  <div>
                    <span className="text-3xl font-display font-bold">$9</span>
                    <span className="text-muted-foreground">/month per user</span>
                  </div>
                </div>
                
                <Button className="w-full" size="lg">
                  Start your free trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-display font-semibold">MemoFlow</span>
              <p className="text-muted-foreground mt-2">Streamlining team communication</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Features</a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Pricing</a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Documentation</a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">About Us</a>
            </div>
          </div>
          
          <div className="border-t mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2023 MemoFlow. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
