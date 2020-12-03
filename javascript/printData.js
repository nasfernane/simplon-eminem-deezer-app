// IMPORTANT Processus
// 1 => Pour chaque album du fichier json, je crée une div card
// 2 => pour chaque album, je récupère ses informations et je les implémente commes informations dans les div

// WATCH Récupération des éléments
const albumsDiv = document.querySelector('.album-list');
const modeleCard = document.querySelector('.album-list .card');

// crée un compteur pour la position de l'album
let albumPosition = 1;

const displayAlbums = function () {
    // pour chaque album
    for (const item of data) {
        // on crée un clone du modèle de card Bootstrap
        const tempDiv = modeleCard.cloneNode([true]);
        // On insère la card sur la page HTML
        albumsDiv.insertAdjacentElement('beforeend', tempDiv);
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

// const firstCard = document.querySelector('.card:nth-child(1) img');

// firstCard.alt = 'Mos Def';
// firstCard.src = console.log(firstCard);
