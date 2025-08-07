import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimationUtil } from '../../shared/utils/animation.util';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  currentText = 'Boosting ROI by 300%';
  textIndex = 0;
  
  dynamicTexts = [
    'Boosting ROI by 300%',
    'Growing brands globally',
    'Creating viral campaigns',
    'Driving real results',
    'Building digital empires'
  ];
  
  animatedValues: number[] = [];
  
  quickStats = [
    { value: '300%', numericValue: 300, label: 'ROI Increase' },
    { value: '24/7', numericValue: 24, label: 'Support Hours' },
    { value: '50+', numericValue: 50, label: 'Countries' },
    { value: '99%', numericValue: 99, label: 'Success Rate' }
  ];

  stats = [
    { value: '500+', numericValue: 500, label: 'Happy Clients' },
    { value: '1000+', numericValue: 1000, label: 'Projects Done' },
    { value: '50+', numericValue: 50, label: 'Team Members' },
    { value: '5+', numericValue: 5, label: 'Years Experience' }
  ];

  clients = [
    {
      name: 'Microsoft',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png'
    },
    {
      name: 'Google',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png'
    },
    {
      name: 'Amazon',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png'
    },
    {
      name: 'Apple',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png'
    },
    {
      name: 'Netflix',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png'
    },
    {
      name: 'Spotify',
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Spotify-Logo.png'
    }
  ];

  clientStories = [
    {
      company: 'TechCorp Solutions',
      industry: 'Technology',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      result: '+250%',
      numericResult: 250,
      metric: 'Lead Generation',
      description: 'Increased qualified leads through targeted social media campaigns and SEO optimization.'
    },
    {
      company: 'GreenLife Organics',
      industry: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      result: '+180%',
      numericResult: 180,
      metric: 'Online Sales',
      description: 'Boosted e-commerce revenue with conversion-focused website redesign and PPC campaigns.'
    },
    {
      company: 'Urban Fitness',
      industry: 'Health & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      result: '+320%',
      numericResult: 320,
      metric: 'Member Signups',
      description: 'Grew gym membership through local SEO, social media marketing, and referral programs.'
    }
  ];

  features = [
    {
      icon: 'trending_up',
      title: 'Growth Focused',
      description: 'Strategies that scale with your business'
    },
    {
      icon: 'speed',
      title: 'Fast Results',
      description: 'See improvements in weeks, not months'
    },
    {
      icon: 'analytics',
      title: 'Data Driven',
      description: 'Every decision backed by analytics'
    },
    {
      icon: 'support_agent',
      title: '24/7 Support',
      description: 'Always here when you need us'
    }
  ];

  ngOnInit(): void {
    this.observeElements();
    this.startTextRotation();
    this.initializeAnimatedValues();
    this.startCounterAnimations();
  }
  
  initializeAnimatedValues(): void {
    // Initialize all animated values to 0
    this.animatedValues = new Array(20).fill(0);
  }
  
  startCounterAnimations(): void {
    setTimeout(() => {
      this.animateCounters();
    }, 1000);
  }
  
  animateCounters(): void {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    
    // Animate quick stats
    this.quickStats.forEach((stat, index) => {
      this.animateValue(index, stat.numericValue, stepDuration, steps);
    });
    
    // Animate main stats
    this.stats.forEach((stat, index) => {
      this.animateValue(index + 4, stat.numericValue, stepDuration, steps);
    });
    
    // Animate client story results
    this.clientStories.forEach((story, index) => {
      this.animateValue(index + 8, story.numericResult, stepDuration, steps);
    });
  }
  
  animateValue(index: number, targetValue: number, stepDuration: number, totalSteps: number): void {
    let currentStep = 0;
    const increment = targetValue / totalSteps;
    
    const timer = setInterval(() => {
      currentStep++;
      this.animatedValues[index] = Math.min(Math.round(increment * currentStep), targetValue);
      
      if (currentStep >= totalSteps) {
        clearInterval(timer);
        this.animatedValues[index] = targetValue;
      }
    }, stepDuration);
  }
  
  getAnimatedValue(targetValue: number, index: number): string {
    const animatedValue = this.animatedValues[index] || 0;
    
    // Format based on the target value
    if (targetValue >= 1000) {
      return animatedValue >= 1000 ? `${Math.round(animatedValue / 100) / 10}k+` : `${animatedValue}+`;
    } else if (targetValue >= 100) {
      return `${animatedValue}+`;
    } else {
      return `${animatedValue}`;
    }
  }
  
  startTextRotation(): void {
    setInterval(() => {
      this.textIndex = (this.textIndex + 1) % this.dynamicTexts.length;
      this.currentText = this.dynamicTexts[this.textIndex];
    }, 3000);
  }
  
  onStatHover(index: number): void {
    // Add interactive feedback
  }
  
  onStatLeave(): void {
    // Reset hover state
  }

  private observeElements(): void {
    AnimationUtil.observeElements('.slide-up');
  }
}