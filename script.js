
// --------------------------------------------------------------------------
// 1. Utility Helpers (HTML Escaping & CSP-Safe Image Fallback)
// --------------------------------------------------------------------------
function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeImageURL(url) {
  const trimmed = String(url).trim();
  if (/^(https?:\/\/|\/|\.\.?\/|(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_.-]+)$/i.test(trimmed)) {
    return escapeHTML(trimmed);
  }
  return "";
}

function handleImageError(event) {
  const target = event.target;
  if (target.tagName !== "IMG") return;

  const fallback = document.createElement("div");
  fallback.className = target.classList.contains("modal-image")
    ? "image-fallback modal-image-fallback"
    : "image-fallback project-image-fallback";
  fallback.setAttribute("role", "img");
  fallback.setAttribute("aria-label", target.alt || "Gambar tidak tersedia");
  fallback.textContent = target.alt || "Pratinjau Gambar";

  target.replaceWith(fallback);
}

// --------------------------------------------------------------------------
// 2. Automatic Year Initialization in Footer
// --------------------------------------------------------------------------
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// --------------------------------------------------------------------------
// 3. Innovation Projects List Data
// --------------------------------------------------------------------------
const projects = [
  {
    number: "01",
    title: "Money Tracker AI",
    image: "assets/images/money-tracker.jpg",
    description: "Konsep aplikasi pengelolaan keuangan pribadi berbasis Artificial Intelligence (AI) untuk membantu pengguna mencatat, memantau, menganalisis, dan merencanakan kondisi keuangan secara lebih efektif.",
    features: [
      "Pencatatan pemasukan dan pengeluaran secara digital.",
      "Kategorisasi transaksi otomatis menggunakan AI.",
      "Analisis kebiasaan dan pola pengeluaran.",
      "Prediksi kondisi keuangan berdasarkan riwayat transaksi.",
      "Rekomendasi penghematan dan pengelolaan anggaran.",
      "AI Financial Assistant untuk konsultasi keuangan.",
      "Pemindaian struk belanja menggunakan teknologi OCR."
    ],
    technologies: [
      "Flutter / React Native",
      "Laravel / Node.js",
      "PostgreSQL",
      "Python",
      "Machine Learning",
      "OCR"
    ],
    innovation: "Sistem AI yang mampu menganalisis pola pengeluaran dan memberikan peringatan serta rekomendasi ketika pengguna menunjukkan kecenderungan pengeluaran yang melebihi anggaran."
  },
  {
    number: "02",
    title: "Cybersecurity Awareness",
    image: "assets/images/cybersecurity.jpg",
    description: "Konsep platform edukasi dan peningkatan kesadaran keamanan siber yang dirancang untuk membantu masyarakat memahami berbagai ancaman di dunia digital serta meningkatkan perlindungan data pribadi dan aktivitas digital.",
    features: [
      "Simulasi edukasi phishing yang aman.",
      "Pemeriksaan indikasi tautan berbahaya.",
      "Analisis kekuatan password secara lokal.",
      "Materi edukasi keamanan informasi dan privasi digital.",
      "Kuis dan tantangan cybersecurity interaktif.",
      "Penilaian tingkat kesadaran keamanan digital.",
      "Dashboard perkembangan pembelajaran pengguna."
    ],
    technologies: [
      "React / Next.js",
      "Python / FastAPI",
      "PostgreSQL",
      "Security Analysis Tools",
      "Threat Intelligence API"
    ],
    innovation: "Sistem pembelajaran keamanan siber adaptif yang mampu menyesuaikan materi edukasi berdasarkan hasil evaluasi dan tingkat pemahaman pengguna."
  },
  {
    number: "03",
    title: "Smart Learning",
    image: "assets/images/smart-learning.jpg",
    description: "Konsep platform pembelajaran digital berbasis Artificial Intelligence untuk menghadirkan pengalaman belajar yang lebih interaktif, personal, dan adaptif melalui dukungan AI sebagai asisten pembelajaran.",
    features: [
      "AI Tutor untuk menjawab pertanyaan pembelajaran.",
      "Pembuatan soal latihan secara otomatis.",
      "Rekomendasi materi berdasarkan kemampuan pengguna.",
      "Analisis perkembangan dan hasil belajar.",
      "Pembuatan ringkasan materi secara otomatis.",
      "Flashcard dan kuis pembelajaran interaktif.",
      "Rekomendasi topik yang perlu dipelajari kembali."
    ],
    technologies: [
      "Next.js / Flutter",
      "Python",
      "LLM API",
      "PostgreSQL",
      "Vector Database"
    ],
    innovation: "AI yang mampu membangun jalur pembelajaran personal berdasarkan kemampuan, kebutuhan, dan perkembangan masing-masing pengguna."
  },
  {
    number: "04",
    title: "Early Warning System",
    image: "assets/images/early-warning.jpg",
    description: "Konsep platform pemantauan dan peringatan dini bencana berbasis Internet of Things (IoT) dan kecerdasan buatan untuk memantau kondisi lingkungan serta membantu masyarakat memperoleh informasi potensi bencana.",
    features: [
      "Monitoring tinggi permukaan air secara real-time.",
      "Integrasi sensor curah hujan.",
      "Pemantauan kondisi lingkungan.",
      "Dashboard pemantauan data secara langsung.",
      "Notifikasi peringatan melalui aplikasi.",
      "Pemetaan lokasi rawan bencana.",
      "Analisis tren kenaikan permukaan air.",
      "Riwayat kejadian dan laporan kondisi lingkungan."
    ],
    technologies: [
      "ESP32",
      "Sensor Ultrasonik",
      "Sensor Hujan",
      "MQTT",
      "Python",
      "Firebase / PostgreSQL",
      "Web GIS"
    ],
    innovation: "Integrasi data sensor IoT, pemetaan digital, dan analisis tren untuk membantu mengidentifikasi potensi kondisi berbahaya serta mendukung penyampaian informasi peringatan dini kepada masyarakat."
  },
  {
    number: "05",
    title: "Pasar Digital Lokal",
    image: "assets/images/pasar-digital.jpg",
    description: "Konsep platform marketplace digital yang menghubungkan pelaku UMKM, produsen lokal, pedagang, dan konsumen dalam satu ekosistem perdagangan digital untuk memperluas jangkauan pemasaran produk lokal.",
    features: [
      "Pembuatan dan pengelolaan toko online UMKM.",
      "Katalog produk lokal secara digital.",
      "Pencarian produk berdasarkan lokasi.",
      "Pemesanan dan pembayaran digital.",
      "Rekomendasi produk menggunakan AI.",
      "Dashboard pengelolaan dan analisis penjualan.",
      "Integrasi informasi pengiriman lokal.",
      "Sistem rating dan ulasan pelanggan."
    ],
    technologies: [
      "Next.js / Flutter",
      "Laravel / Node.js",
      "MySQL / PostgreSQL",
      "Recommendation System",
      "Payment Gateway",
      "Maps API"
    ],
    innovation: "Marketplace berbasis potensi dan karakteristik daerah yang mengintegrasikan pencarian produk lokal, rekomendasi cerdas, dan informasi lokasi untuk memperluas akses pasar UMKM."
  }
];

