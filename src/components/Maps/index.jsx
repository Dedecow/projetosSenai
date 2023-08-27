import React, { useState, useEffect } from 'react';
import { LatLngExpression } from 'leaflet';


function MapComponent() {
  


  return (
    <container>
      <MapContainer
          center={
            {
              lat: coords[0],
              lng: coords[1],
            } as LatLngExpression
          }
          zoom={13}
          whenCreated={(map) => {
            map.addEventListener("click", (event: LeafletMouseEvent) => {
              setFormValues((prev) => ({
                ...prev,
                coords: [event.latlng.lat, event.latlng.lng],
              }));
            });
          }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={
              [formValues.coords[0], formValues.coords[1]] as LatLngExpression
            }
          />
        </MapContainer>


    </container>
  );
}

export { MapComponent };
