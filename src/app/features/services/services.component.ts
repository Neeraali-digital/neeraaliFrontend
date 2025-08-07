import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent, Service } from '../../shared/components/service-card/service-card.component';
import { AnimationUtil } from '../../shared/utils/animation.util';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  template: `
    <section class="pt-24 pb-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 fade-in">Our Services</h1>
        <p class="text-xl max-w-3xl mx-auto text-primary-100 fade-in">
          Comprehensive digital marketing solutions designed to elevate your brand 
          and drive measurable results across all channels.
        </p>
      </div>
    </section>

    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let service of services; let i = index" 
               class="slide-up"
               [style.animation-delay.ms]="i * 100">
            <app-service-card [service]="service"></app-service-card>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span class="text-gradient">Process</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven methodology that ensures every project delivers exceptional results
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div *ngFor="let step of processSteps; let i = index" 
               class="text-center slide-up"
               [style.animation-delay.ms]="i * 150">
            <div class="relative mb-6">
              <div class="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {{i + 1}}
              </div>
              <div *ngIf="i < processSteps.length - 1" 
                   class="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-8"></div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{step.title}}</h3>
            <p class="text-gray-600">{{step.description}}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-primary-600 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-primary-100">
          Let's discuss how our services can help transform your digital presence
        </p>
        <a href="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
          Start Your Project
        </a>
      </div>
    </section>
  `
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      title: 'Brand Identity',
      description: 'Create a memorable brand that resonates with your target audience and stands out in the market.',
      icon: 'palette',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital strategies that drive traffic, engagement, and conversions.',
      icon: 'campaign',
      features: ['SEO Optimization', 'Content Marketing', 'Email Campaigns', 'Marketing Automation']
    },
    {
      title: 'Web Solutions',
      description: 'Modern, responsive websites that convert visitors into customers.',
      icon: 'web',
      features: ['Responsive Design', 'E-commerce', 'CMS Integration', 'Performance Optimization']
    },
    {
      title: 'Social Media Services',
      description: 'Build and engage your community across all major social platforms.',
      icon: 'share',
      features: ['Content Creation', 'Community Management', 'Social Strategy', 'Influencer Outreach']
    },
    {
      title: 'Creative Design',
      description: 'Eye-catching designs that communicate your message effectively.',
      icon: 'brush',
      features: ['Graphic Design', 'UI/UX Design', 'Print Materials', 'Digital Assets']
    },
    {
      title: 'Paid Ads',
      description: 'Targeted advertising campaigns that maximize your ROI across all platforms.',
      icon: 'ads_click',
      features: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Campaign Optimization']
    }
  ];

  processSteps = [
    {
      title: 'Discovery',
      description: 'We analyze your business, goals, and target audience to create a tailored strategy.'
    },
    {
      title: 'Strategy',
      description: 'Develop a comprehensive plan with clear objectives and measurable outcomes.'
    },
    {
      title: 'Execution',
      description: 'Implement the strategy with precision, creativity, and attention to detail.'
    },
    {
      title: 'Optimization',
      description: 'Continuously monitor and refine campaigns for maximum performance.'
    }
  ];

  ngOnInit(): void {
    this.observeElements();
  }

  private observeElements(): void {
    AnimationUtil.observeElements('.slide-up');
  }
}