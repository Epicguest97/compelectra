
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutGrid, 
  Package, 
  FileText, 
  MessageSquare, 
  Bell, 
  User, 
  Settings, 
  ChevronLeft, 
  Menu,
  LogOut,
  Search,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserRole } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: UserRole;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, userRole }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const buyerNavItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutGrid },
    { name: 'Tenders', path: '/dashboard/tenders', icon: FileText },
    { name: 'Messages', path: '/dashboard/messages', icon: MessageSquare },
    { name: 'Notifications', path: '/dashboard/notifications', icon: Bell },
    { name: 'Profile', path: '/dashboard/profile', icon: User },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
  ];

  const sellerNavItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutGrid },
    { name: 'Opportunities', path: '/dashboard/opportunities', icon: Package },
    { name: 'My Bids', path: '/dashboard/bids', icon: FileText },
    { name: 'Messages', path: '/dashboard/messages', icon: MessageSquare },
    { name: 'Notifications', path: '/dashboard/notifications', icon: Bell },
    { name: 'Profile', path: '/dashboard/profile', icon: User },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
  ];

  const navItems = userRole === 'buyer' ? buyerNavItems : sellerNavItems;

  const sidebarVariants = {
    open: { width: '240px', transition: { duration: 0.3, ease: 'easeInOut' } },
    closed: { width: '72px', transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  const avatarVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.1 } },
    closed: { opacity: 0, x: -10, transition: { duration: 0.3 } }
  };

  const textVariants = {
    open: { opacity: 1, x: 0, display: 'block', transition: { duration: 0.3, delay: 0.1 } },
    closed: { opacity: 0, x: -10, transitionEnd: { display: 'none' }, transition: { duration: 0.2 } }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <motion.aside
        className="bg-card border-r border-border h-screen flex flex-col z-20"
        variants={sidebarVariants}
        initial={false}
        animate={sidebarOpen ? 'open' : 'closed'}
      >
        {/* Sidebar Header */}
        <div className="px-4 py-5 flex items-center justify-between border-b border-border h-16">
          <motion.div className="flex items-center" variants={avatarVariants}>
            <Link to="/" className="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {sidebarOpen && 'TenderLink'}
            </Link>
          </motion.div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-full"
          >
            <ChevronLeft className={`h-4 w-4 transition-all duration-300 ${!sidebarOpen && 'rotate-180'}`} />
          </Button>
        </div>

        {/* Nav Items */}
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`group flex items-center py-2 px-3 rounded-md transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground/70 hover:bg-secondary hover:text-foreground'
                }`}
              >
                <item.icon className={`h-5 w-5 ${location.pathname === item.path ? 'text-primary' : 'text-foreground/70 group-hover:text-foreground'}`} />
                <motion.span
                  className="ml-3 font-medium text-sm"
                  variants={textVariants}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-border">
          <Link
            to="/logout"
            className="group flex items-center py-2 px-3 rounded-md text-foreground/70 hover:bg-secondary hover:text-foreground transition-all duration-200"
          >
            <LogOut className="h-5 w-5 text-foreground/70 group-hover:text-foreground" />
            <motion.span
              className="ml-3 font-medium text-sm"
              variants={textVariants}
            >
              Logout
            </motion.span>
          </Link>
          <Link
            to="/help"
            className="group flex items-center mt-2 py-2 px-3 rounded-md text-foreground/70 hover:bg-secondary hover:text-foreground transition-all duration-200"
          >
            <HelpCircle className="h-5 w-5 text-foreground/70 group-hover:text-foreground" />
            <motion.span
              className="ml-3 font-medium text-sm"
              variants={textVariants}
            >
              Help Center
            </motion.span>
          </Link>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="bg-card border-b border-border h-16 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden rounded-full"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="relative ml-4 w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search..."
                className="pl-10 w-full bg-secondary/50 border-0 focus-visible:ring-1 focus-visible:ring-primary/30"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 bg-primary h-2 w-2 rounded-full"></span>
            </Button>
            <div className="flex items-center">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback className="bg-primary/10 text-primary">JD</AvatarFallback>
              </Avatar>
              <div className="ml-3 hidden md:block">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground capitalize">{userRole}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-background">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
