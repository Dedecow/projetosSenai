import React, { useEffect, useState } from "react";

/**
 * Componente para exibir as coordenadas.
 * @param {number} latitude - A latitude.
 * @param {number} longitude - A longitude.
 */
function CoordinatesDisplay({ latitude, longitude }) {
    return (
        <div>
            <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>
        </div>
    );
}

/**
 * Componente para puxar e exibir coordenadas.
 * @param {function} onUpdateCoords - Função para atualizar as coordenadas.
 * @param {boolean} isMounted - Indica se o componente está montado.
 */
function PuxarCoordenadas({ onUpdateCoords, isMounted }) {
    const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        const getUserLocation = () => {
            if (navigator.geolocation && isMounted) {
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
    }, [onUpdateCoords, isMounted]);

    return (
        <CoordinatesDisplay
            latitude={userLocation.lat}
            longitude={userLocation.lng}
        />
    );
}

export { PuxarCoordenadas, CoordinatesDisplay };
