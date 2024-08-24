import React from 'react';

interface ListBlockProps {
  title: string;
}

const ListBlock: React.FC<ListBlockProps> = ({ title }) => {
  return (
    <div className="border-dashed border-2 bg-white rounded shadow p-4">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="space-y-2">
        {/* Remplacer par les données réelles */}
        <li className="p-2 bg-gray-50 rounded hover:bg-gray-100">Élément 1</li>
        <li className="p-2 bg-gray-50 rounded hover:bg-gray-100">Élément 2</li>
        <li className="p-2 bg-gray-50 rounded hover:bg-gray-100">Élément 3</li>
      </ul>
    </div>
  );
};

export default ListBlock;
