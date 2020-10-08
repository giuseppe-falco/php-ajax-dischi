<!-- repo php-ajax-dischi
Utilizzare:
Html, Sass, PHP
Stampiamo i dischi solo con l’utilizzo di PHP, che stampa direttamente i dischi in pagina: al caricamento della pagina ci saranno tutti i dischi (vedi screenshot). In allegato trovate anche il database fake da utilizzare :wink: -->


<?php include "data/db.php";?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dist/app.css">
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <title>PHP Dischi</title>
</head>
<body>
    <header>
        <div class="container">
            <div class="logo">
                <img src="img/logo.svg" alt="">
            </div>
        </div>
    </header>
    <main>
            <div class="disk-container">
                <?php if (!empty($database)) {?>
                <?php foreach ($database as $disk) { ?>
                    <div class="disk">
                        <div class="cd-poster">
                            <img src="<?php echo $disk["poster"] ?>" alt="">
                        </div>
                        <h3>
                            <?php echo $disk["title"] ?>
                        </h3>
                        <div class="cd-author">
                            <?php echo $disk["author"] ?>
                        </div>
                        <div class="cd-year">
                            <?php echo $disk["year"] ?>
                        </div>

                    </div>
                <?php } ?>
                <?php }else { ?>
                    <h2>non ci sono cd</h2>
                <?php }?>
            </div>
    </main>
    <!-- <script src="dist/app.js"></script> -->
</body>
</html>