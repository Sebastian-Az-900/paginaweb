"use strict";

/* =========================================
   CINEVERSE - CATÁLOGO Y FUNCIONALIDADES
   ========================================= */

// Cambia el idioma si deseas ampliar el proyecto.
// Este catálogo de demostración funciona sin API.
const movies = [
  {
    id: 1,
    title: "Dune: Parte Dos",
    year: 2024,
    rating: 8.2,
    duration: "2h 46min",
    genres: ["Ciencia ficción", "Aventura"],
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    overview: "Paul Atreides se une a los Fremen mientras busca venganza contra quienes destruyeron a su familia. Una épica aventura entre desiertos, profecías y luchas por el poder.",
    trailer: "Way9Dexny3w",
    featured: true
  },
  {
    id: 2,
    title: "Oppenheimer",
    year: 2023,
    rating: 8.1,
    duration: "3h 00min",
    genres: ["Drama"],
    poster: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    overview: "La historia del físico J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica, en medio de dilemas científicos, políticos y personales.",
    trailer: "bK6ldnjE3Y0"
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    duration: "2h 49min",
    genres: ["Ciencia ficción", "Aventura"],
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    overview: "Un grupo de exploradores viaja más allá de nuestra galaxia para buscar un futuro para la humanidad. Una historia sobre el tiempo, la ciencia y los vínculos familiares.",
    trailer: "zSWdZVtXT7E"
  },
  {
    id: 4,
    title: "Spider-Man: No Way Home",
    year: 2021,
    rating: 8.0,
    duration: "2h 28min",
    genres: ["Acción", "Aventura"],
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    overview: "La identidad de Spider-Man cambia su vida por completo. Cuando la realidad comienza a romperse, Peter debe afrontar las consecuencias de una decisión extraordinaria.",
    trailer: "JfVOs4VSpmA"
  },
  {
    id: 5,
    title: "Avatar: El sentido del agua",
    year: 2022,
    rating: 7.6,
    duration: "3h 12min",
    genres: ["Acción", "Ciencia ficción"],
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
    overview: "Jake Sully y Neytiri protegen a su familia mientras descubren nuevos territorios de Pandora y enfrentan amenazas que ponen en peligro su hogar.",
    trailer: "d9MyW72ELq0"
  },
  {
    id: 6,
    title: "Top Gun: Maverick",
    year: 2022,
    rating: 8.2,
    duration: "2h 10min",
    genres: ["Acción", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
    overview: "Después de décadas de servicio, Maverick regresa para entrenar a una nueva generación de pilotos en una misión aérea de alto riesgo.",
    trailer: "giXco2jaZ_4"
  },
  {
    id: 7,
    title: "John Wick 4",
    year: 2023,
    rating: 7.7,
    duration: "2h 49min",
    genres: ["Acción"],
    poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
    overview: "John Wick busca una forma de derrotar a la organización que lo persigue. Su camino lo lleva a enfrentamientos decisivos en distintos rincones del mundo.",
    trailer: "qEVUtrk8_B4"
  },
  {
    id: 8,
    title: "Guardianes de la Galaxia Vol. 3",
    year: 2023,
    rating: 7.9,
    duration: "2h 30min",
    genres: ["Acción", "Ciencia ficción"],
    poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    overview: "Los Guardianes emprenden una misión para salvar a uno de los suyos. La aventura pone a prueba su amistad y revela detalles del pasado de Rocket.",
    trailer: "JqcncLPi9zw"
  },
  {
    id: 9,
    title: "El origen",
    year: 2010,
    rating: 8.4,
    duration: "2h 28min",
    genres: ["Ciencia ficción", "Acción"],
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    overview: "Un especialista capaz de infiltrarse en los sueños recibe una misión aparentemente imposible: implantar una idea en la mente de otra persona.",
    trailer: "YoHD9XEInc0"
  },
  {
    id: 10,
    title: "Coco",
    year: 2017,
    rating: 8.2,
    duration: "1h 45min",
    genres: ["Animación", "Aventura"],
    poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
    overview: "Miguel sueña con ser músico y termina viajando a la Tierra de los Muertos, donde descubre los secretos de su familia y la importancia de recordar.",
    trailer: "Rvr68u6k5sI"
  },
  {
    id: 11,
    title: "Intensamente 2",
    year: 2024,
    rating: 7.6,
    duration: "1h 36min",
    genres: ["Animación", "Aventura"],
    poster: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg",
    overview: "Riley entra en una nueva etapa de su vida y su mundo emocional cambia con la llegada de sentimientos inesperados que transforman el equilibrio de su mente.",
    trailer: "LEjhY15eCx0"
  },
  {
    id: 12,
    title: "Batman",
    year: 2022,
    rating: 7.7,
    duration: "2h 56min",
    genres: ["Acción", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    overview: "Un joven Bruce Wayne investiga una serie de crímenes en Gotham y descubre una red de corrupción que desafía todo lo que creía conocer de su ciudad.",
    trailer: "mqqft2x_Aa4"
  },
  {
    id: 13,
    title: "Gladiador",
    year: 2000,
    rating: 8.2,
    duration: "2h 35min",
    genres: ["Acción", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg",
    overview: "Un general romano pierde todo y debe luchar como gladiador mientras busca justicia en un imperio dominado por la ambición y la traición.",
    trailer: "owK1qxDselE"
  },
  {
    id: 14,
    title: "El viaje de Chihiro",
    year: 2001,
    rating: 8.5,
    duration: "2h 05min",
    genres: ["Animación", "Aventura"],
    poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
    overview: "Una niña entra en un mundo misterioso habitado por espíritus y debe encontrar el valor para salvar a sus padres y regresar a casa.",
    trailer: "ByXuk9QqQkk"
  },
  {
    id: 15,
    title: "Jurassic World",
    year: 2015,
    rating: 7.0,
    duration: "2h 04min",
    genres: ["Aventura", "Acción"],
    poster: "https://image.tmdb.org/t/p/w500/A0LZHXUzo5C60Oahvt7VxvwuzHw.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/A0LZHXUzo5C60Oahvt7VxvwuzHw.jpg",
    overview: "Un parque temático lleno de dinosaurios recibe a miles de visitantes. Un experimento genético escapa al control y convierte la atracción en una lucha por sobrevivir.",
    trailer: "RFinNxS5KN4"
  },
  {
    id: 16,
    title: "La La Land",
    year: 2016,
    rating: 7.9,
    duration: "2h 08min",
    genres: ["Drama"],
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/nrSaXF39nDfAAeLKksRCyvSzI2a.jpg",
    overview: "Una aspirante a actriz y un músico de jazz persiguen sus sueños en Los Ángeles mientras intentan encontrar un equilibrio entre el amor y sus carreras.",
    trailer: "0pdqf4P9MB8"
  },
  {
    id: 17,
    title: "Matrix",
    year: 1999,
    rating: 8.2,
    duration: "2h 16min",
    genres: ["Ciencia ficción", "Acción"],
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/icmmSD4vTTDKOq2vvdulafOGw93.jpg",
    overview: "Un programador descubre que la realidad que conoce esconde una verdad extraordinaria. Una elección cambiará su percepción del mundo para siempre.",
    trailer: "vKQi3bBA1y8"
  },
  {
    id: 18,
    title: "El caballero oscuro",
    year: 2008,
    rating: 9.0,
    duration: "2h 32min",
    genres: ["Acción", "Drama"],
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
    overview: "Batman se enfrenta a un criminal impredecible que somete a Gotham a una serie de pruebas y obliga a sus habitantes a cuestionar sus propios límites.",
    trailer: "EXeTwQWrcwY"
  }
];

/* =========================================
   ELEMENTOS Y ESTADO
   ========================================= */

const $ = (selector) => document.querySelector(selector);

const movieGrid = $("#movieGrid");
const searchInput = $("#searchInput");
const searchPanel = $("#searchPanel");
const genreFilters = $("#genreFilters");
const sortSelect = $("#sortSelect");
const resultsTitle = $("#resultsTitle");
const resultsCount = $("#resultsCount");
const emptyState = $("#emptyState");
const loadMoreButton = $("#loadMore");

const movieDialog = $("#movieDialog");
const videoDialog = $("#videoDialog");

let activeGenre = "Todas";
let favoritesOnly = false;
let visibleCount = 10;
let selectedMovieId = null;
let heroIndex = 0;
let toastTimer;

const HERO_IDS = [1, 3, 18];

// Recuperar favoritos de forma segura.
function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem("cineverse-favorites") || "[]");
    return new Set(
      Array.isArray(saved) ? saved.filter(Number.isInteger) : []
    );
  } catch {
    return new Set();
  }
}

