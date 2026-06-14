function getTournamentId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function renderTournamentDetail() {
    const id = getTournamentId();
    const tournament = getTournamentById(id);
    const container = document.getElementById('tournamentDetail');

    if (!tournament) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-exclamation-circle"></i>
                <p>未找到该赛事</p>
                <a href="tournaments.html" class="btn">返回赛事列表</a>
            </div>
        `;
        return;
    }

    document.getElementById('tournamentTitle').innerHTML = `<i class="fas fa-trophy"></i> ${tournament.name}`;
    document.getElementById('tournamentSubtitle').textContent = tournament.location;

    const isFav = isFavorite('tournament', tournament.id);

    container.innerHTML = `
        <div class="tournament-hero">
            <div class="tournament-hero-bg" style="background-image: url('${tournament.image}')"></div>
            <div class="tournament-hero-content">
                <div class="tournament-hero-header">
                    <span class="status-badge large ${getStatusClass(tournament.status)}">${getStatusText(tournament.status)}</span>
                    <button id="favBtn" class="favorite-btn large ${isFav ? 'favorited' : ''}">
                        <i class="${isFav ? 'fas' : 'far'} fa-star"></i>
                        <span>${isFav ? '已收藏' : '收藏赛事'}</span>
                    </button>
                </div>
                <h2>${tournament.name}</h2>
                <p class="tournament-desc">${tournament.description}</p>
                <div class="tournament-info-grid">
                    <div class="info-item">
                        <i class="fas fa-flag"></i>
                        <span>项目类型</span>
                        <strong>${getTypeText(tournament.type)}</strong>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-calendar"></i>
                        <span>比赛时间</span>
                        <strong>${tournament.startDate} ~ ${tournament.endDate}</strong>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>举办地点</span>
                        <strong>${tournament.location}</strong>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-coins"></i>
                        <span>总奖金</span>
                        <strong>${tournament.prize}</strong>
                    </div>
                    ${tournament.champion ? `
                    <div class="info-item">
                        <i class="fas fa-crown"></i>
                        <span>本届冠军</span>
                        <strong>${tournament.champion}</strong>
                    </div>
                    ` : ''}
                </div>
            </div>
        </div>

        <div class="tabs">
            <div class="tab-buttons">
                <button class="tab-btn active" data-tab="schedule">
                    <i class="fas fa-calendar-check"></i> 赛程对阵
                </button>
                <button class="tab-btn" data-tab="standings">
                    <i class="fas fa-list-ol"></i> 积分榜
                </button>
                <button class="tab-btn" data-tab="news">
                    <i class="fas fa-newspaper"></i> 赛事新闻
                </button>
                <button class="tab-btn" data-tab="history">
                    <i class="fas fa-history"></i> 历届回顾
                </button>
            </div>

            <div class="tab-content active" id="tab-schedule">
                ${renderSchedule(tournament.schedule)}
            </div>

            <div class="tab-content" id="tab-standings">
                ${renderStandings(tournament.standings)}
            </div>

            <div class="tab-content" id="tab-news">
                ${renderNews(tournament.news)}
            </div>

            <div class="tab-content" id="tab-history">
                ${renderHistory(tournament.history)}
            </div>
        </div>
    `;

    setupTabs();
    setupFavoriteButton(tournament.id);
}

function renderSchedule(schedule) {
    if (!schedule || schedule.length === 0) {
        return `
            <div class="empty-state">
                <i class="fas fa-calendar"></i>
                <p>暂无赛程数据</p>
            </div>
        `;
    }

    return `
        <div class="schedule-list">
            ${schedule.map(round => `
                <div class="schedule-round">
                    <h3 class="round-title">
                        <i class="fas fa-chevron-right"></i> ${round.round}
                        <span class="round-date">${round.date}</span>
                    </h3>
                    <div class="matches-list">
                        ${round.matches.map(match => `
                            <div class="match-card">
                                <div class="match-time">${match.time}</div>
                                <div class="match-players">
                                    <div class="player ${match.score1 !== null && match.score1 > match.score2 ? 'winner' : ''}">
                                        <span class="player-name">${match.player1}</span>
                                        <span class="player-score">${match.score1 !== null ? match.score1 : '-'}</span>
                                    </div>
                                    <div class="vs">VS</div>
                                    <div class="player ${match.score2 !== null && match.score2 > match.score1 ? 'winner' : ''}">
                                        <span class="player-name">${match.player2}</span>
                                        <span class="player-score">${match.score2 !== null ? match.score2 : '-'}</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderStandings(standings) {
    if (!standings || standings.length === 0) {
        return `
            <div class="empty-state">
                <i class="fas fa-list-ol"></i>
                <p>暂无积分榜数据</p>
            </div>
        `;
    }

    return `
        <div class="standings-table">
            <table>
                <thead>
                    <tr>
                        <th style="width: 60px;">排名</th>
                        <th>选手</th>
                        <th style="width: 80px;">场次</th>
                        <th style="width: 80px;">胜</th>
                        <th style="width: 80px;">负</th>
                        <th style="width: 120px;">积分/奖金</th>
                    </tr>
                </thead>
                <tbody>
                    ${standings.map(item => `
                        <tr>
                            <td>
                                <span class="rank-badge rank-${item.rank}">${item.rank}</span>
                            </td>
                            <td>${item.player}</td>
                            <td>${item.played}</td>
                            <td class="text-success">${item.won}</td>
                            <td class="text-danger">${item.lost}</td>
                            <td class="text-gold">${item.points}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function renderNews(news) {
    if (!news || news.length === 0) {
        return `
            <div class="empty-state">
                <i class="fas fa-newspaper"></i>
                <p>暂无赛事新闻</p>
            </div>
        `;
    }

    return `
        <div class="news-list">
            ${news.map(item => `
                <div class="news-card">
                    <div class="news-date">
                        <i class="far fa-calendar"></i> ${item.date}
                    </div>
                    <h3 class="news-title">${item.title}</h3>
                    <p class="news-summary">${item.summary}</p>
                    <a href="#" class="news-more">阅读全文 <i class="fas fa-arrow-right"></i></a>
                </div>
            `).join('')}
        </div>
    `;
}

function renderHistory(history) {
    if (!history || history.length === 0) {
        return `
            <div class="empty-state">
                <i class="fas fa-history"></i>
                <p>暂无历史数据</p>
            </div>
        `;
    }

    return `
        <div class="history-list">
            ${history.map(item => `
                <div class="history-item">
                    <div class="history-year">
                        <span class="year-badge">${item.year}</span>
                    </div>
                    <div class="history-content">
                        <div class="history-champion">
                            <i class="fas fa-crown"></i> 冠军：${item.champion}
                        </div>
                        <div class="history-runner">
                            <i class="fas fa-medal"></i> 亚军：${item.runnerUp}
                        </div>
                        <div class="history-score">
                            比分：${item.score}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

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

function setupFavoriteButton(tournamentId) {
    const favBtn = document.getElementById('favBtn');
    if (!favBtn) return;

    favBtn.addEventListener('click', () => {
        const newState = toggleFavorite('tournament', tournamentId);
        const favorites = getFavorites();
        const list = favorites.tournaments;
        if (newState) {
            if (list.indexOf(tournamentId) === -1) list.push(tournamentId);
        } else {
            const idx = list.indexOf(tournamentId);
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
            span.textContent = '收藏赛事';
        }
    });
}

document.addEventListener('DOMContentLoaded', renderTournamentDetail);
