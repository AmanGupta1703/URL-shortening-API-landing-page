# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Update the table of contents and add your solution/live site URLs when ready to deploy.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![Desktop Design](./public/design/desktop-preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (CSS Variables)
- Flexbox
- Mobile-first workflow
- [Vite](https://vitejs.dev/) - Build tool
- [Poppins](https://fonts.google.com/specimen/Poppins) - Google Font

### What I learned

This project helped me strengthen my skills in several key areas:

**CSS Architecture:** I implemented a modular CSS approach by splitting styles into separate files for better organization and maintainability:

```css
/* Main stylesheet imports */
@import url(./base.css);
@import url(./header.css);
@import url(./hamburger.css);
@import url(./button.css);
/* ... more imports */
```

**CSS Custom Properties:** I utilized CSS variables for consistent theming throughout the project:

```css
:root {
  --color-primary-01: hsl(180, 66%, 49%);
  --color-primary-02: hsl(257, 27%, 26%);
  --fw-500: 500;
  --fw-700: 700;
}
```

### Continued development

In future projects, I want to continue focusing on:

- **JavaScript Integration:** Adding the URL shortening API functionality to make the form fully interactive
- **Advanced CSS Animations:** Implementing more sophisticated hover effects and page transitions
- **Accessibility:** Improving keyboard navigation and screen reader support
- **Performance Optimization:** Implementing CSS optimizations and image loading strategies
- **CSS Architecture:** Exploring methodologies like BEM or CSS-in-JS for larger projects

### Useful resources

- [Frontend Mentor Style Guide](./style-guide.md) - The official style guide provided comprehensive design specifications including colors, typography, and layout dimensions
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Essential reference for creating responsive layouts throughout the project
- [MDN CSS Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) - Helped implement effective responsive breakpoints
- [Google Fonts](https://fonts.google.com/specimen/Poppins) - Source for the Poppins font family used throughout the design

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- GitHub - [@yourusername](https://github.com/yourusername)

## Acknowledgments

Special thanks to Frontend Mentor for providing this excellent challenge and design files. The project helped me practice modern CSS techniques and responsive design principles in a real-world context.
