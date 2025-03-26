
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { EyeIcon, EyeOffIcon, CheckCircle } from 'lucide-react';
import { UserRole } from '@/types';

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userRole: 'buyer' as UserRole,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: UserRole) => {
    setFormData((prev) => ({ ...prev, userRole: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here we would connect to Supabase for authentication
      toast({
        title: "Please connect Supabase",
        description: "User registration requires a Supabase connection to proceed.",
        variant: "default",
      });
      
      // For the demo, we'll simulate a successful registration after a delay
      setTimeout(() => {
        setIsLoading(false);
        navigate('/dashboard');
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Registration failed",
        description: "Please check your input and try again.",
        variant: "destructive",
      });
    }
  };

  const benefits = {
    buyer: [
      "Create private tenders for your business needs",
      "Access verified sellers and service providers",
      "Manage all your procurement processes in one place",
      "Secure and confidential bidding environment"
    ],
    seller: [
      "Discover new business opportunities",
      "Bid on targeted private tenders matching your expertise",
      "Showcase your capabilities to potential clients",
      "Build a trusted profile with verified credentials"
    ]
  };

  return (
    <MainLayout withFooter={false}>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
        <div className="max-w-4xl w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl filter blur-3xl opacity-50 -z-10"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-xl p-8 shadow-lg border border-white/20"
          >
            <div className="text-center mb-8">
              <Link to="/" className="inline-block">
                <span className="font-bold text-2xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  TenderLink
                </span>
              </Link>
              <h2 className="mt-6 text-2xl font-bold">Create your account</h2>
              <p className="mt-2 text-sm text-foreground/70">
                Join TenderLink to connect with businesses and opportunities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <div className="relative mt-1">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="new-password"
                          required
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={handleChange}
                          className="input-field pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/50 hover:text-foreground"
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-4 w-4" />
                          ) : (
                            <EyeIcon className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      <p className="text-xs text-foreground/70 mt-1">
                        Must be at least 8 characters with at least one number and one symbol
                      </p>
                    </div>
                    
                    <div>
                      <Label htmlFor="userRole" className="block mb-2">I am a</Label>
                      <RadioGroup
                        value={formData.userRole}
                        onValueChange={handleRoleChange}
                        className="grid grid-cols-2 gap-4"
                      >
                        <Label
                          htmlFor="buyer"
                          className={`flex items-center justify-between rounded-md border border-border p-4 cursor-pointer transition-all ${
                            formData.userRole === 'buyer' ? 'bg-primary/10 border-primary/30' : 'hover:bg-secondary'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value="buyer" id="buyer" className="sr-only" />
                            <div>
                              <span className="font-medium block">Buyer</span>
                              <span className="text-sm text-foreground/70">I need to create tenders</span>
                            </div>
                          </div>
                          {formData.userRole === 'buyer' && <CheckCircle className="h-5 w-5 text-primary" />}
                        </Label>
                        
                        <Label
                          htmlFor="seller"
                          className={`flex items-center justify-between rounded-md border border-border p-4 cursor-pointer transition-all ${
                            formData.userRole === 'seller' ? 'bg-primary/10 border-primary/30' : 'hover:bg-secondary'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value="seller" id="seller" className="sr-only" />
                            <div>
                              <span className="font-medium block">Seller</span>
                              <span className="text-sm text-foreground/70">I want to bid on tenders</span>
                            </div>
                          </div>
                          {formData.userRole === 'seller' && <CheckCircle className="h-5 w-5 text-primary" />}
                        </Label>
                      </RadioGroup>
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create account"}
                  </Button>
                  
                  <div className="text-center text-sm text-foreground/70">
                    By signing up, you agree to our{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </div>
                </form>
                
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-card text-foreground/70">Or continue with</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      className="btn-ghost flex justify-center items-center border border-border"
                    >
                      <span>Google</span>
                    </button>
                    <button
                      type="button"
                      className="btn-ghost flex justify-center items-center border border-border"
                    >
                      <span>Microsoft</span>
                    </button>
                  </div>
                </div>
                
                <div className="mt-8 text-center text-sm">
                  <span className="text-foreground/70">Already have an account?</span>
                  <Link to="/login" className="ml-1 font-medium text-primary hover:underline">
                    Sign in
                  </Link>
                </div>
              </div>
              
              <div className="md:col-span-2 bg-secondary/30 rounded-lg p-6">
                <h3 className="font-medium mb-4">Benefits for {formData.userRole === 'buyer' ? 'Buyers' : 'Sellers'}</h3>
                <ul className="space-y-3">
                  {benefits[formData.userRole].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
