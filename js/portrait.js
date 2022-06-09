$(document).ready(() => {
    const params = new URLSearchParams(window.location.search)
    if(!params.has("track"))
        $("#title").html("Bitte benutze das Querformat.")
    else load_track(params.get("track"))

    $(window).on('orientationchange resize', () => {
        const body = $("body");
        const params = new URLSearchParams(window.location.search)
        if(body.width() > body.height())
            if(params.has("track"))
                window.location = 'map.html?track=' + params.get("track")
            else
                window.location = 'map.html';
    });
})