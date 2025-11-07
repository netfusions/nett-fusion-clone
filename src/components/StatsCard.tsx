import { ReactNode } from 'react';

interface StatsCardProps {
  icon: ReactNode;
  number: string;
  label: string;
  position: string;
  delay?: string;
}

const StatsCard = ({ icon, number, label, position, delay = "0s" }: StatsCardProps) => {
  return (
    <div 
      className={`stats-badge ${position} animate-scale-in float`}
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-r from-secondary to-primary rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <div>
          <div className="text-2xl font-bold text-foreground">{number}</div>
          <div className="text-xs text-muted-foreground">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;