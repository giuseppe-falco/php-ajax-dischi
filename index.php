<!-- esercizio di ieri ma usando chiamata ajax -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dist/app.css">
    <title>Ajax Dischi</title>
</head>
<body>
    <header>
            <div class="container">
                <div class="logo">
                    <img src="logo.svg" alt="">
                </div>
            </div>
    </header>
    <main>
        <!-- <div class="container"> -->
            <div class="disk-container"></div>
        <!-- </div> -->
    </main>
    <script id="template-disk" type="text/x-handlebars-template">
        <div class="disk">
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
    <script src="dist/app.js"></script>
</body>
</html>