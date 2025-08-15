// Modal elements
const modal = document.getElementById('jobModal');
const openBtn = document.getElementById('applyBtn');
const closeBtn = document.getElementById('closeModal');

// Open modal
openBtn.onclick = function() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // prevent background scroll
}

// Close modal
closeBtn.onclick = function() {
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

// Close when clicking outside
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}
