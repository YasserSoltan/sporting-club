import React from 'react';
import Link from 'next/link';
import { Volleyball, Users, Link2, Mail, Phone, MapPin, Shield, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/sports', label: 'Sports', icon: Volleyball },
    { path: '/members', label: 'Members', icon: Users },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-darker-primary to-gray-800 text-white mt-auto border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-lighter-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Volleyball className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  Club Manager
                </h3>
                <p className="text-neutral-primary text-sm mt-1">
                  Sports Management System
                </p>
              </div>
            </Link>
            <p className="text-neutral-primary text-sm leading-relaxed max-w-md">
              Efficiently manage your sports club with our comprehensive platform. 
              Handle members, sports, and subscriptions with modern tools designed for success.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2 pb-2 border-b border-primary/30">
              <Link2 className="w-5 h-5 text-secondary" />
              Quick Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="flex items-center space-x-3 text-neutral-primary hover:text-white transition-all duration-300 group py-2 px-3 rounded-lg hover:bg-white/5"
                  >
                    <link.icon className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2 pb-2 border-b border-primary/30">
              <Mail className="w-5 h-5 text-secondary" />
              Get In Touch
            </h4>
            <div className="space-y-3 text-neutral-primary">
              <div className="flex items-center space-x-3 group py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-300">
                <Mail className="w-4 h-4 text-lighter-primary group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">
                  info@blueribbon.com
                </span>
              </div>
              <div className="flex items-center space-x-3 group py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-300">
                <Phone className="w-4 h-4 text-lighter-primary group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">
                  012345678912
                </span>
              </div>
              <div className="flex items-center space-x-3 group py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-300">
                <MapPin className="w-4 h-4 text-lighter-primary group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">
                  New Cairo, Egypt
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-neutral-primary text-sm">
              <span>&copy; {currentYear} Club Manager.</span>
              <span className="text-secondary">All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="flex items-center space-x-2 text-neutral-primary hover:text-white transition-all duration-300 group"
              >
                <Shield className="w-4 h-4 group-hover:text-secondary transition-colors" />
                <span className="group-hover:underline">Privacy Policy</span>
              </Link>
              <div className="w-px h-4 bg-primary/30" />
              <Link 
                href="/terms" 
                className="flex items-center space-x-2 text-neutral-primary hover:text-white transition-all duration-300 group"
              >
                <FileText className="w-4 h-4 group-hover:text-secondary transition-colors" />
                <span className="group-hover:underline">Terms of Service</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;