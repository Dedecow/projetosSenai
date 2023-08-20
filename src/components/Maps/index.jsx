// src/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  const initialCoordinates = [-27.585594, -48.460666];
  const initialZoom = 15;

    return(
      <MapContainer className="map-container"  center={initialCoordinates} zoom={initialZoom} style={{ height: '500px', width: '100%' }}>
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      <Marker position={initialCoordinates}>
        <Popup>Ilha de Florianópolis</Popup>
      </Marker>
      </MapContainer>
    )

}
// function Map({ position, address }: MapProps) {
//   return (
//     <div className="map-container">
//       <div className="marker">
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <div className="popup">
//           <p>{address.street} {address.numberStreet}, {address.district}</p>
//           <p>{address.city}, {address.uf} - {address.zip}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

export { Map };