import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card-feature group h-full">
      <!-- Icon Section -->
      <div class="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-brand">
        <span class="material-icons text-white text-3xl">{{service.icon}}</span>
      </div>
      
      <!-- Content -->
      <h3 class="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
        {{service.title}}
      </h3>
      <p class="text-neutral-600 mb-6 leading-relaxed">
        {{service.description}}
      </p>
      
      <!-- Features List -->
      <ul class="space-y-3">
        <li *ngFor="let feature of service.features" 
            class="flex items-center text-neutral-700">
          <div class="w-2 h-2 bg-accent-400 rounded-full mr-3 flex-shrink-0"></div>
          <span class="font-medium">{{feature}}</span>
        </li>
      </ul>
      
      <!-- Learn More Link -->
      <div class="mt-8 pt-6 border-t border-neutral-100">
        <div class="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-300 cursor-pointer">
          <span>Learn More</span>
          <span class="material-icons ml-2 text-lg group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
        </div>
      </div>
    </div>
  `
})
export class ServiceCardComponent {
  @Input() service!: Service;
}