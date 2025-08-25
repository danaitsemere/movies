// components/NavBar.tsx

import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white p-4">
      <ul className="flex space-x-6">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">About
          </Link>
        </li>
        <li>
          <Link href="/services">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
