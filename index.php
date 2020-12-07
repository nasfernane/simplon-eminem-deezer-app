<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Eminem Deezer Albums</title>
        <!-- link CSS Bootstrap -->
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="css/style.css" />
    </head>
    <body>
        <section id="landing"></section>
        <!-- button pour faire apparaître les albums -->
        <div class="chooseArtist">
            <button class="showAlbums" id="showEminem">
                Voir les albums d'Eminem
            </button>
            <input
                type="text"
                class="showAlbums"
                id="showOtherArtist"
                size="20"
                placeholder="Essayer un autre artiste"
            />
        </div>
        <div id="myModal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <div class="tracklist"></div>
            </div>
        </div>

        <!-- div qui contiendra tous les albums -->
        <div class="album-list"></div>

        <!-- librairie qui aide à fetch sur deezer -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/fetch-jsonp/1.1.1/fetch-jsonp.js"></script>
        <!-- Script Json avec les infos sur Eminem -->
        <!-- <script src="javascript/data.js"></script> -->
        <!-- Script principal -->
        <script src="javascript/printData.js"></script>
        <script src="javascript/modal.js"></script>
    </body>
</html>
