// IMPORTANT Processus
// 1 => Pour chaque album du fichier json, je crée une div card
// 2 => pour chaque album, je récupère ses informations et je les implémente commes informations dans les div

// WATCH Récupération des éléments
const albumsDiv = document.querySelector('.album-list');
const modeleCard = document.querySelector('.album-list .card');

const displayAlbums = function () {
    // crée un compteur pour la position de l'album
    let albumPosition = 1;
    // pour chaque album
    for (const item of data) {
        // pour chaque album on ajoute une card clonée sur le modèle bootstrap
        albumsDiv.appendChild(modeleCard.cloneNode([true]));
        // on implémente les données de l'album dans la div card
        document.querySelector(`.card:nth-child(${albumPosition}) img`).src =
            item.album.cover_big;
        document.querySelector(`.card:nth-child(${albumPosition}) img`).alt =
            item.album.cover_big;
        document.querySelector(
            `.card:nth-child(${albumPosition}) .card-body a`
        ).href = item.album.tracklist;
        document.querySelector(
            `.card:nth-child(${albumPosition}) .card-body h5`
        ).textContent = item.title;
        document.querySelector(
            `.card:nth-child(${albumPosition}) .card-body audio`
        ).src = item.preview;
        document.querySelector(
            `.card:nth-child(${albumPosition})`
        ).style.display = 'block';
        // on incrémente le compteur de position
        albumPosition++;
    }
    // on scroll vers le bas pour plus de visibilité sur les albums
    window.scroll(0, 900);
};

document.querySelector('#showAlbums').addEventListener('click', displayAlbums);
