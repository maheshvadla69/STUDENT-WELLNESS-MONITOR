// Select elements
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.querySelector('.close-btn');
const modal = document.getElementById('modal');
const submitBtn = document.getElementById('submit-btn');
const moodInput = document.getElementById('mood-textarea');
const feedback = document.getElementById('feedback');

// Open modal and focus textarea
openBtn.addEventListener('click', () => {
  modal.classList.add('show');
  moodInput.focus();
});

// Close modal on close button click
closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Close modal when clicking outside modal content
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});

// Close modal when pressing Escape key
window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    modal.classList.remove('show');
  }
});

// Submit mood and show feedback
submitBtn.addEventListener('click', () => {
  const mood = moodInput.value.trim();
  if (mood) {
    feedback.innerHTML = `🌈 Your mood today: <span class="colored-text">"${mood}"</span>`;
    moodInput.value = '';
    modal.classList.remove('show');
  } else {
    alert('⚠️ Please write your mood before submitting!');
    moodInput.focus();
  }
});
