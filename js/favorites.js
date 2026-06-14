const FAVORITES_KEY = 'billiards_favorites';

function getFavorites() {
    try {
        const data = localStorage.getItem(FAVORITES_KEY);
        return data ? JSON.parse(data) : { tournaments: [], players: [] };
    } catch (e) {
        return { tournaments: [], players: [] };
    }
}

function saveFavorites(favorites) {
    try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (e) {
        console.error('保存收藏失败:', e);
    }
}

function toggleFavorite(type, id) {
    const favorites = getFavorites();
    const list = favorites[type + 's'];
    const index = list.indexOf(id);
    
    if (index > -1) {
        list.splice(index, 1);
        return false;
    } else {
        list.push(id);
        return true;
    }
}

function isFavorite(type, id) {
    const favorites = getFavorites();
    const list = favorites[type + 's'];
    return list.indexOf(id) > -1;
}

function addFavorite(type, id) {
    const favorites = getFavorites();
    const list = favorites[type + 's'];
    if (list.indexOf(id) === -1) {
        list.push(id);
        saveFavorites(favorites);
    }
}

function removeFavorite(type, id) {
    const favorites = getFavorites();
    const list = favorites[type + 's'];
    const index = list.indexOf(id);
    if (index > -1) {
        list.splice(index, 1);
        saveFavorites(favorites);
    }
}

function getFavoriteTournaments() {
    const favorites = getFavorites();
    return favorites.tournaments.map(id => getTournamentById(id)).filter(Boolean);
}

function getFavoritePlayers() {
    const favorites = getFavorites();
    return favorites.players.map(id => getPlayerById(id)).filter(Boolean);
}

function updateFavoriteButton(btn, isFav) {
    const icon = btn.querySelector('i');
    if (isFav) {
        icon.className = 'fas fa-star';
        btn.classList.add('favorited');
        btn.title = '取消收藏';
    } else {
        icon.className = 'far fa-star';
        btn.classList.remove('favorited');
        btn.title = '添加收藏';
    }
}

function createFavoriteButton(type, id) {
    const btn = document.createElement('button');
    btn.className = 'favorite-btn';
    btn.innerHTML = '<i class="far fa-star"></i>';
    btn.title = '添加收藏';
    
    const isFav = isFavorite(type, id);
    updateFavoriteButton(btn, isFav);
    
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const newState = toggleFavorite(type, id);
        const favorites = getFavorites();
        const list = favorites[type + 's'];
        if (newState) {
            if (list.indexOf(id) === -1) list.push(id);
        } else {
            const idx = list.indexOf(id);
            if (idx > -1) list.splice(idx, 1);
        }
        saveFavorites(favorites);
        updateFavoriteButton(btn, newState);
        
        if (typeof onFavoriteChange === 'function') {
            onFavoriteChange();
        }
    });
    
    return btn;
}
