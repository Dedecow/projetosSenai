import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Maps() {
  const initialCoordinates = [-27.585594, -48.460666];
  const initialZoom = 15;

  return (
    <MapContainer center={initialCoordinates} zoom={initialZoom} style={{ height: '500px', width: '100%' }}>
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      <Marker position={initialCoordinates}>
        <Popup>Ilha de Florianópolis</Popup>
      </Marker>
    </MapContainer>
  );
}

export {Maps};
