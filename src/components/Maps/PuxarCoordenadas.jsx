import { useEffect, useState } from "react";

function PuxarCoordenadas () {
    const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        const getUserLocation = () => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              position => {
                const { latitude, longitude } = position.coords;
                setUserLocation({ lat: latitude, lng: longitude });
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
    }, []);

    return (
        <p>Latitude: {userLocation.lat}, Longitude: {userLocation.lng}</p>
    );
}

export { PuxarCoordenadas };