// --------------------------------------------------------------------------
// 4. Render Project Cards into Grid
// --------------------------------------------------------------------------
const projectGrid = document.getElementById("projectGrid");

if (projectGrid) {
  projectGrid.innerHTML = projects.map((project, index) => `
    <article class="project-card">
      <img
        class="project-image"
        src="${sanitizeImageURL(project.image)}"
        alt="${escapeHTML(project.title)}"
        loading="lazy"
      >
      <div class="project-content">
        <span class="project-number">${escapeHTML(project.number)}</span>
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.description)}</p>
        <div class="project-tags">
          ${project.technologies.slice(0, 3)
            .map(tech => `<span>${escapeHTML(tech)}</span>`)
            .join("")}
        </div>
        <button
          type="button"
          class="project-button"
          data-index="${index}"
        >
          Lihat Detail <span>→</span>
        </button>
      </div>
    </article>
  `).join("");

  projectGrid.querySelectorAll(".project-image").forEach(img => {
    img.addEventListener("error", handleImageError);
  });

  projectGrid.addEventListener("click", function(event) {
    const button = event.target.closest(".project-button");
    if (!button) return;

    const index = Number(button.dataset.index);
    if (Number.isInteger(index)) {
      showProject(index);
    }
  });
}

// --------------------------------------------------------------------------
// 5. Project Detail Modal Controls (Open, Close & Focus Management)
// --------------------------------------------------------------------------
const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
let lastFocusedElement = null;

