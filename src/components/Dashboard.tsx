import React from 'react';
import ListBlock from './ListBlock';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4  flex-1 p-6 ">
      <div className="mx-auto grid grid-cols-2 gap-2">
        <ListBlock title="Liste des Clients" />
        <ListBlock title="Liste des Articles" />
      </div>
    </div>
  );
};

export default Dashboard;
