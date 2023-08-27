import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import './styled.css';

function PegarCepCadastro () {
     
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
    return(
        <div className="text-field"> 
            <div className="buscar-cep-container">
                <TextField 
                className="buscar-cep-imput" 
                label="CEP" 
                required = {true} 
                variant="outlined" 
                name="cep" 
                value={farmacias.cep} 
                onChange={handleChange} /> 
                    <Button 
                className="buscar-cep-button" 
                variant="contained" 
                onClick={()=>pegarCep()}>
                Buscar CEP
                </Button>  
                
                <TextField label="Logradouro" required = {true} variant="outlined" name="logradouro" value={farmacias.logradouro} onChange={handleChange} />

                <TextField label="Numero" required = {true} variant="outlined" name="numero" value={farmacias.numero} onChange={handleChange} />

                <TextField label="Bairro" required = {true} variant="outlined" name="bairro" value={farmacias.bairro} onChange={handleChange} />


                <TextField label="Cidade" required = {true} variant="outlined" name="cidade" value={farmacias.cidade} onChange={handleChange} />

                <TextField label="Estado" required = {true} variant="outlined" name="estado" value={farmacias.estado} onChange={handleChange} />

                <TextField label="Complemento" required = {false} variant="outlined" name="complemento" value={farmacias.complemento} onChange={handleChange} />
            </div>
        </div>
  
    )
}

export {PegarCepCadastro};