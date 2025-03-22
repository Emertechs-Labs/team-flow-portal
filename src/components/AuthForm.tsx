
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

interface AuthFormProps {
  onSuccess?: () => void;
}

export function AuthForm({ onSuccess }: AuthFormProps) {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Successfully logged in");
      if (onSuccess) onSuccess();
    }, 1000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Account created successfully");
      if (onSuccess) onSuccess();
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login" className="animate-fade-in animate-once">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="you@company.com" 
                className="input-clean"
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                className="input-clean" 
                required
              />
            </div>
            
            <Button type="submit" className="w-full h-12" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </TabsContent>
        
        <TabsContent value="register" className="animate-fade-in animate-once">
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="John Doe" 
                className="input-clean"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="register-email">Email</Label>
              <Input 
                id="register-email" 
                type="email" 
                placeholder="you@company.com" 
                className="input-clean"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="register-password">Password</Label>
              <Input 
                id="register-password" 
                type="password" 
                placeholder="••••••••" 
                className="input-clean"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input 
                id="confirm-password" 
                type="password" 
                placeholder="••••••••" 
                className="input-clean"
                required
              />
            </div>
            
            <Button type="submit" className="w-full h-12" disabled={loading}>
              {loading ? "Creating account..." : "Create account"}
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}
