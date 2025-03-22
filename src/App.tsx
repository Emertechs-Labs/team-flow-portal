
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { NavBar } from "./components/NavBar";
import { AuthForm } from "./components/AuthForm";

const queryClient = new QueryClient();

const LoginPage = () => (
  <div className="min-h-screen flex flex-col">
    <NavBar />
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="w-full max-w-md glass-card p-8 animate-scale-in animate-once">
        <h1 className="text-2xl font-display font-semibold mb-6 text-center">Welcome back</h1>
        <AuthForm />
      </div>
    </div>
  </div>
);

const RegisterPage = () => (
  <div className="min-h-screen flex flex-col">
    <NavBar />
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="w-full max-w-md glass-card p-8 animate-scale-in animate-once">
        <h1 className="text-2xl font-display font-semibold mb-6 text-center">Create your account</h1>
        <AuthForm />
      </div>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
