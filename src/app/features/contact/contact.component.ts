import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <!-- Header Section -->
    <section class="pt-24 pb-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 fade-in">Get In Touch</h1>
        <p class="text-xl max-w-3xl mx-auto text-primary-100 fade-in">
          Ready to transform your digital presence? Let's discuss how we can help you achieve your goals.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="slide-up">
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      formControlName="firstName"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      [class.border-red-500]="contactForm.get('firstName')?.invalid && contactForm.get('firstName')?.touched">
                    <div *ngIf="contactForm.get('firstName')?.invalid && contactForm.get('firstName')?.touched" 
                         class="text-red-500 text-sm mt-1">
                      First name is required
                    </div>
                  </div>
                  
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      formControlName="lastName"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      [class.border-red-500]="contactForm.get('lastName')?.invalid && contactForm.get('lastName')?.touched">
                    <div *ngIf="contactForm.get('lastName')?.invalid && contactForm.get('lastName')?.touched" 
                         class="text-red-500 text-sm mt-1">
                      Last name is required
                    </div>
                  </div>
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    formControlName="email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    [class.border-red-500]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
                  <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" 
                       class="text-red-500 text-sm mt-1">
                    <span *ngIf="contactForm.get('email')?.errors?.['required']">Email is required</span>
                    <span *ngIf="contactForm.get('email')?.errors?.['email']">Please enter a valid email</span>
                  </div>
                </div>

                <div>
                  <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    formControlName="company"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300">
                </div>

                <div>
                  <label for="service" class="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    formControlName="service"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300">
                    <option value="">Select a service</option>
                    <option *ngFor="let service of services" [value]="service">{{service}}</option>
                  </select>
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    formControlName="message"
                    rows="5"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    [class.border-red-500]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                    placeholder="Tell us about your project..."></textarea>
                  <div *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched" 
                       class="text-red-500 text-sm mt-1">
                    Message is required
                  </div>
                </div>

                <button
                  type="submit"
                  [disabled]="contactForm.invalid || isSubmitting"
                  class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                  <span *ngIf="!isSubmitting">Send Message</span>
                  <span *ngIf="isSubmitting" class="flex items-center">
                    <span class="material-icons animate-spin mr-2">refresh</span>
                    Sending...
                  </span>
                </button>
              </form>

              <div *ngIf="submitMessage" 
                   class="mt-4 p-4 rounded-lg"
                   [class.bg-green-50]="submitSuccess"
                   [class.text-green-700]="submitSuccess"
                   [class.bg-red-50]="!submitSuccess"
                   [class.text-red-700]="!submitSuccess">
                {{submitMessage}}
              </div>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="slide-up">
            <div class="space-y-8">
              <div>
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h2>
                <p class="text-gray-600 mb-8">
                  We're here to help you achieve your digital marketing goals. 
                  Reach out to us through any of the channels below, and we'll get back to you within 24 hours.
                </p>
              </div>

              <div class="space-y-6">
                <div *ngFor="let contact of contactInfo" class="flex items-start">
                  <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="material-icons text-primary-600">{{contact.icon}}</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">{{contact.title}}</h3>
                    <p class="text-gray-600">{{contact.value}}</p>
                  </div>
                </div>
              </div>

              <div class="bg-primary-50 p-6 rounded-xl">
                <h3 class="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div class="space-y-3">
                  <a href="tel:+1234567890" 
                     class="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-300">
                    <span class="material-icons mr-2">phone</span>
                    Schedule a Call
                  </a>
                  <a href="mailto:hello@neeralidigital.com" 
                     class="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-300">
                    <span class="material-icons mr-2">email</span>
                    Send Email
                  </a>
                  <a href="#" 
                     class="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-300">
                    <span class="material-icons mr-2">description</span>
                    Get Proposal
                  </a>
                </div>
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
          Ready to Get Started?
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-primary-100">
          Don't wait - your competitors aren't. Let's discuss how we can give you the digital edge you need.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+1234567890" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            <span class="material-icons mr-2">phone</span>
            Call Now
          </a>
          <a href="mailto:hello@neeralidigital.com" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
            <span class="material-icons mr-2">email</span>
            Email Us
          </a>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  services = [
    'Brand Identity',
    'Digital Marketing',
    'Web Solutions',
    'Social Media Services',
    'Creative Design',
    'Paid Ads',
    'SEO Services',
    'Content Marketing'
  ];

  contactInfo = [
    {
      icon: 'phone',
      title: 'Phone',
      value: '+1 (555) 123-4567'
    },
    {
      icon: 'email',
      title: 'Email',
      value: 'hello@neeralidigital.com'
    },
    {
      icon: 'location_on',
      title: 'Office',
      value: '123 Digital Street, Marketing City, MC 12345'
    },
    {
      icon: 'schedule',
      title: 'Business Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      service: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.submitMessage = 'Thank you for your message! We\'ll get back to you within 24 hours.';
        this.contactForm.reset();
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}