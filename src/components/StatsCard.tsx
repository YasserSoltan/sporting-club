import React from 'react';

interface StatsCardProps {
  title: string;
  value: number;
  description: string;
  icon: string;
  color: 'blue' | 'green' | 'orange' | 'purple';
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatsCard = ({ title, value, description, icon, color, trend }: StatsCardProps) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    purple: 'from-purple-500 to-purple-600',
  };

  const trendColors = {
    positive: 'text-green-400',
    negative: 'text-red-400',
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses[color]} text-white`}>
          <span className="text-2xl">{icon}</span>
        </div>
        {trend && (
          <div className={`text-sm font-semibold ${trendColors[trend.isPositive ? 'positive' : 'negative']}`}>
            {trend.isPositive ? '↗' : '↘'} {trend.value}%
          </div>
        )}
      </div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{value.toLocaleString()}</h3>
      <p className="text-lg font-semibold text-gray-700 mb-1">{title}</p>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export default StatsCard;