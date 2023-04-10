# Frontend Mentor - Intro component with sign up form solution

This is my own solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). I was able to complete this challenge using HTML and CSS for the main layout and styling. I've then added JavaScript to implement the client-side form validation and then use the same javascript file to help update / manipulate the DOM to display the approriate error message text and styling for any input fields that failed the validation conditions.

I built the page using mobile first design as to be inline with Googles mobile first indexing best practices in relation to SEO. 

This was my first time implementing form validation on the client-side with Javascript. I would appreciate any feedback in relation to this as I will most likely use this code as a template going forward.


A few other properties & attributes that I didn't have much previous experience with until this project are:

novalidate - form attribute (To stop the regular HTML form validation from taking place)
autofocus - in the case of this webpage I used it to give autofocus to the First Name input field so that visitor can start typing with out having to manually select the input field.
.sr-only (class) - which is commonly used to hide content visually while keeping it accessible to screen readers. This class can be used to hide label tags that are visually present but should not be visible to users. I've implemented this on all input label fields.


I would greatly appreciate any feedback / constructive criticism on how I could refactor any parts of my code, or if there are any places where I have forgotten to use best practices. 

## Table of contents

  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [Author](#author)

### Screenshot
##### Desktop View - Below
![Desktop Screenshot](./image-assets/desktop-view.jpg)

##### Desktop View - Input Validation Fail State - Below
![Desktop Screenshot](./image-assets/desktop-view-error-state.jpg)

##### Mobile View - Below
![Mobile Screenshot](./image-assets/mobile-view.jpg)



### Links

- Solution URL: [https://github.com/jacksen30/Landing-page-with-signup-form]
- Live Site URL: [https://landing-page-with-signup-challenge-fe.netlify.app/]

### Built with

- Semantic HTML5 markup
- CSS 3 
- JavaScript 

## Author

- Website - [Jacksen Nillson](https://www.quotemkr.com)
- Frontend Mentor - [@jacksen30](https://www.frontendmentor.io/profile/jacksen30)