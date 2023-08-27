import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { LatLngExpression, LeafletMouseEvent } from 'leaflet';

function MapComponent() {
  const initialCoords: LatLngExpression = [51.505, -0.09];
  const [formValues, setFormValues] = useState({
    coords: initialCoords,
  });

  const handleMapClick = (event: LeafletMouseEvent) => {
    const clickedCoords: LatLngExpression = [event.latlng.lat, event.latlng.lng];
    setFormValues((prev) => ({
      ...prev,
      coords: clickedCoords,
    }));
  };

  return (
    <div>
      <MapContainer
        center={formValues.coords}
        zoom={13}
        style={{ height: '400px', width: '100%' }}
        whenCreated={(map) => {
          map.addEventListener("click", handleMapClick);
        }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={formValues.coords} />
      </MapContainer>
    </div>
  );
}

export { MapComponent };
