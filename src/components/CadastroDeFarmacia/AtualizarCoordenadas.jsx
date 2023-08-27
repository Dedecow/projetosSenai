function AtualizarCoordenadas (){

    return(
        <form className="container" onSubmit={handleSubmit}>
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
                {/* <PuxarCoordenadas onUpdateCoords={atualizarCoordenadas} /> */}
        <Button className="current-location-button" variant="contained" onClick={PuxarCoordenadas}>Inserir Coordenadas Manualmente</Button>
            </div> 
        </form>
    );
}
export {AtualizarCoordenadas};