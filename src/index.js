import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

import "./style.css";



const content = document.getElementById('content');

function clearContent() {
  content.innerHTML = '';
}

function loadTab(tabFunction) {
  clearContent();
  content.appendChild(tabFunction());
  attachPageSpecificEventListeners(); // Attach event listeners for dynamic elements
}

function attachPageSpecificEventListeners() {
  // "Order Now" Button
  const orderNowBtn = document.getElementById('orderNow');
  if (orderNowBtn) {
    orderNowBtn.addEventListener('click', () => loadTab(loadMenu));
  }

  // Add event listeners for other dynamic elements as needed
}

function initWebsite() {
  // Initial load
  loadTab(loadHome);

  // Navigation buttons (attach event listeners once)
  const homeBtn = document.getElementById('homeBtn');
  const menuBtn = document.getElementById('menuBtn');
  const contactBtn = document.getElementById('contactBtn');
  const orderNowBtn = document.getElementById('orderNow');
  const headerHeading = document.getElementById("header-heading");

  homeBtn.addEventListener('click', () => loadTab(loadHome));
  menuBtn.addEventListener('click', () => loadTab(loadMenu));
  contactBtn.addEventListener('click', () => loadTab(loadContact));
  orderNowBtn.addEventListener('click', () => loadTab(loadMenu));
  headerHeading.addEventListener('click', () => loadTab(loadHome));
}

initWebsite();