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
        <button id="showAlbums">Voir les albums d'Eminem</button>
        <!-- div qui contiendra tous les albums -->
        <div class="album-list"></div>

        <!-- SDK Deezer -->
        <?php
$cache_expire = 60*60*24*365;
header("Pragma: public");
header("Cache-Control: maxage=".$cache_expire);
header('Expires: ' . gmdate('D, d M Y H:i:s', time()+$cache_expire) . ' GMT');
?>
        <script src="https://cdns-files.dzcdn.net/js/min/dz.js"></script>
        <!-- Script Json avec les infos sur Eminem -->
        <script src="javascript/data.js"></script>
        <!-- Script principal -->
        <script src="javascript/printData.js"></script>
    </body>
</html>
