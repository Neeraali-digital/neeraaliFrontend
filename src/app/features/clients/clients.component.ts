import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationUtil } from '../../shared/utils/animation.util';

interface Client {
  name: string;
  logo: string;
  industry: string;
  description: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Header Section -->
    <section class="pt-24 pb-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 fade-in">Our Clients</h1>
        <p class="text-xl max-w-3xl mx-auto text-primary-100 fade-in">
          Trusted by leading brands across industries to deliver exceptional digital marketing results
        </p>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div *ngFor="let stat of clientStats" class="slide-up">
            <div class="text-4xl font-bold text-primary-600 mb-2">{{stat.value}}</div>
            <div class="text-gray-600">{{stat.label}}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Logos Grid -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Brands We've <span class="text-gradient">Worked With</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            From startups to Fortune 500 companies, we've helped businesses of all sizes achieve their digital goals
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div *ngFor="let client of clients; let i = index" 
               class="bg-white p-8 rounded-lg shadow-lg card-hover flex items-center justify-center slide-up"
               [style.animation-delay.ms]="i * 100">
            <div class="text-center">
              <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-gray-600">{{client.name.charAt(0)}}</span>
              </div>
              <h3 class="font-semibold text-gray-900 mb-1">{{client.name}}</h3>
              <p class="text-sm text-gray-500">{{client.industry}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies Preview -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Success <span class="text-gradient">Stories</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real clients who trusted us with their digital transformation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let caseStudy of caseStudies; let i = index" 
               class="bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-xl slide-up"
               [style.animation-delay.ms]="i * 150">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold">{{caseStudy.client.charAt(0)}}</span>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">{{caseStudy.client}}</h3>
                <p class="text-sm text-gray-600">{{caseStudy.industry}}</p>
              </div>
            </div>
            <p class="text-gray-700 mb-4">{{caseStudy.description}}</p>
            <div class="grid grid-cols-2 gap-4">
              <div *ngFor="let result of caseStudy.results" class="text-center">
                <div class="text-2xl font-bold text-primary-600">{{result.value}}</div>
                <div class="text-sm text-gray-600">{{result.metric}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-600 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Join Our Success Stories?
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-primary-100">
          Let's create your next digital marketing success story together
        </p>
        <a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
          Start Your Journey
        </a>
      </div>
    </section>
  `
})
export class ClientsComponent implements OnInit {
  clientStats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '95%', label: 'Retention Rate' },
    { value: '150%', label: 'Avg ROI Increase' },
    { value: '24/7', label: 'Support Available' }
  ];

  clients: Client[] = [
    { name: 'TechCorp', logo: '', industry: 'Technology', description: 'Leading software company' },
    { name: 'HealthPlus', logo: '', industry: 'Healthcare', description: 'Medical services provider' },
    { name: 'EcoGreen', logo: '', industry: 'Sustainability', description: 'Environmental solutions' },
    { name: 'FinanceFirst', logo: '', industry: 'Finance', description: 'Financial services' },
    { name: 'EduLearn', logo: '', industry: 'Education', description: 'Online learning platform' },
    { name: 'FoodieHub', logo: '', industry: 'Food & Beverage', description: 'Restaurant chain' },
    { name: 'FashionForward', logo: '', industry: 'Fashion', description: 'Clothing brand' },
    { name: 'TravelEase', logo: '', industry: 'Travel', description: 'Travel booking platform' }
  ];

  caseStudies = [
    {
      client: 'TechCorp Solutions',
      industry: 'Technology',
      description: 'Increased online presence and lead generation through comprehensive digital strategy.',
      results: [
        { value: '+250%', metric: 'Website Traffic' },
        { value: '+180%', metric: 'Lead Generation' }
      ]
    },
    {
      client: 'HealthPlus Clinic',
      industry: 'Healthcare',
      description: 'Enhanced patient engagement and appointment bookings through targeted campaigns.',
      results: [
        { value: '+300%', metric: 'Online Bookings' },
        { value: '+150%', metric: 'Patient Engagement' }
      ]
    },
    {
      client: 'EcoGreen Initiative',
      industry: 'Sustainability',
      description: 'Built brand awareness and community engagement for environmental cause.',
      results: [
        { value: '+400%', metric: 'Social Reach' },
        { value: '+200%', metric: 'Community Growth' }
      ]
    }
  ];

  ngOnInit(): void {
    this.observeElements();
  }

  private observeElements(): void {
    AnimationUtil.observeElements('.slide-up');
  }
}