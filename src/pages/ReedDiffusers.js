import React from 'react';
import { Link } from 'react-router-dom';

export default function ReedDiffusers() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Reed Diffusers</h1>
      <p className="mb-6">Long-lasting fragrance with wooden reeds.</p>

      <div className="p-4 border rounded bg-yellow-50">
        Placeholder: add reed diffuser variants, sizes and prices here.
      </div>

      <div className="mt-6">
        <Link to="/products" className="text-blue-600 hover:underline">← Back to Products</Link>
      </div>
    </div>
  );
}