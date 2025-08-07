import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationUtil } from '../../shared/utils/animation.util';

interface Review {
  id: number;
  name: string;
  position: string;
  company: string;
  rating: number;
  review: string;
  avatar: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Header Section -->
    <section class="pt-24 pb-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 fade-in">Client Reviews</h1>
        <p class="text-xl max-w-3xl mx-auto text-primary-100 fade-in">
          Don't just take our word for it - hear what our clients have to say about their experience with us
        </p>
      </div>
    </section>

    <!-- Overall Rating Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <div class="inline-flex items-center bg-primary-50 px-8 py-4 rounded-full mb-6">
            <div class="text-4xl font-bold text-primary-600 mr-4">4.9</div>
            <div>
              <div class="flex items-center mb-1">
                <span *ngFor="let star of [1,2,3,4,5]" class="material-icons text-yellow-400">star</span>
              </div>
              <div class="text-gray-600">Based on 500+ reviews</div>
            </div>
          </div>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Our clients consistently rate us highly for our creativity, professionalism, and results-driven approach
          </p>
        </div>

        <!-- Rating Breakdown -->
        <div class="max-w-md mx-auto">
          <div *ngFor="let rating of ratingBreakdown" class="flex items-center mb-3">
            <div class="flex items-center w-20">
              <span class="text-sm text-gray-600 mr-2">{{rating.stars}}</span>
              <span class="material-icons text-yellow-400 text-sm">star</span>
            </div>
            <div class="flex-1 mx-4">
              <div class="bg-gray-200 rounded-full h-2">
                <div class="bg-yellow-400 h-2 rounded-full" [style.width.%]="rating.percentage"></div>
              </div>
            </div>
            <div class="text-sm text-gray-600 w-12">{{rating.percentage}}%</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Grid -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let review of reviews; let i = index" 
               class="bg-white p-6 rounded-xl shadow-lg card-hover slide-up"
               [style.animation-delay.ms]="i * 100">
            <!-- Rating Stars -->
            <div class="flex items-center mb-4">
              <div class="flex mr-2">
                <span *ngFor="let star of getStarArray(review.rating)" 
                      class="material-icons text-yellow-400 text-sm">star</span>
                <span *ngFor="let star of getEmptyStarArray(review.rating)" 
                      class="material-icons text-gray-300 text-sm">star</span>
              </div>
              <span class="text-sm text-gray-600">{{review.rating}}.0</span>
            </div>

            <!-- Review Text -->
            <p class="text-gray-700 mb-6 leading-relaxed">"{{review.review}}"</p>

            <!-- Reviewer Info -->
            <div class="flex items-center">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <span class="text-primary-600 font-semibold">{{review.name.charAt(0)}}</span>
              </div>
              <div>
                <div class="font-semibold text-gray-900">{{review.name}}</div>
                <div class="text-sm text-gray-600">{{review.position}} at {{review.company}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Carousel -->
    <section class="section-padding bg-primary-600 text-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </h2>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <div class="mb-6">
              <div class="flex justify-center mb-4">
                <span *ngFor="let star of [1,2,3,4,5]" class="material-icons text-yellow-400 text-2xl">star</span>
              </div>
              <p class="text-xl md:text-2xl leading-relaxed mb-6">
                "{{featuredReview.review}}"
              </p>
            </div>
            <div class="flex items-center justify-center">
              <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold text-xl">{{featuredReview.name.charAt(0)}}</span>
              </div>
              <div class="text-left">
                <div class="font-semibold text-lg">{{featuredReview.name}}</div>
                <div class="text-primary-200">{{featuredReview.position}} at {{featuredReview.company}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Be Our Next Success Story?
        </h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join hundreds of satisfied clients who have transformed their digital presence with our help
        </p>
        <a href="/contact" class="btn-primary">
          Get Started Today
        </a>
      </div>
    </section>
  `
})
export class ReviewsComponent implements OnInit {
  ratingBreakdown = [
    { stars: 5, percentage: 78 },
    { stars: 4, percentage: 18 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 0 }
  ];

  reviews: Review[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Marketing Director',
      company: 'TechCorp',
      rating: 5,
      review: 'Neeraali Digital transformed our online presence completely. Their strategic approach and creative execution exceeded all our expectations. Our website traffic increased by 300% in just 3 months!',
      avatar: ''
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CEO',
      company: 'StartupXYZ',
      rating: 5,
      review: 'Working with this team was a game-changer for our startup. They understood our vision and helped us build a brand that truly resonates with our target audience. Highly recommended!',
      avatar: ''
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Brand Manager',
      company: 'FashionForward',
      rating: 5,
      review: 'The creative designs and social media strategies they developed for us were outstanding. Our engagement rates doubled, and we saw a significant increase in sales. Professional and results-driven!',
      avatar: ''
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Operations Manager',
      company: 'HealthPlus',
      rating: 5,
      review: 'Their attention to detail and commitment to our success was evident from day one. The website they built for us is not only beautiful but also highly functional and user-friendly.',
      avatar: ''
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Founder',
      company: 'EcoGreen',
      rating: 4,
      review: 'Great experience working with Neeraali Digital. They helped us communicate our environmental mission effectively across all digital channels. The team is responsive and creative.',
      avatar: ''
    },
    {
      id: 6,
      name: 'Robert Martinez',
      position: 'Marketing Lead',
      company: 'FinanceFirst',
      rating: 5,
      review: 'The ROI we achieved through their digital marketing campaigns was incredible. They really know how to target the right audience and create compelling content that converts.',
      avatar: ''
    }
  ];

  featuredReview = {
    name: 'Jennifer Adams',
    position: 'VP of Marketing',
    company: 'Global Enterprises',
    review: 'Neeraali Digital didn\'t just meet our expectations - they completely redefined what we thought was possible. Their innovative approach to digital marketing helped us reach new heights in brand awareness and customer engagement.'
  };

  ngOnInit(): void {
    this.observeElements();
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getEmptyStarArray(rating: number): number[] {
    return Array(5 - rating).fill(0);
  }

  private observeElements(): void {
    AnimationUtil.observeElements('.slide-up');
  }
}