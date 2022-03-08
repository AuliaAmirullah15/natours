/* eslint-disable */
export const displayMap = (locations) => {
    // mapboxgl.accessToken =
    //     'pk.eyJ1IjoiYXVsaWFhbWlyMTUzIiwiYSI6ImNrejE4MHVvcjBzNHIzMHJ6a2Vybm12d2wifQ.TjYiJGmAGSMYP8XEFWjyTg';
    mapboxgl.accessToken =
        'pk.eyJ1IjoiYXVsaWFhbWlyMTUzIiwiYSI6ImNrejE4aTlxdjFqbzkycXFsZG9jcDZtM3MifQ.3SfLDrGyhWKb8SImoy_S5g';

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/auliaamir153/ckz1wrhya000214pev2n79pmi', // style URL
        scrollZoom: false,
        // center: [-118.113491, 34.111745], // starting position [lng, lat]
        // zoom: 9, // starting zoom
        // interactive: false,
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach((loc) => {
        // Create marker
        const el = document.createElement('div');
        el.className = 'marker';

        // Add marker
        new mapboxgl.Marker({
                element: el,
                anchor: 'bottom',
            })
            .setLngLat(loc.coordinates)
            .addTo(map);

        // Add popup
        new mapboxgl.Popup({
                offset: 30,
            })
            .setLngLat(loc.coordinates)
            .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
            .addTo(map);

        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });

    // fitting and zooming functionalities
    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100,
        },
    });
};