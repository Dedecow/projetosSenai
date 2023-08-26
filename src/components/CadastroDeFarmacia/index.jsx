import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import './styled.css';

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

function CadastroDeFarmacia() {
    const [farmacias, setFarmacias] = useState({
        razaoSocial: '',
        cnpj: '',
        nomeFantasia: '',
        email: '',
        telefone: '',
        celular: '',
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        complemento: '',
        latitude: '',
        longitude: ''
    });

    const atualizarCoordenadas = (lat, lng) => {
        setFarmacias({
            ...farmacias,
            coordenadas: {
                ...farmacias.coordenadas,
                latitude: lat,
                longitude: lng
            }
        });
    };

    const [lista, setLista] = useState([]);
    useEffect(() => {
        if (localStorage.getItem('lista_farmacias') !== null) {
            setLista(JSON.parse(localStorage.getItem('lista_farmacias')))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('lista_farmacias', JSON.stringify(lista))
    }, [lista])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFarmacias({ ...farmacias, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(lista);
        setLista([...lista, farmacias]);
    };

    async function pegarCep() {
        await fetch(`http://viacep.com.br/ws/${farmacias.cep}/json/`)
            .then(resposta => resposta.json())
            .then(dados => {
                setFarmacias({
                    ...farmacias,
                    bairro: dados.bairro,
                    logradouro: dados.logradouro,
                    cidade: dados.localidade,
                    estado: dados.uf
                });
                console.log(dados);
            });
    }

    return (
        <form className="container" onSubmit={handleSubmit}>
            <p> Cadastro de Farmácia </p>

            <div className="text-field">
                {/* Campos de entrada */}
            </div>
            <div className="text-field">
                {/* Campos de entrada */}
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
                </div>
            </div>
            <div className="button-container">
                <Button variant="contained"> LIMPAR </Button>
                <Button onClick={pegarCep} type="submit" variant="contained"> SALVAR </Button>
            </div>
        </form>
    );
}

export { CadastroDeFarmacia };
