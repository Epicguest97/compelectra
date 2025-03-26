
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PlusCircle, 
  FileText, 
  Clock, 
  CheckCircle, 
  BarChart4, 
  TrendingUp, 
  Users, 
  Calendar 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const BuyerDashboard = () => {
  // Dashboard stats
  const stats = [
    { title: 'Active Tenders', value: '3', icon: FileText, change: '+1 from last month', trend: 'up' },
    { title: 'Pending Responses', value: '12', icon: Clock, change: '-2 from last month', trend: 'down' },
    { title: 'Completed Tenders', value: '28', icon: CheckCircle, change: '+4 from last month', trend: 'up' },
    { title: 'Verified Sellers', value: '156', icon: Users, change: '+21 from last month', trend: 'up' },
  ];

  // Recent tenders
  const recentTenders = [
    {
      id: 'TEN-001',
      title: 'Office Furniture Supply',
      status: 'open',
      deadline: '2023-10-30',
      responses: 8,
    },
    {
      id: 'TEN-002',
      title: 'IT Support Services',
      status: 'open',
      deadline: '2023-11-05',
      responses: 4,
    },
    {
      id: 'TEN-003',
      title: 'Marketing Campaign Materials',
      status: 'draft',
      deadline: '2023-11-15',
      responses: 0,
    },
  ];

  // Upcoming deadlines
  const upcomingDeadlines = [
    {
      id: 'TEN-001',
      title: 'Office Furniture Supply',
      deadline: '2023-10-30',
      daysLeft: 3,
    },
    {
      id: 'TEN-002',
      title: 'IT Support Services',
      deadline: '2023-11-05',
      daysLeft: 9,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Buyer Dashboard</h1>
          <p className="text-muted-foreground">Manage your tenders and track responses from sellers.</p>
        </div>
        <Link to="/dashboard/tenders/create">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Tender
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
                  {stat.trend === 'up' ? (
                    <TrendingUp className="text-green-500 h-3 w-3 mr-1" />
                  ) : (
                    <TrendingUp className="text-red-500 h-3 w-3 mr-1 rotate-180" />
                  )}
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Tenders */}
        <motion.div 
          className="col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Tenders</CardTitle>
                <CardDescription>Your latest tender activities</CardDescription>
              </div>
              <Link to="/dashboard/tenders">
                <Button variant="outline" size="sm">View All</Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {recentTenders.map((tender) => (
                  <div 
                    key={tender.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg bg-secondary/40"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-muted-foreground">{tender.id}</span>
                        <span 
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            tender.status === 'open' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-orange-100 text-orange-800'
                          }`}
                        >
                          {tender.status.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="font-medium mt-1">{tender.title}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          Due: {tender.deadline}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {tender.responses} responses
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-start sm:justify-end gap-2">
                      <Button size="sm" variant="outline">View</Button>
                      <Button size="sm" variant="secondary">Edit</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Deadlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>Tenders closing soon</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline) => (
                  <div key={deadline.id} className="flex items-start gap-3 p-3 rounded-md bg-secondary/40">
                    <div 
                      className={`w-12 h-12 rounded-md flex items-center justify-center ${
                        deadline.daysLeft <= 3 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      <span className="text-lg font-bold">{deadline.daysLeft}</span>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Tender {deadline.id}</p>
                      <h4 className="font-medium">{deadline.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">Due: {deadline.deadline}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Placeholder for chart */}
              <div className="h-48 mt-6 rounded-md bg-secondary/40 flex items-center justify-center">
                <BarChart4 className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
