/* COMPland — lógica de la web. El contenido se edita en content.js */
{
const D = window.COMPLAND;
const T = {
  en: {
    navAria: "Sections", navReviews: "Reviews", navNews: "News", navColl: "Collections", navCal: "Calendar", navWhere: "Where to play",
    h1: "The land of emulation and compilations",
    lede: "Honest reviews of how retro games really run on emulators, tested on a real PC, plus the news and collections that matter. Pick a console on the map.",
    tg: "Join the Telegram channel", search: "Search COMPland", hint: "Tap or hover an island to see its consoles.",
    revH: "Emulation reviews", clear: "Show the whole map", revEmpty: "No reviews for this console yet. Pick another one on the map.",
    rigH: "My test PC", rigP: "Every review is played on this machine, so you can compare it with yours.",
    newsH: "Emulation news", newsEmpty: "No news for that search. Try another console or clear the search box.",
    collH: "Collections right now", collP: "Official collections that bring classics back with modern extras: rewind, save anywhere and more.",
    calH: "Retro calendar", safeH: "Before you download an emulator",
    safeP: "Researchers found fake PS5 emulators on GitHub that actually steal passwords. Three rules to stay safe:",
    safe1: "Only download from the project's official site. COMPland only links to those.",
    safe2: "Be wary of \"emulators\" for current consoles that promise to run everything perfectly.",
    safe3: "Never enter a password or payment details to \"activate\" an emulator.",
    safeL: "Read the story on Tom's Hardware",
    whereH: "Where to play", whereP: "COMPland doesn't host files: it points you to the official place where they already are. These are the safe routes.",
    closeH: "All of emulation, one map", closeP: "New reviews every week, tested on a real PC, plus the latest news and releases for every console.", closeB: "Back to the map",
    footA: "The land of emulation and compilations. © 2026 COMPland.",
    footB: "<b>About files:</b> COMPland doesn't host or link to copyrighted ROMs, BIOS or firmware. We point you to official stores and services, emulators from their official site, free homebrew and guides to back up your own games. Trademarks and game names belong to their owners.",
    footC: "News collected as of November 2026, each with a link to its source. Reviews are personal opinions based on the test PC shown.",
    langBtn: "ES", langAria: "Ver en español",
    topics: "topics", consoles: "Pick a console", tgShort: "Telegram", tgFollow: "Follow the reviews on Telegram", showing: "Showing", searching: "Search", reviewsN: "reviews", reviewN1: "review", newsN: "news",
    fps: "Avg / target FPS", res: "Resolution", backend: "Renderer", take: "My take", recPC: "Recommended PC",
    cpu: "CPU", gpu: "GPU", ram: "RAM", os: "System", screen: "Screen",
    tgRead: "Read the full review on Telegram", sample: "Sample", sampleRig: "Sample specs",
    out: "Out", by: "By", on: "On", price: "Price", page: "See details", src: "Source",
    v: { perfect: "Perfect", great: "Great", playable: "Playable", issues: "Issues", unplayable: "Unplayable" },
    vd: { perfect: "Runs like the original or better", great: "Tiny issues you barely notice", playable: "Beatable, with some drops or glitches", issues: "Noticeable problems, not recommended yet", unplayable: "Doesn't run well enough to play" },
    tags: { Security: "Security", Industry: "Industry", "Multi-system": "Multi-system" }
  },
  es: {
    navAria: "Secciones", navReviews: "Análisis", navNews: "Noticias", navColl: "Compilaciones", navCal: "Calendario", navWhere: "Dónde jugar",
    h1: "La tierra de la emulación y las compilaciones",
    lede: "Análisis honestos de cómo corren de verdad los juegos retro en emuladores, probados en una PC real, más las noticias y colecciones que importan. Elige una consola en el mapa.",
    tg: "Únete al canal de Telegram", search: "Buscar en COMPland", hint: "Toca o pasa el cursor por una isla para ver sus consolas.",
    revH: "Análisis de emulación", clear: "Ver todo el mapa", revEmpty: "Todavía no hay análisis de esta consola. Elige otra en el mapa.",
    rigH: "Mi PC de pruebas", rigP: "Todos los análisis se juegan en esta máquina, para que la compares con la tuya.",
    newsH: "Noticias de emulación", newsEmpty: "No hay noticias para esa búsqueda. Prueba con otra consola o borra el buscador.",
    collH: "Compilaciones del momento", collP: "Colecciones oficiales que traen clásicos con extras modernos: rebobinar, guardar en cualquier punto y más.",
    calH: "Calendario retro", safeH: "Antes de descargar un emulador",
    safeP: "Investigadores encontraron falsos emuladores de PS5 en GitHub que en realidad roban contraseñas. Tres reglas para no caer:",
    safe1: "Descarga solo desde el sitio oficial del proyecto. En COMPland enlazamos únicamente esos sitios.",
    safe2: "Desconfía de \"emuladores\" de consolas actuales que prometen jugar todo perfecto.",
    safe3: "Nunca pongas tu contraseña ni datos de pago para \"activar\" un emulador.",
    safeL: "Leer la noticia en Tom's Hardware",
    whereH: "Dónde jugar", whereP: "COMPland no guarda archivos: te lleva al lugar oficial donde ya están. Estas son las rutas seguras.",
    closeH: "Toda la emulación, un solo mapa", closeP: "Análisis nuevos cada semana, probados en una PC real, más las últimas noticias y lanzamientos de cada consola.", closeB: "Volver al mapa",
    footA: "La tierra de la emulación y las compilaciones. © 2026 COMPland.",
    footB: "<b>Sobre los archivos:</b> COMPland no aloja ni enlaza ROMs, BIOS ni firmware con derechos de autor. Te llevamos a tiendas y servicios oficiales, a emuladores desde su sitio oficial, a homebrew gratuito y a guías para copiar tus propios juegos. Las marcas y nombres de juegos pertenecen a sus dueños.",
    footC: "Noticias recopiladas a noviembre de 2026, cada una con enlace a su fuente. Los análisis son opiniones personales basadas en la PC de pruebas que se muestra.",
    langBtn: "EN", langAria: "View in English",
    topics: "temas", consoles: "Elige una consola", tgShort: "Telegram", tgFollow: "Sigue los análisis en Telegram", showing: "Mostrando", searching: "Búsqueda", reviewsN: "análisis", reviewN1: "análisis", newsN: "noticias",
    fps: "FPS promedio / objetivo", res: "Resolución", backend: "Renderizador", take: "Mi opinión", recPC: "PC recomendada",
    cpu: "CPU", gpu: "GPU", ram: "RAM", os: "Sistema", screen: "Pantalla",
    tgRead: "Leer el análisis completo en Telegram", sample: "Ejemplo", sampleRig: "Datos de ejemplo",
    out: "Sale", by: "De", on: "En", price: "Precio", page: "Ver ficha", src: "Fuente",
    v: { perfect: "Perfecto", great: "Muy bien", playable: "Jugable", issues: "Con fallos", unplayable: "No jugable" },
    vd: { perfect: "Corre como el original o mejor", great: "Detalles mínimos que casi no se notan", playable: "Se puede terminar, con bajones o fallos", issues: "Problemas visibles, todavía no lo recomiendo", unplayable: "No corre lo bastante bien para jugar" },
    tags: { Security: "Seguridad", Industry: "Industria", "Multi-system": "Multisistema" }
  }
};

let lang = "en";
try { const s = localStorage.getItem("compland-lang"); if (s === "es" || s === "en") lang = s; } catch (e) {}
const t = k => T[lang][k];
const L = v => (v && typeof v === "object") ? (v[lang] || v.en || "") : (v || "");
const esc = v => String(v).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const tagName = x => T[lang].tags[x] || x;
const $ = id => document.getElementById(id);
let pick = "", q = "";

const FAMS = {
  Nintendo: ["NES", "SNES", "N64", "GameCube", "Wii", "Wii U", "Switch", "Game Boy", "GBA", "DS", "3DS"],
  PlayStation: ["PS1", "PS2", "PS3", "PS4", "PS5", "PSP", "PS Vita"],
  Xbox: ["Xbox", "Xbox 360", "Xbox One", "Xbox Series"],
  Arcade: ["Arcade"]
};
const famOf = c => Object.keys(FAMS).find(f => f === c || FAMS[f].includes(c)) || "";
const hit = tag => tag === pick || famOf(tag) === pick;
const itemTags = () => [...D.reviews.map(r => [r.console]), ...D.news.map(n => n.tags), ...D.collections.map(c => c.tags)];
const countOf = id => itemTags().filter(tags => tags.some(x => x === id || (FAMS[id] && famOf(x) === id))).length;

const LAYOUTS = {
  wide: { W: 1200, H: 440, isles: [
    { fam: "Nintendo", x: 245, y: 200, R: 7, s: 3 },
    { fam: "PlayStation", x: 650, y: 180, R: 6.3, s: 11 },
    { fam: "Xbox", x: 1010, y: 215, R: 5.6, s: 23 },
    { fam: "Arcade", x: 455, y: 360, R: 2.3, s: 41 }],
    boat: "M90 415C320 440 600 425 820 410S1170 400 1160 200S900 20 640 25S120 20 70 200S60 380 90 415Z" },
  narrow: { W: 600, H: 880, isles: [
    { fam: "Nintendo", x: 200, y: 215, R: 5.6, s: 3 },
    { fam: "PlayStation", x: 420, y: 470, R: 5.1, s: 11 },
    { fam: "Xbox", x: 185, y: 700, R: 4.6, s: 23 },
    { fam: "Arcade", x: 480, y: 760, R: 1.9, s: 41 }],
    boat: "M40 840C200 870 520 860 560 700S600 330 540 180S380 30 200 40S30 200 60 420S10 760 40 840Z" }
};
const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
const narrowMQ = matchMedia("(max-width:700px)");
let openIsle = "";

function drawMap() {
  const Lyt = narrowMQ.matches ? LAYOUTS.narrow : LAYOUTS.wide, { W, H } = Lyt, U = 20;
  let seed = 7; const rnd = () => (seed = seed * 16807 % 2147483647) / 2147483647;
  const cells = new Set(), grass = new Set();
  Lyt.isles.forEach(I => {
    const cx = I.x / U, cy = I.y / U + 1.2, span = Math.ceil(I.R * 1.6);
    for (let x = -span; x <= span; x++) for (let y = -span; y <= span; y++) {
      const th = Math.atan2(y, x), rr = I.R * (1 + .2 * Math.sin(3 * th + I.s) + .12 * Math.sin(5 * th + I.s * 2) + .06 * Math.sin(7 * th + I.s * 3));
      const d = Math.hypot(x / 1.3, y), k = `${Math.round(cx + x)},${Math.round(cy + y)}`;
      if (d < rr) cells.add(k);
      if (d < rr * .62 - .6 + rnd() * 1.1 && I.R > 3) grass.add(k);
    }
    if (I.R > 3) for (let i = 0; i < 3; i++) { const a = rnd() * 6.28, dd = I.R * 1.45 + rnd() * 1.2; cells.add(`${Math.round(cx + Math.cos(a) * dd * 1.3)},${Math.round(cy + Math.sin(a) * dd)}`); }
  });
  let waves = "";
  for (let i = 0; i < (narrowMQ.matches ? 40 : 56); i++) {
    const x = rnd() * (W - 30), y = rnd() * (H - 20);
    if (cells.has(`${Math.round(x / U)},${Math.round(y / U)}`) || cells.has(`${Math.round(x / U) + 1},${Math.round(y / U)}`)) continue;
    waves += `<path class="wv" style="animation-delay:-${(rnd() * 4).toFixed(2)}s" d="M${x.toFixed(0)} ${y.toFixed(0)}q6-6 12 0t12 0" fill="none" stroke="#5C7CF0" stroke-width="3" stroke-linecap="round"/>`;
  }
  let shade = "", land = "", green = "", foam = "";
  cells.forEach(k => { const [x, y] = k.split(",").map(Number);
    shade += `<rect x="${x * U}" y="${y * U + 10}" width="${U}" height="${U}"/>`;
    land += `<rect x="${x * U}" y="${y * U}" width="${U + 1}" height="${U + 1}"/>`;
    if (!cells.has(`${x},${y + 1}`)) foam += `<rect x="${x * U}" y="${y * U + 30}" width="${U}" height="3"/>`; });
  let trees = "";
  grass.forEach(k => { if (!cells.has(k)) return; const [x, y] = k.split(",").map(Number); green += `<rect x="${x * U}" y="${y * U}" width="${U + 1}" height="${U + 1}"/>`;
    if (rnd() < .16) { const tx = x * U + 4, ty = y * U + 2; trees += `<rect x="${tx + 5}" y="${ty + 12}" width="3" height="6" fill="#8A5A2B"/><rect x="${tx}" y="${ty + 4}" width="13" height="9" fill="#23995A"/><rect x="${tx + 3}" y="${ty}" width="7" height="5" fill="#23995A"/><rect x="${tx + 3}" y="${ty + 5}" width="4" height="3" fill="#5BE08F"/>`; } });
  const boat = `<g id="boat"><rect x="-14" y="0" width="28" height="7" fill="#0E1A4A"/><rect x="-10" y="7" width="20" height="4" fill="#0E1A4A"/><rect x="-1" y="-20" width="3" height="20" fill="#0E1A4A"/><path d="M2 -19 L15 -4 L2 -4Z" fill="#fff"/><path d="M-2 -16 L-12 -4 L-2 -4Z" fill="#FF4A3D"/>${reduce ? "" : `<animateMotion dur="80s" repeatCount="indefinite" path="${Lyt.boat}"/>`}</g>`;
  const svg = $("world");
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.setAttribute("shape-rendering", "crispEdges");
  svg.innerHTML = `<rect width="${W}" height="${H}" fill="#1D47D8"/>${waves}<g class="foam" fill="#7E98F5">${foam}</g><g fill="#1536A8">${shade}</g><g fill="#FFD34E">${land}</g><g fill="#3FCB7A">${green}</g>${trees}${reduce ? boat.replace('<g id="boat">', `<g id="boat" transform="translate(${W * .42} ${H * .9})">`) : boat}`;
  document.querySelectorAll(".isle").forEach(e => e.remove());
  $("map").insertAdjacentHTML("beforeend", Lyt.isles.map(I => {
    const side = I.x / W > .6 ? " right" : I.x / W < .4 ? " left" : "";
    const cons = FAMS[I.fam].length > 1 ? `<div class="pop" role="group" aria-label="${I.fam}"><p>${esc(t("consoles"))}</p><div class="list">${FAMS[I.fam].map(c => { const n = countOf(c); return `<button class="con${n ? "" : " zero"}" type="button" data-id="${esc(c)}" aria-pressed="false">${esc(c)}${n ? `<span class="n">${n}</span>` : ""}</button>`; }).join("")}</div></div>` : "";
    return `<div class="isle${side}${openIsle === I.fam ? " open" : ""}" data-fam="${I.fam}" style="left:${(I.x / W * 100).toFixed(2)}%;top:${(I.y / H * 100).toFixed(2)}%"><button class="stop" type="button" data-id="${I.fam}" aria-pressed="false"${cons ? ` aria-expanded="${openIsle === I.fam}"` : ""}><span class="tag">${I.fam}${countOf(I.fam) ? `<span class="n">${countOf(I.fam)}</span>` : ""}</span><svg class="pin" width="26" height="32" viewBox="0 0 26 32"><use href="#pinS"/></svg></button>${cons}</div>`;
  }).join(""));
  syncPressed();
}
function syncPressed() {
  document.querySelectorAll(".stop,.chip,.con").forEach(b => b.setAttribute("aria-pressed", b.dataset.id === pick || (b.classList.contains("stop") && famOf(pick) === b.dataset.id && pick !== "")));
  document.querySelectorAll(".isle").forEach(e => { const o = e.dataset.fam === openIsle; e.classList.toggle("open", o); const s = e.querySelector(".stop[aria-expanded]"); if (s) s.setAttribute("aria-expanded", o); });
}
narrowMQ.addEventListener("change", () => drawMap());

const CHIPS = ["Security", "Industry", "Multi-system"];

function matchText(parts) { return !q || parts.join(" ").toLowerCase().includes(q); }

function renderStatic() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(e => { e.textContent = t(e.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(e => { e.innerHTML = t(e.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-aria]").forEach(e => { e.setAttribute("aria-label", t(e.dataset.i18nAria)); });
  $("lang").textContent = t("langBtn"); $("lang").setAttribute("aria-label", t("langAria"));
  document.title = "COMPland";
  document.querySelectorAll("[data-tg]").forEach(e => { e.hidden = !D.telegram; if (D.telegram) { e.href = D.telegram; e.target = "_blank"; e.rel = "noopener"; } });
  $("chips").innerHTML = CHIPS.map(c => `<button class="chip" type="button" data-id="${c}" aria-pressed="false">${esc(tagName(c))}</button>`).join("");
  const r = D.rig;
  $("rig").innerHTML = (r.sample ? `<div style="grid-column:1/-1;margin-bottom:4px"><span class="sample">${t("sampleRig")}</span></div>` : "") + ["cpu", "gpu", "ram", "os", "screen"].filter(k => r[k]).map(k => `<dt>${t(k)}</dt><dd>${esc(r[k])}</dd>`).join("");
  $("scale").innerHTML = Object.keys(T.en.v).map(k => `<li><i class="v-${k}"></i><span><b>${t("v")[k]}</b>: ${t("vd")[k]}</span></li>`).join("");
  $("dates").innerHTML = D.calendar.map(d => `<li><span class="when">${esc(L(d.date))}</span><div><b>${esc(d.title)}</b><span>${esc(d.by)}</span></div></li>`).join("");
  $("routes").innerHTML = D.routes.map(r => `<div><h3>${esc(L(r.title))}</h3><p>${esc(L(r.text))}</p><ul>${r.links.map(l => `<li><a href="${esc(l[1])}">${esc(l[0])}</a><span>${esc(L(l[2]))}</span></li>`).join("")}</ul></div>`).join("");
}

function art(c, i) { let s = (i + 3) * 99991, r = () => (s = s * 16807 % 2147483647) / 2147483647, o = ""; for (let y = 0; y < 6; y++) for (let x = 0; x < 8; x++) { const v = r(); if (v < .45) o += `<rect x="${x * 10}" y="${y * 10}" width="10" height="10" fill="${v < .2 ? "#0E1A4A" : esc(c.color)}" opacity="${v < .2 ? .35 : 1}"/>`; } return `<svg viewBox="0 0 80 60" preserveAspectRatio="xMidYMid slice"><rect width="80" height="60" fill="#1D47D8"/>${o}</svg>`; }

function render() {
  const rv = D.reviews.filter(r => (!pick || hit(r.console)) && matchText([r.game, r.console, r.emulator, L(r.take)]));
  $("revs").innerHTML = rv.map(r => {
    const rec = r.recommended || {};
    return `<article class="rev">
<div class="rev-top"><div><div class="meta"><span class="tg">${esc(r.console)}</span><span>${esc(r.emulator)}</span><time>${esc(L(r.date))}</time>${r.sample ? `<span class="sample">${t("sample")}</span>` : ""}</div><h3>${esc(r.game)}</h3></div><span class="verdict v-${esc(r.verdict)}">${esc(t("v")[r.verdict] || r.verdict)}</span></div>
<div class="stats"><div><b>${esc(r.fps)}</b><span>${t("fps")}</span></div><div><b>${esc(L(r.res))}</b><span>${t("res")}</span></div><div><b>${esc(r.backend)}</b><span>${t("backend")}</span></div></div>
<div class="rev-body"><div><h4>${t("take")}</h4><p>${esc(L(r.take))}</p>${r.settings ? `<p class="set">${esc(L(r.settings))}</p>` : ""}${r.link ? `<a class="more" href="${esc(r.link)}">${t("tgRead")}</a>` : ""}</div>
<div><h4>${t("recPC")}</h4><dl class="spec">${["cpu", "gpu", "ram"].filter(k => rec[k]).map(k => `<dt>${t(k)}</dt><dd>${esc(rec[k])}</dd>`).join("")}</dl></div></div>
</article>`; }).join("");
  $("revEmpty").style.display = rv.length ? "none" : "block";

  const ns = D.news.filter(n => (!pick || n.tags.some(hit)) && matchText([L(n.title), L(n.text), n.tags.join(" "), n.source]));
  $("newsList").innerHTML = ns.map(n => `<article class="story${n.lead && !pick && !q ? " lead" : ""}"><div class="meta"><time>${esc(L(n.date))}</time>${n.tags.map(x => `<span class="tg${n.warn ? " warn" : ""}">${esc(tagName(x))}</span>`).join("")}</div><h3>${esc(L(n.title))}</h3><p>${esc(L(n.text))}</p><a class="src" href="${esc(n.url)}">${t("src")}: ${esc(n.source)}</a></article>`).join("");
  $("empty").style.display = ns.length ? "none" : "block";

  const cs = D.collections.filter(c => !pick || c.tags.some(hit) || c.tags.includes("Multi-system"));
  $("carts").innerHTML = cs.map((c, i) => `<article class="cart"><div class="grip"></div><div class="art">${art(c, i)}</div><h3>${esc(c.title)}</h3><dl><dt>${t("out")}</dt><dd>${esc(L(c.date))}</dd><dt>${t("by")}</dt><dd>${esc(c.by)}</dd><dt>${t("on")}</dt><dd>${esc(c.on)}</dd>${c.price ? `<dt>${t("price")}</dt><dd>${esc(c.price)}</dd>` : ""}</dl><p>${esc(L(c.text))}</p><a href="${esc(c.url)}">${t("page")}</a></article>`).join("");

  $("state").textContent = [pick ? `${t("showing")}: ${tagName(pick)}` : "", q ? `${t("searching")}: “${q}”` : "", `${rv.length} ${rv.length === 1 ? t("reviewN1") : t("reviewsN")} · ${ns.length} ${t("newsN")}`].filter(Boolean).join(". ");
  $("clear").hidden = !pick && !q;
  syncPressed();
}

const goReviews = () => $("reviews").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
document.addEventListener("click", e => {
  const b = e.target.closest(".stop,.chip,.con");
  if (!b) { if (openIsle && !e.target.closest(".isle")) { openIsle = ""; syncPressed(); } return; }
  const id = b.dataset.id;
  if (b.classList.contains("stop")) {
    const hasPop = FAMS[id].length > 1;
    openIsle = hasPop && openIsle !== id ? id : "";
    pick = pick === id && !openIsle ? "" : id;
    render();
    if (!hasPop && pick) goReviews();
    return;
  }
  pick = pick === id ? "" : id; openIsle = ""; render();
  if (b.classList.contains("con") && pick) goReviews();
});
document.addEventListener("keydown", e => { if (e.key === "Escape" && openIsle) { openIsle = ""; syncPressed(); } });
$("q").addEventListener("input", e => { q = e.target.value.trim().toLowerCase(); render(); });
$("clear").addEventListener("click", () => { pick = ""; q = ""; $("q").value = ""; render(); });
$("lang").addEventListener("click", () => { lang = lang === "en" ? "es" : "en"; try { localStorage.setItem("compland-lang", lang); } catch (e) {} renderStatic(); drawMap(); render(); });

renderStatic(); drawMap(); render();
}
