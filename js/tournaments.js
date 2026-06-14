function renderTournamentCard(tournament) {
    const card = document.createElement('div');
    card.className = 'card tournament-card';
    card.onclick = () => {
        window.location.href = `tournament-detail.html?id=${tournament.id}`;
    };

    const isFav = isFavorite('tournament', tournament.id);

    card.innerHTML = `
        <div class="tournament-card-header">
            <img src="${tournament.image}" alt="${tournament.name}" class="tournament-image">
            <span class="status-badge ${getStatusClass(tournament.status)}">${getStatusText(tournament.status)}</span>
            <button class="favorite-btn card-favorite-btn ${isFav ? 'favorited' : ''}" 
                    onclick="event.stopPropagation(); handleFavoriteClick(this, '${tournament.id}')">
                <i class="${isFav ? 'fas' : 'far'} fa-star"></i>
            </button>
        </div>
        <div class="card-content">
            <div class="card-title">${tournament.name}</div>
            <div class="tournament-meta">
                <span class="meta-item"><i class="fas fa-flag"></i> ${getTypeText(tournament.type)}</span>
                <span class="meta-item"><i class="fas fa-calendar"></i> ${tournament.startDate}</span>
            </div>
            <p class="tournament-location"><i class="fas fa-map-marker-alt"></i> ${tournament.location}</p>
            <p class="tournament-prize"><i class="fas fa-coins"></i> 总奖金：${tournament.prize}</p>
            ${tournament.champion ? `<p class="tournament-champion"><i class="fas fa-crown"></i> 冠军：${tournament.champion}</p>` : ''}
        </div>
    `;

    return card;
}

function handleFavoriteClick(btn, id) {
    const newState = toggleFavorite('tournament', id);
    const favorites = getFavorites();
    const list = favorites.tournaments;
    if (newState) {
        if (list.indexOf(id) === -1) list.push(id);
    } else {
        const idx = list.indexOf(id);
        if (idx > -1) list.splice(idx, 1);
    }
    saveFavorites(favorites);
    
    const icon = btn.querySelector('i');
    if (newState) {
        icon.className = 'fas fa-star';
        btn.classList.add('favorited');
    } else {
        icon.className = 'far fa-star';
        btn.classList.remove('favorited');
    }
}

function filterTournaments() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const typeFilter = document.getElementById('typeFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;
    const timeFilter = document.getElementById('timeFilter').value;

    let filtered = getTournaments();

    if (searchTerm) {
        filtered = filtered.filter(t => 
            t.name.toLowerCase().includes(searchTerm) ||
            t.location.toLowerCase().includes(searchTerm) ||
            t.description.toLowerCase().includes(searchTerm)
        );
    }

    if (typeFilter !== 'all') {
        filtered = filtered.filter(t => t.type === typeFilter);
    }

    if (statusFilter !== 'all') {
        filtered = filtered.filter(t => t.status === statusFilter);
    }

    if (timeFilter !== 'all') {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();

        filtered = filtered.filter(t => {
            const startDate = new Date(t.startDate);
            const endDate = new Date(t.endDate);

            switch (timeFilter) {
                case 'thisMonth':
                    return (startDate.getFullYear() === currentYear && startDate.getMonth() === currentMonth) ||
                           (endDate.getFullYear() === currentYear && endDate.getMonth() === currentMonth);
                case 'nextMonth':
                    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
                    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
                    return (startDate.getFullYear() === nextYear && startDate.getMonth() === nextMonth) ||
                           (endDate.getFullYear() === nextYear && endDate.getMonth() === nextMonth);
                case 'thisYear':
                    return startDate.getFullYear() === currentYear;
                default:
                    return true;
            }
        });
    }

    filtered.sort((a, b) => {
        const statusOrder = { ongoing: 0, upcoming: 1, completed: 2 };
        if (statusOrder[a.status] !== statusOrder[b.status]) {
            return statusOrder[a.status] - statusOrder[b.status];
        }
        return new Date(b.startDate) - new Date(a.startDate);
    });

    return filtered;
}

function renderTournaments() {
    const container = document.getElementById('tournamentList');
    const emptyState = document.getElementById('emptyState');
    const resultCount = document.getElementById('resultCount');
    const filtered = filterTournaments();

    container.innerHTML = '';

    if (filtered.length === 0) {
        emptyState.style.display = 'block';
        resultCount.textContent = '';
    } else {
        emptyState.style.display = 'none';
        resultCount.textContent = `(${filtered.length}项)`;
        
        filtered.forEach(tournament => {
            const card = renderTournamentCard(tournament);
            container.appendChild(card);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderTournaments();

    document.getElementById('searchInput').addEventListener('input', renderTournaments);
    document.getElementById('typeFilter').addEventListener('change', renderTournaments);
    document.getElementById('statusFilter').addEventListener('change', renderTournaments);
    document.getElementById('timeFilter').addEventListener('change', renderTournaments);
});
