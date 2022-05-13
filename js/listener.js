$(document).ready(() => {
    if(window.innerHeight > window.innerWidth){
        window.location = 'portrait.html';
    }

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

    tracks((id, track) => {
        console.log(track);
        $('#mainMap').append('<area class="mainMapArea" id="track'+id+'" track="'+id+'" title="Lorem ipsum" shape="rect" coords="'+track.dimension.p1.x+', '+track.dimension.p1.y+', '+track.dimension.p2.x+', '+track.dimension.p2.y+'" href="#" alt="">');
        $('#track'+id).click((event) => {
            event.preventDefault();
            load_track(event.target.getAttribute("track"));
        })
    });
});