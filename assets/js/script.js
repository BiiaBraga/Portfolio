const navLinks = [...document.querySelectorAll(".menu-list a")];
const progressBar = document.querySelector(".progress-bar");
const form = document.querySelector("#formulario");
const formNext = document.querySelector('input[name="_next"]');
const skillsGrid = document.querySelector(".skills-grid");
const diaryPage = document.querySelector("#diary-page");
const diaryLeftCover = document.querySelector("#diary-left-cover");
const diaryLeftStory = document.querySelector("#diary-left-story");
const diaryLeftTitle = document.querySelector("#diary-left-title");
const diaryLeftText = document.querySelector("#diary-left-text");
const diaryLeftDate = document.querySelector("#diary-left-date");
const diaryTitle = document.querySelector("#diary-title");
const diaryText = document.querySelector("#diary-text");
const diaryDate = document.querySelector("#diary-date");
const book = document.querySelector(".book");
const projectTrack = document.querySelector(".project-track");
const stackSection = document.querySelector(".stack-container");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const githubUser = "BiiaBraga";
const featuredProjects = [
  "trustway",
  "rhflow",
  "safelife",
  "Blog-Pessoal",
  "Yummy",
  "Talksy",
  "momoduo",
  "chromatic"
];
const projectLooks = {
  trustway: { icon: "🛡️", gradient: "linear-gradient(135deg, #bdf1dd, #ddd7ff)" },
  rhflow: { icon: "👥", gradient: "linear-gradient(135deg, #ffd4c5, #ffd7ec)" },
  safelife: { icon: "💚", gradient: "linear-gradient(135deg, #c7f7e3, #ffe0ef)" },
  "blog-pessoal": { icon: "📝", gradient: "linear-gradient(135deg, #f4d4ff, #ffd2ef)" },
  yummy: { icon: "🍰", gradient: "linear-gradient(135deg, #ffe5b8, #ffcfe6)" },
  talksy: { icon: "💬", gradient: "linear-gradient(135deg, #cde8ff, #ffd5f1)" },
  momoduo: { icon: "🎮", gradient: "linear-gradient(135deg, #ffd7ec, #d9f5ff)" },
  chromatic: { icon: "🎨", gradient: "linear-gradient(135deg, #ffe2f3, #dcd7ff)" }
};
const projectFallbacks = featuredProjects.map(name => ({
  name,
  description: "Projeto selecionado para o portfólio.",
  html_url: `https://github.com/${githubUser}/${name}`,
  homepage: "",
  language: "GitHub",
  topics: []
}));
const projectFallbacksByName = new Map(projectFallbacks.map(repo => [repo.name.toLowerCase(), repo]));

const diaryEntries = [
  {
    date: "Jul 2021 🌟",
    title: "Passei em uma universidade pública",
    text: "Passei na UFMT depois de me esforçar muito para conseguir. Foi uma conquista enorme e me deixou orgulhosa demais."
  },
  {
    date: "Out 2021 🎓",
    title: "Comecei Ciência da Computação",
    text: "Iniciei meu curso de Ciência da Computação na UFMT. Foi o começo de uma jornada cheia de descobertas, desafios e muita vontade de aprender."
  },
  {
    date: "Fev 2023 ✨",
    title: "Minha primeira aula",
    text: "Virei monitora de Matemática Discreta e dei minha primeira aula. Foi nesse momento que descobri que amo ensinar."
  },
  {
    date: "Nov 2023 📚",
    title: "Estrutura de Dados",
    text: "Decidi me aventurar ensinando uma matéria mais difícil e me tornei monitora de Estrutura de Dados."
  },
  {
    date: "Nov 2023 🌱",
    title: "Minha primeira startup",
    text: "Cofundei uma startup voltada a abordar a escassez de biomassa no Mato Grosso. Foi quando descobri que amava inovação."
  },
  {
    date: "Abr 2024 💻",
    title: "Informática para todos",
    text: "Dei minha primeira aula de informática para uma turma diversa e para pessoas que nunca tiveram contato com a tecnologia. Amei o desafio."
  },
  {
    date: "Out 2024 🏆",
    title: "Segundo lugar no HackMT",
    text: "Ganhei em segundo lugar no Hackathon HackMT sendo a líder da equipe. Foi uma experiência intensa e muito especial."
  },
  {
    date: "Set 2025 🏠",
    title: "Fim das matérias",
    text: "Terminei todas as matérias da faculdade e voltei para SP, onde iniciei meu TCC."
  },
  {
    date: "Fev 2026 🚀",
    title: "Bootcamp Full Stack",
    text: "Passei para o bootcamp de desenvolvimento Full Stack JavaScript da Generation Brasil."
  },
  {
    date: "Mai 2026 🌺",
    title: "Bootcamp concluído",
    text: "Terminei o bootcamp. Foi desafiador, aprendi muita coisa nova e construí vários projetos."
  }
];
const comingSoonPage = {
  date: "continua...",
  title: "Novas conquistas em breve",
  text: "Esse cantinho fica reservado para as próximas páginas da minha jornada."
};

