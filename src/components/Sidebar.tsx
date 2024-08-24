import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="border-dashed border-2 border-rose mt-1 text-black w-64 p-4 pt-40">
      <nav>
        <ul className="text-xl">
          <li><a href="/dashboard" className="font-mono block py-3 px-4 rounded hover:bg-neutral-100">Dashboard</a></li>
          <li><a href="/clients" className="font-mono block py-3 px-4 rounded hover:bg-neutral-100">Clients</a></li>
          <li><a href="/articles" className="font-mono block py-3 px-4 rounded hover:bg-neutral-100">Articles</a></li>
          <li><a href="/dette" className="font-mono block py-3 px-4 rounded hover:bg-neutral-100">Dettes</a></li>
          <li><a href="/paiement" className="font-mono block py-3 px-4 rounded hover:bg-neutral-100">Paiements</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
