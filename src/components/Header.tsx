import React from 'react';

const Header: React.FC = () => {
  return (
    <header className=" border-dashed border-2 border-rose mt-2 text-black p-4 flex justify-between items-center">
      <h1 className=" text-2xl">Boutique App</h1>
      <nav>
        <ul className=" flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/profile" className="hover:underline">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
