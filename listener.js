$(document).ready(() => {
    if(window.innerHeight > window.innerWidth){
        window.location = 'portrait.html';
    }

    $('#s-marzahn').on('click', (event) => {
        event.preventDefault();
        load_track(0);
    })
});

$(document).on('track-reload', () => {
    $('#audio').trigger('play');
});