/* =====================================================================
   COMPland — CONTENIDO DE LA WEB
   Este es el único archivo que necesitas tocar para agregar análisis,
   noticias o compilaciones. Cada texto va en inglés (en) y español (es).
   Edítalo en GitHub con el lápiz, guarda ("Commit changes") y Vercel
   publica la web sola en un minuto.
   ===================================================================== */

window.COMPLAND = {

  /* Enlace a tu canal de Telegram. Mientras esté vacío, el botón no aparece. */
  telegram: "",

  /* Tu PC de pruebas: aparece junto a los análisis. */
  rig: {
    sample: true, // <- cambia a false cuando pongas tus datos reales
    cpu: "AMD Ryzen 5 5600",
    gpu: "NVIDIA GeForce RTX 3060 12 GB",
    ram: "16 GB DDR4 3200",
    os: "Windows 11",
    screen: "1080p · 144 Hz"
  },

  /* ANÁLISIS / REVIEWS
     verdict: "perfect" | "great" | "playable" | "issues" | "unplayable"
     console: tiene que ser uno del mapa: Arcade, NES, SNES, PS1, PS2, GameCube, 3DS
     sample: true muestra la etiqueta "Ejemplo". Bórrala en tus análisis reales. */
  reviews: [
    {
      sample: true,
      game: "The Legend of Zelda: The Wind Waker",
      console: "GameCube",
      emulator: "Dolphin 2512",
      date: { en: "Nov 20, 2026", es: "20 nov 2026" },
      verdict: "perfect",
      fps: "30 / 30",
      res: { en: "3x native (1080p)", es: "3x nativa (1080p)" },
      backend: "Vulkan",
      take: {
        en: "Runs locked at its original 30 fps from start to finish. The first minutes stutter while shaders compile; turn on Ubershaders and it disappears. With 3x resolution it looks like a remaster.",
        es: "Va fijo a sus 30 fps originales de principio a fin. Los primeros minutos hay tirones mientras se compilan los shaders; activa Ubershaders y desaparecen. A 3x de resolución parece un remaster."
      },
      settings: {
        en: "Ubershaders: Hybrid · Widescreen hack on · Anti-aliasing 2x MSAA",
        es: "Ubershaders: Híbrido · Hack de pantalla ancha activado · Antialiasing 2x MSAA"
      },
      recommended: { cpu: "Ryzen 5 3600 / Core i5-9400", gpu: "GTX 1650 / RX 570", ram: "8 GB" },
      link: ""
    },
    {
      sample: true,
      game: "God of War II",
      console: "PS2",
      emulator: "PCSX2 2.4",
      date: { en: "Nov 14, 2026", es: "14 nov 2026" },
      verdict: "playable",
      fps: "52 / 60",
      res: { en: "2x native (720p)", es: "2x nativa (720p)" },
      backend: "Vulkan",
      take: {
        en: "Fully playable, but the big boss fights drop below 60. Going above 2x resolution makes some effects glitch, so I'd stay there. Great experience overall with a controller.",
        es: "Se puede jugar entero, pero en los jefes grandes baja de 60. Subir más de 2x de resolución rompe algunos efectos, así que me quedaría ahí. Con mando la experiencia es muy buena."
      },
      settings: {
        en: "EE Cycle Rate: +1 · Blending accuracy: Basic · Texture filtering: Bilinear (PS2)",
        es: "EE Cycle Rate: +1 · Precisión de blending: Básica · Filtrado de texturas: Bilinear (PS2)"
      },
      recommended: { cpu: "Ryzen 5 5600 / Core i5-12400", gpu: "GTX 1660 / RX 6600", ram: "16 GB" },
      link: ""
    }
  ],

  /* NOTICIAS */
  news: [
    { lead: true, tags: ["3DS"], date: { en: "Nov 2, 2026", es: "2 nov 2026" },
      title: { en: "Manic EMU 2.0.2 speeds up 3DS emulation on iPhone and iPad", es: "Manic EMU 2.0.2 acelera la emulación de 3DS en iPhone y iPad" },
      text: { en: "The update improves 3DS performance, especially in the Home Menu through the Azahar core, and adds window support on iPad.", es: "La actualización mejora el rendimiento de 3DS, sobre todo en el menú Home con el núcleo Azahar, y suma soporte de ventanas en iPad." },
      source: "Notebookcheck", url: "https://notebookcheck.net/Manic-EMU-update-improves-Nintendo-3DS-emulation-and-adds-iPad-window-support.1441026.0.html" },
    { tags: ["GameCube"], date: { en: "Sep 10, 2026", es: "10 sep 2026" },
      title: { en: "Star Fox Adventures lands on GameCube for Switch 2", es: "Star Fox Adventures llega a GameCube en Switch 2" },
      text: { en: "It joins GameCube – Nintendo Classics, which needs Nintendo Switch Online + Expansion Pack. Pokémon Colosseum is announced as the next one.", es: "Se suma a GameCube – Nintendo Classics, que requiere Nintendo Switch Online + Paquete de expansión. Pokémon Colosseum está anunciado como el siguiente." },
      source: "GameWith", url: "https://gamewith.jp/switch2/article/show/4036" },
    { tags: ["GameCube"], date: { en: "Aug 13, 2026", es: "13 ago 2026" },
      title: { en: "Super Mario Sunshine joins the GameCube collection", es: "Super Mario Sunshine se une a la colección de GameCube" },
      text: { en: "Nintendo added it to GameCube – Nintendo Classics on Switch 2 for Expansion Pack members.", es: "Nintendo lo agregó a GameCube – Nintendo Classics en Switch 2 para miembros del Paquete de expansión." },
      source: "Super Mario Wiki", url: "https://www.mariowiki.com/Nintendo_GameCube_–_Nintendo_Classics" },
    { warn: true, tags: ["Security"], date: { en: "2026", es: "2026" },
      title: { en: "Fake PS5 emulators steal passwords", es: "Falsos emuladores de PS5 roban contraseñas" },
      text: { en: "Malware posing as two popular PS5 emulators spread through GitHub. Only download emulators from their official site.", es: "Malware disfrazado de dos emuladores populares de PS5 circuló por GitHub. Descarga emuladores solo desde su sitio oficial." },
      source: "Tom's Hardware", url: "https://www.tomshardware.com/tag/emulation" },
    { tags: ["PS2"], date: { en: "2026", es: "2026" },
      title: { en: "ARMSX2 reaches version 1.0", es: "ARMSX2 llega a su versión 1.0" },
      text: { en: "PS2 emulation on Android takes a big step with the first stable release of ARMSX2.", es: "La emulación de PS2 en Android da un salto con la primera versión estable de ARMSX2." },
      source: "Time Extension", url: "https://www.timeextension.com/tags/emulation?page=2" },
    { tags: ["3DS"], date: { en: "2026", es: "2026" },
      title: { en: "Azahar keeps improving 3DS emulation", es: "Azahar sigue mejorando la emulación de 3DS" },
      text: { en: "The 3DS emulator is moving fast and already powers apps like Manic EMU.", es: "El emulador de 3DS avanza rápido y ya es la base de apps como Manic EMU." },
      source: "Time Extension", url: "https://www.timeextension.com/tags/emulation?page=2" },
    { tags: ["Industry"], date: { en: "2026", es: "2026" },
      title: { en: "Atari buys emulation studio Implicit Conversions", es: "Atari compra el estudio de emulación Implicit Conversions" },
      text: { en: "Atari adds another studio that specializes in bringing classics to modern consoles.", es: "Atari suma otro estudio especializado en llevar clásicos a consolas actuales." },
      source: "GamesIndustry.biz via GameDev.net", url: "https://gamedev.net/news/topic/emulation/" },
    { tags: ["Arcade", "Multi-system"], date: { en: "Feb 23, 2026", es: "23 feb 2026" },
      title: { en: "Lakka 6.1 ships RetroArch 1.22.2", es: "Lakka 6.1 trae RetroArch 1.22.2" },
      text: { en: "The distro that turns a PC or Raspberry Pi into a retro console gets an update, with images tuned for CRT screens.", es: "La distribución que convierte una PC o Raspberry Pi en consola retro se actualiza, con imágenes optimizadas para pantallas CRT." },
      source: "AlternativeTo", url: "https://alternativeto.net/news/tag/game-emulation" }
  ],

  /* COMPILACIONES */
  collections: [
    { title: "Toy Story: Retro Roundup!", tags: ["SNES", "PS1"], color: "#3FCB7A",
      date: { en: "Oct 15, 2026", es: "15 oct 2026" }, by: "Digital Eclipse / Atari", price: "US$29.99", on: "PS5, PS4, Xbox, Switch, Switch 2, PC",
      text: { en: "Five Toy Story games plus A Bug's Life in their Genesis, SNES, Game Boy and PS1 versions, with rewind and practice mode.", es: "Cinco juegos de Toy Story y A Bug's Life en versiones de Genesis, SNES, Game Boy y PS1, con rebobinar y modo práctica." },
      url: "https://www.gematsu.com/games/toy-story-retro-roundup" },
    { title: "Joe & Mac Retro Collection", tags: ["SNES"], color: "#FF4A3D",
      date: { en: "Oct 29, 2026", es: "29 oct 2026" }, by: "Red Art Games", price: "US$19.99", on: "Switch, Switch 2, PS5, Xbox, Steam",
      text: { en: "Three SNES classics and a brand-new Boss Rush mode. Physical edition in early 2027.", es: "Tres clásicos de SNES y un modo Boss Rush nuevo. Edición física a inicios de 2027." },
      url: "https://www.gematsu.com/2026/08/joe-mac-retro-collection-launches-october-29" },
    { title: "Barbie Rewind", tags: ["Multi-system"], color: "#FF8FC8",
      date: { en: "Nov 12, 2026", es: "12 nov 2026" }, by: "Atari", price: "", on: "PS5, Switch, Switch 2",
      text: { en: "Sixteen games from the '90s and early 2000s, plus a new Dreamhouse design game.", es: "Dieciséis juegos de los 90 y principios de los 2000, más un juego nuevo de diseño de la Dreamhouse." },
      url: "https://www.vice.com/en/article/bundle-of-16-retro-games-from-the-90s-and-early-2000s-is-coming-to-nintendo-switch-and-ps5/" },
    { title: "SUNSOFT is Back! Retro Game Selection 2", tags: ["NES"], color: "#FFD34E",
      date: { en: "Dec 17, 2026", es: "17 dic 2026" }, by: "SUNSOFT", price: "", on: "Switch, PS5",
      text: { en: "The second entry in Sunsoft's retro series, including its first console game from 1985.", es: "Segunda entrega de la serie retro de Sunsoft, con su primer juego de consola de 1985." },
      url: "https://www.dekudeals.com/items/sunsoft-is-back-retro-game-selection-2" },
    { title: "GameCube – Nintendo Classics", tags: ["GameCube"], color: "#8C7CFF",
      date: { en: "Service", es: "Servicio" }, by: "Nintendo", price: "Expansion Pack", on: "Switch 2",
      text: { en: "Wind Waker, F-Zero GX, SoulCalibur II, Mario Sunshine, Star Fox Adventures and more, with new games every few months.", es: "Wind Waker, F-Zero GX, SoulCalibur II, Mario Sunshine, Star Fox Adventures y más, con nuevos juegos cada pocos meses." },
      url: "https://www.nintendo.com/us/store/products/nintendo-gamecube-nintendo-classics-switch-2/" }
  ],

  /* CALENDARIO */
  calendar: [
    { date: { en: "Oct 15", es: "15 oct" }, title: "Toy Story: Retro Roundup!", by: "Digital Eclipse / Atari" },
    { date: { en: "Oct 29", es: "29 oct" }, title: "Joe & Mac Retro Collection", by: "Red Art Games" },
    { date: { en: "Nov 12", es: "12 nov" }, title: "Barbie Rewind", by: "Atari" },
    { date: { en: "Dec 17", es: "17 dic" }, title: "SUNSOFT is Back! Retro Game Selection 2", by: "SUNSOFT" },
    { date: { en: "Soon", es: "Pronto" }, title: "Pokémon Colosseum", by: "GameCube – Nintendo Classics, Switch 2" }
  ],

  /* DÓNDE JUGAR */
  routes: [
    { title: { en: "Official emulators", es: "Emuladores oficiales" },
      text: { en: "Only download them from these sites. They're free and legal.", es: "Descárgalos solo desde estos sitios. Son gratis y legales." },
      links: [
        ["RetroArch", "https://www.retroarch.com", { en: "One app for dozens of consoles", es: "Un solo programa para decenas de consolas" }],
        ["Dolphin", "https://dolphin-emu.org", { en: "GameCube and Wii", es: "GameCube y Wii" }],
        ["PCSX2", "https://pcsx2.net", { en: "PlayStation 2 on PC", es: "PlayStation 2 en PC" }],
        ["DuckStation", "https://www.duckstation.org", { en: "PlayStation 1", es: "PlayStation 1" }],
        ["Azahar", "https://azahar-emu.org", { en: "Nintendo 3DS", es: "Nintendo 3DS" }],
        ["MAME", "https://www.mamedev.org", { en: "Arcade machines", es: "Máquinas arcade" }]
      ] },
    { title: { en: "Legal classics", es: "Clásicos legales" },
      text: { en: "Services and stores where the games already are, licensed.", es: "Servicios y tiendas donde los juegos ya están, con licencia." },
      links: [
        ["Nintendo Switch Online", "https://www.nintendo.com/us/switch/online/", { en: "NES, SNES, N64, GBA and GameCube on Switch 2", es: "NES, SNES, N64, GBA y GameCube en Switch 2" }],
        ["Antstream Arcade", "https://www.antstream.com", { en: "Over a thousand classics by subscription", es: "Más de mil clásicos por suscripción" }],
        ["GOG", "https://www.gog.com", { en: "Classic PC games, DRM-free", es: "Juegos de PC clásicos sin DRM" }],
        ["Evercade", "https://evercade.co.uk", { en: "Cartridges with official collections", es: "Cartuchos con colecciones oficiales" }]
      ] },
    { title: { en: "Your own games", es: "Tus propios juegos" },
      text: { en: "The legal way to use ROMs: back up the cartridges and discs you already own.", es: "La forma legal de usar ROMs: copiar los cartuchos y discos que ya tienes." },
      links: [
        ["Dolphin guides", "https://dolphin-emu.org/docs/guides/", { en: "How to back up your GameCube and Wii discs", es: "Cómo copiar tus discos de GameCube y Wii" }],
        ["Homebrew on itch.io", "https://itch.io/games/tag-homebrew", { en: "New games for old consoles, free and legal", es: "Juegos nuevos para consolas viejas, gratis y legales" }],
        ["RetroArch docs", "https://docs.libretro.com", { en: "Setup, cores and the BIOS you should dump from your own console", es: "Configuración, núcleos y BIOS que debes sacar de tu propia consola" }]
      ] }
  ]
};
