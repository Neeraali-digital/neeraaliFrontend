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
    <div class="bg-white rounded-xl shadow-lg p-6 card-hover h-full">
      <div class="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-4">
        <span class="material-icons text-primary-600 text-2xl">{{service.icon}}</span>
      </div>
      
      <h3 class="text-xl font-bold text-gray-900 mb-3">{{service.title}}</h3>
      <p class="text-gray-600 mb-4">{{service.description}}</p>
      
      <ul class="space-y-2">
        <li *ngFor="let feature of service.features" 
            class="flex items-center text-sm text-gray-700">
          <span class="material-icons text-primary-500 text-sm mr-2">check_circle</span>
          {{feature}}
        </li>
      </ul>
    </div>
  `
})
export class ServiceCardComponent {
  @Input() service!: Service;
}