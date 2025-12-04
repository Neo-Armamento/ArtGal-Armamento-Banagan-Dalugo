// Contact page using Firestore
import { addContact } from './firebase-init.js';

const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();
  try {
    await addContact({ name, email, message });
    contactStatus.textContent = 'Message sent. Thank you!';
    contactForm.reset();
  } catch (err) {
    contactStatus.textContent = 'Send failed: ' + err.message;
  }
});