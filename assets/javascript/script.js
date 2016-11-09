$(document).ready(function () {

// I was going to loop through the array and assign a button to each. However, I was unable to 
// so I created the actual buttons on the html page.

/*var topics = [ "Happy", 
                 "Sad", 
                 "Mad", 
                 "Surprised", 
                 "Scared", 
                 "Embarrassed", 
                 "Excited", 
                 "Bored", 
                 "Disappointed", 
                 "Disgusted" ]


for (var i =0; i < topics.length; i++){
	
     var emoticons = $('<button>');
        
  $('<button>').append(topics);
        

};
*/

$('button').on('click',function(){

       
        var randomSearch = $(this).data("search");
        var queryUrl = "//api.giphy.com/v1/gifs/search?q="+ randomSearch +"&api_key=dc6zaTOxFJmzC&limit=10";




     $.ajax({url:queryUrl,method:'GET' }) 
     .done(function(response){
        console.log(response);

        
s
        for (var i = 0; i < response.data.length; i++){
        $('#emotionPics').prepend("<button>Rating:"+response.data[i].rating+"</button>")
       // $('#emotionPics').prepend("<img src='"+response.data[i].images.fixed_height_small_still.url+"'>");
        $('#emotionPics').prepend("<img src='"+response.data[i].images.fixed_height_small.url+"'>")

    
                       }
                })

           })

          
});

// This code was supposed to return a value from th einput box and perform the same function above.
// Unfortunately, does not work properly.

/*$('#more').on("click", function(){

        var grabGif = $('#emotionalInput').val();
        var queryUrl = "http://api.giphy.com/v1/gifs/search?q="+ grabGif +"&api_key=dc6zaTOxFJmzC&limit=10";




        $.ajax({url:queryUrl,method:'GET' }) 
        .done(function(response){
        

        

        for (var i = 0; i < response.data.length; i++){

        $('#emotionPics').prepend("<button>" +response.data[i].rating+"</button>")
       // $('#emotionPics').prepend("<img src='"+response.data[i].images.fixed_height_small_still.url+"'>");
        $('#emotionPics').prepend("<img src='"+response.data[i].images.fixed_height_small.url+"'>")

    
                       }
                })

           });
*/
