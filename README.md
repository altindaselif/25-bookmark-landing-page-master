# Bookmark Landing Page 🔖

A responsive landing page for a bookmark manager extension built with **Vanilla JavaScript**. This project focuses on interactive UI components such as tabbed content, accordions and client-side form validation without relying on external libraries.

## 🚀 Overview

The goal was to build a clean, responsive landing page that adapts seamlessly across devices. The project handles dynamic content switching for the features section, an interactive FAQ accordion and email validation using pure JavaScript, ensuring a smooth user experience and adherence to accessibility standards.

## 🔗 Links

- **Live Site:** [View Live Demo](https://altindaselif.github.io/25-bookmark-landing-page-master/)
- **Code:** [View GitHub Repository](https://github.com/altindaselif/25-bookmark-landing-page-master)

## 💡 Key Features

- **🗂️ Tabbed Content:** A dynamic feature section that toggles content visibility based on the active tab selection.
- **❓ FAQ Accordion:** An interactive accordion list that expands and collapses answers with smooth transitions.
- **✉️ Form Validation:** Client-side email validation using Regex, providing immediate visual feedback for errors.
- **🍔 Mobile Navigation:** A full-screen mobile menu with a focus trap and body scroll lock for better usability.
- **♿ Accessibility:** Enhanced semantic HTML using `aria-expanded`, `aria-selected`, and proper role attributes for screen readers.

## 🛠️ Technical Implementation

### 1. Dynamic Tab System

The "Features" section required displaying different content based on the selected tab without reloading the page.

- **Solution:** A `forEach` loop was implemented to attach event listeners to tab headers. Upon a click event, the script removes the active state from all siblings and applies it only to the target. Simultaneously, it toggles the `hidden` class on the corresponding content panels using the index, ensuring DOM manipulation is efficient and synced.

### 2. Accessible Form Validation

Standard HTML validation can be stylistically limiting. The design required custom error messages and icons.

- **Solution:** JavaScript was used to intercept the form submission. The input value is tested against a Regular Expression (`Regex`) for email format. If invalid, the `preventDefault()` method stops submission, and a custom error class is toggled on the parent container to reveal the styled error message and icon.

## 📸 Screenshots

- [View Desktop Version](./desktop-screenshot.png)
- [View Tablet Version](./tablet-screenshot.png)
- [View Mobile Version](./mobile-screenshot.png)

## 🧰 Built With

- **Semantic HTML5**
- **CSS3 (Flexbox & Custom Properties)**
- **Vanilla JavaScript (ES6+)**
- **Mobile-First Workflow**

## ✍️ Author

- **LinkedIn:** [Elif Altındaş](https://www.linkedin.com/in/elifaltindas/)
- **Frontend Mentor:** [@altindaselif](https://www.frontendmentor.io/profile/altindaselif)
- **GitHub:** [@altindaselif](https://github.com/altindaselif)
