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
      position: relative;
    }
    .active-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(135deg, #ee2555, #fde047);
      border-radius: 2px;
    }
    .active-link-mobile {
      color: #ee2555 !important;
      background: linear-gradient(135deg, #fef2f2, #fffbeb) !important;
      border-left: 4px solid #ee2555;
    }
    .nav-link {
      position: relative;
      overflow: hidden;
    }
    .nav-link::before {
      content: '';
      position: absolute;
      bottom: -4px;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(135deg, #ee2555, #fde047);
      transition: left 0.3s ease;
      border-radius: 2px;
    }
    .nav-link:hover::before {
      left: 0;
    }
    .glassmorphism {
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .glassmorphism-dark {
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      background: rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(238, 37, 85, 0.3);
    }
  `],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
         [class.glassmorphism]="isScrolled"
         [class.shadow-2xl]="isScrolled"
         [class.bg-transparent]="!isScrolled"
         [style.background]="isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'">
      <div class="container-custom">
        <div class="flex items-center justify-between h-20 lg:h-24">
          <div class="flex-shrink-0">
            <a routerLink="/" class="text-3xl font-black transition-all duration-300 transform hover:scale-105 relative group" 
               [style.color]="isScrolled ? '#ee2555' : 'white'">
              <span class="bg-gradient-to-r from-current to-current bg-clip-text">Neeraali</span>
              <span class="ml-2 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Digital</span>
              <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>

          <div class="hidden md:block">
            <div class="ml-10 flex items-center space-x-8">
              <a *ngFor="let item of navItems" 
                 [routerLink]="item.path"
                 routerLinkActive="active-link"
                 [routerLinkActiveOptions]="{exact: item.path === '/'}"
                 class="nav-link px-4 py-3 text-sm font-bold transition-all duration-300 transform hover:scale-105 rounded-lg"
                 [style.color]="isScrolled ? '#374151' : 'white'"
                 [style.background]="isScrolled ? 'transparent' : 'rgba(255, 255, 255, 0.1)'"
                 style="hover:color: #ee2555; hover:background: rgba(238, 37, 85, 0.1);">
                {{item.label}}
              </a>
              <a routerLink="/contact" 
                 class="ml-4 px-6 py-3 rounded-full font-black text-sm transition-all duration-300 transform hover:scale-110 shadow-lg"
                 [style.background]="isScrolled ? 'linear-gradient(135deg, #ee2555, #fde047)' : 'linear-gradient(135deg, #fde047, #ee2555)'"
                 [style.color]="'black'">
                GET STARTED
              </a>
            </div>
          </div>

          <div class="md:hidden">
            <button (click)="toggleMobileMenu()"
                    class="inline-flex items-center justify-center p-3 rounded-xl transition-all duration-300 transform hover:scale-110"
                    [style.color]="isScrolled ? '#374151' : 'white'"
                    [style.background]="isScrolled ? 'rgba(238, 37, 85, 0.1)' : 'rgba(255, 255, 255, 0.1)'">
              <span class="material-icons text-xl transition-transform duration-300"
                    [style.transform]="isMobileMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'">
                {{isMobileMenuOpen ? 'close' : 'menu'}}
              </span>
            </button>
          </div>
        </div>

        <div class="md:hidden transition-all duration-300" [class.hidden]="!isMobileMenuOpen">
          <div class="glassmorphism-dark px-4 pt-4 pb-6 space-y-2 shadow-2xl rounded-2xl mt-4 border" style="border-color: rgba(238, 37, 85, 0.3);">
            <a *ngFor="let item of navItems"
               [routerLink]="item.path"
               routerLinkActive="active-link-mobile"
               [routerLinkActiveOptions]="{exact: item.path === '/'}"
               (click)="closeMobileMenu()"
               class="block px-4 py-3 text-base font-bold text-white rounded-xl transition-all duration-300 transform hover:scale-105"
               style="hover:color: #ee2555; hover:background: linear-gradient(135deg, rgba(238, 37, 85, 0.2), rgba(253, 224, 71, 0.2));">
              {{item.label}}
            </a>
            <a routerLink="/contact" 
               (click)="closeMobileMenu()"
               class="block px-4 py-3 mt-4 rounded-xl font-black text-center transition-all duration-300 transform hover:scale-105"
               style="background: linear-gradient(135deg, #ee2555, #fde047); color: black;">
              GET STARTED
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