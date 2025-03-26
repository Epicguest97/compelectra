
export type UserRole = 'buyer' | 'seller';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  profileComplete: boolean;
  createdAt: string;
}

export interface Tender {
  id: string;
  title: string;
  description: string;
  category: string;
  budget: number;
  currency: string;
  deadline: string;
  status: 'draft' | 'open' | 'closed' | 'awarded';
  createdBy: string;
  createdAt: string;
  attachments?: string[];
  requirements?: string[];
  visibility: 'public' | 'private';
  invitedSellers?: string[];
}

export interface Bid {
  id: string;
  tenderId: string;
  sellerId: string;
  amount: number;
  currency: string;
  description: string;
  deliveryTime: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
}

export interface CompanyProfile {
  id: string;
  userId: string;
  name: string;
  description: string;
  industry: string;
  website?: string;
  address?: string;
  phoneNumber?: string;
  logo?: string;
  documents?: string[];
  verificationStatus: 'pending' | 'verified' | 'rejected';
}
