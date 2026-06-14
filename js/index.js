function renderFeaturedTournaments() {
    const container = document.getElementById('featuredTournaments');
    const allTournaments = getTournaments();

    const featured = allTournaments
        .sort((a, b) => {
            const statusOrder = { ongoing: 0, upcoming: 1, completed: 2 };
            if (statusOrder[a.status] !== statusOrder[b.status]) {
                return statusOrder[a.status] - statusOrder[b.status];
            }
            return new Date(b.startDate) - new Date(a.startDate);
        })
        .slice(0, 3);

    container.innerHTML = '';

    featured.forEach(tournament => {
        const card = document.createElement('div');
        card.className = 'card tournament-card';
        card.onclick = () => {
            window.location.href = `tournament-detail.html?id=${tournament.id}`;
        };

        card.innerHTML = `
            <div class="tournament-card-header">
                <img src="${tournament.image}" alt="${tournament.name}" class="tournament-image">
                <span class="status-badge ${getStatusClass(tournament.status)}">${getStatusText(tournament.status)}</span>
            </div>
            <div class="card-content">
                <div class="card-title">${tournament.name}</div>
                <div class="tournament-meta">
                    <span class="meta-item"><i class="fas fa-flag"></i> ${getTypeText(tournament.type)}</span>
                    <span class="meta-item"><i class="fas fa-calendar"></i> ${tournament.startDate}</span>
                </div>
                <p class="tournament-location"><i class="fas fa-map-marker-alt"></i> ${tournament.location}</p>
                <p class="tournament-prize"><i class="fas fa-coins"></i> 总奖金：${tournament.prize}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderFeaturedTournaments);