function showProject(index) {
  const project = projects[index];
  if (!project || !modal || !modalBody) return;

  lastFocusedElement = document.activeElement;

  modalBody.innerHTML = `
    <h2 id="modalTitle">${escapeHTML(project.title)}</h2>
    <h3>Deskripsi Proyek</h3>
    <p>${escapeHTML(project.description)}</p>
    <h3>Fitur dan Pengembangan</h3>
    <ul>
      ${project.features.map(feature => `<li>${escapeHTML(feature)}</li>`).join("")}
    </ul>
    <h3>Teknologi yang Digunakan</h3>
    <div class="modal-tech">
      ${project.technologies.map(tech => `<span>${escapeHTML(tech)}</span>`).join("")}
    </div>
    <div class="innovation-highlight">
      <h3>Inovasi Utama</h3>
      <p>${escapeHTML(project.innovation)}</p>
    </div>
  `;

  const modalImage = document.createElement("img");
  modalImage.className = "modal-image";
  modalImage.alt = project.title;
  modalImage.addEventListener("error", handleImageError);
  modalImage.src = sanitizeImageURL(project.image);
  modalBody.prepend(modalImage);

  Array.from(document.body.children).forEach(element => {
    if (element !== modal && element.tagName !== "SCRIPT") {
      element.setAttribute("aria-hidden", "true");
      element.inert = true;
    }
  });
  modal.setAttribute("aria-labelledby", "modalTitle");
  modal.removeAttribute("aria-hidden");
  modal.classList.add("active");
  modal.scrollTop = 0;
  document.body.style.overflow = "hidden";

  if (modalClose) {
    modalClose.focus();
  }
}

function closeProject() {
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  Array.from(document.body.children).forEach(element => {
    if (element !== modal && element.tagName !== "SCRIPT") {
      element.removeAttribute("aria-hidden");
      element.inert = false;
    }
  });
  modal.removeAttribute("aria-labelledby");
  document.body.style.overflow = "";

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

if (modalOverlay) {
  modalOverlay.addEventListener("click", closeProject);
}

if (modalClose) {
  modalClose.addEventListener("click", closeProject);
}

// --------------------------------------------------------------------------
// 6. Mobile Navigation Menu Toggle
// --------------------------------------------------------------------------
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

function closeMobileMenu() {
  if (!menuToggle || !navMenu) return;

  navMenu.classList.remove("active");
  menuToggle.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function() {
    const isActive = navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active", isActive);
    menuToggle.setAttribute("aria-expanded", String(isActive));
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("click", function(event) {
    if (!navMenu.classList.contains("active")) return;

    if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", function() {
    if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
      closeMobileMenu();
    }
  });
}

// --------------------------------------------------------------------------
// 7. Keyboard Event Listener (Escape & Focus Trap)
// --------------------------------------------------------------------------
document.addEventListener("keydown", function(event) {
  if (modal && modal.classList.contains("active")) {
    if (event.key === "Escape") {
      closeProject();
      return;
    }

    if (event.key === "Tab") {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!modal.contains(document.activeElement)) {
        event.preventDefault();
        firstElement.focus();
      } else if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
    return;
  }

  if (event.key === "Escape" && navMenu && navMenu.classList.contains("active")) {
    const focusInsideNav = navMenu.contains(document.activeElement);
    closeMobileMenu();
    if (focusInsideNav && menuToggle) {
      menuToggle.focus();
    }
  }
});