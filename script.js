// Données des fiches de psychiatrie
// IMPORTANT: Remplacez les URLs par le chemin réel de vos PDF
// Exemple: 'pdfs/schizophrenie-diagnostic.pdf'
const fichesData = [
    {
        id: 1,
        title: "Canicule et psychotrope",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2023",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2023-04R psychotrope - canicule.pdf"
    },
    {
        id: 2,
        title: "Allégeons la charge anticholinergique des psychotropes !",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2023",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2023-08 psychotropes - charge anticholinergique.pdf"
    },
    {
        id: 3,
        title: "Les psychotropes, les cheveux et la peau",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2023",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2023-11 psychotrope - peau et cheveux.pdf"
    },
    {
        id: 4,
        title: "Psychotropes et énurésie nocture chez l'adulte",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2023",
        pages: 12,
        pdfUrl: "pdfs/Fiche 2023-15R psychotrope - énurésie.pdf"
    },
    {
        id: 5,
        title: "Observance des psychotropes",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2023",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2023-18 psychotrope - observance.pdf"
    },
    {
        id: 6,
        title: "Psychotropes et tremblements",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2023",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2023-22 psychotrope- tremblements.pdf"
    },
    {
        id: 7,
        title: "Troubles de la déglutition et psychotropes",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2024",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2024-30 psychotrope - trouble de la déglutition.pdf"
    },
    {
        id: 8,
        title: "Akathinisie (impatiences) induite par les psychotropes",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2024",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2024-37 psychotropes- akathisie-impatiences.pdf"
    },
    {
        id: 9,
        title: "Psychotropes et constipation",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2024",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2024-43 psychotropes- constipation.pdf"
    },
    {
        id: 10,
        title: "Traitement psychotrope : quelle durée arpès un 1er épisode ?",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2024",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2024-45 psychotropes- durée du traitement 1er épisode.pdf"
    },
    {
        id: 11,
        title: "Les effets des benzodiazépines sur la mémoire",
        description: "",
        category: "benzodiazépines",
        categoryLabel: "Benzodiazépines",
        date: "2024",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2024-47 psychotrope -benzodiazépine et mémoire.pdf"
    },
    {
        id: 12,
        title: "Les effets indésirables dans la notice des médicaments",
        description: "",
        category: "autres",
        categoryLabel: "Autres",
        date: "2024",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2024-49 psychotrope - notice information médicament.pdf"
    },
    {
        id: 13,
        title: "Psychotropes et risque de chute",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2024",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2024-51 psychotropes- chutes et fractures.pdf"
    },
    {
        id: 14,
        title: "Psychotropes et sécheresse de la bouche",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2024",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2024-53 psychotropes- bouche sèche.pdf"
    },
    {
        id: 15,
        title: "Cauchemars et rêves intenses induits par les médicaments",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2025",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2025-68 psychotropes-  cauchemars.pdf"
    },
    {
        id: 16,
        title: "Impact des psychotropes sur la tension artérielle",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2025",
        pages: 2,
        pdfUrl: "pdfs/fiche 2025-72 psychotropes - impact sur la tension artérielle.pdf"
    },
    {
        id: 17,
        title: "Quelle conduite à tenir en cas d'oubli d'une prise de traitement psychotrope ?",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2025",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2025-77 psychotropes- que faire en cas de prise manquée - .pdf"
    },
    {
        id: 18,
        title: "Benzodiazépines au long cours : un usage à limiter sans le diaboliser",
        description: "",
        category: "benzodiazépines",
        categoryLabel: "Benzodiazépines",
        date: "2025",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2025-81 psychotropes - indication des benzodiazépines au long cours.pdf"
    },
    {
        id: 19,
        title: "Effets indésirables oculaires des psychotropes",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2025",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2025-84 psychotropes et effets indésirables ophtamologiques.pdf"
    },
    {
        id: 20,
        title: "Trouble psychotique induit par un médicament",
        description: "",
        category: "délires",
        categoryLabel: "Délires",
        date: "2025",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2025-90 facteurs de risque -trouble psychotique induit par des médicaments.pdf"
    },
    {
        id: 21,
        title: "Catatonie induite par le sevrage d'un traitement psychotrope",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2025",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2025-92 psychotropes - catatonie induite par un sevrage psychotrope.pdf"
    },
    {
        id: 21,
        title: "Symptômes dépressifs induits par un médicament",
        description: "",
        category: "dépression",
        categoryLabel: "Dépression",
        date: "2025",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2025-98 facteurs de risque -syndrome dépressif induit par des médicaments.pdf"
    },
    {
        id: 22,
        title: "Initiation d'un antidépresseur : syndrome 'd'activation' ou virage maniaque ?",
        description: "",
        category: "dépression",
        categoryLabel: "Dépression",
        date: "2025",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2025-99 psychotropes - syndrome activation à l'introduction d'un antidépresseur.pdf"
    }
    ,
    {
        id: 23,
        title: "Les métamorphoses délirantes : la lycanthropie",
        description: "",
        category: "délires",
        categoryLabel: "Délires",
        date: "2026",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2026-108 sémio - Lycanthropie.pdf"
    },
    {
        id: 24,
        title: "Gérer le relais (switch) entre antipsychotiques",
        description: "",
        category: "antipsychotiques",
        categoryLabel: "Antipsychotiques",
        date: "2026",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2026-109 antipsychotiques - relais entre antipsychotiques.pdf"
    },
    {
        id: 25,
        title: "Psychotropes et dysurie (difficultés à uriner)",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2026",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2026-110 psychotropes - dysurie (diffficultés à uriner).pdf"
    },
    {
        id: 26,
        title: "Les hallucinations olfactives",
        description: "",
        category: "délires",
        categoryLabel: "Hallucinations",
        date: "2026",
        pages: 2,
        pdfUrl: "pdfs/Fiche 2026-111 sémio - hallucinations olfactives.pdf"
    },
    {
        id: 27,
        title: "Impact des psychotropes sur le seuil convulsif",
        description: "",
        category: "psychotropes",
        categoryLabel: "Psychotropes",
        date: "2026",
        pages: 2,
        pdfUrl: "pdfs/fiche 2026-112 psychotropes - impact sur le seuil convulsif.pdf"
    }
];

