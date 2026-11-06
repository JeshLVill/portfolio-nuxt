import { gsap } from 'gsap';

let vantaEffect = null;

// Runs ONCE on initial load (Entrance + Vanta + Hover bindings)
export function initAnimations() {
  if (typeof window === 'undefined') return;

  // 1. Initialize Vanta Globe Background
  const backgroundEl = document.getElementById('background');
  if (backgroundEl && window.VANTA && typeof window.VANTA.GLOBE === 'function' && !vantaEffect) {
    vantaEffect = window.VANTA.GLOBE({
      el: '#background',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x4a3fff,
    });
  }

  // 2. Initial Entrance Animations (Header & Stagger targets)
  const header = document.querySelector('header');
  if (header) {
    gsap.from(header, { duration: 0.6, y: -20, opacity: 0, ease: 'power3.out', overwrite: 'auto' });
  }

  const selectorString = '.home-content, .about-box, .tech-item, .cert-item, .cert-card, .certifications-heading, .profile-info, .about-content';
  const revealTargets = document.querySelectorAll(selectorString);
  if (revealTargets.length > 0) {
    gsap.from(revealTargets, {
      duration: 0.6,
      y: 15,
      opacity: 0,
      ease: 'power3.out',
      stagger: 0.05,
    });
  }

  // 3. Persistent Micro-interactions (Buttons & Cards)
  bindInteractions();
}

// Runs on page changes so buttons/cards keep working without layout delays
export function bindInteractions() {
  if (typeof window === 'undefined') return;

  // Button micro-interactions
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

  // Card hover animations
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