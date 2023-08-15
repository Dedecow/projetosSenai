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
        <TextField label="Razão Social" required = {true} variant="outlined" value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)} />
        <TextField label="CNPJ" required = {true} variant="outlined" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
        <TextField label="Nome Fantasia" required = {true} variant="outlined" value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} />
        <TextField label="E-Mail" required = {true} variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Telefone" required = {true} variant="outlined" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        <TextField label="Celular" required = {true} variant="outlined" value={celular} onChange={(e) => setCelular(e.target.value)} />
        </div>
        <div>
        <TextField label="CEP" required = {true} variant="outlined" value={cep} onChange={(e) => setCep(e.target.value)} />
        <TextField label="Logradouro" required = {true} variant="outlined" value={logradouro} onChange={(e) => setLogradouro(e.target.value)} />
        <TextField label="Numero" required = {true} variant="outlined" value={numero} onChange={(e) => setNumero(e.target.value)} />
        <TextField label="Bairro" required = {true} variant="outlined" value={bairro} onChange={(e) => setBairro(e.target.value)} />
        <TextField label="Cidade" required = {true} variant="outlined" value={cidade} onChange={(e) => setCidade(e.target.value)} />
        <TextField label="Estado" required = {true} variant="outlined" value={estado} onChange={(e) => setEstado(e.target.value)} />
        <TextField label="Complemento" required = {true} variant="outlined" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
        <TextField label="Latitude" required = {true} variant="outlined" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
        <TextField label="Longitude" required = {true} variant="outlined" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
        </div>
        <div>
        <Button variant="contained"> LIMPAR </Button>
        <Button variant="contained"> SALVAR </Button>
        </div>
        
        </>
        

    )
};

export { CadastroDeFarmacia};