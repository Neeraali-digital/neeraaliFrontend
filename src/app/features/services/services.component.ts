import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent, Service } from '../../shared/components/service-card/service-card.component';
import { AnimationUtil } from '../../shared/utils/animation.util';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  template: `
    <!-- Hero Section -->
    <section class="pt-28 pb-20 bg-gradient-light relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-20 left-10 w-20 h-20 bg-primary-500/10 rounded-full animate-float"></div>
      <div class="absolute bottom-20 right-16 w-16 h-16 bg-accent-300/10 rounded-full animate-float" style="animation-delay: -2s;"></div>
      
      <div class="container-custom text-center relative z-10">
        <div class="mb-8">
          <span class="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase bg-primary-50 text-primary-600 border border-primary-200">
            <span class="material-icons text-lg mr-2">star</span>
            PREMIUM PR SERVICES
          </span>
        </div>
        <h1 class="text-5xl md:text-7xl font-black mb-8 leading-tight animate-fade-in-up">
          <span class="block text-neutral-900">ELEVATE YOUR</span>
          <span class="block text-gradient-brand">BRAND STORY</span>
        </h1>
        <p class="text-xl md:text-2xl max-w-4xl mx-auto text-neutral-700 leading-relaxed animate-fade-in-up">
          World-class PR and digital marketing solutions that transform brands into 
          <span class="text-primary-600 font-bold">industry leaders</span> through strategic storytelling.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Our <span class="text-gradient-brand">Expertise</span>
          </h2>
          <p class="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive PR and digital marketing services designed to amplify your brand's voice
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let service of services; let i = index" 
               class="animate-fade-in-up"
               [style.animation-delay.ms]="i * 100">
            <app-service-card [service]="service"></app-service-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section-padding bg-section-light">
      <div class="container-custom">
        <div class="text-center mb-16">
          <div class="mb-6">
            <span class="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase bg-accent-50 text-accent-700 border border-accent-200">
              <span class="material-icons text-lg mr-2">timeline</span>
              OUR METHODOLOGY
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Proven <span class="text-gradient-brand">Process</span>
          </h2>
          <p class="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            A strategic methodology that ensures every campaign delivers exceptional results and measurable impact
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div *ngFor="let step of processSteps; let i = index" 
               class="text-center animate-fade-in-up"
               [style.animation-delay.ms]="i * 150">
            <div class="relative mb-8">
              <div class="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-brand">
                {{i + 1}}
              </div>
              <div *ngIf="i < processSteps.length - 1" 
                   class="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-gradient-to-r from-primary-200 to-accent-200 transform translate-x-10 rounded-full"></div>
            </div>
            <h3 class="text-xl font-bold text-neutral-900 mb-4">{{step.title}}</h3>
            <p class="text-neutral-600 leading-relaxed">{{step.description}}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-brand text-white relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 30% 70%, white 2px, transparent 2px); background-size: 40px 40px;"></div>
      </div>
      
      <div class="container-custom text-center relative z-10">
        <div class="animate-fade-in-up">
          <div class="mb-8">
            <span class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-bold tracking-wider uppercase">
              <span class="material-icons text-lg mr-2">rocket_launch</span>
              READY TO DOMINATE?
            </span>
          </div>
          <h2 class="text-4xl md:text-6xl font-black mb-8 leading-tight">
            <span class="block">Ready to Transform</span>
            <span class="block text-accent-300">Your Brand?</span>
          </h2>
          <p class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's craft a legendary story that sets your brand apart from the competition
          </p>
          <a routerLink="/contact" class="btn-accent inline-flex items-center group">
            <span class="material-icons mr-2 group-hover:rotate-12 transition-transform duration-300">campaign</span>
            Start Your Campaign
          </a>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      title: 'Strategic PR Campaigns',
      description: 'Comprehensive public relations strategies that build brand authority and drive meaningful engagement.',
      icon: 'campaign',
      features: ['Media Relations', 'Press Releases', 'Thought Leadership', 'Brand Positioning']
    },
    {
      title: 'Crisis Management',
      description: 'Expert crisis communication strategies that protect and restore your brand reputation.',
      icon: 'shield',
      features: ['Crisis Planning', 'Rapid Response', 'Reputation Recovery', 'Stakeholder Communication']
    },
    {
      title: 'Brand Storytelling',
      description: 'Compelling narratives that connect with audiences and differentiate your brand in the market.',
      icon: 'auto_stories',
      features: ['Brand Narrative', 'Content Strategy', 'Visual Storytelling', 'Message Architecture']
    },
    {
      title: 'Media Relations',
      description: 'Strategic media outreach that secures high-impact coverage and builds industry relationships.',
      icon: 'newspaper',
      features: ['Press Outreach', 'Media Training', 'Interview Coordination', 'Relationship Building']
    },
    {
      title: 'Digital PR',
      description: 'Modern PR strategies that leverage digital channels for maximum reach and engagement.',
      icon: 'trending_up',
      features: ['Influencer Relations', 'Social Media PR', 'Online Reputation', 'Digital Campaigns']
    },
    {
      title: 'Executive Communications',
      description: 'Personal branding and thought leadership programs for C-suite executives and industry leaders.',
      icon: 'person',
      features: ['Executive Positioning', 'Speaking Opportunities', 'Thought Leadership', 'Personal Branding']
    }
  ];

  processSteps = [
    {
      title: 'Strategic Analysis',
      description: 'Deep dive into your brand, market position, and competitive landscape to identify opportunities.'
    },
    {
      title: 'Campaign Design',
      description: 'Craft compelling narratives and strategic messaging that resonates with your target audience.'
    },
    {
      title: 'Media Execution',
      description: 'Deploy multi-channel campaigns with precision timing and expert relationship management.'
    },
    {
      title: 'Impact Measurement',
      description: 'Track, analyze, and optimize campaign performance for maximum ROI and brand impact.'
    }
  ];

  ngOnInit(): void {
    this.observeElements();
  }

  private observeElements(): void {
    AnimationUtil.observeElements('.slide-up');
  }
}