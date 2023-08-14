import { Button, TextField } from "@mui/material";
import { useState } from "react";

function CadastroDeFarmacia (){
    const [ razaoSocial, setRazaoSocial] = useState (" ");
    const [ cnpj, setCnpj] = useState (" ");
    const [ nomeFantasia, setNomeFantasia] = useState (" ");
    const [ email, setEmail] = useState (" ");
    const [ telefone, setTelefone] = useState (" ");
    const [ celular, setCelular] = useState (" ");
    const [ cep, setCep] = useState (" ");
    const [ logradouro, setLogradouro] = useState (" ");
    const [ numero, setNumero] = useState (" ");
    const [ bairro, setBairro] = useState (" ");
    const [ cidade, setCidade] = useState (" ");
    const [ estado, setEstado] = useState (" ");
    const [ complemento, setComplemento] = useState (" ");
    const [ latitude, setLatitude] = useState (" ");
    const [ longitude, setLongitude] = useState (" ");



    return (
        <>
        
        <p> Cadastro de Farmácia </p>

        <div>
        <TextField label="Razão Social" required = {true} variant="outlined" value={razaoSocial} onChange={setRazaoSocial} />
        <TextField label="CNPJ" required = {true} variant="outlined" value={cnpj} />
        <TextField label="Nome Fantasia" required = {true} variant="outlined" value={nomeFantasia} />
        <TextField label="E-Mail" required = {true} variant="outlined" value={email} />
        <TextField label="Telefone" required = {true} variant="outlined" value={telefone} />
        <TextField label="Celular" required = {true} variant="outlined" value={celular} />
        </div>
        <div>
        <TextField label="CEP" required = {true} variant="outlined" value={cep} />
        <TextField label="Logradouro" required = {true} variant="outlined" value={logradouro} />
        <TextField label="Numero" required = {true} variant="outlined" value={numero} />
        <TextField label="Bairro" required = {true} variant="outlined" value={bairro} />
        <TextField label="Cidade" required = {true} variant="outlined" value={cidade} />
        <TextField label="Estado" required = {true} variant="outlined" value={estado} />
        <TextField label="Complemento" required = {true} variant="outlined" value={complemento} />
        <TextField label="Latitude" required = {true} variant="outlined" value={latitude} />
        <TextField label="Longitude" required = {true} variant="outlined" value={longitude} />
        </div>
        <div>
        <Button variant="contained"> LIMPAR </Button>
        <Button variant="contained"> SALVAR </Button>
        </div>
        
        </>
        

    )
};

export { CadastroDeFarmacia};