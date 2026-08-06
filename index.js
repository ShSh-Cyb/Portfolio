// ===========================
// Filtres par catégorie (Documentations / Veille)
// ===========================
document.querySelectorAll(".filter-pills").forEach((pills) => {
	const targetId = pills.dataset.filterTarget;
	const grid = document.getElementById(targetId);
	if (!grid) return;

	pills.querySelectorAll(".filter-pill").forEach((pill) => {
		pill.addEventListener("click", () => {
			pills.querySelectorAll(".filter-pill").forEach((p) => p.classList.remove("active"));
			pill.classList.add("active");

			const filter = pill.dataset.filter;
			grid.querySelectorAll(":scope > article").forEach((card) => {
				const categories = (card.dataset.category || "").split(" ");
				card.style.display = filter === "all" || categories.includes(filter) ? "" : "none";
			});
		});
	});
});

// ===========================
// Cartes de veille : "Lire plus" et "Sources"
// ===========================
document.querySelectorAll(".veille-card").forEach((card) => {
	const excerpt = card.querySelector(".veille-excerpt");
	const lireBtn = card.querySelector(".toggle-lire-plus");
	const sourcesBtn = card.querySelector(".toggle-sources");
	const sourcesList = card.querySelector(".veille-sources");

	lireBtn?.addEventListener("click", () => {
		const expanded = excerpt.classList.toggle("is-expanded");
		lireBtn.textContent = expanded ? "Voir moins" : "Lire plus";
	});

	sourcesBtn?.addEventListener("click", () => {
		const visible = sourcesList.classList.toggle("is-visible");
		sourcesBtn.textContent = visible ? "Masquer" : "Sources";
	});
});
