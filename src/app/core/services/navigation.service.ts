import { Injectable } from '@angular/core';

export interface NavItem {
  label: string;
  path: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private readonly navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Clients', path: '/clients' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Contact', path: '/contact' }
  ];

  getNavItems(): NavItem[] {
    return this.navItems;
  }
}