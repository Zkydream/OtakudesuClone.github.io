document.getElementById('add-anime-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('anime-title').value;
    const image = document.getElementById('anime-image').value;
    const episode = document.getElementById('anime-episode').value;
    const date = document.getElementById('anime-date').value;
    const day = document.getElementById('anime-day').value;

    const animeGrid = document.getElementById('anime');
    const newAnime = document.createElement('a');
    newAnime.className = 'relative block overflow-hidden group';
    newAnime.href = '#';
    newAnime.innerHTML = `
        <img src="${image}" alt="${title}" class="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-110" />
        <div class="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2 z-10">${episode}</div>
        <div class="absolute bottom-0 left-0 bg-blue-500 text-white p-2 z-10">${date}</div>
        <div class="absolute top-0 right-0 bg-blue-600 text-white p-2 z-10">${day}</div>
        <div class="absolute bottom-0 right-0 bg-white text-black p-2 z-10">${title}</div>
        <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    `;

    animeGrid.appendChild(newAnime);

    document.getElementById('add-anime-form').reset();
});

