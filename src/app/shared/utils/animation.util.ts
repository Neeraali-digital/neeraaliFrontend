export class AnimationUtil {
  static observeElements(selector: string = '.slide-up'): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });

    setTimeout(() => {
      document.querySelectorAll(selector).forEach(el => observer.observe(el));
    }, 100);
  }
}