
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { CheckCircle, ChevronRight, LucideShieldCheck, Briefcase, Users, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layout/MainLayout';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

const Index = () => {
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);
  
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const howItWorksInView = useInView(howItWorksRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  
  const featuresAnimation = useAnimation();
  const howItWorksAnimation = useAnimation();
  const testimonialsAnimation = useAnimation();
  const ctaAnimation = useAnimation();

  useEffect(() => {
    if (featuresInView) featuresAnimation.start('visible');
    if (howItWorksInView) howItWorksAnimation.start('visible');
    if (testimonialsInView) testimonialsAnimation.start('visible');
    if (ctaInView) ctaAnimation.start('visible');
  }, [featuresInView, howItWorksInView, testimonialsInView, ctaInView]);

  const features = [
    {
      title: "Secure Private Tenders",
      description: "Create and manage private tenders with complete control over who can view and bid on your projects.",
      icon: LucideShieldCheck
    },
    {
      title: "Efficient Bidding Process",
      description: "Streamlined bidding process helps sellers submit competitive bids quickly and buyers evaluate them efficiently.",
      icon: Briefcase
    },
    {
      title: "Verified Business Network",
      description: "Connect with verified businesses in our trusted network, ensuring quality and reliability.",
      icon: Users
    },
    {
      title: "Comprehensive Analytics",
      description: "Track performance metrics, bid success rates, and market trends to optimize your business decisions.",
      icon: BarChart3
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Register and Create Profile",
      description: "Sign up as a buyer or seller and complete your business profile with all relevant information.",
      forBuyer: "Showcase your company and the types of goods or services you regularly need.",
      forSeller: "Highlight your expertise, capabilities, and the categories you specialize in.",
    },
    {
      number: "02",
      title: "Create or Browse Tenders",
      description: "Engage with the platform based on your role.",
      forBuyer: "Create detailed tender listings with specific requirements, budget, and deadlines.",
      forSeller: "Browse available tenders filtered by category, budget range, or deadline.",
    },
    {
      number: "03",
      title: "Submit or Receive Bids",
      description: "Facilitate the bidding process seamlessly.",
      forBuyer: "Receive and evaluate bids from qualified sellers, ask questions, and request clarifications.",
      forSeller: "Submit competitive bids with detailed proposals, pricing, and delivery timelines.",
    },
    {
      number: "04",
      title: "Award and Complete Projects",
      description: "Finalize deals and build lasting business relationships.",
      forBuyer: "Award the tender to the best bidder and manage the project through completion.",
      forSeller: "Receive tender awards, fulfill requirements, and build your reputation.",
    },
  ];

  const testimonials = [
    {
      quote: "TenderLink has transformed how we source suppliers. The private tendering feature ensures we find the right partners while maintaining confidentiality.",
      name: "Sarah Johnson",
      title: "Procurement Director, TechNova Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "As a boutique service provider, TenderLink has opened doors to opportunities we wouldn't have found otherwise. Their platform is intuitive and powerful.",
      name: "Michael Chen",
      title: "CEO, Optimal Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "The analytics and insights from TenderLink have helped us refine our bidding strategy. We've seen a 40% increase in successful bids since joining.",
      name: "Elena Rodriguez",
      title: "Operations Manager, Global Supply Co.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              Reimagining B2B Tendering
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Connect and Collaborate Through Private Business Tenders
            </motion.h1>
            <motion.p 
              className="text-foreground/70 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              TenderLink enables businesses to create secure private tenders for goods, services, and projects. Find the perfect partners or opportunities that match your expertise.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn How It Works
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="mt-16 relative max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glass-card rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                alt="TenderLink Platform" 
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl opacity-70 -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70 -z-10 transform translate-x-1/3 translate-y-1/3"></div>
      </section>

      {/* Logos Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <p className="text-foreground/50 text-sm font-medium">TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Placeholder logos - would be replaced with actual partner logos */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <div className="h-8 w-24 bg-foreground/20 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            animate={featuresAnimation}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Buyers and Sellers</h2>
            <p className="text-foreground/70 text-lg">
              Our platform provides the tools and features needed to streamline the entire tendering process, from creation to completion.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={featuresAnimation}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="glass-card rounded-xl p-6 hover-scale"
                variants={scaleIn}
              >
                <div className="bg-primary/10 rounded-full p-3 inline-block mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-70 -z-10"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl opacity-70 -z-10"></div>
      </section>

      {/* How It Works Section */}
      <section ref={howItWorksRef} className="py-20 bg-secondary/20 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            animate={howItWorksAnimation}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How TenderLink Works</h2>
            <p className="text-foreground/70 text-lg">
              Our platform makes tendering simple and efficient for both buyers and sellers, with a clear process from start to finish.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-12 lg:space-y-24 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={howItWorksAnimation}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                variants={fadeInUp}
              >
                <div className={`lg:col-span-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <div className="bg-primary/10 rounded-full h-32 w-32 flex items-center justify-center mx-auto">
                      <span className="text-5xl font-bold text-primary">{step.number}</span>
                    </div>
                    <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl opacity-70 -z-10"></div>
                  </div>
                </div>
                <div className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-foreground/70 mb-6">{step.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="glass-card p-4 rounded-lg">
                      <div className="flex items-start mb-2">
                        <div className="bg-primary/10 rounded-full p-1 mr-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <h4 className="font-medium">For Buyers</h4>
                      </div>
                      <p className="text-sm text-foreground/70">{step.forBuyer}</p>
                    </div>
                    
                    <div className="glass-card p-4 rounded-lg">
                      <div className="flex items-start mb-2">
                        <div className="bg-primary/10 rounded-full p-1 mr-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <h4 className="font-medium">For Sellers</h4>
                      </div>
                      <p className="text-sm text-foreground/70">{step.forSeller}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            animate={testimonialsAnimation}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-foreground/70 text-lg">
              Discover how TenderLink has transformed procurement and business relationships for companies around the world.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={testimonialsAnimation}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="glass-card rounded-xl p-8 hover-scale relative"
                variants={scaleIn}
              >
                <div className="mb-6 text-primary/30 text-6xl font-serif absolute top-4 left-4 opacity-30">"</div>
                <p className="text-foreground/80 mb-8 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-70 -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl opacity-70 -z-10"></div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-br from-primary/10 to-secondary/20 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div 
            className="glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
            initial="hidden"
            animate={ctaAnimation}
            variants={fadeInUp}
          >
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm -z-10"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business Tendering?</h2>
            <p className="text-foreground/70 text-lg mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that are already using TenderLink to find the perfect partners and opportunities. Get started today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Create Free Account
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-20"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70 -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
      </section>
    </MainLayout>
  );
};

export default Index;
