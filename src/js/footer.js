export function loadFooter() {
  const html = `
    <footer>
      <p>&copy; 2025 Mindful Therapy. All rights reserved.</p>
      <div class="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener">
          <img src="/public/images/facebook.svg" alt="Facebook" class="social-icon">
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener">
          <img src="/public/images/instagram.svg" alt="Instagram" class="social-icon">
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener">
          <img src="/public/images/x.svg" alt="X" class="social-icon">
        </a>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML("beforeend", html);
}
