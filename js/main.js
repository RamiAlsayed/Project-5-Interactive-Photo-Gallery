lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'showImageNumberLabel': false
  })
  

    let photos = document.getElementsByTagName('a');
    $('#search').on('keyup', function () {
        let search = $('#search').val().toLowerCase();

        for (var i = 0; i < photos.length; i++) {
            let searchB = photos[i].getAttribute('data-title');

            if (searchB.toLowerCase().indexOf(search) > -1) {
                photos[i].style.display = "";
            } else {
                photos[i].style.display = "none";
            }
        }
    });



