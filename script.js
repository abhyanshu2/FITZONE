// ---- Custom Cursor ----
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  setTimeout(() => {
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
  }, 80);
});

document.querySelectorAll('a, button, .product-card, .schedule-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    follower.style.transform = 'translate(-50%, -50%) scale(1.8)';
    follower.style.borderColor = 'rgba(0,255,136,0.8)';
  });
  el.addEventListener('mouseleave', () => {
    follower.style.transform = 'translate(-50%, -50%) scale(1)';
    follower.style.borderColor = 'rgba(0,255,136,0.5)';
  });
});

// ---- Sticky Navbar ----
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ---- Mobile Menu ----
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
let menuOpen = false;

menuToggle.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('active', menuOpen);
  const spans = menuToggle.querySelectorAll('span');
  if (menuOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuOpen = false;
    const spans = menuToggle.querySelectorAll('span');
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// ---- Scroll Animations ----
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${i * 0.1}s`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(25px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Also observe schedule and diet cards
document.querySelectorAll('.schedule-card, .diet-card').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateX(-20px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
  observer.observe(el);
});

// Make visible
const visibleStyle = `
  .visible { opacity: 1 !important; transform: none !important; }
`;
const styleEl = document.createElement('style');
styleEl.textContent = visibleStyle;
document.head.appendChild(styleEl);

// ---- Add to Cart ----
let cartCount = 0;
document.querySelectorAll('.btn-cart').forEach(btn => {
  btn.addEventListener('click', function () {
    cartCount++;
    const original = this.innerHTML;
    this.innerHTML = '<i class="fas fa-check"></i> Added!';
    this.style.background = 'var(--green)';
    this.style.color = '#000';
    setTimeout(() => {
      this.innerHTML = original;
      this.style.background = '';
      this.style.color = '';
    }, 1500);
    showToast(`Item added to cart (${cartCount} total)`);
  });
});

// ---- Diet Toggle ----
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const card = this.parentElement;
    const more = card.querySelector('.more');
    const isOpen = more.style.display === 'block';
    more.style.display = isOpen ? 'none' : 'block';
    this.innerHTML = isOpen
      ? 'Read More <i class="fas fa-chevron-down"></i>'
      : 'Read Less <i class="fas fa-chevron-up"></i>';
  });
});

// ---- BMI Calculator ----
document.getElementById('calc-bmi').addEventListener('click', () => {
  const weight = parseFloat(document.getElementById('weight').value);
  const heightCm = parseFloat(document.getElementById('height').value);

  if (!weight || !height || weight <= 0 || heightCm <= 0) {
    showToast('Please enter valid weight and height!');
    return;
  }

  const heightM = heightCm / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(1);

  let label, tip, percent;
  if (bmi < 18.5) {
    label = 'Underweight';
    tip = '💡 Consider a high-calorie, nutrient-rich diet and strength training.';
    percent = (bmi / 18.5) * 20;
  } else if (bmi < 25) {
    label = 'Normal Weight';
    tip = '✅ Great shape! Maintain with balanced diet and regular exercise.';
    percent = 20 + ((bmi - 18.5) / 6.5) * 30;
  } else if (bmi < 30) {
    label = 'Overweight';
    tip = '⚡ Increase cardio and focus on calorie deficit diet.';
    percent = 50 + ((bmi - 25) / 5) * 25;
  } else {
    label = 'Obese';
    tip = '🏥 Consult a fitness professional for a personalized plan.';
    percent = 75 + Math.min((bmi - 30) / 10 * 25, 25);
  }

  const resultBox = document.getElementById('bmi-result-box');
  resultBox.style.display = 'block';
  resultBox.style.animation = 'fadeIn 0.5s ease';

  document.getElementById('bmi-score').textContent = bmi;
  document.getElementById('bmi-label').textContent = label;
  document.getElementById('bmi-tip').textContent = tip;
  document.getElementById('bmi-indicator').style.left = Math.min(percent, 95) + '%';
});

// ---- Contact Form ----
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;

  setTimeout(() => {
    showToast('Message sent successfully! We\'ll reach you soon. 💪');
    contactForm.reset();
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    btn.disabled = false;
  }, 1500);
});

// ---- Download Plan ----
document.getElementById('download-pdf').addEventListener('click', () => {
  const workoutPlan = `
╔════════════════════════════════════════╗
║         FITZONE - WEEKLY WORKOUT       ║
║           Elite Training Plan          ║
╚════════════════════════════════════════╝

DAY 01 | MONDAY
  ▶ Chest & Triceps
  • Bench Press 4x10
  • Incline Dumbbell Press 3x12
  • Cable Flyes 3x15
  • Tricep Pushdown 4x12

DAY 02 | TUESDAY
  ▶ Back & Biceps
  • Deadlift 4x8
  • Pull-ups 3x10
  • Barbell Row 4x10
  • Bicep Curls 3x15

DAY 03 | WEDNESDAY
  ▶ Legs & Cardio
  • Squats 4x10
  • Leg Press 3x15
  • Romanian Deadlift 3x12
  • 20 min LISS Cardio

DAY 04 | THURSDAY
  ▶ Shoulders & Abs
  • Overhead Press 4x10
  • Lateral Raises 4x15
  • Front Raises 3x12
  • Plank 3x60sec

DAY 05 | FRIDAY
  ▶ Core & Mobility
  • Core Circuit 4 rounds
  • Yoga Stretching 20 min

DAY 06 | SATURDAY
  ▶ Full Body & HIIT
  • Compound Supersets
  • 20 min HIIT Sprint

DAY 07 | SUNDAY
  ▶ REST & RECOVERY
  • Light Walk
  • Full Body Stretch

─────────────────────────────────────────
 © 2025 FitZone | fitzone.com
 Train Hard. Stay Consistent. See Results.
─────────────────────────────────────────
  `;

  const blob = new Blob([workoutPlan], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'FitZone-Workout-Plan.txt';
  link.click();
  showToast('Workout plan downloaded! 🔥');
});

// ---- Toast Helper ----
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.querySelector('span').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---- Smooth Active Nav ----
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    if (scrollY > section.offsetTop - 200) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + section.id) {
          link.style.color = '#fff';
        }
      });
    }
  });
});
