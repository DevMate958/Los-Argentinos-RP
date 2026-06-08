const stats = {
  connected: 124,
  max: 256,
  discord: 38,
  last: 5
};

const tiktokData = {
  followers: "53.4K",
  likes: "178K",
  live: true,
  videos: [
    {
      title: "Operativo policial en el centro",
      date: "2h",
      views: "56K",
      thumbnail: "https://placehold.co/500x300/1f2937/9333ea"
    },
    {
      title: "Persecución épica en ruta",
      date: "1d",
      views: "84K",
      thumbnail: "https://placehold.co/500x300/111827/8b5cf6"
    },
    {
      title: "Nuevo reclutamiento SAME",
      date: "3d",
      views: "39K",
      thumbnail: "https://placehold.co/500x300/0f172a/7c3aed"
    }
  ]
};

const announcements = [
  {
    category: "Eventos",
    title: "Carrera nocturna VIP activada",
    text: "Únete hoy a la gran carrera urbana con premios exclusivos para los mejores pilotos.",
    date: "Hoy",
    pinned: true
  },
  {
    category: "Actualizaciones",
    title: "Nuevo sistema de reclutamiento",
    text: "Se implementó un formulario por facción para agilizar las postulaciones.",
    date: "2 días"
  },
  {
    category: "Mantenimiento",
    title: "Servidores offline 03:00 - 04:00",
    text: "Parches y mejoras de estabilidad para la próxima temporada.",
    date: "Mañana"
  }
];

const staff = [
  { name: "Ariel", role: "Dueño", description: "Fundador y responsable del servidor RP." },
  { name: "María", role: "Administrador", description: "Gestión de comunidad, eventos y soporte." },
  { name: "Lucas", role: "Moderador", description: "Control de normas y atención a los jugadores." }
];

function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  if (!obj) return;
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerText = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function updateStats() {
  animateValue("count-connected", 0, stats.connected, 1000);
  animateValue("count-max", 0, stats.max, 1000);
  animateValue("count-discord", 0, stats.discord, 1000);
  animateValue("count-last", 0, stats.last, 1000);
}

function renderTikTok() {
  document.getElementById("tiktok-followers").textContent = tiktokData.followers;
  document.getElementById("tiktok-likes").textContent = tiktokData.likes;
  document.getElementById("tiktok-count").textContent = `${tiktokData.videos.length} videos`;

  const liveBadge = document.getElementById("live-badge");
  liveBadge.style.display = tiktokData.live ? "inline-flex" : "none";

  const list = document.getElementById("tiktok-list");
  if (!list) return;
  list.innerHTML = "";
  tiktokData.videos.forEach((video) => {
    const card = document.createElement("article");
    card.className = "media-card";
    card.innerHTML = `
      <img src="${video.thumbnail}" alt="${video.title}" />
      <div class="media-card-content">
        <h4>${video.title}</h4>
        <p>${video.date} • ${video.views} vistas</p>
        <a href="#" target="_blank">Ver video</a>
      </div>
    `;
    list.appendChild(card);
  });
}

function renderAnnouncements() {
  const container = document.getElementById("announcements");
  if (!container) return;
  container.innerHTML = "";
  announcements.forEach((item) => {
    const card = document.createElement("article");
    card.className = "announce-card";
    card.innerHTML = `
      <div class="pill">${item.category}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <div class="small">Publicado ${item.date}</div>
    `;
    container.appendChild(card);
  });
}

function renderStaff() {
  const container = document.getElementById("staff-list");
  if (!container) return;
  container.innerHTML = "";
  staff.forEach((member) => {
    const card = document.createElement("article");
    card.className = "staff-card";
    card.innerHTML = `
      <div class="role">${member.role}</div>
      <h3>${member.name}</h3>
      <p>${member.description}</p>
    `;
    container.appendChild(card);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  updateStats();
  renderTikTok();
  renderAnnouncements();
  renderStaff();
});
