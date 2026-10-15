import React, { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import WhatsAppLink from '@/components/WhatsAppLink';
import { site } from '@/config/site';

const menuItems = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Abordagem', id: 'abordagem' },
  { label: 'Atuação', id: 'atuacao' },
  { label: 'Como funciona', id: 'como-funciona' },
  { label: 'Dúvidas', id: 'duvidas' }
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-paper-200 bg-paper">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Name */}
          <a href="#inicio" className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean">
            <img src={site.logoUrl} alt="" width="40" height="40" className="h-10 w-10" />
            <span className="font-heading text-xl font-semibold text-night">
              {site.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-night"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="whitespace-nowrap rounded-full bg-night px-5 text-white hover:bg-night-700">
              <WhatsAppLink origin="menu">
                <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                Agendar consulta
              </WhatsAppLink>
            </Button>
          </nav>

          {/* Mobile Dropdown Menu */}
          <div className="lg:hidden">
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
                <DropdownMenuItem asChild className="cursor-pointer bg-ocean-50 font-medium text-night">
                  <WhatsAppLink origin="menu-mobile">
                    <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                    Agendar consulta
                  </WhatsAppLink>
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