const favorites = loadFavorites();

function saveFavorites() {
  try {
    localStorage.setItem(
      "cineverse-favorites",
      JSON.stringify([...favorites])
    );
  } catch {
    showToast("No se pudieron guardar los favoritos en este navegador.");
  }
}

/* =========================================
   UTILIDADES
   ========================================= */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function posterFallback(title) {
  const safeTitle = escapeHTML(title);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="600">
      <rect width="100%" height="100%" fill="#191e29"/>
      <circle cx="200" cy="240" r="70" fill="#ff5b35" opacity=".18"/>
      <text x="50%" y="47%" fill="#ff7958" font-size="58"
        text-anchor="middle" font-family="Arial">▶</text>
      <text x="50%" y="60%" fill="white" font-size="21"
        text-anchor="middle" font-family="Arial">${safeTitle.slice(0, 25)}</text>
      <text x="50%" y="67%" fill="#969eae" font-size="14"
        text-anchor="middle" font-family="Arial">CINEVERSE</text>
    </svg>`;

  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function getMovie(id) {
  return movies.find((movie) => movie.id === Number(id));
}

function movieGenreLabel(movie) {
  return movie.genres.join(" · ");
}

/* =========================================
   BÚSQUEDA, FILTROS Y ORDEN
   ========================================= */

function getFilteredMovies() {
  const query = searchInput.value.trim().toLocaleLowerCase("es");

  let result = movies.filter((movie) => {
    const matchesSearch =
      movie.title.toLocaleLowerCase("es").includes(query) ||
      movie.genres.some((genre) =>
        genre.toLocaleLowerCase("es").includes(query)
      ) ||
      String(movie.year).includes(query);

    const matchesGenre =
      activeGenre === "Todas" || movie.genres.includes(activeGenre);

    const matchesFavorite =
      !favoritesOnly || favorites.has(movie.id);

    return matchesSearch && matchesGenre && matchesFavorite;
  });

  switch (sortSelect.value) {
    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;

    case "year":
      result.sort((a, b) => b.year - a.year);
      break;

    case "title":
      result.sort((a, b) => a.title.localeCompare(b.title, "es"));
      break;

    default:
      result.sort((a, b) => {
        const aFeatured = a.featured ? 1 : 0;
        const bFeatured = b.featured ? 1 : 0;
        return bFeatured - aFeatured || a.id - b.id;
      });
  }

  return result;
}

/* =========================================
   DIBUJAR TARJETAS
   ========================================= */

function renderMovies() {
  const filtered = getFilteredMovies();
  const visible = filtered.slice(0, visibleCount);

  resultsTitle.textContent = favoritesOnly
    ? "Tu colección personal"
    : searchInput.value.trim()
      ? "Resultados de búsqueda"
      : activeGenre === "Todas"
        ? "Películas para descubrir"
        : activeGenre;

  resultsCount.textContent =
    `${filtered.length} ${filtered.length === 1 ? "película" : "películas"}`;

  emptyState.hidden = filtered.length !== 0;
  movieGrid.hidden = filtered.length === 0;

  loadMoreButton.hidden = visible.length >= filtered.length;

  movieGrid.innerHTML = visible.map((movie) => {
    const isFavorite = favorites.has(movie.id);

    return `
      <article class="movie-card" data-id="${movie.id}">
        <div class="poster-wrap"
             data-action="details" data-id="${movie.id}"
             tabindex="0" role="button"
             aria-label="Ver información de ${escapeHTML(movie.title)}">

          <img class="poster-image"
               src="${escapeHTML(movie.poster)}"
               alt="Póster de ${escapeHTML(movie.title)}"
               loading="lazy"
               data-fallback="${escapeHTML(movie.title)}">

          <div class="poster-gradient"></div>

          <span class="movie-rating">★ ${movie.rating.toFixed(1)}</span>

          <button class="favorite-btn ${isFavorite ? "is-favorite" : ""}"
                  data-action="favorite" data-id="${movie.id}"
                  aria-label="${isFavorite ? "Quitar de" : "Añadir a"} favoritos"
                  aria-pressed="${isFavorite}"
                  title="${isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}">
            ${isFavorite ? "♥" : "♡"}
          </button>

          <span class="card-play" aria-hidden="true">▶</span>
        </div>

        <div class="card-info">
          <h3 class="card-title" data-action="details"
              data-id="${movie.id}" tabindex="0">
            ${escapeHTML(movie.title)}
          </h3>
          <div class="card-meta">
            <span class="card-genre">${escapeHTML(movieGenreLabel(movie))}</span>
            <span class="card-year">${movie.year}</span>
          </div>
        </div>
      </article>`;
  }).join("");
}

function updateFavoriteCount() {
  $("#favoriteCount").textContent = favorites.size;
}

function refreshCatalog() {
  renderMovies();
  updateFavoriteCount();
}

function resetCatalog() {
  searchInput.value = "";
  activeGenre = "Todas";
  favoritesOnly = false;
  visibleCount = 10;
  sortSelect.value = "popular";

  genreFilters.querySelectorAll("[data-genre]").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.genre === "Todas"
    );
  });

  $("#favoritesFilter").classList.remove("active");
  refreshCatalog();
}

/* =========================================
   FAVORITOS
   ========================================= */

function toggleFavorite(id) {
  const movie = getMovie(id);
  if (!movie) return;

  if (favorites.has(movie.id)) {
    favorites.delete(movie.id);
    showToast(`"${movie.title}" se quitó de favoritos.`);
  } else {
    favorites.add(movie.id);
    showToast(`"${movie.title}" se añadió a favoritos.`);
  }

  saveFavorites();
  refreshCatalog();
  updateDialogFavoriteButton();
}

function updateDialogFavoriteButton() {
  const button = $("#dialogFavorite");
  const isFavorite = favorites.has(selectedMovieId);

  button.textContent = isFavorite ? "♥ En favoritos" : "♡ Añadir a favoritos";
}

/* =========================================
   FICHA DE PELÍCULA
   ========================================= */

function openMovieDetails(id) {
  const movie = getMovie(id);
  if (!movie) return;

  selectedMovieId = movie.id;

  $("#dialogTitle").textContent = movie.title;
  $("#dialogPoster").src = movie.poster;
  $("#dialogPoster").alt = `Póster de ${movie.title}`;
  $("#dialogBackdrop").style.backgroundImage =
    `url("${movie.backdrop}")`;

  $("#dialogMeta").innerHTML = `
    <span>★ ${movie.rating.toFixed(1)} / 10</span>
    <span>${movie.year}</span>
    <span>${escapeHTML(movie.duration)}</span>`;

  $("#dialogOverview").textContent = movie.overview;

  $("#dialogGenres").innerHTML = movie.genres.map((genre) =>
    `<span>${escapeHTML(genre)}</span>`
  ).join("");

  updateDialogFavoriteButton();

  if (!movieDialog.open) movieDialog.showModal();
}

/* =========================================
   TRÁILERES
   ========================================= */

function playTrailer(id) {
  const movie = getMovie(id);
  if (!movie) return;

  if (!movie.trailer) {
    showToast("Todavía no hay un tráiler configurado para esta película.");
    return;
  }

  // El identificador de YouTube proviene de los datos del catálogo.
  const videoId = /^[a-zA-Z0-9_-]{11}$/.test(movie.trailer)
    ? movie.trailer
    : null;

  if (!videoId) {
    showToast("El enlace del tráiler no es válido.");
    return;
  }

  $("#videoContainer").innerHTML = `
    <iframe
      src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0"
      title="Tráiler de ${escapeHTML(movie.title)}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen>
    </iframe>`;

  if (movieDialog.open) movieDialog.close();
  videoDialog.showModal();
}

/* =========================================
   PORTADA DESTACADA
   ========================================= */

function renderHero(index = 0) {
  heroIndex = (index + HERO_IDS.length) % HERO_IDS.length;

  const movie = getMovie(HERO_IDS[heroIndex]);
  if (!movie) return;

  $("#heroBackground").style.backgroundImage =
    `url("${movie.backdrop}")`;

  $("#heroTitle").textContent = movie.title;
  $("#heroKicker").textContent = "DESTACADA DE CINEVERSE";

  $("#heroMeta").innerHTML = `
    <span class="rating">★ ${movie.rating.toFixed(1)}</span>
    <span>${movie.year}</span>
    <span>${escapeHTML(movieGenreLabel(movie))}</span>
    <span>${escapeHTML(movie.duration)}</span>`;

  $("#heroDescription").textContent = movie.overview;

  $("#heroPlay").onclick = () => playTrailer(movie.id);
  $("#heroDetails").onclick = () => openMovieDetails(movie.id);

  $(".hero-counter").innerHTML =
    `${String(heroIndex + 1).padStart(2, "0")} <span>/</span> ${String(HERO_IDS.length).padStart(2, "0")}`;

  document.querySelectorAll(".pagination-line").forEach((line, i) => {
    line.classList.toggle("active", i === heroIndex);
  });
}

/* =========================================
   EVENTOS DEL CATÁLOGO
   ========================================= */

searchInput.addEventListener("input", () => {
  visibleCount = 10;
  refreshCatalog();
});

sortSelect.addEventListener("change", () => {
  visibleCount = 10;
  refreshCatalog();
});

genreFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-genre]");
  if (!button) return;

  activeGenre = button.dataset.genre;
  visibleCount = 10;

  genreFilters.querySelectorAll("[data-genre]").forEach((chip) => {
    chip.classList.toggle("active", chip === button);
  });

  refreshCatalog();
});

$("#favoritesFilter").addEventListener("click", () => {
  favoritesOnly = !favoritesOnly;
  visibleCount = 10;

  $("#favoritesFilter").classList.toggle("active", favoritesOnly);
  refreshCatalog();

  if (favoritesOnly) {
    $("#resultsTitle").textContent = "Tu colección personal";
  }
});

$("#favoritesShortcut").addEventListener("click", () => {
  favoritesOnly = true;
  visibleCount = 10;

  $("#favoritesFilter").classList.add("active");
  refreshCatalog();

  $("#catalogo").scrollIntoView({ behavior: "smooth" });
});

$("#searchToggle").addEventListener("click", () => {
  searchPanel.scrollIntoView({ behavior: "smooth", block: "center" });
  searchInput.focus();
});

loadMoreButton.addEventListener("click", () => {
  visibleCount += 5;
  renderMovies();
});

$("#resetFilters").addEventListener("click", resetCatalog);

$("#exploreButton").addEventListener("click", () => {
  $("#catalogo").scrollIntoView({ behavior: "smooth" });
});

$("#dialogPlay").addEventListener("click", () => {
  playTrailer(selectedMovieId);
});

$("#dialogFavorite").addEventListener("click", () => {
  toggleFavorite(selectedMovieId);
});

$("#closeDialog").addEventListener("click", () => movieDialog.close());

$("#closeVideo").addEventListener("click", () => videoDialog.close());

// Detener el video al cerrar la ventana.
videoDialog.addEventListener("close", () => {
  $("#videoContainer").innerHTML = "";
});

movieDialog.addEventListener("click", (event) => {
  if (event.target === movieDialog) movieDialog.close();
});

videoDialog.addEventListener("click", (event) => {
  if (event.target === videoDialog) videoDialog.close();
});

// Delegación: botones y tarjetas que se crean dinámicamente.
movieGrid.addEventListener("click", (event) => {
  const actionElement = event.target.closest("[data-action]");
  if (!actionElement) return;

  const { action, id } = actionElement.dataset;

  if (action === "favorite") {
    event.stopPropagation();
    toggleFavorite(id);
  }

  if (action === "details") {
    openMovieDetails(id);
  }
});

movieGrid.addEventListener("keydown", (event) => {
  if (
    (event.key === "Enter" || event.key === " ") &&
    event.target.matches('[data-action="details"]')
  ) {
    event.preventDefault();
    openMovieDetails(event.target.dataset.id);
  }
});

// Navegación por género.
document.querySelectorAll("[data-genre-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const genre = link.dataset.genreLink;
    const chip = genreFilters.querySelector(
      `[data-genre="${CSS.escape(genre)}"]`
    );

    if (chip) chip.click();
  });
});

// Menú móvil.
$("#menuToggle").addEventListener("click", () => {
  const nav = $("#mainNav");
  const isOpen = nav.classList.toggle("open");

  $("#menuToggle").setAttribute("aria-expanded", String(isOpen));
  $("#menuToggle").setAttribute(
    "aria-label",
    isOpen ? "Cerrar menú" : "Abrir menú"
  );
});

$("#mainNav").addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    $("#mainNav").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
  }
});

/* =========================================
   IMÁGENES Y ARRANQUE
   ========================================= */

// Sustituir imágenes que fallen por un póster de reserva.
document.addEventListener("error", (event) => {
  const image = event.target;

  if (
    image instanceof HTMLImageElement &&
    image.dataset.fallback &&
    !image.dataset.fallbackApplied
  ) {
    image.dataset.fallbackApplied = "true";
    image.src = posterFallback(image.dataset.fallback);
  }
}, true);

// Mostrar año actual.
$("#currentYear").textContent = new Date().getFullYear();

// Iniciar página.
renderHero(0);
refreshCatalog();
