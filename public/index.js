/**
 * @fileoverview index.js entry point into javascript
 * ___________________
 / \                   \
|   |                  |
 \_ |                  |
    |                  |     howToCreateAWebsite
    |                  |
    |                  |
    |  ________________|__
    |  \                  \
    |  /                  /
    \_/__________________/
*/

import {formatDate, updateOnTheMinute} from './modules/date/date.js';

window.addEventListener('load', main);
async function main() {
  slideAccordianToTop();
  // closeOtherAccordians();
} // main

function slideAccordianToTop() {
  // Select all details elements you want this behavior to apply to
  document.querySelectorAll('.accordion').forEach((details) => {
    details.addEventListener('toggle', (event) => {
      // Only scroll if the details element was opened (not closed)
      if (details.open) {
        details.scrollIntoView({
          behavior: 'smooth', // Options: 'smooth' or 'auto' (instant)
          block: 'start'      // Aligns the top of the element to the top of the viewport
        });
      }
    });
  });
}

function closeOtherAccordians() {
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
}
