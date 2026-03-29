/**
 * @fileoverview index.js entry point into javascript
 */

window.addEventListener('load', main);
async function main() {
  // Fetch all the details elements with the class 'accordion-item'
  const details = document.querySelectorAll('.accordion');

  // Add a click event listener to each details element
  details.forEach((targetDetail) => {
    targetDetail.addEventListener('click', () => {
      // Loop through all details elements
      details.forEach((detail) => {
        // If the current detail is not the one clicked and its open, close it
        if (detail !== targetDetail && detail.hasAttribute('open')) {
          detail.removeAttribute('open');
        }
      });
    });
  });
} // main
