
/* --------------------------------------------------------------------------
   1. Reset & Basic Settings
   -------------------------------------------------------------------------- */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, sans-serif;
  color: #27272a;
  line-height: 1.6;
  background: #fafafa;
}

/* --------------------------------------------------------------------------
   2. Header & Navigation
   -------------------------------------------------------------------------- */
header {
  background: #18181b;
  color: #fafafa;
  padding: 20px 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.menu-toggle {
  display: none;
}

nav a {
  color: #d4d4d8;
  text-decoration: none;
  margin-left: 22px;
  font-size: 14px;
}

/* --------------------------------------------------------------------------
   3. Hero Section & Primary Button
   -------------------------------------------------------------------------- */
.hero {
  background: linear-gradient(135deg, #18181b, #3f3f46);
  color: #fafafa;
  padding: 110px 8%;
  text-align: center;
}

.hero h1 {
  font-size: clamp(32px, 6vw, 54px);
  margin-bottom: 18px;
}

.hero p {
  max-width: 600px;
  margin: auto;
  color: #d4d4d8;
}

.btn {
  display: inline-block;
  background: #ffffff;
  color: #18181b;
  padding: 13px 25px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 28px;
}

/* --------------------------------------------------------------------------
   4. General, About, Services & Contact Sections
   -------------------------------------------------------------------------- */
section {
  padding: 75px 8%;
  text-align: center;
}

section h2 {
  font-size: 32px;
  margin-bottom: 15px;
  color: #18181b;
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
  max-width: 850px;
  margin: 35px auto 0;
}

.card {
  background: #ffffff;
  padding: 35px 25px;
  border-radius: 14px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  border: 1px solid #e4e4e7;
}

.card h3 {
  margin-bottom: 10px;
  color: #18181b;
}

.about {
  background: #ffffff;
}

.contact {
  background: #f4f4f5;
}

/* --------------------------------------------------------------------------
   5. Footer
   -------------------------------------------------------------------------- */
footer {
  background: #18181b;
  color: #fafafa;
  text-align: center;
  padding: 25px;
}

/* --------------------------------------------------------------------------
   6. Portfolio & Innovation Section
   -------------------------------------------------------------------------- */
.innovation-section {
  padding: 75px 8%;
  background: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  color: #27272a;
  text-align: left;
}

.innovation-container {
  max-width: 1200px;
  margin: auto;
}

.innovation-header {
  max-width: 780px;
  margin: 0 auto 55px;
  text-align: center;
}

.innovation-label {
  display: inline-block;
  padding: 9px 16px;
  border-radius: 30px;
  background: #f4f4f5;
  color: #18181b;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
}

.innovation-header h2 {
  font-size: clamp(30px, 5vw, 43px);
  margin: 20px 0 15px;
  color: #18181b;
}

.innovation-header p {
  font-size: 15px;
  line-height: 1.9;
  color: #52525b;
  margin: 0;
}

.innovation-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.project-card {
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #e4e4e7;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition: transform .3s, box-shadow .3s;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.project-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
  background: #f4f4f5;
}

.project-content {
  padding: 26px;
}

.project-number {
  font-size: 12px;
  font-weight: bold;
  color: #52525b;
  letter-spacing: 1px;
}

.project-content h3 {
  margin: 12px 0;
  font-size: 23px;
  color: #18181b;
}

.project-content p {
  font-size: 14px;
  line-height: 1.8;
  color: #52525b;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 18px 0;
}

.project-tags span {
  font-size: 11px;
  padding: 7px 11px;
  border-radius: 20px;
  background: #f4f4f5;
  color: #27272a;
  font-weight: 600;
}

.project-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 19px;
  background: #18181b;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: background .2s;
}

.project-button:hover {
  background: #3f3f46;
}

/* --------------------------------------------------------------------------
   7. Project Detail Modal
   -------------------------------------------------------------------------- */
.project-modal {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 9999;
  padding: 25px;
  overflow-y: auto;
}

.project-modal.active {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(24, 24, 27, 0.75);
  backdrop-filter: blur(5px);
}

.modal-content {
  position: relative;
  width: 100%;
  max-width: 850px;
  margin: auto;
  padding: 35px;
  background: #ffffff;
  border-radius: 16px;
  z-index: 2;
  animation: modalShow .3s ease;
  text-align: left;
}

@keyframes modalShow {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: sticky;
  float: right;
  top: 10px;
  border: none;
  background: #f4f4f5;
  color: #18181b;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  font-size: 25px;
  cursor: pointer;
  z-index: 3;
}

.modal-image {
  width: 100%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 25px;
}

.modal-content h2 {
  font-size: 28px;
  color: #18181b;
  margin: 15px 0;
}

.modal-content h3 {
  font-size: 17px;
  color: #18181b;
  margin-top: 28px;
}

.modal-content p,
.modal-content li {
  font-size: 14px;
  line-height: 1.9;
  color: #52525b;
}

.modal-content ul {
  padding-left: 20px;
}

.modal-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 15px;
}

.modal-tech span {
  background: #f4f4f5;
  color: #27272a;
  border-radius: 6px;
  padding: 9px 13px;
  font-size: 12px;
  font-weight: 600;
}

.innovation-highlight {
  margin-top: 25px;
  padding: 22px;
  background: #f4f4f5;
  border-left: 4px solid #18181b;
  border-radius: 8px;
}

.innovation-highlight h3 {
  margin: 0 0 8px;
}

.innovation-highlight p {
  margin: 0;
}

/* --------------------------------------------------------------------------
   8. Responsive Design (Media Queries)
   -------------------------------------------------------------------------- */
@media (max-width: 768px) {
  header {
    padding: 18px 5%;
    position: relative;
  }

  .menu-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 26px;
    height: 18px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .menu-toggle span {
    display: block;
    width: 100%;
    height: 2.5px;
    background: #fafafa;
    border-radius: 2px;
  }

  nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #18181b;
    flex-direction: column;
    padding: 10px 5% 18px;
    border-top: 1px solid #27272a;
    z-index: 1000;
  }

  nav.active {
    display: flex;
  }

  nav a {
    margin-left: 0;
    padding: 12px 0;
    font-size: 14px;
    border-bottom: 1px solid #27272a;
  }

  nav a:last-child {
    border-bottom: none;
  }

  .hero {
    padding: 85px 6%;
  }

  .cards,
  .innovation-grid {
    grid-template-columns: 1fr;
  }

  section,
  .innovation-section {
    padding: 60px 6%;
  }

  .project-image {
    height: 220px;
  }

  .modal-content {
    padding: 23px 18px;
  }

  .modal-content h2 {
    font-size: 23px;
  }
}