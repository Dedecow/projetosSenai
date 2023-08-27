function AtualizarCoordenadas (){
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

    const atualizarCoordenadas = (lat, lng) => {
        setFarmacias({
            ...farmacias,
            coordenadas: {
                ...farmacias.coordenadas,
                latitude: lat,
                longitude: lng
            }
        });        
    }
    return(
        <form className="container" onSubmit={handleSubmit}>
            <div className="text-field">
                <div className="latitude-longitude-container">
                <TextField
                    label="Latitude"
                    required
                    variant="outlined"
                    name="latitude"
                    value={farmacias.coordenadas?.latitude || ''}
                    onChange={handleChange}
                />
                <TextField
                    label="Longitude"
                    required
                    variant="outlined"
                    name="longitude"
                    value={farmacias.coordenadas?.longitude || ''}
                    onChange={handleChange}
                />
                    <PuxarCoordenadas onUpdateCoords={atualizarCoordenadas} />
                    <Button className="current-location-button" variant="contained" onClick={PuxarCoordenadas}>Inserir Coordenadas Manualmente</Button>
                </div> 
            </div> 
        </form>
    );
}


export {AtualizarCoordenadas};