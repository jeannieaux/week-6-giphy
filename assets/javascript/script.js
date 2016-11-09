$(document).ready(function () {

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

        var queryUrl = "http://api.giphy.com/v1/gifs/search?q="+ randomSearch +"&api_key=dc6zaTOxFJmzC&limit=10";

     $.ajax({url:queryUrl,method:'GET' }) 
     .done(function(response){
        console.log(response);
        for (var i = 0; i < response.data.length; i++){
        $('#emotionPics').append("<p>"+response.data[i].rating+"</p>");
        $('#emotionPics').append("<img src='"+response.data[i].images.fixed_height_small_still.url+"'>");
     
}
})

})

        function searchGiphy(searchQuery) {
        
       //var task = $('#emotionalInput').val().trim();
        

        var querySearch = "http://api.giphy.com/v1/gifs/search?q="+ searchQuery +"&api_key=dc6zaTOxFJmzC&limit=10";
        
        

        $.ajax({url:querySearch,method:'GET' }) 
        .done(function(response){
        console.log(response);
        for (var i = 0; i < response.data.length; i++){
        $('#emotionPics').append("<p>"+response.data[i].rating+"</p>");
        $('#emotionPics').append("<img src='"+response.data[i].images.fixed_height_small_still.url+"'>");
     }   
}
})
       
})
   $('#more').on('click',function(){    
        
       var task = $('#emotionalInput').val().trim();

       searchGiphy(task);
       })   
});