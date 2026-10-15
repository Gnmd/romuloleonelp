import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function Header({ onWhatsAppClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Áreas de Atuação', id: 'atuacao' },
    { label: 'Abordagem', id: 'abordagem' },
    { label: 'Agendamento', id: 'agendamento' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Name */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <img 
              src="https://horizons-cdn.hostinger.com/d03722f1-6557-4911-a882-dd0d28308ec4/b35988045bba8004def0a9c355ceb160.png" 
              alt="Logo Dr. Rômulo Leone" 
              className="h-10 w-10" 
            />
            <span className="text-xl font-bold text-blue-700" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Dr. Rômulo Leone
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={onWhatsAppClick}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Phone className="mr-2 h-4 w-4" />
              (19) 99721-0581
            </Button>
          </nav>

          {/* Mobile Dropdown Menu */}
          <div className="md:hidden">
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center gap-2 px-2 py-3 border-b">
                  <img 
                    src="https://horizons-cdn.hostinger.com/d03722f1-6557-4911-a882-dd0d28308ec4/b35988045bba8004def0a9c355ceb160.png" 
                    alt="Logo" 
                    className="h-6 w-6" 
                  />
                  <span className="font-semibold text-blue-700" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Dr. Rômulo Leone
                  </span>
                </div>
                {menuItems.map((item) => (
                  <DropdownMenuItem
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="cursor-pointer"
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={onWhatsAppClick}
                  className="cursor-pointer bg-blue-50 text-blue-700 font-medium"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Agendar (19) 99721-0581
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;