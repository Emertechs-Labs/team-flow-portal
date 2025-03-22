
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="pill bg-accent text-accent-foreground mb-4 animate-slide-down animate-once">
              Internal Communication Simplified
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight animate-slide-up animate-once">
            Beautiful & Efficient <br className="hidden md:block" />
            <span className="text-primary">Task Reporting</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto animate-slide-up animate-once animate-delay-200">
            Streamline your team's communication with our elegantly designed memo application. 
            Track progress, share updates, and collaborate seamlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-in animate-once animate-delay-400">
            <Button size="lg" asChild>
              <Link to="/register">Start for free</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/demo">See how it works</Link>
            </Button>
          </div>
        </div>
        
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in animate-once animate-delay-500">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5 glass-panel rounded-2xl border border-accent/50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[90%] h-[90%] bg-white/95 rounded-xl shadow-lg p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-display font-semibold text-xl">Today's Tasks</h2>
                  <p className="text-sm text-muted-foreground">Tuesday, Oct 18</p>
                </div>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-sm bg-primary"></div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <div className="w-4 h-4 rounded-sm bg-primary"></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: "Finalize Q4 report design", progress: 75, priority: "high" },
                  { title: "Team sync meeting", progress: 0, priority: "medium" },
                  { title: "Review marketing materials", progress: 30, priority: "medium" },
                  { title: "Update client presentation", progress: 90, priority: "high" },
                ].map((task, i) => (
                  <div key={i} className="p-4 rounded-lg bg-background/50 border border-border flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{task.title}</h3>
                      <div className="text-xs text-muted-foreground mt-1">Due today</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="pill bg-primary/10 text-primary">
                        {task.progress}%
                      </div>
                      <div className={`pill ${
                        task.priority === "high" 
                          ? "bg-destructive/10 text-destructive" 
                          : "bg-accent text-accent-foreground"
                      }`}>
                        {task.priority}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
