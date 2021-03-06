$(document).ready(() => {

    const params = new URLSearchParams(window.location.search)

    if(window.innerHeight > window.innerWidth)
        if(params.has("track"))
            window.location = 'portrait.html?track=' + params.get("track")
        else
            window.location = 'portrait.html'

    $(window).on('orientationchange resize', () => {
        const body = $("body")
        if(body.width() < body.height())
            if(params.has("track"))
                window.location = 'portrait.html?track=' + params.get("track")
            else
                window.location = 'portrait.html'
    });

    $(document).on('track-reload', () => {
        $('#audio').trigger('play');
    });

    if(params.has("track")) {
        load_track(params.get("track"));
    }

    tracks((id, track) => {
        console.log(track);
        $('#mainMap').append('<area class="mainMapArea" id="track'+id+'" track="'+id+'" title="'+track.name+'" shape="rect" coords="'+track.dimension.p1.x+', '+track.dimension.p1.y+', '+track.dimension.p2.x+', '+track.dimension.p2.y+'" href="#" alt="">');
        $('#track'+id).click((event) => {
            event.preventDefault();
            load_track(event.target.getAttribute("track"));
        })
    });
});