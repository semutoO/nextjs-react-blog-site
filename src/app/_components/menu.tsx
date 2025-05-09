'use client'

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ThemeSwitcher } from "./theme-switcher";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Add a spacer div to prevent content from jumping when the menu becomes fixed */}
      <div className="h-20"></div>
      
      {/* Fixed navigation bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-200 dark:bg-slate-600 shadow-md rounded-b-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex space-x-24 items-center">
            <Link href="/" className="text-xl font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              Home
            </Link>                    

            {/* Blog dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                Blog
                <svg className={`w-4 h-4 ml-1 transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-200`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              
              {/* Dropdown menu with transition */}
              <div 
                className={`absolute z-10 mt-2 w-48 bg-gray-200 rounded-md shadow-lg dark:bg-gray-600 transform transition-all duration-200 ease-in-out ${
                  isOpen 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="blog-menu">
                <div className="py-1" role="none">
                  <Link 
                    href="/posts/categories/technology"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    role="menuitem"
                    onClick={() => setIsOpen(false)}>
                    Technology
                  </Link>
                  <Link 
                    href="/posts/categories/gaming" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    role="menuitem"
                    onClick={() => setIsOpen(false)}>
                    Gaming
                  </Link>
                  <Link 
                    href="/posts/categories/cooking" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    role="menuitem"
                    onClick={() => setIsOpen(false)}>
                    Cooking
                  </Link>
                  <Link 
                    href="/" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    role="menuitem"
                    onClick={() => setIsOpen(false)}>
                    All Posts
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200">
              About
            </Link>
            <ThemeSwitcher />
          </div>          
        </div>        
      </nav>
    </>
  );
};

export default Menu;
