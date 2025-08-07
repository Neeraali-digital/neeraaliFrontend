import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../core/services/navigation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styles: [`
    .active-link {
      color: #ee2555 !important;
    }
    .active-link-mobile {
      color: #ee2555 !important;
      background-color: #fef2f2 !important;
    }
  `],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
         [class.bg-white]="isScrolled"
         [class.shadow-lg]="isScrolled"
         [class.bg-transparent]="!isScrolled">
      <div class="container-custom">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <div class="flex-shrink-0">
            <a routerLink="/" class="text-2xl font-bold" 
               [style.color]="isScrolled ? '#ee2555' : 'white'">
              Neeraali Digital
            </a>
          </div>

          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a *ngFor="let item of navItems" 
                 [routerLink]="item.path"
                 routerLinkActive="active-link"
                 [routerLinkActiveOptions]="{exact: item.path === '/'}"
                 class="px-3 py-2 text-sm font-medium transition-colors duration-300"
                 [style.color]="isScrolled ? '#374151' : 'white'"
                 [style.hover:color]="'#ee2555'">
                {{item.label}}
              </a>
            </div>
          </div>

          <div class="md:hidden">
            <button (click)="toggleMobileMenu()"
                    class="inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300"
                    [style.color]="isScrolled ? '#374151' : 'white'">
              <span class="material-icons">
                {{isMobileMenuOpen ? 'close' : 'menu'}}
              </span>
            </button>
          </div>
        </div>

        <div class="md:hidden" [class.hidden]="!isMobileMenuOpen">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
            <a *ngFor="let item of navItems"
               [routerLink]="item.path"
               routerLinkActive="active-link-mobile"
               [routerLinkActiveOptions]="{exact: item.path === '/'}"
               (click)="closeMobileMenu()"
               class="block px-3 py-2 text-base font-medium text-gray-900 rounded-md transition-colors duration-300"
               style="hover:color: #ee2555; hover:background-color: #fef2f2;">
              {{item.label}}
            </a>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  navItems = this.navigationService.getNavItems();

  constructor(private navigationService: NavigationService) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}