(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function a(){document.body.insertAdjacentHTML("afterbegin",`
    <header>
      <nav>
        <h1>Mindful Therapy</h1>
            <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="book.html">Book</a></li>
            <li><a href="testimonies.html">Testimonials</a></li>
            </ul>
      </nav>
    </header>
  `)}function l(){document.body.insertAdjacentHTML("beforeend",`
    <footer>
      <p>&copy; 2025 Mindful Therapy. All rights reserved.</p>
      <div class="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener">
          <img src="images/facebook.svg" alt="Facebook" class="social-icon">
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener">
          <img src="images/instagram.svg" alt="Instagram" class="social-icon">
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener">
          <img src="images/x.svg" alt="X" class="social-icon">
        </a>
      </div>
    </footer>
  `)}document.addEventListener("DOMContentLoaded",()=>{a(),l()});
