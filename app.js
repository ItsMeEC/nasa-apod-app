



$(document).ready(function() {
    $("#datepicker").datepicker();
  });

$(document).ready(function() {
  $(".prev").click();
});

$(document).ready(function() {
  $(".next").click();
});

function loadImage(date) {
    var params = {
        api_key : key, //add key
        hd: true
};

var request = $.ajax({
        url: ENDPOINT,
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


