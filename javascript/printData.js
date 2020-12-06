// IMPORTANT Processus
// 1 => Pour chaque album du fichier json, je crée une div card
// 2 => pour chaque album, je récupère ses informations et je les implémente commes informations dans les div

// lien API http://api.deezer.com/search/album?q=eminem

// WATCH Récupération des éléments
const albumsDiv = document.querySelector('.album-list');

const displayAlbums = function () {
    // pour chaque album
    for (const item of data) {
        // on crée une card bootstrap en récupérant les infos de l'objet data
        const html = `
        <div class="card">
                <img src="${item.album.cover_big}" class="card-img-top" alt="${item.title}" />
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text"></p>
                    <a href="${item.album.tracklist}" class="btn btn-primary">Tracklist</a>
                    <audio controls src="${item.preview}"></audio>
                </div>
            </div>`;

        albumsDiv.insertAdjacentHTML('beforeend', html);
    }
    // on scroll vers le bas pour plus de visibilité sur les albums
    window.scroll(0, 900);
};

const displayTracklist = function () {
    fetchJsonp('http://api.deezer.com/search/album?q=eminem&output=jsonp')
        .then(function (response) {
            return response.json();
        })
        .then(json => console.log(json))
        .catch(function (error) {
            console.log(error);
        });
};

displayTracklist();

document.querySelector('#showAlbums').addEventListener('click', displayAlbums);
