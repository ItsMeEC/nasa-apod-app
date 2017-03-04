


/*
$(document).ready(function() {
    $("#datepicker").datepicker();
  });

$(document).ready(function() {
  $(".prev").click();
});

$(document).ready(function() {
  $(".next").click();
});

var request = $.ajax({
        url: 'https://api.nasa.gov/planetary/apod',
        data: params,
});

request.done(function( data ) {
    $('#img').attr('src', data.hdurl); 
    $('#title').html(data.title);
    $('#description').html(data.explanation);
});

var PAGE_ELEMENTS = {
 'start': $('.start-page'),
 'main': $('.main-page'),
};

$("form[name='app-start']").submit(function(event) {
  event.preventDefault();
  setRoute(state, 'main');
  renderApp(state, PAGE_ELEMENTS);
});
*/



//ajax call

$(document).ready(function() {
    $("#datepicker").datepicker();
  });

  
var api_key = 'ri0EZkle2DPanZWtyS8oZFgC4coub86CDtV5OiYV';

var nasa_url = 'https://api.nasa.gov/planetary/apod';

function getDataFromApi(searchTerm, callback) {
  var settings = {
    url: nasa_url,
    data: {
      date: searchTerm,
      api_key: api_key,
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
}

function displayNasaSearchData(data) {
var results = $('.results');
results.empty();
var imageLink = data.url;
var heading = data.title;
var descp =data.explanation;
var date= data.date;
var elem = '<h2 style= "color: white"> '+ heading +' </h2><div id="picture-div"><img style= "height: 400px; width: 400px;" class="img-responsive" src="'+ imageLink +'" /></a></div><div id="text-div"><p style= "color: white" > '+ descp +' </p></div>';
results.append(elem);
}


function watchSubmit() {
  $('#search').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('#datepicker').val();
    getDataFromApi(query, displayNasaSearchData);
  });
}

$(function(){watchSubmit();});


