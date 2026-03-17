export function renderHeader(imagePath) {
  const header = document.querySelector("header");
  if (header) {
    header.innerHTML = `<img src="${imagePath}" alt="Imagem da Clínica" />`;
  }
}

export function renderNav() {
  const nav = document.querySelector("nav");
  if (nav) {
    nav.innerHTML = `
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About the Clinic</a></li>
        <li><a href="hours.html">Office Hours</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    `;
  }
}

export function renderFooter() {
  const footer = document.querySelector("footer");
  if (footer) {
    footer.innerHTML = `<p>Contact: (11) 1234-5678 | Email: contact@clinic.com</p>`;
  }
}

// Auto-initialize components based on data attributes
document.addEventListener("DOMContentLoaded", () => {
  const headerImg = document.body.dataset.headerImg;
  if (headerImg) renderHeader(headerImg);
  renderNav();
  renderFooter();
});
