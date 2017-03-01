



$(document).ready(function() {
    $("#datepicker").datepicker();
  });

function loadImage(date) {
    var params = {
        api_key : key,
        hd: true
    };

    if (date != null) {
        params['date'] = date;
    }

    var request = $.ajax({
        url: ENDPOINT,
        data: params,
    });

    request.done(function( data ) {
        $('#img').attr('src', data.hdurl);
        $('#title').html(data.title);
        $('#description').html(data.explanation);
    });


