import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import './styled.css';
import { PuxarCoordenadas } from "../Maps/PuxarCoordenadas";
// import axios from "axios";

function CadastroDeFarmacia (){

    // const [ dados, setDados] = useState ([]);

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
    const [lista, setLista] = useState([]);
    // carregar a lista de farmacia
    useEffect(() => {
        if(localStorage.getItem('lista_farmacias') !== null) {
            setLista(JSON.parse(localStorage.getItem('lista_farmacias')))
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('lista_farmacias', JSON.stringify(lista))
    }, [lista])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFarmacias({...farmacias, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();console.log(lista);setLista([...lista, farmacias])
    };


     
     async function pegarCep () {
        await fetch (`http://viacep.com.br/ws/${farmacias.cep}/json/`)
        .then(resposta => resposta.json() )
        .then (dados => {
            setFarmacias({
                ...farmacias,
                bairro: dados.bairro,
                logradouro: dados.logradouro,
                cidade: dados.localidade,
                estado: dados.uf

            });
            console.log(dados)
        })   

       
     }


    return (
        <form className="container" onSubmit={handleSubmit}> 
        
            <p> Cadastro de Farmácia </p>

            <div className="text-field">
            <TextField label="Razão Social" required = {true} variant="outlined" name="razaoSocial" value={farmacias.razaoSocial} onChange={handleChange} />
            <TextField label="CNPJ" required = {true} variant="outlined" name="cnpj" value={farmacias.cnpj} onChange={handleChange} />
            <TextField label="Nome Fantasia" required = {true} variant="outlined" name="nomeFantasia" value={farmacias.nomeFantasia} onChange={handleChange} />
            <TextField label="E-Mail" required = {true} variant="outlined" name="email" value={farmacias.email} onChange={handleChange} />
            <TextField label="Telefone" required = {true} variant="outlined" name="telefone" value={farmacias.telefone} onChange={handleChange} />
            <TextField label="Celular" required = {true} variant="outlined" name="celular" value={farmacias.celular} onChange={handleChange} />
            </div>
            <div className="text-field">
            <div className="buscar-cep-container">
             <TextField className="buscar-cep-imput" label="CEP" required = {true} variant="outlined" name="cep" value={farmacias.cep} onChange={handleChange} /> 
             <Button className="buscar-cep-button" variant="contained" onClick={pegarCep}>Buscar CEP</Button>  
            </div>
            <TextField label="Logradouro" required = {true} variant="outlined" name="logradouro" value={farmacias.logradouro} onChange={handleChange} />
            <TextField label="Numero" required = {true} variant="outlined" name="numero" value={farmacias.numero} onChange={handleChange} />
            <TextField label="Bairro" required = {true} variant="outlined" name="bairro" value={farmacias.bairro} onChange={handleChange} />
            <TextField label="Cidade" required = {true} variant="outlined" name="cidade" value={farmacias.cidade} onChange={handleChange} />
            <TextField label="Estado" required = {true} variant="outlined" name="estado" value={farmacias.estado} onChange={handleChange} />
            <TextField label="Complemento" required = {false} variant="outlined" name="complemento" value={farmacias.complemento} onChange={handleChange} />
            <div className="latitude-longitude-container">
            <TextField label="Latitude" required variant="outlined" name="latitude" value={farmacias.latitude} onChange={handleChange} />
            <TextField label="Longitude" required variant="outlined" name="longitude" value={farmacias.longitude} onChange={handleChange} />
            <PuxarCoordenadas />
            </div>
 

            </div>
            <div className="button-container">
            <Button variant="contained"> LIMPAR </Button>
            <Button onClick={pegarCep} type="submit" variant="contained"> SALVAR </Button>
            </div>
        </form>
        

    )
};

export { CadastroDeFarmacia};
