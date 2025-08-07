import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../core/services/navigation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-gray-900 text-white">
      <div class="container-custom section-padding">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <h3 class="text-2xl font-bold text-gradient mb-4">Neeraali Digital</h3>
            <p class="text-gray-300 mb-6 max-w-md">
              Revolutionizing digital marketing with innovative PR solutions, 
              creative design, and strategic brand development.
            </p>
            <div class="flex space-x-4">
              <a *ngFor="let social of socialLinks"
                 [href]="social.url"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <span class="material-icons text-sm">{{social.icon}}</span>
              </a>
            </div>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li *ngFor="let link of quickLinks">
                <a [routerLink]="link.path" 
                   class="text-gray-300 hover:text-white transition-colors duration-300">
                  {{link.label}}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">Services</h4>
            <ul class="space-y-2">
              <li *ngFor="let service of services">
                <span class="text-gray-300">{{service}}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-8 pt-8 text-center">
          <p class="text-gray-400">
            © {{currentYear}} Neeraali Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { icon: 'facebook', url: '#' },
    { icon: 'alternate_email', url: '#' },
    { icon: 'link', url: '#' },
    { icon: 'camera_alt', url: '#' }
  ];

  quickLinks = this.navigationService.getNavItems();

  constructor(private navigationService: NavigationService) {}

  services = [
    'Brand Identity',
    'Digital Marketing',
    'Web Solutions',
    'Social Media',
    'Creative Design',
    'Paid Ads'
  ];
}