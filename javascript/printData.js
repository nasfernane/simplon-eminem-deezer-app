// WATCH Récupération des éléments
const albumsDiv = document.querySelector('.album-list');
const eminemBtn = document.querySelector('#showEminem');
const otherArtistInput = document.querySelector('#showOtherArtist');

// FONCTIONS

// fonction qui affiche les albums avec les infos récupérées de la fonction fetchAlbums
const displayAlbums = function (data) {
    // suppression des cards précédentes si il y a déjà eu une recherche antérieure
    const previousCards = document.querySelectorAll('.card');
    if (previousCards.length) albumsDiv.innerHTML = '';

    const albums = data.data;
    // pour chaque album
    for (const item of albums) {
        // on crée une card bootstrap en récupérant les infos de l'objet data
        const html = `
        <div class="card">
                <img src="${item.album.cover_big}" class="card-img-top" alt="${
            item.title
        }" />
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text"></p>
                    <a href="${
                        item.tracklist
                    }" class="btn btn-primary">Tracklist${
            item.explicit_lyrics ? ` (Explicit Content)` : ''
        }</a>
                    <audio controls src="${item.preview}"></audio>
                </div>
            </div>`;

        albumsDiv.insertAdjacentHTML('beforeend', html);
    }
    // on scroll vers le bas pour plus de visibilité sur les albums
    window.scroll(0, 900);
};

// fonction qui fetch l'API deezer en fonction du nom de l'artiste entré en paramètre
const fetchAlbums = function (artiste) {
    // utilisation de la librairie jsonp pour pouvoir fetch sans backend/headers
    fetchJsonp(
        `https://api.deezer.com/search/track/autocomplete?limit=25&q=${artiste}&output=jsonp`
    )
        .then(function (response) {
            return response.json();
        })
        .then(json => displayAlbums(json))
        .catch(function (error) {
            console.log(error);
        });
};

// ECOUTEURS

eminemBtn.addEventListener('click', function () {
    fetchAlbums('eminem');
});

otherArtistInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') fetchAlbums(`${otherArtistInput.value}`);
});
