// WATCH Récupération des éléments
const albumsDiv = document.querySelector('.album-list');
const eminemBtn = document.querySelector('#showEminem');
const otherArtistInput = document.querySelector('#showOtherArtist');
const modal = document.querySelector('#myModal');
const span = document.querySelector('.close');
const trackDiv = document.querySelector('.tracklist');

// FONCTIONS

// fonction qui fetch l'API deezer en fonction du nom de l'artiste entré en paramètre
const fetchAlbums = function (artiste) {
    // utilisation de la librairie jsonp pour pouvoir fetch deezer sans serveur/proxy
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

// fonction qui affiche les albums avec les infos récupérées de la fonction fetchAlbums
const displayAlbums = function (data) {
    // suppression de la recherche précédente
    albumsDiv.innerHTML = '';

    const albums = data.data;
    console.log(albums);
    // pour chaque album
    for (const item of albums) {
        // on crée une card bootstrap en lui injectant les données du fetch
        const html = `
        <div class="card">
                <img src="${item.album.cover_big}" class="card-img-top" alt="${
            item.title
        }" />
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text"></p>
                    <button data-tracklist="${item.album.tracklist}"
                     class="btn btn-primary">Tracklist${
                         item.explicit_lyrics ? ` (Explicit Content)` : ''
                     }</button>
                    <audio controls src="${item.preview}"></audio>
                </div>
            </div>`;

        // puis on l'insère dans le HTML
        albumsDiv.insertAdjacentHTML('beforeend', html);
        // on lui ajoute un écouteur sur la tracklist
        document
            .querySelector('.card:nth-last-child(1) button')
            .addEventListener('click', function (event) {
                fetchTracklist(`${item.album.tracklist}`);
            });
    }
    // on scroll vers le bas pour plus de visibilité sur les albums
    window.scroll(0, 900);
};

// fonction qui fetch la tracklist puis lance la fonction pour l'afficher
const fetchTracklist = function (tracklink) {
    console.log(tracklink);
    fetchJsonp(`${tracklink}&output=jsonp`)
        .then(function (response) {
            return response.json();
        })
        .then(json => {
            console.log(json);
            displayTrackList(json);
        })
        .catch(function (error) {
            console.log(error);
        });
};

// fonction pour pop la tracklist
const displayTrackList = function (data) {
    const tracklist = data.data;
    console.log(tracklist);
    // efface la tracklist précédente
    trackDiv.innerHTML = '';
    // on display la modale
    modal.style.display = 'block';
    // on lui insère le contenu
    for (const track of tracklist) {
        const tempDiv = `
        <div class="track">
        <p>${track.track_position} - ${track.title}</p>
        <audio controls src="${track.preview}"></audio>
        </div>
        `;
        trackDiv.insertAdjacentHTML('beforeend', tempDiv);
    }
};

// ECOUTEURS

// écouteur pour les albums eminem sur click au boutton
eminemBtn.addEventListener('click', function () {
    fetchAlbums('eminem');
});
// écouteur pour écouter un autre artiste sur event keydown (touche entrée)
otherArtistInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') fetchAlbums(`${otherArtistInput.value}`);
});
// ferme la fenêtre modale quand l'utilisateur appuie sur la croix
span.addEventListener('click', () => (modal.style.display = 'none'));
// ferme la fenêtre modale si l'utilisateur clique en dehors
window.addEventListener('click', event => {
    if (event.target == modal) modal.style.display = 'none';
});
