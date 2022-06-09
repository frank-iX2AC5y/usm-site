const track = (id, callback) => {
    $.getJSON('/tracks/tracks.json', (data) => {
        $.getJSON('/tracks/' + data.tracks[id] + '/track.json', d => {
            callback(d, '/tracks/' + data.tracks[id] + '/track.mp3')
        })
    });
}

const maps_tag = (track) => {
    return '<iframe id="map-frame" style="border:0; width: 425px; height: 250px" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB69POiA-b8gISRO23cIiTOW6pcvO6om6U&q='+track.google_maps_place_id+'"></iframe>';
}

const sound_tag = (sound_path) => {
    return '<div class="audio" id="audio-wrapper">\n' +
        '            <audio controls id="audio" style="float: left; width: 425px;"><source src="'+sound_path+'" type="audio/mpeg"></audio>\n' +
        '        </div>';
}

const load_track = (track_id) => {
    track(track_id, (track, sound_path) => {
        $("#title").html(track.name);
        $("#author").html(track.author);
        $("#sound").html(sound_tag(sound_path));
        $("#map").html(maps_tag(track));
        $("#description").html(track.description);

        $(document).trigger('track-reload');
    });
};

const tracks = (callback) => {
    $.getJSON('/tracks/tracks.json', (data) => {
        $.each(data.tracks, (id, value) => {
            $.getJSON('/tracks/' + value + '/track.json', d => {
                callback(id, d)
            })
        });
    });
};