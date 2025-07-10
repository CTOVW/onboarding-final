import React, { useState } from 'react';
import { 
  Search, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Bell, 
  Settings,
  Building2,
  TrendingUp,
  Globe,
  Filter,
  Plus,
  Star,
  MapPin,
  DollarSign,
  Calendar,
  Eye,
  Heart,
  Share2,
  Brain
} from 'lucide-react';

interface MainPlatformProps {
  profileCompleted: boolean;
  onReturnToOnboarding: () => void;
}

const MainPlatform: React.FC<MainPlatformProps> = ({ profileCompleted, onReturnToOnboarding }) => {
  const [activeTab, setActiveTab] = useState('social');

  const navigationItems = [
    { id: 'social', label: 'Social Network', icon: Users },
    { id: 'trading', label: 'Equity Trading Marketplace', icon: TrendingUp },
    { id: 'intelligence', label: 'Market Intelligence', icon: Brain },
    { id: 'experts', label: 'Expert Marketplace', icon: MessageSquare }
  ];

  const opportunities = [
    {
      id: 1,
      type: 'Startup',
      title: 'FinTech Revolution',
      company: 'PayMENA',
      location: 'Dubai, UAE',
      stage: 'Series A',
      funding: '$2.5M',
      industry: 'Fintech',
      description: 'Revolutionary payment platform for MENA markets with AI-powered fraud detection.',
      tags: ['Fintech', 'AI', 'Payments'],
      match: 95,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      type: 'Investor',
      title: 'MENA Growth Fund',
      company: 'Venture Partners',
      location: 'Riyadh, Saudi Arabia',
      stage: 'Seed to Series B',
      funding: '$50M Fund',
      industry: 'Multi-sector',
      description: 'Leading VC fund focusing on high-growth startups across MENA region.',
      tags: ['VC', 'Growth', 'Multi-sector'],
      match: 88,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      type: 'Mentor',
      title: 'E-commerce Expert',
      company: 'Former Souq.com VP',
      location: 'Cairo, Egypt',
      stage: 'All stages',
      funding: 'Advisory',
      industry: 'E-commerce',
      description: 'Former VP at Souq.com with 15+ years experience in MENA e-commerce.',
      tags: ['E-commerce', 'Scaling', 'Strategy'],
      match: 92,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const renderDiscoverTab = () => (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search opportunities, companies, or people..."
              className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
          </div>
          <button className="flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {opportunities.map((opportunity) => (
          <div key={opportunity.id} className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-purple-500/50 transition-all group overflow-hidden">
            <div className="relative">
              <img 
                src={opportunity.image} 
                alt={opportunity.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {opportunity.type}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  {opportunity.match}% Match
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{opportunity.title}</h3>
                  <p className="text-purple-300 text-sm">{opportunity.company}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{opportunity.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4" />
                  <span>{opportunity.funding}</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {opportunity.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {opportunity.tags.map((tag, index) => (
                  <span key={index} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                    <Heart className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                    <Share2 className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
                  Connect
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTradingMarketplaceTab = () => (
    <div className="text-center py-20">
      <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-white mb-2">Equity Trading Marketplace Coming Soon</h3>
      <p className="text-gray-400">Trade equity stakes and discover investment opportunities here.</p>
    </div>
  );

  const renderMarketIntelligenceTab = () => (
    <div className="text-center py-20">
      <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-white mb-2">Market Intelligence Coming Soon</h3>
      <p className="text-gray-400">Access market insights, trends, and analytics here.</p>
    </div>
  );

  const renderExpertMarketplaceTab = () => (
    <div className="text-center py-20">
      <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-white mb-2">Expert Marketplace Coming Soon</h3>
      <p className="text-gray-400">Connect with industry experts and advisors here.</p>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'social':
        return renderSocialNetworkTab();
      case 'trading':
        return renderTradingMarketplaceTab();
      case 'intelligence':
        return renderMarketIntelligenceTab();
      case 'experts':
        return renderExpertMarketplaceTab();
      default:
        return renderSocialNetworkTab();
    }
  };

  const renderSocialNetworkTab = () => (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search opportunities, companies, or people..."
              className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
          </div>
          <button className="flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {opportunities.map((opportunity) => (
          <div key={opportunity.id} className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-purple-500/50 transition-all group overflow-hidden">
            <div className="relative">
              <img 
                src={opportunity.image} 
                alt={opportunity.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {opportunity.type}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  {opportunity.match}% Match
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{opportunity.title}</h3>
                  <p className="text-purple-300 text-sm">{opportunity.company}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{opportunity.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4" />
                  <span>{opportunity.funding}</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {opportunity.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {opportunity.tags.map((tag, index) => (
                  <span key={index} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                    <Heart className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                    <Share2 className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
                  Connect
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="px-6 py-4 border-b border-white/20 bg-slate-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">VentureHub</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === item.id
                    ? 'bg-purple-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            {!profileCompleted && (
              <button
                onClick={onReturnToOnboarding}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Complete Profile
              </button>
            )}
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">U</span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden border-b border-white/20 bg-slate-900/50 backdrop-blur-lg">
        <div className="flex">
          {navigationItems.map((item) => (
            <button
              onClick={() => setActiveTab(item.id)}
              className={`flex-1 flex flex-col items-center space-y-1 py-3 transition-all ${
                activeTab === item.id
                  ? 'text-purple-400 border-b-2 border-purple-400'
                  : 'text-gray-400'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Tab Content */}
        {renderTabContent()}
      </main>
    </div>
  );
};

export default MainPlatform;