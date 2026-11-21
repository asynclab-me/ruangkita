
// --------------------------------------------------------------------------
// 1. Automatic Year Initialization in Footer
// --------------------------------------------------------------------------
document.getElementById("year").textContent = new Date().getFullYear();

// --------------------------------------------------------------------------
// 2. Innovation Projects List Data
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
// 3. Render Project Cards into Grid
// --------------------------------------------------------------------------
const projectGrid = document.getElementById("projectGrid");

if (projectGrid) {
  projectGrid.innerHTML = projects.map((project, index) => `
    <article class="project-card">
      <img
        class="project-image"
        src="${project.image}"
        alt="${project.title}"
        loading="lazy"
        onerror="this.style.display='none'"
      >
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.technologies.slice(0, 3)
            .map(tech => `<span>${tech}</span>`)
            .join("")}
        </div>
        <button
          class="project-button"
          onclick="showProject(${index})"
        >
          Lihat Detail <span>→</span>
        </button>
      </div>
    </article>
  `).join("");
}

// --------------------------------------------------------------------------
// 4. Project Detail Modal Controls (Open & Close)
// --------------------------------------------------------------------------
function showProject(index) {
  const project = projects[index];
  const modal = document.getElementById("projectModal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
    <img
      src="${project.image}"
      alt="${project.title}"
      class="modal-image"
      onerror="this.style.display='none'"
    >
    <h2>${project.title}</h2>
    <h3>Deskripsi Proyek</h3>
    <p>${project.description}</p>
    <h3>Fitur dan Pengembangan</h3>
    <ul>
      ${project.features.map(feature => `<li>${feature}</li>`).join("")}
    </ul>
    <h3>Teknologi yang Digunakan</h3>
    <div class="modal-tech">
      ${project.technologies.map(tech => `<span>${tech}</span>`).join("")}
    </div>
    <div class="innovation-highlight">
      <h3>Inovasi Utama</h3>
      <p>${project.innovation}</p>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  document.getElementById("projectModal").classList.remove("active");
  document.body.style.overflow = "";
}

// --------------------------------------------------------------------------
// 5. Keyboard Event Listener (Close Modal with Escape Key)
// --------------------------------------------------------------------------
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeProject();
  }
});