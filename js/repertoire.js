document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('repertoire-container');
  const spotifyLink = document.getElementById('spotify-link');

  fetch('data/repertoire.json')
    .then(res => {
      if (!res.ok) throw new Error('Failed to load repertoire data');
      return res.json();
    })
    .then(data => {
      if (data.spotifyPlaylist && spotifyLink) spotifyLink.href = data.spotifyPlaylist;

      root.innerHTML = ''; // clear loading
      data.genres.forEach(genre => {
        const section = document.createElement('section');
        section.className = 'genre-card';
        const h2 = document.createElement('h2');
        h2.textContent = genre.name;
        section.appendChild(h2);

        const ul = document.createElement('ul');
        ul.className = 'song-list';

        genre.songs.forEach(song => {
          const li = document.createElement('li');
          li.className = 'song-item';
          const title = document.createElement('span');
          title.className = 'song-title';
          title.textContent = song.title;
          const artist = document.createElement('span');
          artist.className = 'song-artist';
          artist.textContent = song.artist ? ` — ${song.artist}` : '';
          li.appendChild(title);
          li.appendChild(artist);
          ul.appendChild(li);
        });

        section.appendChild(ul);
        root.appendChild(section);
      });
    })
    .catch(err => {
      root.innerHTML = `<div class="error">Kan repertoire niet laden. ${err.message}</div>`;
      console.error(err);
    });
});