const stacks = {
  backend: [
    ["🟢", "Node.js", 90],
    ["🔷", "TypeScript", 90],
    ["🐱", "NestJS", 90],
    ["🔐", "JWT Authentication", 80]
  ],
  frontend: [
    ["📄", "HTML", 95],
    ["🎨", "CSS", 70],
    ["💎", "Tailwind CSS", 75],
    ["⚛️", "React", 85],
    ["✨", "JavaScript", 80]
  ],
  database: [
    ["🐬", "MySQL", 90],
    ["📊", "Modelagem de Dados", 60]
  ],
  languages: [
    ["🔵", "C", 100],
    ["➕", "C++", 75],
    ["🐍", "Python", 60],
    ["☕", "Java", 70],
    ["🧩", "Estrutura de Dados", 90]
  ]
};

let currentDiary = 0;
let diaryAnimating = false;
let skillsVisible = false;

function animateSkillBars() {
  skillsGrid.classList.remove("animate-bars");
  void skillsGrid.offsetWidth;
  skillsGrid.classList.add("animate-bars");
}

function renderSkills(category) {
  skillsGrid.innerHTML = stacks[category].map(([icon, name, level]) => `
    <article class="skill-card">
      <div class="skill-head">
        <span class="skill-icon">${icon}</span>
        <div>
          <h3>${name}</h3>
          <small>${level}% à vontade</small>
        </div>
      </div>
      <div class="meter" style="--level: ${level}%"><span></span></div>
    </article>
  `).join("");

  if (skillsVisible) {
    animateSkillBars();
  }
}

function escapeHTML(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatTopic(topic = "") {
  const names = {
    api: "API",
    css: "CSS",
    html: "HTML",
    javascript: "JavaScript",
    java: "Java",
    jwt: "JWT",
    mysql: "MySQL",
    nestjs: "NestJS",
    nextjs: "Next.js",
    node: "Node.js",
    nodejs: "Node.js",
    activemq: "ActiveMQ",
    postgresql: "PostgreSQL",
    python: "Python",
    pygame: "Pygame",
    pyxel: "Pyxel",
    react: "React",
    springboot: "Spring Boot",
    tailwind: "Tailwind",
    typescript: "TypeScript"
  };
  const normalized = topic.toLowerCase().replace(/[^a-z0-9]/g, "");

  return names[normalized] || topic
    .replaceAll("-", " ")
    .replace(/\b\w/g, letter => letter.toUpperCase());
}

function getProjectTags(repo) {
  const topics = (repo.topics || []).filter(Boolean).map(formatTopic);
  return [...new Set(topics)];
}

function renderProjects(repos) {
  projectTrack.innerHTML = repos.map(repo => {
    const key = repo.name.toLowerCase();
    const look = projectLooks[key] || { icon: "✨", gradient: "linear-gradient(135deg, #ffd7ec, #ddd7ff)" };
    const description = repo.description || "Projeto selecionado para o portfólio.";
    const tags = getProjectTags(repo);
    const demoLink = repo.homepage
      ? `<a href="${escapeHTML(repo.homepage)}" target="_blank" class="button button-primary" rel="noreferrer">Demo</a>`
      : "";

    return `
      <article class="project-card">
        <div class="project-cover" style="background: ${look.gradient}">
          <span class="project-icon">${look.icon}</span>
        </div>
        <div class="project-body">
          <h3>${escapeHTML(repo.name)}</h3>
          <p>${escapeHTML(description)}</p>
          <div class="project-tags">
            ${tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}
          </div>
          <div class="project-actions">
            <a href="${escapeHTML(repo.html_url)}" target="_blank" class="button button-soft" rel="noreferrer">Código</a>
            ${demoLink}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

async function loadGithubProjects() {
  try {
    const response = await fetch(`https://api.github.com/users/${githubUser}/repos?per_page=100&sort=updated`);
    if (!response.ok) throw new Error("GitHub API unavailable");

    const repos = await response.json();
    const reposByName = new Map(repos.map(repo => [repo.name.toLowerCase(), repo]));
    const selectedRepos = featuredProjects
      .map(name => reposByName.get(name.toLowerCase()) || projectFallbacksByName.get(name.toLowerCase()));

    renderProjects(selectedRepos);
  } catch (error) {
    renderProjects(projectFallbacks);
  }
}

function getDiarySpreadIndex(index) {
  const totalPages = diaryEntries.length + 2;
  const totalSpreads = Math.ceil(totalPages / 2);
  const spread = ((Math.round(index / 2) % totalSpreads) + totalSpreads) % totalSpreads;
  return spread * 2;
}

function getDiaryPage(pageIndex) {
  if (pageIndex === 0) return null;
  return diaryEntries[pageIndex - 1] || comingSoonPage;
}

function renderDiarySide(side, entry) {
  const date = side === "left" ? diaryLeftDate : diaryDate;
  const title = side === "left" ? diaryLeftTitle : diaryTitle;
  const text = side === "left" ? diaryLeftText : diaryText;

  date.textContent = entry.date;
  title.textContent = entry.title;
  text.textContent = entry.text;
}

function setDiary(index) {
  currentDiary = getDiarySpreadIndex(index);
  const isCoverSpread = currentDiary === 0;
  const leftEntry = getDiaryPage(currentDiary);
  const rightIndex = currentDiary + 1;
  const rightEntry = getDiaryPage(rightIndex);

  diaryPage.textContent = `${currentDiary + 1}-${rightIndex + 1}`;
  diaryLeftCover.hidden = !isCoverSpread;
  diaryLeftStory.hidden = isCoverSpread;
  if (leftEntry) {
    renderDiarySide("left", leftEntry);
  }
  renderDiarySide("right", rightEntry);
}

function turnDiary(direction) {
  if (diaryAnimating) return;
  diaryAnimating = true;
  book.classList.remove("turning");
  void book.offsetWidth;
  book.classList.add("turning");

  window.setTimeout(() => {
    setDiary(currentDiary + direction * 2);
  }, 330);

  window.setTimeout(() => {
    book.classList.remove("turning");
    diaryAnimating = false;
  }, 720);
}

function updateProgress() {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const percent = height > 0 ? (scrollTop / height) * 100 : 0;
  progressBar.style.width = `${percent}%`;
}

function updateActiveLink() {
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;
  const contactSection = document.querySelector("#contact");

  const current = pageBottom && contactSection
    ? contactSection
    : sections.reduce((closest, section) => {
      const distance = Math.abs(section.getBoundingClientRect().top - window.innerHeight * 0.35);
      return distance < closest.distance ? { section, distance } : closest;
    }, { section: sections[0], distance: Infinity }).section;

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
  });
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    renderSkills(tab.dataset.stack);
  });
});

const stackObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    skillsVisible = true;
    animateSkillBars();
  });
}, { threshold: 0.35 });

stackObserver.observe(stackSection);

document.querySelectorAll("[data-diary]").forEach(button => {
  button.addEventListener("click", () => {
    turnDiary(button.dataset.diary === "next" ? 1 : -1);
  });
});

document.querySelectorAll("[data-project]").forEach(button => {
  button.addEventListener("click", () => {
    projectTrack.scrollBy({
      left: button.dataset.project === "next" ? 360 : -360,
      behavior: "smooth"
    });
  });
});

form.addEventListener("submit", async event => {
  event.preventDefault();
  document.querySelectorAll("form span").forEach(span => span.textContent = "");

  const fields = {
    nome: document.querySelector("#nome"),
    email: document.querySelector("#email"),
    assunto: document.querySelector("#assunto"),
    mensagem: document.querySelector("#mensagem")
  };

  let valid = true;

  if (fields.nome.value.trim().length < 3) {
    document.querySelector("#erro-nome").textContent = "O nome precisa ter pelo menos 3 caracteres.";
    valid = false;
  }

  if (!fields.email.value.trim().match(emailRegex)) {
    document.querySelector("#erro-email").textContent = "Digite um e-mail válido.";
    valid = false;
  }

  if (fields.assunto.value.trim().length < 5) {
    document.querySelector("#erro-assunto").textContent = "O assunto precisa ter pelo menos 5 caracteres.";
    valid = false;
  }

  if (!fields.mensagem.value.trim()) {
    document.querySelector("#erro-mensagem").textContent = "A mensagem não pode ficar vazia.";
    valid = false;
  }

  if (valid) {
    const successUrl = new URL("success.html", window.location.href).href;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    formNext.value = successUrl;
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error("FormSubmit error");
      window.location.href = successUrl;
    } catch (error) {
      document.querySelector("#erro-mensagem").textContent = "Nao consegui enviar agora. Tente novamente em alguns instantes.";
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  }
});

window.addEventListener("scroll", () => {
  updateProgress();
  updateActiveLink();
});

renderSkills("backend");
setDiary(0);
loadGithubProjects();
updateProgress();
updateActiveLink();
