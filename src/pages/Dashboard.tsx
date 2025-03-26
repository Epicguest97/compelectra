
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import DashboardLayout from '@/components/layout/DashboardLayout';
import BuyerDashboard from './dashboard/BuyerDashboard';
import SellerDashboard from './dashboard/SellerDashboard';
import { UserRole } from '@/types';

const Dashboard = () => {
  const { toast } = useToast();
  // In a real app, this would come from authentication context
  const [userRole, setUserRole] = useState<UserRole>('buyer');

  // Function to toggle between buyer and seller dashboards (for demo purposes)
  const toggleRole = () => {
    const newRole = userRole === 'buyer' ? 'seller' : 'buyer';
    setUserRole(newRole);
    toast({
      title: `Switched to ${newRole} view`,
      description: "In a real app, this would be determined by your account type",
    });
  };

  return (
    <DashboardLayout userRole={userRole}>
      <div className="mb-4 flex justify-end">
        <button 
          onClick={toggleRole}
          className="text-xs text-primary hover:underline"
        >
          [Demo] Switch to {userRole === 'buyer' ? 'Seller' : 'Buyer'} view
        </button>
      </div>
      {userRole === 'buyer' ? <BuyerDashboard /> : <SellerDashboard />}
    </DashboardLayout>
  );
};

export default Dashboard;
