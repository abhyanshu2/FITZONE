# FitZone | Elite Fitness

---

## Table of Contents

1. [Project Idea (Why we built it)](#1-project-idea-why-we-built-it)
2. [Features at a Glance](#2-features-at-a-glance)
3. [Feature Deep Dive](#3-feature-deep-dive)
4. [Tech Stack and Why We Chose It](#4-tech-stack-and-why-we-chose-it)
5. [Folder Structure](#5-folder-structure)
6. [App Flow (Start to Finish)](#6-app-flow-start-to-finish)
7. [Setup Guide (Step by Step)](#7-setup-guide-step-by-step)
8. [Environment Variables](#8-environment-variables)
9. [Firebase Setup](#9-firebase-setup)
10. [Deployment](#10-deployment)
11. [Data Model](#11-data-model)
12. [Security: How Safe Is It?](#12-security-how-safe-is-it)
13. [Mobile Support](#13-mobile-support)
14. [Performance Notes](#14-performance-notes)
15. [Known Limitations](#15-known-limitations)
16. [Troubleshooting](#16-troubleshooting)
17. [Future Ideas](#17-future-ideas)

---

## 1. Project Idea (Why we built it)

FitZone is a modern, single-page fitness website designed to inspire people toward a healthier and stronger lifestyle. It is built for fitness lovers, beginners, and anyone who wants to stay active, motivated and focused on their health goals.

The goal was to build a professional-looking fitness platform with a bold UI, a responsive layout and an engaging user experience. The design aims to express strength, motivation, discipline and fitness culture through strong typography, a dark theme with a neon green accent, and smooth animations.

FitZone is also a frontend learning project. It was built with plain HTML, CSS and JavaScript to practise:

- Responsive web design and layout management
- UI structure and reusable styling with CSS variables
- Animations, hover effects and scroll-based transitions
- Interactive frontend logic (calculator, toggles, downloads, notifications)
- Writing clean, organised code without any framework

In the future it is planned to grow into a complete fitness platform with a backend, user accounts and personalised dashboards (see [Future Ideas](#17-future-ideas)).

---

## 2. Features at a Glance

| Area | What you get |
|------|--------------|
| **Responsive Design** | Works on desktop, tablet and mobile with breakpoints at 1024px and 768px |
| **Sticky Navigation** | Fixed header that changes style on scroll, with numbered links and a "Join Now" button |
| **Mobile Menu** | Hamburger menu that animates into a close icon |
| **Hero Section** | Large headline, call-to-action buttons, animated grid background and key stats |
| **Products Shop** | Four product cards with category, rating, price, badges and "Add" button |
| **Weekly Workout Schedule** | Seven-day training split with tags and icons for each day |
| **Download Workout Plan** | One click downloads a detailed weekly plan as a text file |
| **Diet Plans** | Weight Loss, Weight Gain and Maintenance cards with expandable meal lists |
| **BMI Calculator** | Enter weight and height to get your BMI, category, a visual indicator and a tip |
| **Contact Section** | Contact details, social icons and an inquiry form |
| **Toast Notifications** | Small pop-up messages for cart, form, download and validation actions |
| **Custom Cursor** | Animated dot and ring cursor on desktop with hover effects |
| **Scroll Animations** | Cards fade and slide in as they enter the viewport |
| **Smooth Scrolling** | Section links scroll smoothly; active section link is highlighted |

---

## 3. Feature Deep Dive

Each feature below answers four questions: **What** it is, **How to use** it, **Why** it exists, and **How it's built**.

### 3.1 Navigation Bar and Mobile Menu

- **What:** A fixed top bar with the FitZone logo, six numbered section links (Home, Products, Workout, Diet, BMI, Contact) and a "Join Now" button.
- **How to use:** Click any link to jump to that section. On small screens, tap the hamburger icon to open the menu and tap a link to close it.
- **Why:** Lets visitors reach any part of a one-page site in a single click.
- **How it's built:** A scroll listener adds a `scrolled` class to the header after 50px of scrolling. The mobile menu toggles an `active` class, and the three hamburger lines are rotated or hidden with inline styles to form an "X". A second scroll listener highlights the link of the section currently in view.

### 3.2 Hero Section

- **What:** The first screen: "Forge Your Strength - Define Your Legacy", with Start Training and View Schedule buttons and three stats (500+ Members, 12+ Programs, 5-star rating).
- **How to use:** Click **Start Training** to go to the contact form, or **View Schedule** to jump to the workout plan.
- **Why:** Gives a strong first impression and clear next steps.
- **How it's built:** Pure HTML and CSS. The background uses a CSS grid pattern with a glow effect, animated with keyframes (`gridMove`, `pulse`, `scrollAnim`).

### 3.3 Products and Add to Cart

- **What:** Product cards for Whey Protein, Dumbbell Set, Skipping Rope and Gym Gloves, each with a category, star rating, price in rupees and an "Add" button. Some cards carry a BESTSELLER or HOT badge.
- **How to use:** Click **Add** on any product.
- **Why:** Demonstrates an e-commerce style product grid inside a fitness brand.
- **How it's built:** Each click increases a `cartCount` counter, temporarily changes the button to "Added!" in green for 1.5 seconds, and shows a toast such as "Item added to cart (3 total)". Product images are Font Awesome icons used as placeholders.

### 3.4 Weekly Workout Schedule

- **What:** Seven cards from Monday to Sunday: Chest and Triceps, Back and Biceps, Legs and Cardio, Shoulders and Abs, Core and Mobility, Full Body and HIIT, and a Rest and Stretching day.
- **How to use:** Scroll to the Workout section and hover over any day card.
- **Why:** A clear, structured weekly split helps beginners follow a routine.
- **How it's built:** Static HTML cards. Saturday is highlighted and Sunday has a special "rest" style. Cards slide in on scroll using an `IntersectionObserver`.

### 3.5 Download Full Plan

- **What:** A button that downloads the detailed weekly plan with exercises, sets and reps.
- **How to use:** Click **Download Full Plan** in the Workout section.
- **Why:** Lets users take the plan to the gym without internet access.
- **How it's built:** The plan is a text string stored in `script.js`. It is wrapped in a `Blob`, turned into a temporary URL and downloaded as `FitZone-Workout-Plan.txt`.

### 3.6 Diet Plans

- **What:** Three nutrition cards: Weight Loss (Cutting), Weight Gain (Bulking) and Maintenance (Balance), each with a short summary and a full sample day of meals plus a water target.
- **How to use:** Click **Read More** on a card to expand the meal list, and **Read Less** to collapse it.
- **Why:** Keeps the section compact while still giving detail on demand.
- **How it's built:** The hidden list is shown or hidden by switching its `display` style, and the button label and arrow icon update accordingly.

### 3.7 BMI Calculator

- **What:** A calculator that returns your Body Mass Index, a category, a position on a colour bar, and a short tip.
- **How to use:** Enter weight in kg and height in cm, then click **Calculate BMI**.
- **Why:** Gives visitors a quick starting point for choosing a goal and diet plan.
- **How it's built:** `BMI = weight / (height in metres)^2`, rounded to one decimal.

| BMI | Category |
|-----|----------|
| Below 18.5 | Underweight |
| 18.5 to 24.9 | Normal Weight |
| 25 to 29.9 | Overweight |
| 30 and above | Obese |

The marker on the bar is positioned by converting the BMI into a percentage across four zones, capped at 95% so it stays inside the bar.

### 3.8 Contact Form

- **What:** A form with name, email, phone and message, next to location, phone and opening-hours details and social icons.
- **How to use:** Fill in the required fields and click **Send Message**.
- **Why:** Gives visitors a way to ask about membership and training.
- **How it's built:** The submit event is intercepted. The button shows a spinner for 1.5 seconds, a success toast appears and the form resets. This is a front-end simulation; no message is actually sent (see [Known Limitations](#15-known-limitations)).

### 3.9 Custom Cursor

- **What:** A small dot with a trailing ring that follows the mouse and grows over links, buttons and cards.
- **How to use:** Move your mouse on desktop.
- **Why:** Adds a premium, energetic feel.
- **How it's built:** A `mousemove` listener updates the position of two elements, with a short delay on the ring. It is hidden on screens 768px wide or smaller.

### 3.10 Scroll Animations

- **What:** Product, schedule and diet cards fade and slide in as you scroll to them.
- **Why:** Makes the page feel alive without any animation library.
- **How it's built:** An `IntersectionObserver` adds a `visible` class when an element enters the viewport, with a small staggered delay.

---

## 4. Tech Stack and Why We Chose It

| Technology | Role | Why we chose it |
|------------|------|-----------------|
| **HTML5** | Page structure | Semantic sections, simple and fast |
| **CSS3** | Styling and animation | CSS variables, grid, flexbox, keyframes and media queries give full control without a framework |
| **JavaScript (ES6)** | Interactivity | Handles menu, BMI, cart, toggles, downloads and animations with no dependencies |
| **Font Awesome 6.5** (CDN) | Icons | Large icon set used for product images, day icons and social links |
| **Google Fonts** | Typography | Bebas Neue (display), Rajdhani (headings) and Inter (body) |
| **Intersection Observer API** | Scroll animations | Efficient, built into the browser |
| **Blob / URL API** | File download | Creates the workout plan file in the browser |

No build tools, package manager or backend are needed.

---

## 5. Folder Structure

```
FITZONE/
├── index.html     # All page sections and markup
├── style.css      # Theme variables, layout, animations, responsive rules
├── script.js      # All interactivity
└── README.md      # Project documentation
```

---

## 6. App Flow (Start to Finish)

```
Open index.html
   |
   v
Load fonts + Font Awesome  -->  Render hero, sections and footer
   |
   v
script.js starts
   |-- Custom cursor follows mouse
   |-- Scroll listeners: sticky header, active link
   |-- IntersectionObserver prepares card animations
   |
   v
Visitor scrolls / clicks navigation
   |
   |-- Home       : hero, stats, call-to-action
   |-- Products   : click "Add"  -->  cart counter + toast
   |-- Workout    : view week plan  -->  download .txt plan
   |-- Diet       : expand / collapse meal plans
   |-- BMI        : enter weight + height  -->  score, category, tip
   |-- Contact    : fill form  -->  loading state  -->  success toast
   |
   v
Footer: quick links and social links
```

---

## 7. Setup Guide (Step by Step)

FitZone is a static website, so there is nothing to install.

### Requirements

- A modern browser (Chrome, Edge, Firefox, Safari)
- An internet connection (for Google Fonts and Font Awesome)
- Optional: Git and VS Code

### Steps

**1. Clone the repository**

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

**2. Open the website**

Choose any one method:

- **Direct:** double-click `index.html` to open it in your browser.
- **VS Code Live Server:** open the folder in VS Code, right-click `index.html` and choose **Open with Live Server**.
- **Python:**
  ```bash
  python3 -m http.server 5500
  ```
  then open `http://localhost:5500`.
- **Node.js:**
  ```bash
  npx serve
  ```

**3. Edit and refresh**

Change `index.html`, `style.css` or `script.js`, save, and refresh the browser to see updates.

---

## 8. Environment Variables

**None required.** There are no API keys, secrets or `.env` files in this project.

---

## 9. Firebase Setup

**Not used in the current version.** FitZone has no database or login.

If you add user accounts or form storage later, a typical path is:

1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable **Authentication** and **Firestore**.
3. Add the Firebase SDK to the project.
4. Send the contact form data to Firestore instead of the simulated success message.

---

## 10. Deployment

Because the site is fully static, any static host works.

### GitHub Pages

1. Push the project to a GitHub repository.
2. Go to **Settings > Pages**.
3. Under **Source**, choose the `main` branch and the root folder.
4. Save and open the URL GitHub provides.

### Netlify

1. Push the project to GitHub.
2. In Netlify choose **Add new site > Import from Git** (or drag and drop the folder).
3. Leave the build command empty and set the publish directory to the project root.
4. Deploy.

### Vercel

1. Push the project to GitHub.
2. In Vercel choose **Add New > Project** and import the repository.
3. Framework preset: **Other**. No build command is needed.
4. Deploy.

---

## 11. Data Model

FitZone has no database and does not use `localStorage`. All content is written directly in the HTML, and the only runtime state lives in JavaScript variables.

### Runtime state

| Variable | Purpose |
|----------|---------|
| `cartCount` | Number of times an "Add" button was clicked |
| `menuOpen` | Whether the mobile menu is open |

### Products (in `index.html`)

| Product | Category | Price | Rating | Badge |
|---------|----------|-------|--------|-------|
| Whey Protein | Supplement | Rs. 2,000 | 5 stars (124) | Bestseller |
| Dumbbell Set | Equipment | Rs. 1,500 | 5 stars (89) | Hot |
| Skipping Rope | Accessories | Rs. 500 | 4 stars (67) | None |
| Gym Gloves | Accessories | Rs. 799 | 5 stars (45) | None |

### Weekly split

| Day | Focus |
|-----|-------|
| Monday | Chest and Triceps |
| Tuesday | Back and Biceps |
| Wednesday | Legs and Cardio |
| Thursday | Shoulders and Abs |
| Friday | Core and Mobility |
| Saturday | Full Body and HIIT |
| Sunday | Rest and Stretching |

### Theme variables (in `style.css`)

| Variable | Value | Use |
|----------|-------|-----|
| `--green` | `#00ff88` | Main accent colour |
| `--black` | `#050505` | Page background |
| `--card` | `#161616` | Card background |
| `--text` | `#e8e8e8` | Body text |
| `--muted` | `#888` | Secondary text |

---

## 12. Security: How Safe Is It?

| Topic | Status |
|-------|--------|
| **Data sent to a server?** | No. The contact form is simulated and nothing is transmitted. |
| **Accounts / passwords?** | None, so there is nothing to leak. |
| **User input shown as HTML?** | No. Results and messages are written with `textContent`. |
| **Stored data?** | None. Nothing is saved in the browser. |
| **Third-party resources** | Google Fonts and Font Awesome are loaded from CDNs; the site needs them to look right. |

**Note:** If you connect the contact form to a real backend, add server-side validation, spam protection and HTTPS.

---

## 13. Mobile Support

- Layout adapts with media queries at **1024px** (BMI, contact and footer stack into fewer columns) and **768px** (single-column forms and footer).
- Below 768px the desktop navigation and "Join Now" button are hidden and replaced by a **hamburger menu**.
- Hero buttons stack vertically on small screens.
- The custom cursor is disabled and the normal cursor is restored on small screens.
- Tapping a mobile menu link closes the menu automatically.

---

## 14. Performance Notes

- **Very light:** about 50 KB of source in total, with no frameworks or libraries beyond icon and font CDNs.
- **No build step:** loads instantly from any static host.
- **Efficient animations:** scroll reveals use `IntersectionObserver` instead of constant scroll checks, and each element is unobserved after it appears.
- **External requests:** Google Fonts (three font families) and Font Awesome are the only network dependencies; fonts fall back to system fonts if they cannot load.
- **Possible improvements:** throttle the scroll handler used for active-link highlighting and replace the delayed cursor update with a `requestAnimationFrame` loop.

---

## 15. Known Limitations

- **Contact form is simulated:** it shows a success message but does not send or store anything. The phone field is not read by the script.
- **Cart is a counter only:** the "Add" button does not keep a list of items, show a cart page or handle checkout.
- **Download is a text file:** the workout plan downloads as `.txt` (the button ID says "pdf", but no PDF is created).
- **Placeholder details:** the address ("Your City"), phone number and some social links (Twitter, contact-section icons) are placeholders and should be replaced with real ones.
- **BMI validation:** the check does not properly catch an empty height field, so leaving height blank can produce a meaningless result. BMI is also only a general indicator and does not account for muscle mass, age or sex.
- **Missing animation:** the BMI result box asks for a `fadeIn` animation that is not defined in the CSS, so it appears without a fade.
- **General guidance only:** workout and diet content is sample information and not medical or professional advice.
- **Needs internet for styling:** fonts and icons load from CDNs.
- **No license specified:** add a `LICENSE` file to define how others may use the code.

---

## 16. Troubleshooting

| Problem | Fix |
|---------|-----|
| Icons show as empty boxes | Check your internet connection; Font Awesome loads from a CDN |
| Fonts look different | Google Fonts did not load; connect to the internet and hard-refresh |
| Changes not showing | Save the file and hard-refresh with `Ctrl + Shift + R` |
| Mobile menu does not open | Make sure `script.js` is in the same folder as `index.html` and loads without errors (check the browser console) |
| Cursor not visible on desktop | The custom cursor needs JavaScript; check the console for errors |
| Download button does nothing | Some browsers block downloads from `file://`; run the site with Live Server or `python3 -m http.server` |
| Blank page after deployment | Confirm `index.html` is in the publish root and the file names match exactly (case-sensitive on most hosts) |
| BMI shows odd results | Enter both weight (kg) and height (cm) as positive numbers |

---

## 17. Future Ideas

- Backend for the contact form (Firebase, Node.js or a form service)
- User authentication and personal profiles
- Workout tracking and progress charts
- Personalised dashboard with saved BMI history and goals
- Fitness blog and motivation articles
- Trainer profile cards
- Membership pricing plans
- Member testimonials section
- Real shopping cart with checkout
- Download the workout plan as a styled PDF
- Product images instead of icon placeholders
- Dark / light theme toggle
- Accessibility improvements (keyboard focus styles, ARIA labels, reduced-motion support)

---

## License

No license is specified in the project files. Add a `LICENSE` file to define how others may use, modify or distribute this project.
