import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import './styled.css';
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
    // const getDados = async(e)=> {
    //     try {
    //         const response = await axios.get(
    //          `http://viacep.com.br/ws/${cep}/json/`
    //         )
    //     console.log(response);
    //     } catch (error) { 
    //         console.log(error)
    //     }
    //     // fetch(`viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
    //     //     console.log(data);
    //     //     })
    // }


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
            <TextField label="CEP" required = {true} variant="outlined" name="cep" value={farmacias.cep} onChange={handleChange} />
            <TextField label="Logradouro" required = {true} variant="outlined" name="logradouro" value={farmacias.logradouro} onChange={handleChange} />
            <TextField label="Numero" required = {true} variant="outlined" name="numero" value={farmacias.numero} onChange={handleChange} />
            <TextField label="Bairro" required = {true} variant="outlined" name="bairro" value={farmacias.bairro} onChange={handleChange} />
            <TextField label="Cidade" required = {true} variant="outlined" name="cidade" value={farmacias.cidade} onChange={handleChange} />
            <TextField label="Estado" required = {true} variant="outlined" name="estado" value={farmacias.estado} onChange={handleChange} />
            <TextField label="Complemento" required = {true} variant="outlined" name="complemento" value={farmacias.complemento} onChange={handleChange} />
            <TextField label="Latitude" required = {true} variant="outlined" name="latitude" value={farmacias.latitude} onChange={handleChange} />
            <TextField label="Longitude" required = {true} variant="outlined" name="longitude" value={farmacias.longitude} onChange={handleChange} />
            </div>
            <div className="button-container">
            <Button variant="contained"> LIMPAR </Button>
            <Button type="submit" variant="contained"> SALVAR </Button>
            </div>
        </form>
        

    )
};

export { CadastroDeFarmacia};
