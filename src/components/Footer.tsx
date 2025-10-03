// components/Footer.jsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/sports', label: 'Sports' },
    { path: '/members', label: 'Members' },
    { path: '/subscriptions', label: 'Subscriptions' },
  ];

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
              <div className="bg-blue-600 p-2 rounded-lg">
                <span className="text-xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold">Sports Club System</h3>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Manage your club&#39;s sports, members, and subscriptions with our easy-to-use platform.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-gray-600 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>→</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-gray-600 pb-2">
              Contact
            </h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>info@sportsclub.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>123 Sports Ave, City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Sports Club System. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;