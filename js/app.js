$(document).ready(function() {
    // Initialize DataTable
    var table = $('#placesTable').DataTable();

    // Initialize Leaflet Map
    var map = L.map('map').setView([51.505, -0.09], 13);  // Default location: London
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    var tempMarker = null;  // Variable to store temporary marker

    // Fetch places from the database on page load
    $.ajax({
        url: 'php/get_places.php',  // PHP file to fetch places
        method: 'GET',
        success: function(response) {
            var places = JSON.parse(response);

            places.forEach(function(place) {
                // Add place to the table
                table.row.add([place.name, place.lat + ', ' + place.lng]).draw();

                // Add place to the map
                L.marker([place.lat, place.lng])
                    .addTo(map)
                    .bindPopup(place.name)
                    .openPopup();
            });
        }
    });

    // Handle Add Place Button Click
    $('#addPlaceBtn').click(function() {
        $('#placeModal').show();  // Show the modal when the button is clicked
    });

    // Handle Form Submission (Save place)
    $('#placeForm').submit(function(e) {
        e.preventDefault();

        var name = $('#placeName').val();
        var coords = $('#placeCoordinates').val().split(',');

        // AJAX request to save the place
        $.ajax({
            url: 'php/save_place.php',  // Your PHP file for saving
            method: 'POST',
            data: {
                name: name,
                lat: coords[0],
                lng: coords[1]
            },
            success: function(response) {
                // Add the new place to the map
                var marker = L.marker([coords[0], coords[1]]).addTo(map)
                    .bindPopup(name)
                    .openPopup();

                // Add the new place to the table
                table.row.add([name, coords.join(', ')]).draw();

                // Hide the modal after saving
                $('#placeModal').hide();

                // Remove the temporary marker if it exists
                if (tempMarker) {
                    map.removeLayer(tempMarker);
                    tempMarker = null;  // Reset the temporary marker
                }
            }
        });
    });

    // Handle map click to add new place
    map.on('click', function(e) {
        var lat = e.latlng.lat;
        var lng = e.latlng.lng;

        // Remove any existing temporary marker
        if (tempMarker) {
            map.removeLayer(tempMarker);
        }

        // Add a temporary marker at the clicked location
        tempMarker = L.marker([lat, lng]).addTo(map)
            .bindPopup("New Place: " + lat.toFixed(5) + ", " + lng.toFixed(5))
            .openPopup();

        // Fill the coordinates in the form
        $('#placeCoordinates').val(lat + ',' + lng);  // Set the coordinates field

        // Open the modal automatically
        $('#placeModal').show();
    });

    // Handle Cancel Button Click
    $('#cancelBtn').click(function() {
        // Hide the modal when the cancel button is clicked
        $('#placeModal').hide();

        if (tempMarker) {
            map.removeLayer(tempMarker);
            tempMarker = null;  // Reset the temporary marker
        }
    });
});
