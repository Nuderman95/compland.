/* COMPland — lógica de la web. El contenido se edita en content.js */
{
const D = window.COMPLAND;
const T = {
  en: {
    navAria: "Sections", navReviews: "Reviews", navNews: "News", navColl: "Collections", navCal: "Calendar", navWhere: "Where to play",
    h1: "The land of emulation and compilations",
    lede: "Honest reviews of how retro games really run on emulators, tested on a real PC, plus the news and collections that matter. Pick a console on the map.",
    tg: "Join the Telegram channel", search: "Search COMPland", hint: "Swipe the map to see every console.",
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
    topics: "topics", showing: "Showing", searching: "Search", reviewsN: "reviews", newsN: "news",
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
    tg: "Únete al canal de Telegram", search: "Buscar en COMPland", hint: "Desliza el mapa para ver todas las consolas.",
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
    topics: "temas", showing: "Mostrando", searching: "Búsqueda", reviewsN: "análisis", newsN: "noticias",
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

const STOPS = [
  { id: "Arcade", x: 130, y: 300 }, { id: "NES", x: 290, y: 170 }, { id: "SNES", x: 460, y: 310 },
  { id: "PS1", x: 640, y: 160 }, { id: "PS2", x: 790, y: 300 },
  { id: "GameCube", x: 960, y: 165 }, { id: "3DS", x: 1080, y: 320 }];

/* map */
let seed = 7; const rnd = () => (seed = seed * 16807 % 2147483647) / 2147483647;
const U = 20, cells = new Map(), grass = new Set();
STOPS.forEach(s => { const cx = s.x / U, cy = s.y / U; for (let x = -7; x <= 7; x++) for (let y = -6; y <= 6; y++) { const r = Math.hypot(x / 1.25, y); const k = `${Math.round(cx + x)},${Math.round(cy + y)}`; if (r < 3.9 + rnd() * 1.3) cells.set(k, 1); if (r < 2.2 + rnd() * 1.3 && !(x === 0 && y >= -1 && y <= 1)) grass.add(k); } });
[[0, 1], [1, 2], [3, 4], [5, 6]].forEach(([a, b]) => { const A = STOPS[a], B = STOPS[b]; for (let s = 0; s <= 1; s += .04) { const x = Math.round((A.x + (B.x - A.x) * s) / U), y = Math.round((A.y + (B.y - A.y) * s) / U); for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) cells.set(`${x + dx},${y + dy}`, 1); } });
let waves = ""; for (let i = 0; i < 46; i++) { const x = rnd() * 1180, y = rnd() * 440; if (!cells.has(`${Math.round(x / U)},${Math.round(y / U)}`)) waves += `<path d="M${x.toFixed(0)} ${y.toFixed(0)}q6-6 12 0t12 0" fill="none" stroke="#5C7CF0" stroke-width="3" stroke-linecap="round"/>`; }
let shade = "", land = "", green = "";
cells.forEach((_, k) => { const [x, y] = k.split(",").map(Number); shade += `<rect x="${x * U}" y="${y * U + 10}" width="${U}" height="${U}"/>`; land += `<rect x="${x * U}" y="${y * U}" width="${U + 1}" height="${U + 1}"/>`; });
grass.forEach(k => { if (!cells.has(k)) return; const [x, y] = k.split(",").map(Number); green += `<rect x="${x * U}" y="${y * U}" width="${U + 1}" height="${U + 1}"/>`; });
const route = STOPS.map((s, i) => (i ? "L" : "M") + s.x + " " + (s.y + 6)).join("");
$("world").setAttribute("shape-rendering", "crispEdges");
$("world").innerHTML = `<rect width="1200" height="460" fill="#1D47D8"/>${waves}<g fill="#1536A8">${shade}</g><g fill="#FFD34E">${land}</g><g fill="#3FCB7A">${green}</g><path d="${route}" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-dasharray=".1 14" shape-rendering="auto"/>`;
const count = id => D.reviews.filter(r => r.console === id).length + D.news.filter(n => n.tags.includes(id)).length + D.collections.filter(c => c.tags.includes(id)).length;
$("map").insertAdjacentHTML("beforeend", STOPS.map(s => `<button class="stop" type="button" data-id="${s.id}" aria-pressed="false" style="left:${s.x / 12}%;top:${(s.y + 6) / 4.6}%"><span class="tag">${s.id}<span class="n">${count(s.id)}</span></span><svg class="pin" width="26" height="32" viewBox="0 0 26 32"><use href="#pinS"/></svg></button>`).join(""));
const CHIPS = ["Security", "Industry", "Multi-system"];

function matchText(parts) { return !q || parts.join(" ").toLowerCase().includes(q); }

function renderStatic() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(e => { e.textContent = t(e.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach(e => { e.innerHTML = t(e.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-aria]").forEach(e => { e.setAttribute("aria-label", t(e.dataset.i18nAria)); });
  $("lang").textContent = t("langBtn"); $("lang").setAttribute("aria-label", t("langAria"));
  document.title = "COMPland";
  if (D.telegram) { $("tg").hidden = false; $("tg").href = D.telegram; }
  $("chips").innerHTML = CHIPS.map(c => `<button class="chip" type="button" data-id="${c}" aria-pressed="false">${esc(tagName(c))}</button>`).join("");
  const r = D.rig;
  $("rig").innerHTML = (r.sample ? `<div style="grid-column:1/-1;margin-bottom:4px"><span class="sample">${t("sampleRig")}</span></div>` : "") + ["cpu", "gpu", "ram", "os", "screen"].filter(k => r[k]).map(k => `<dt>${t(k)}</dt><dd>${esc(r[k])}</dd>`).join("");
  $("scale").innerHTML = Object.keys(T.en.v).map(k => `<li><i class="v-${k}"></i><span><b>${t("v")[k]}</b>: ${t("vd")[k]}</span></li>`).join("");
  $("dates").innerHTML = D.calendar.map(d => `<li><span class="when">${esc(L(d.date))}</span><div><b>${esc(d.title)}</b><span>${esc(d.by)}</span></div></li>`).join("");
  $("routes").innerHTML = D.routes.map(r => `<div><h3>${esc(L(r.title))}</h3><p>${esc(L(r.text))}</p><ul>${r.links.map(l => `<li><a href="${esc(l[1])}">${esc(l[0])}</a><span>${esc(L(l[2]))}</span></li>`).join("")}</ul></div>`).join("");
}

function art(c, i) { let s = (i + 3) * 99991, r = () => (s = s * 16807 % 2147483647) / 2147483647, o = ""; for (let y = 0; y < 6; y++) for (let x = 0; x < 8; x++) { const v = r(); if (v < .45) o += `<rect x="${x * 10}" y="${y * 10}" width="10" height="10" fill="${v < .2 ? "#0E1A4A" : esc(c.color)}" opacity="${v < .2 ? .35 : 1}"/>`; } return `<svg viewBox="0 0 80 60" preserveAspectRatio="xMidYMid slice"><rect width="80" height="60" fill="#1D47D8"/>${o}</svg>`; }

function render() {
  const rv = D.reviews.filter(r => (!pick || r.console === pick) && matchText([r.game, r.console, r.emulator, L(r.take)]));
  $("revs").innerHTML = rv.map(r => {
    const rec = r.recommended || {};
    return `<article class="rev">
<div class="rev-top"><div><div class="meta"><span class="tg">${esc(r.console)}</span><span>${esc(r.emulator)}</span><time>${esc(L(r.date))}</time>${r.sample ? `<span class="sample">${t("sample")}</span>` : ""}</div><h3>${esc(r.game)}</h3></div><span class="verdict v-${esc(r.verdict)}">${esc(t("v")[r.verdict] || r.verdict)}</span></div>
<div class="stats"><div><b>${esc(r.fps)}</b><span>${t("fps")}</span></div><div><b>${esc(L(r.res))}</b><span>${t("res")}</span></div><div><b>${esc(r.backend)}</b><span>${t("backend")}</span></div></div>
<div class="rev-body"><div><h4>${t("take")}</h4><p>${esc(L(r.take))}</p>${r.settings ? `<p class="set">${esc(L(r.settings))}</p>` : ""}${r.link ? `<a class="more" href="${esc(r.link)}">${t("tgRead")}</a>` : ""}</div>
<div><h4>${t("recPC")}</h4><dl class="spec">${["cpu", "gpu", "ram"].filter(k => rec[k]).map(k => `<dt>${t(k)}</dt><dd>${esc(rec[k])}</dd>`).join("")}</dl></div></div>
</article>`; }).join("");
  $("revEmpty").style.display = rv.length ? "none" : "block";

  const ns = D.news.filter(n => (!pick || n.tags.includes(pick)) && matchText([L(n.title), L(n.text), n.tags.join(" "), n.source]));
  $("newsList").innerHTML = ns.map(n => `<article class="story${n.lead && !pick && !q ? " lead" : ""}"><div class="meta"><time>${esc(L(n.date))}</time>${n.tags.map(x => `<span class="tg${n.warn ? " warn" : ""}">${esc(tagName(x))}</span>`).join("")}</div><h3>${esc(L(n.title))}</h3><p>${esc(L(n.text))}</p><a class="src" href="${esc(n.url)}">${t("src")}: ${esc(n.source)}</a></article>`).join("");
  $("empty").style.display = ns.length ? "none" : "block";

  const cs = D.collections.filter(c => !pick || c.tags.includes(pick) || c.tags.includes("Multi-system"));
  $("carts").innerHTML = cs.map((c, i) => `<article class="cart"><div class="grip"></div><div class="art">${art(c, i)}</div><h3>${esc(c.title)}</h3><dl><dt>${t("out")}</dt><dd>${esc(L(c.date))}</dd><dt>${t("by")}</dt><dd>${esc(c.by)}</dd><dt>${t("on")}</dt><dd>${esc(c.on)}</dd>${c.price ? `<dt>${t("price")}</dt><dd>${esc(c.price)}</dd>` : ""}</dl><p>${esc(L(c.text))}</p><a href="${esc(c.url)}">${t("page")}</a></article>`).join("");

  $("state").textContent = [pick ? `${t("showing")}: ${tagName(pick)}` : "", q ? `${t("searching")}: “${q}”` : "", `${rv.length} ${t("reviewsN")} · ${ns.length} ${t("newsN")}`].filter(Boolean).join(". ");
  $("clear").hidden = !pick && !q;
  document.querySelectorAll(".stop,.chip").forEach(b => b.setAttribute("aria-pressed", b.dataset.id === pick));
}

document.body.addEventListener("click", e => {
  const b = e.target.closest(".stop,.chip"); if (!b) return;
  pick = pick === b.dataset.id ? "" : b.dataset.id; render();
  if (b.classList.contains("stop") && pick) $("reviews").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion:reduce)").matches ? "auto" : "smooth" });
});
$("q").addEventListener("input", e => { q = e.target.value.trim().toLowerCase(); render(); });
$("clear").addEventListener("click", () => { pick = ""; q = ""; $("q").value = ""; render(); });
$("lang").addEventListener("click", () => { lang = lang === "en" ? "es" : "en"; try { localStorage.setItem("compland-lang", lang); } catch (e) {} renderStatic(); render(); });

renderStatic(); render();
}
