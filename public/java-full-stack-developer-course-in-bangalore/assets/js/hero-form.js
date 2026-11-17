const heroLeadForm = document.querySelector('#heroLeadForm');

heroLeadForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector('.form-message');
  const data = Object.fromEntries(new FormData(form));
  message.textContent = 'Submitting...';

  try {
    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        ...data,
        course: 'Java Full Stack Developer Course in Bangalore',
        source: location.href,
        submittedAt: new Date().toISOString(),
        variant: 'hero-course-enquiry'
      })
    });
    if (!response.ok) throw new Error('Request failed');
    form.reset();
    message.textContent = 'Thanks — we will contact you shortly.';
  } catch {
    message.textContent = 'Unable to submit right now. Please call +91 6361702540.';
  }
});
