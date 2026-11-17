const demoModal = document.querySelector('#demoModal');

document.querySelectorAll('.demo-trigger').forEach((button) => {
  button.addEventListener('click', () => {
    demoModal?.classList.remove('is-closing');
    demoModal?.showModal();
  });
});

const closeDemoModal = () => {
  if (!demoModal?.open) return;
  demoModal.classList.add('is-closing');
  window.setTimeout(() => demoModal.close(), 180);
};

document.querySelector('.modal-close')?.addEventListener('click', closeDemoModal);
demoModal?.addEventListener('click', (event) => {
  if (event.target === demoModal) closeDemoModal();
});

document.querySelector('#demoLeadForm')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector('.form-message');
  const data = Object.fromEntries(new FormData(form));
  message.textContent = 'Submitting...';
  try {
    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...data, course: 'Java Full Stack Developer Course in Bangalore', source: location.href, submittedAt: new Date().toISOString(), variant: 'demo-popup'})
    });
    if (!response.ok) throw new Error('Request failed');
    form.reset();
    message.textContent = 'Thanks — your request was received.';
    setTimeout(closeDemoModal, 1200);
  } catch {
    message.textContent = 'Unable to submit right now. Please call +91 6361702540.';
  }
});