// État de l'application
let currentCategory = 'all';
let searchQuery = '';

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    renderFiches(fichesData);
    setupEventListeners();
    updateFichesCount(fichesData.length);
}

// Configuration des écouteurs d'événements
function setupEventListeners() {
    // Boutons de catégories
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            filterFiches();
        });
    });

    // Recherche
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        filterFiches();
    });
}

// Filtrage des fiches
function filterFiches() {
    let filteredFiches = fichesData;

    // Filtrer par catégorie
    if (currentCategory !== 'all') {
        filteredFiches = filteredFiches.filter(fiche => 
            fiche.category === currentCategory
        );
    }

    // Filtrer par recherche
    if (searchQuery) {
        filteredFiches = filteredFiches.filter(fiche => 
            fiche.title.toLowerCase().includes(searchQuery) ||
            fiche.description.toLowerCase().includes(searchQuery) ||
            fiche.categoryLabel.toLowerCase().includes(searchQuery)
        );
    }

    renderFiches(filteredFiches);
    updateFichesCount(filteredFiches.length);
}

// Mise à jour du compteur de fiches
function updateFichesCount(count) {
    const countElement = document.getElementById('fichesCount');
    countElement.textContent = count;
}

// Rendu des fiches
function renderFiches(fiches) {
    const grid = document.getElementById('fichesGrid');
    
    if (fiches.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="2"/>
                    <path d="M32 20V32M32 40H32.02" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <p>Aucune fiche ne correspond à votre recherche</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = fiches.map((fiche, index) => createFicheCard(fiche, index)).join('');
    
    // Ajouter les événements de clic
    document.querySelectorAll('.fiche-card').forEach(card => {
        card.addEventListener('click', () => {
            const ficheId = card.dataset.id;
            openFiche(ficheId);
        });
    });
}

// Création d'une carte de fiche
function createFicheCard(fiche, index) {
    const delay = index * 0.05;
    
    return `
        <div class="fiche-card" data-id="${fiche.id}" style="animation-delay: ${delay}s">
            <div class="fiche-header">
                <div class="fiche-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <span class="fiche-category">${fiche.categoryLabel}</span>
            </div>
            
            <div class="fiche-content">
                <h3 class="fiche-title">${fiche.title}</h3>
                <p class="fiche-description">${fiche.description}</p>
            </div>
            
            <div class="fiche-footer">
                <div class="fiche-date">
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" stroke-width="1.5"/>
                        <path d="M2 6H14M5 1V3M11 1V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    <span>${fiche.date}</span>
                </div>
                <div class="fiche-pages">
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 2H10L12 4V13C12 13.5523 11.5523 14 11 14H4C3.44772 14 3 13.5523 3 13V3C3 2.44772 3.44772 2 4 2Z" stroke="currentColor" stroke-width="1.5"/>
                        <path d="M6 6H9M6 9H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    <span>${fiche.pages} pages</span>
                </div>
            </div>
        </div>
    `;
}

// Ouverture d'une fiche
function openFiche(ficheId) {
    const fiche = fichesData.find(f => f.id == ficheId);
    if (fiche && fiche.pdfUrl) {
        // Ouvrir le PDF dans un nouvel onglet
        window.open(fiche.pdfUrl, '_blank');
    }
}
