import React from 'react';

function EUFooter() {
  return (
    <div className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <img 
            src="https://images.unsplash.com/photo-1527866512907-a35a62a0f6c5?auto=format&fit=crop&w=200"
            alt="EU Flag"
            className="h-24"
          />
          <p className="text-center max-w-2xl">
            This project has been funded with support from the European Commission. 
            This publication reflects the views only of the author, and the Commission 
            cannot be held responsible for any use which may be made of the information contained therein.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EUFooter;