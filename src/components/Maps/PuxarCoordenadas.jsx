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
            console.error('Tentativa de pegar as coordenadas.');
          }
        };
        console.log("Coordenadas",getUserLocation);
        getUserLocation();
      }, []);

    return(
            <p> Puxando coordenadas </p>
    );
}

export {PuxarCoordenadas}