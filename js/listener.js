$(document).ready(() => {
    if(window.innerHeight > window.innerWidth){
        window.location = 'portrait.html';
    }

    $('#s-marzahn').on('click', (event) => {
        event.preventDefault();
        load_track(0);
    });

    $(window).on('orientationchange resize', event => {
        const body = $("body");
        if(body.width() < body.height())
            window.location = 'portrait.html';
    });

    $(document).on('track-reload', () => {
        $('#audio').trigger('play');
    });

    const params = new URLSearchParams(window.location.search);
    if(params.has("track")) {
        load_track(params.get("track"));
    }
});