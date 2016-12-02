//google image search
function getImage(query) {
  var BASE_URL = "https://www.googleapis.com/customsearch/v1";
  var apiInfo = {
      part: 'imageObject',
      key: "AIzaSyDV7gI5HRtk5Ad7MOaYGKE-oqbPLT5dWSQ",
      q: "the most famous work of" + query,
      maxResults: 1
  }
  $.getJSON(BASE_URL, apiInfo, displayImage);
}
/*function getParagraph(query) {
  var BASE_URL = "";
  var apiInfo = {
      part: '',
      key: "",
      q: query,
      maxResults: 1
  }
  $.getJSON(BASE_URL, apiInfo, displayParagraph);
}
*/
function displayImage(data) {
    var resultImage = '';
    if (data.items) {
        data.items.forEach(function(item) {
            resultImage += '<img src=' + item.snippet.url + '></a>';

        });
    } else {
        resultElement += '<p>No results</p>';
    	}

    $('.js-image').html(resultImage);
}

/*function displayParagraph(data) {
    var resultParagraph = '';
    if (data.items) {
        data.items.forEach(function(item) {
            resultParagraph += '<p>' + item.snippet.??? + '</p>';

        });
    } else {
        resultElement += '<p>No results</p>';
    }

    $('.js-image').html(resultImage
*/
 //get query from user
function getQuery() {
  $("form").on("click", "button", function(event) {
    event.preventDefault();
      var query = $(".js-query").val()
      console.log(query)
      getImage(query);
      //getParagraph(query);
  }); 
}
//doc ready to run when user enters
$(function(){
  getQuery();
});
