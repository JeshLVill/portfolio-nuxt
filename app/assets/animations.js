import { gsap } from 'gsap';

export function initAnimations() {
  // Extra safety check so it never crashes on the server
  if (typeof window === 'undefined') return;

  // 1. Header entrance
  const header = document.querySelector('header');
  if (header) {
    gsap.from(header, { duration: 0.8, y: -20, opacity: 0, ease: 'power3.out', overwrite: 'auto' });
  }

  // 2. Reveal targets animation
  const selectorString = '.home-content, .about-box, .tech-item, .cert-item, .cert-card, .certifications-heading, .profile-info, .about-content';
  const revealTargets = document.querySelectorAll(selectorString);
  
  if (revealTargets.length > 0) {
    gsap.from(revealTargets, {
      duration: 0.8,
      y: 20,
      opacity: 0,
      ease: 'power3.out',
      stagger: 0.08,
      delay: 0.1,
    });
  }

  // 3. Button micro-interactions
  document.querySelectorAll('.button, .nav-links a').forEach((button) => {
    if (button.dataset.animated) return;
    button.dataset.animated = 'true';

    button.addEventListener('mouseenter', () => {
      gsap.to(button, { scale: 1.04, duration: 0.18, ease: 'power1.out' });
    });
    button.addEventListener('mouseleave', () => {
      gsap.to(button, { scale: 1, duration: 0.18, ease: 'power1.out' });
    });
    button.addEventListener('mousedown', () => {
      gsap.to(button, { scale: 0.95, duration: 0.08, ease: 'power1.out' });
    });
    button.addEventListener('mouseup', () => {
      gsap.to(button, { scale: 1.04, duration: 0.08, ease: 'power1.out' });
    });
  });

  // 4. Card hover animations
  document.querySelectorAll('.tech-item, .cert-item, .cert-card, .about-box').forEach((card) => {
    if (card.dataset.animated) return;
    card.dataset.animated = 'true';

    card.addEventListener('mouseenter', () => {
      gsap.to(card, { scale: 1.02, duration: 0.2, ease: 'power1.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { scale: 1, duration: 0.2, ease: 'power1.out' });
    });
  });
}