import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './styled.css';

function CoordinatesDisplay({ latitude, longitude }) {
  return (
    <div className='mostrar-coordenadas'>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
    </div>
  );
}

function PuxarCoordenadas({ onUpdateCoords }) {
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ lat: latitude, lng: longitude });
            onUpdateCoords(latitude, longitude);
          },
          error => {
            console.error(error);
          }
        );
      } else {
        console.error('Não foi possível obter as coordenadas.');
      }
    };
    getUserLocation();
  }, [onUpdateCoords]);

  return (
      <div className='exibir-coordenadas'>
        <p 
        className='indicador-localidade'>
        Você está Aqui. &#128071;
      </p>

      <CoordinatesDisplay
      latitude={userLocation.lat}
      longitude={userLocation.lng}
    />
    </div>
    
  );
}

function MapComponent() {
  const initialCoords = [-27.5954,-48.5480 ];
  const [formValues, setFormValues] = useState({
    coords: initialCoords,
  });

  const handleMapClick = event => {
    const clickedCoords = [event.latlng.lat, event.latlng.lng];
    setFormValues(prev => ({
      ...prev,
      coords: clickedCoords,
    }));
  };

  return (
    <div>
      <PuxarCoordenadas
        onUpdateCoords={(latitude, longitude) => {
          setFormValues({ coords: [latitude, longitude] });
        }}
      />
      <MapContainer
        className='map-container'
        center={formValues.coords}
        zoom={13}
        style={{ height: '400px', width: '100%' }}
        whenCreated={map => {
          map.addEventListener('click', handleMapClick);
        }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      
    </div>
  );
}

export { MapComponent };
