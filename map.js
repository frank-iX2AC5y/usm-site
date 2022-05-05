var tracks = {
    0: {
        name: "S Marzahn",
        identifier: 0,
        author: "Malte Lunkeit",
        sound: "tracks/smarzahn.mp3",
        google_maps_place_id: "S+Marzahn",
        description: "Lorem ipsum dolor sit amet."
    }
}

function get_track(id) {
    return tracks[id];
}

function maps_tag(track) {
    return '<iframe id="map-frame" style="border:0; width: 425px; height: 250px" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB69POiA-b8gISRO23cIiTOW6pcvO6om6U&q='+track.google_maps_place_id+'"></iframe>';
}

function sound_tag(track) {
    return '<div class="audio" id="audio-wrapper">\n' +
        '            <audio controls id="audio" style="float: left; width: 425px;"><source src="'+track.sound+'" type="audio/mpeg"></audio>\n' +
        '        </div>';
}