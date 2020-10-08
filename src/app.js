const $ = require('jquery');
const Handlebars = require("handlebars");

$(document).ready(function(){
    
    callAuthor();
    
    $("#select-author").change(function(){
        checkGenre();
    });



    $.ajax({
        url: "http://localhost/lezione_49/php-ajax-dischi/data/api.php",
        method: "GET",
        success: function (data) {
            printDisk(data);
            
        },
        error: function (err) {
            alert("E' avvenuto un errore. ");
        }
    });
})


function printDisk(data){
    
    var source = $("#template-disk").html();
    var template = Handlebars.compile(source);
    
    for(var i=0; i<data.length; i++){

        let context  = {
            title: data[i].title,
            author: data[i].author,
            year: data[i].year,
            path: data[i].poster,
        }
        
        
        var html = template(context);
        $(".disk-container").append(html)
    }

}


    //funzione che richiama gli autori
    function callAuthor(){
        $.ajax(
            {
                url: "http://localhost/lezione_49/php-ajax-dischi/data/api.php",
                method: "GET",
                success: function (data) {
                    createGenreSelect($("#select-author"), data);
                },
                error: function(error) {
                    alert("Errore");
                }
            });
    }

    //funzione crea elenco autori
    function createGenreSelect(destination, author) {
        $("#select-author").empty();
        destination.append("<option value='0'>Seleziona per autore</option>");
            

        var source = $("#select-author-template").html();
        var template = Handlebars.compile(source);

        for (var i = 0; i < author.length; i++) {
    
            var context ={
                "author":author[i].author,
            };
            
            var html = template(context);
            destination.append(html);
        };

    };




        // //funzione controllo generi
        // function checkGenre(results, i, template, context, destination){
        //     // svuota pagina film
        //     //    $("#list-show").empty();
        //     //    $("#list-film").empty();
    
        //     // var resultsId = results[i].genre_ids;
        //     // console.log(resultsId);        
    
        //     var selectedId = $("#select-author").val();
        //     console.log(selectedId);
        //     var print = false;
    
        //     //se tipo di ricerca è diverso da globale
        //     // if ($("#select-search").val() != "search-global"){
    
        //         //se si è selezionato "tutti i generi"
        //         if(selectedId == 0){
        //             print = true;
        //             counterResults++;
        //         //se il risultato non è un array senza generi
        //         } else if(resultsId.length != 0){
        //             //per il numero di generi in ogni array stampa 
        //             for(var i=0; i<resultsId.length;i++){
        //                 if (selectedId == resultsId[i]){
        //                     counterResults ++;
        //                     console.log("ok");
        //                     print = true;
        //                 } 
        //             }
                   
        //         } 
        //     //se si è fatta una ricerca globale stampa tutto direttamente    
        //     // } else {
        //     //     print = true;
        //     //     counterResults++;
        //     // };
    
        //     // context.push(arrayGenres);
        //     console.log(arrayGenres);
        //     console.log(context);
    
        //     //se print true allora stampa in pagina il film altrimenti stampa "non ci sono risultati"
        //     if (print == true){
        //         appendToPage(template, context, destination);
        //     } 
    
            // $("#film-result").text(counterResults)
        // }




        function checkGenre(){
            var val = $("#select-author").val();
            console.log(val);
            if (val != 0){
                $(".disk").hide();
                let show = "[data-author=" + "'" + val + "'" + "]";
                console.log(show);
                $(show).show();
            } else {
                $(".disk").show();

            }
        }