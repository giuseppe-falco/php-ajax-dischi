<!-- esercizio di ieri ma usando chiamata ajax -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dist/app.css">
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <title>Ajax Dischi</title>
</head>
<body>
    <header>
            <div class="container">
                <div class="logo">
                    <img src="img/logo.svg" alt="">
                </div>
            </div>

            <select id="select-author">
                <option value="0">Tutti gli autori</option>
            </select>
    </header>
    <main>
        <!-- <div class="container"> -->
            <div class="disk-container"></div>
        <!-- </div> -->
    </main>
    <script id="template-disk" type="text/x-handlebars-template">
        <div class="disk" data-author="{{author}}">
            <div class="cd-poster">
                <img src="{{path}}" alt="">
            </div>
            <h3>
                {{title}}
            </h3>
            <div class="cd-author">
                {{author}}
            </div>
            <div class="cd-year">
                {{year}}
            </div>

        </div>
    </script>
    <script id="select-author-template" type="text/x-handlebars-template">
            <option value="{{author}}">{{author}}</option>
    </script>
    <script src="dist/app.js"></script>
</body>
</html>