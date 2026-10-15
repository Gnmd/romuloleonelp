import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { site } from '@/config/site';

const menuItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Áreas de Atuação', id: 'atuacao' },
  { label: 'Abordagem', id: 'abordagem' },
  { label: 'Agendamento', id: 'agendamento' }
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Name */}
          <a href="#inicio" className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            <img src={site.logoUrl} alt="" width="40" height="40" className="h-10 w-10" />
            <span className="font-heading text-xl font-bold text-blue-700">
              {site.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </Button>
          </nav>

          {/* Mobile Dropdown Menu */}
          <div className="md:hidden">
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}>
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {menuItems.map((item) => (
                  <DropdownMenuItem key={item.id} asChild className="cursor-pointer">
                    <a href={`#${item.id}`}>{item.label}</a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="cursor-pointer bg-blue-50 text-blue-700 font-medium">
                  <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                    Agendar {site.phoneDisplay}
                  </a>
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
