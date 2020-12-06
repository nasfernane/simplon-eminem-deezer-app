// IMPORTANT Processus
// 1 => Pour chaque album du fichier json, je crée une div card
// 2 => pour chaque album, je récupère ses informations et je les implémente commes informations dans les div

// lien API http://api.deezer.com/search/album?q=eminem

var myHeaders = new Headers();
var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'no-cors',
    cache: 'default',
};

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
    fetch(`http://api.deezer.com/search/album?q=eminem`, myInit).then(
        response => {
            console.log(response);
        }
    );
};

displayTracklist();

document.querySelector('#showAlbums').addEventListener('click', displayAlbums);
