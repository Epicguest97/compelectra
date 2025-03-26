
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  FileText, 
  TrendingUp, 
  BarChart4, 
  Calendar, 
  CheckCircle2, 
  XCircle, 
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const SellerDashboard = () => {
  // Dashboard stats
  const stats = [
    { title: 'Available Opportunities', value: '14', icon: FileText, change: '+3 from last month', trend: 'up' },
    { title: 'Active Bids', value: '7', icon: Clock, change: '+2 from last month', trend: 'up' },
    { title: 'Won Tenders', value: '12', icon: CheckCircle2, change: '+1 from last month', trend: 'up' },
    { title: 'Success Rate', value: '68%', icon: TrendingUp, change: '+5% from last month', trend: 'up' },
  ];

  // Recent bids
  const recentBids = [
    {
      id: 'BID-001',
      tenderId: 'TEN-132',
      tenderTitle: 'Office Furniture Supply',
      amount: '$12,500',
      status: 'pending',
      submittedDate: '2023-10-20',
    },
    {
      id: 'BID-002',
      tenderId: 'TEN-129',
      tenderTitle: 'IT Support Services',
      amount: '$4,800/month',
      status: 'accepted',
      submittedDate: '2023-10-15',
    },
    {
      id: 'BID-003',
      tenderId: 'TEN-127',
      tenderTitle: 'Marketing Campaign Materials',
      amount: '$8,300',
      status: 'rejected',
      submittedDate: '2023-10-10',
    },
  ];

  // Relevant opportunities
  const relevantOpportunities = [
    {
      id: 'TEN-142',
      title: 'Web Application Development',
      category: 'IT Services',
      budget: '$15,000-$20,000',
      deadline: '2023-11-10',
      daysLeft: 15,
      matchScore: 98,
    },
    {
      id: 'TEN-138',
      title: 'E-commerce Platform Upgrade',
      category: 'IT Services',
      budget: '$8,000-$12,000',
      deadline: '2023-11-05',
      daysLeft: 10,
      matchScore: 92,
    },
    {
      id: 'TEN-135',
      title: 'Mobile App Development',
      category: 'IT Services',
      budget: '$20,000-$30,000',
      deadline: '2023-11-20',
      daysLeft: 25,
      matchScore: 87,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Seller Dashboard</h1>
          <p className="text-muted-foreground">Find opportunities and manage your bids.</p>
        </div>
        <Link to="/dashboard/opportunities">
          <Button>
            <Search className="mr-2 h-4 w-4" />
            Find Opportunities
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <Card className="hover-scale">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingUp className="text-green-500 h-3 w-3 mr-1" />
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Bids */}
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Bids</CardTitle>
                <CardDescription>Your recent bidding activity</CardDescription>
              </div>
              <Link to="/dashboard/bids">
                <Button variant="outline" size="sm">View All</Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {recentBids.map((bid) => (
                  <div 
                    key={bid.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg bg-secondary/40"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-muted-foreground">{bid.tenderId}</span>
                        <span 
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            bid.status === 'pending' 
                              ? 'bg-amber-100 text-amber-800' 
                              : bid.status === 'accepted'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {bid.status.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="font-medium mt-1">{bid.tenderTitle}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-muted-foreground">Bid amount: {bid.amount}</span>
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          Submitted: {bid.submittedDate}
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-start sm:justify-end gap-2">
                      <Button size="sm" variant="outline">View</Button>
                      {bid.status === 'pending' && (
                        <Button size="sm" variant="secondary">Edit</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Performance Chart Placeholder */}
              <div className="mt-6 p-4 rounded-lg bg-secondary/40">
                <h3 className="font-medium mb-3">Bid Performance</h3>
                <div className="h-48 rounded-md bg-secondary/60 flex items-center justify-center">
                  <BarChart4 className="h-8 w-8 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Relevant Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Opportunities For You</CardTitle>
              <CardDescription>Matched to your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {relevantOpportunities.map((opportunity) => (
                  <div 
                    key={opportunity.id} 
                    className="p-3 rounded-md bg-secondary/40 hover:bg-secondary/60 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">{opportunity.title}</h4>
                      <div className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
                        {opportunity.matchScore}% match
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{opportunity.category}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs">{opportunity.budget}</span>
                      <span className="text-xs flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {opportunity.daysLeft} days left
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-3">View Details</Button>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link to="/dashboard/opportunities">
                  <Button variant="ghost" size="sm" className="w-full">
                    View All Opportunities
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SellerDashboard;
