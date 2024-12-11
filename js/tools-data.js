const tools = [
    {
        id: 1,
        name: "Rank Rebel",
        description: "Plateforme basée sur l'IA qui analyse et optimise les algorithmes des moteurs de recherche.",
        icon: "fa-chart-line",
        color: "blue",
        features: [
            "Analyse des algorithmes",
            "Recommandations IA",
            "Suivi en temps réel"
        ],
        category: "SEO Technique"
    },
    {
        id: 2,
        name: "Backlink Builder",
        description: "Outil pour générer des backlinks de qualité en collaboration avec des partenaires pertinents.",
        icon: "fa-link",
        color: "purple",
        features: [
            "Identification des opportunités",
            "Gestion des partenariats",
            "Suivi de la qualité"
        ],
        category: "SEO Technique"
    },
    // Ajoutez tous les autres outils ici...
];

function renderTools(toolsArray) {
    const toolsContainer = document.getElementById('ideas');
    toolsContainer.innerHTML = toolsArray.map(tool => `
        <article class="card bg-white rounded-xl p-6 shadow-lg">
            <div class="text-3xl text-${tool.color}-600 mb-4">
                <i class="fas ${tool.icon}"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">${tool.name}</h3>
            <p class="text-gray-600 mb-4">
                ${tool.description}
            </p>
            <ul class="text-sm text-gray-500">
                ${tool.features.map(feature => `
                    <li class="mb-2">
                        <i class="fas fa-check text-green-500 mr-2"></i>${feature}
                    </li>
                `).join('')}
            </ul>
        </article>
    `).join('');
}

function filterTools(category) {
    if (category === 'Tous les outils') {
        renderTools(tools);
    } else {
        const filteredTools = tools.filter(tool => tool.category === category);
        renderTools(filteredTools);
    }
}

function searchTools(searchTerm) {
    const filteredTools = tools.filter(tool => {
        const searchString = `${tool.name} ${tool.description} ${tool.features.join(' ')}`.toLowerCase();
        return searchString.includes(searchTerm.toLowerCase());
    });
    renderTools(filteredTools);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTools(tools);

    // Setup category filters
    document.querySelectorAll('#categories button').forEach(button => {
        button.addEventListener('click', () => {
            filterTools(button.textContent.trim());
        });
    });

    // Setup search
    const searchInput = document.querySelector('input[type="text"]');
    searchInput.addEventListener('input', (e) => {
        searchTools(e.target.value);
    });
});
