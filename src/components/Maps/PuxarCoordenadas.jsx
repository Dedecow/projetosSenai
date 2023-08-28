import React, { useEffect, useState } from "react";

function CoordinatesDisplay({ latitude, longitude }) {
    return (
        <div>
            {/* <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p> */}
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
        <CoordinatesDisplay
            latitude={userLocation.lat}
            longitude={userLocation.lng}
        />
    );
}

export { PuxarCoordenadas };
