import React, { useEffect } from 'react';
import L from 'leaflet';
import './styled.css';



function MapComponent() {
  let h2 = document.querySelector('h2');
  var map;

  const success = (pos) => {
    console.log(pos.coords.latitude, pos.coords.longitude);
    h2.textContent = `Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`;

    if (map === undefined) {
      map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 13);
    } else {
      map.remove();
      map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 13);
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
      .bindPopup('Eu estou aqui!')
      .openPopup();
  }

  const error = (err) => {
    console.log(err);
  }

  useEffect(() => {
    const watchID = navigator.geolocation.watchPosition(success, error, {
      enableHighAccuracy: true,
      timeout: 5000
    });

    return () => {
      navigator.geolocation.clearWatch(watchID);
    }
  }, []);

  return (
    <div id="mapid" style={{ height: '300px', width: '50%' }}></div>
  );
}

export default MapComponent;
