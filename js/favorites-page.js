function setupTabs() {
    const tabBtns = document.querySelectorAll('.fav-tab-btn');
    const tabContents = document.querySelectorAll('.favorites-tabs + section .tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById('tab-' + tabId).classList.add('active');
        });
    });
}

function renderFavoriteTournaments() {
    const container = document.getElementById('favoriteTournaments');
    const emptyState = document.getElementById('emptyTournaments');
    const countBadge = document.getElementById('tournamentCount');
    
    const tournaments = getFavoriteTournaments();
    countBadge.textContent = tournaments.length;

    container.innerHTML = '';

    if (tournaments.length === 0) {
        emptyState.style.display = 'flex';
        return;
    }

    emptyState.style.display = 'none';

    tournaments.forEach(tournament => {
        const card = document.createElement('div');
        card.className = 'card tournament-card';
        card.onclick = () => {
            window.location.href = `tournament-detail.html?id=${tournament.id}`;
        };

        const isFav = true;

        card.innerHTML = `
            <div class="tournament-card-header">
                <img src="${tournament.image}" alt="${tournament.name}" class="tournament-image">
                <span class="status-badge ${getStatusClass(tournament.status)}">${getStatusText(tournament.status)}</span>
                <button class="favorite-btn card-favorite-btn favorited"
                        onclick="event.stopPropagation(); removeTournamentFavorite('${tournament.id}')">
                    <i class="fas fa-star"></i>
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

        container.appendChild(card);
    });
}

function removeTournamentFavorite(id) {
    removeFavorite('tournament', id);
    renderFavoriteTournaments();
}

function renderFavoritePlayers() {
    const container = document.getElementById('favoritePlayers');
    const emptyState = document.getElementById('emptyPlayers');
    const countBadge = document.getElementById('playerCount');

    const players = getFavoritePlayers();
    countBadge.textContent = players.length;

    container.innerHTML = '';

    if (players.length === 0) {
        emptyState.style.display = 'flex';
        return;
    }

    emptyState.style.display = 'none';

    players.forEach(player => {
        const card = document.createElement('div');
        card.className = 'card player-card';
        card.onclick = () => openPlayerModal(player.id);

        card.innerHTML = `
            <div class="player-card-header">
                <img src="${player.image}" alt="${player.name}" class="player-image">
                <button class="favorite-btn card-favorite-btn favorited"
                        onclick="event.stopPropagation(); removePlayerFavorite('${player.id}')">
                    <i class="fas fa-star"></i>
                </button>
            </div>
            <div class="card-content">
                <div class="card-title">${player.name}</div>
                <div class="player-meta">
                    <span class="player-type-badge ${player.type}">${getTypeText(player.type)}</span>
                    ${player.ranking ? `<span class="player-ranking">排名 #${player.ranking}</span>` : ''}
                </div>
                ${player.nickname ? `<p class="player-nickname">"${player.nickname}"</p>` : ''}
                <div class="player-info">
                    <span><i class="fas fa-flag"></i> ${player.country}</span>
                </div>
                <p class="player-desc">${player.description}</p>
                <div class="player-stats">
                    <div class="stat-item">
                        <i class="fas fa-trophy"></i>
                        <span>${player.careerHighlights.length}项荣誉</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-coins"></i>
                        <span>${player.totalWinnings}</span>
                    </div>
                </div>
                <div class="player-card-footer">
                    <span class="view-detail">查看详情 <i class="fas fa-chevron-right"></i></span>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

function removePlayerFavorite(id) {
    removeFavorite('player', id);
    renderFavoritePlayers();
}

function openPlayerModal(playerId) {
    const player = getPlayerById(playerId);
    if (!player) return;

    const modal = document.getElementById('playerModal');
    const modalBody = document.getElementById('modalBody');
    const modalTitle = document.getElementById('modalPlayerName');

    modalTitle.textContent = player.name;

    const isFav = isFavorite('player', player.id);

    modalBody.innerHTML = `
        <div class="player-detail">
            <div class="player-detail-header">
                <img src="${player.image}" alt="${player.name}" class="player-detail-image">
                <div class="player-detail-info">
                    <h3 class="player-detail-name">
                        ${player.name}
                        <span class="player-detail-en">${player.nameEn}</span>
                    </h3>
                    ${player.nickname ? `<p class="player-detail-nickname">绰号："${player.nickname}"</p>` : ''}
                    <div class="player-detail-meta">
                        <span class="player-type-badge large ${player.type}">${getTypeText(player.type)}</span>
                        ${player.ranking ? `<span class="player-ranking large">世界排名 #${player.ranking}</span>` : ''}
                    </div>
                    <div class="player-detail-stats">
                        <div class="stat-item large">
                            <i class="fas fa-flag"></i>
                            <div>
                                <span class="stat-label">国家/地区</span>
                                <span class="stat-value">${player.country}</span>
                            </div>
                        </div>
                        <div class="stat-item large">
                            <i class="fas fa-birthday-cake"></i>
                            <div>
                                <span class="stat-label">出生日期</span>
                                <span class="stat-value">${player.birthDate}</span>
                            </div>
                        </div>
                        <div class="stat-item large">
                            <i class="fas fa-coins"></i>
                            <div>
                                <span class="stat-label">总奖金</span>
                                <span class="stat-value">${player.totalWinnings}</span>
                            </div>
                        </div>
                    </div>
                    <button id="modalFavBtn" class="favorite-btn large ${isFav ? 'favorited' : ''}">
                        <i class="${isFav ? 'fas' : 'far'} fa-star"></i>
                        <span>${isFav ? '已收藏' : '收藏选手'}</span>
                    </button>
                </div>
            </div>

            <div class="player-detail-section">
                <h3><i class="fas fa-user"></i> 选手简介</h3>
                <p>${player.description}</p>
            </div>

            <div class="player-detail-section">
                <h3><i class="fas fa-trophy"></i> 职业生涯荣誉</h3>
                <ul class="honors-list">
                    ${player.careerHighlights.map(h => `
                        <li><i class="fas fa-medal"></i> ${h}</li>
                    `).join('')}
                </ul>
            </div>

            <div class="player-detail-section">
                <h3><i class="fas fa-history"></i> 近期参赛记录</h3>
                ${player.recentMatches && player.recentMatches.length > 0 ? `
                    <div class="recent-matches">
                        ${player.recentMatches.map(m => `
                            <div class="recent-match-item ${m.result === '胜' ? 'win' : 'lose'}">
                                <div class="match-tournament">${m.tournament}</div>
                                <div class="match-detail">
                                    <span class="match-opponent">vs ${m.opponent}</span>
                                    <span class="match-score">${m.score}</span>
                                    <span class="match-result">${m.result}</span>
                                </div>
                                <div class="match-date">${m.date}</div>
                            </div>
                        `).join('')}
                    </div>
                ` : `
                    <p class="text-muted">暂无近期参赛记录</p>
                `}
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    const favBtn = document.getElementById('modalFavBtn');
    if (favBtn) {
        favBtn.addEventListener('click', () => {
            const newState = toggleFavorite('player', player.id);
            const favorites = getFavorites();
            const list = favorites.players;
            if (newState) {
                if (list.indexOf(player.id) === -1) list.push(player.id);
            } else {
                const idx = list.indexOf(player.id);
                if (idx > -1) list.splice(idx, 1);
            }
            saveFavorites(favorites);

            const icon = favBtn.querySelector('i');
            const span = favBtn.querySelector('span');
            if (newState) {
                icon.className = 'fas fa-star';
                favBtn.classList.add('favorited');
                span.textContent = '已收藏';
            } else {
                icon.className = 'far fa-star';
                favBtn.classList.remove('favorited');
                span.textContent = '收藏选手';
            }

            renderFavoritePlayers();
        });
    }
}

function closePlayerModal() {
    const modal = document.getElementById('playerModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

function onFavoriteChange() {
    renderFavoriteTournaments();
    renderFavoritePlayers();
}

document.addEventListener('DOMContentLoaded', () => {
    setupTabs();
    renderFavoriteTournaments();
    renderFavoritePlayers();

    document.getElementById('playerModal').addEventListener('click', (e) => {
        if (e.target.id === 'playerModal') {
            closePlayerModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePlayerModal();
        }
    });
});
