import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent() {
  useEffect(() => {
    // Create a new map instance
    const map = L.map('map').setView([-27.585594, -48.460666], 15);

    // Add the tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker to the map
    L.marker([-27.585594, -48.460666]).addTo(map)
      .bindPopup('Ilha de Florianópolis')
      .openPopup();
  }, []);

  return (
    <div>
      <div id="map" style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
}

export { MapComponent };
