import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../core/services/navigation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-neutral-900 text-white relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, #ee2555 2px, transparent 2px), radial-gradient(circle at 75% 75%, #fde047 2px, transparent 2px); background-size: 60px 60px;"></div>
      </div>
      
      <div class="container-custom section-padding relative z-10">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <!-- Brand Section -->
          <div class="col-span-1 md:col-span-2">
            <div class="mb-6">
              <h3 class="text-3xl font-black mb-2">
                <span class="text-white">Neeraali</span>
                <span class="text-gradient-brand">Digital</span>
              </h3>
              <div class="w-16 h-1 bg-gradient-brand rounded-full"></div>
            </div>
            <p class="text-neutral-300 mb-8 max-w-md text-lg leading-relaxed">
              The world's premier PR and digital marketing agency. We transform brands into 
              industry leaders through strategic storytelling and innovative campaigns.
            </p>
            
            <!-- Social Links -->
            <div class="flex space-x-4">
              <a *ngFor="let social of socialLinks"
                 [href]="social.url"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-brand">
                <span class="material-icons text-lg">{{social.icon}}</span>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul class="space-y-3">
              <li *ngFor="let link of quickLinks">
                <a [routerLink]="link.path" 
                   class="text-neutral-300 hover:text-primary-400 transition-colors duration-300 flex items-center group">
                  <span class="material-icons text-sm mr-2 group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
                  {{link.label}}
                </a>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h4 class="text-xl font-bold mb-6 text-white">Our Expertise</h4>
            <ul class="space-y-3">
              <li *ngFor="let service of services">
                <div class="text-neutral-300 flex items-center">
                  <span class="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                  {{service}}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="mt-16 p-8 bg-gradient-to-r from-primary-500/10 to-accent-300/10 rounded-2xl border border-primary-500/20 text-center">
          <h4 class="text-2xl font-bold text-white mb-4">Ready to Elevate Your Brand?</h4>
          <p class="text-neutral-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can transform your brand story and drive exceptional results.
          </p>
          <a routerLink="/contact" class="btn-accent inline-flex items-center">
            <span class="material-icons mr-2">campaign</span>
            Start Your Journey
          </a>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-neutral-800 mt-12 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-neutral-400 mb-4 md:mb-0">
              © {{currentYear}} Neeraali Digital. All rights reserved. Crafted with excellence.
            </p>
            <div class="flex space-x-6 text-sm">
              <a href="#" class="text-neutral-400 hover:text-primary-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" class="text-neutral-400 hover:text-primary-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" class="text-neutral-400 hover:text-primary-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
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
    'Strategic PR Campaigns',
    'Brand Storytelling',
    'Crisis Management',
    'Media Relations',
    'Digital Marketing',
    'Content Strategy'
  ];
}