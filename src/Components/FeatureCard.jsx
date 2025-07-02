
import React from 'react';


const FeatureCard = ({f}) => {
      const Icon = f.icon; 
  return (
    <div className="card w-full bg-base-100 shadow-xl transition hover:shadow-2xl">
      <div className="card-body items-center text-center">
        <div className="bg-primary/10 p-4 rounded-full mb-4">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="card-title text-lg font-semibold">{f.title}</h3>
        <p className="text-sm opacity-80">{f.desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;