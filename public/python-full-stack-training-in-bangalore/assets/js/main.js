const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'Close' : 'Menu';
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = 'Menu';
}));

document.querySelector('#pythonLeadForm')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector('.form-message');
  const button = form.querySelector('button[type="submit"]');
  const data = Object.fromEntries(new FormData(form));
  button.disabled = true;
  button.textContent = 'Sending…';
  message.textContent = '';

  try {
    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, course: 'Python Full Stack Training in Bangalore', source: location.href, submittedAt: new Date().toISOString(), variant: 'python-full-stack-page' })
    });
    if (!response.ok) throw new Error('Request failed');
    form.reset();
    message.textContent = 'Thank you. Our course advisor will contact you shortly.';
  } catch {
    message.textContent = 'We could not send this right now. Please call +91 6361702540 or message us on WhatsApp.';
  } finally {
    button.disabled = false;
    button.innerHTML = 'Book my free demo <b>→</b>';
  }
});
