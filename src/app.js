const $ = require('jquery');
const Handlebars = require("handlebars");

$(document).ready(function(){
    
    
    $.ajax({
        url: "http://localhost/lezione_49/php-ajax-dischi/db.php",
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
        console.log(data);

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