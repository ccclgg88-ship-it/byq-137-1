function renderPlayerCard(player) {
    const card = document.createElement('div');
    card.className = 'card player-card';
    card.onclick = () => openPlayerModal(player.id);

    const isFav = isFavorite('player', player.id);

    card.innerHTML = `
        <div class="player-card-header">
            <img src="${player.image}" alt="${player.name}" class="player-image">
            <button class="favorite-btn card-favorite-btn ${isFav ? 'favorited' : ''}"
                    onclick="event.stopPropagation(); handlePlayerFavorite(this, '${player.id}')">
                <i class="${isFav ? 'fas' : 'far'} fa-star"></i>
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

    return card;
}

function handlePlayerFavorite(btn, id) {
    const newState = toggleFavorite('player', id);
    const favorites = getFavorites();
    const list = favorites.players;
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

function getCountries() {
    const players = getPlayers();
    const countries = [...new Set(players.map(p => p.country))];
    return countries.sort();
}

function populateCountryFilter() {
    const select = document.getElementById('countryFilter');
    const countries = getCountries();
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        select.appendChild(option);
    });
}

function filterPlayers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const typeFilter = document.getElementById('typeFilter').value;
    const countryFilter = document.getElementById('countryFilter').value;
    const sortBy = document.getElementById('sortBy').value;

    let filtered = getPlayers();

    if (searchTerm) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchTerm) ||
            p.nameEn.toLowerCase().includes(searchTerm) ||
            p.nickname.toLowerCase().includes(searchTerm) ||
            p.country.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm)
        );
    }

    if (typeFilter !== 'all') {
        filtered = filtered.filter(p => p.type === typeFilter);
    }

    if (countryFilter !== 'all') {
        filtered = filtered.filter(p => p.country === countryFilter);
    }

    filtered.sort((a, b) => {
        switch (sortBy) {
            case 'ranking':
                if (a.ranking === null && b.ranking === null) return a.name.localeCompare(b.name);
                if (a.ranking === null) return 1;
                if (b.ranking === null) return -1;
                return a.ranking - b.ranking;
            case 'name':
                return a.name.localeCompare(b.name);
            case 'winnings':
                const aVal = parseFloat(a.totalWinnings.replace(/[^0-9.]/g, '')) || 0;
                const bVal = parseFloat(b.totalWinnings.replace(/[^0-9.]/g, '')) || 0;
                return bVal - aVal;
            default:
                return 0;
        }
    });

    return filtered;
}

function renderPlayers() {
    const container = document.getElementById('playerList');
    const emptyState = document.getElementById('emptyState');
    const resultCount = document.getElementById('resultCount');
    const filtered = filterPlayers();

    container.innerHTML = '';

    if (filtered.length === 0) {
        emptyState.style.display = 'block';
        resultCount.textContent = '';
    } else {
        emptyState.style.display = 'none';
        resultCount.textContent = `(${filtered.length}位)`;

        filtered.forEach(player => {
            const card = renderPlayerCard(player);
            container.appendChild(card);
        });
    }
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

            renderPlayers();
        });
    }
}

function closePlayerModal() {
    const modal = document.getElementById('playerModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
    populateCountryFilter();
    renderPlayers();

    document.getElementById('searchInput').addEventListener('input', renderPlayers);
    document.getElementById('typeFilter').addEventListener('change', renderPlayers);
    document.getElementById('countryFilter').addEventListener('change', renderPlayers);
    document.getElementById('sortBy').addEventListener('change', renderPlayers);

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
