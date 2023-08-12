import { Button, TextField } from "@mui/material";

function CadastroDeFarmacia (){

    return (
        <>
        
        <p> Cadastro de Farmácia </p>

        <div>
        <TextField label="Razão Social" variant="outlined" />
        <TextField label="CNPJ" variant="outlined" />
        <TextField label="Nome Fantasia" variant="outlined" />
        <TextField label="E-Mail" variant="outlined" />
        <TextField label="Telefone" variant="outlined" />
        <TextField label="Celular" variant="outlined" />
        </div>
        <div>
        <TextField label="CEP" variant="outlined" />
        <TextField label="Logradouro" variant="outlined" />
        <TextField label="Numero" variant="outlined" />
        <TextField label="Bairro" variant="outlined" />
        <TextField label="Cidade" variant="outlined" />
        <TextField label="Estado" variant="outlined" />
        <TextField label="Complemento" variant="outlined" />
        <TextField label="Latitude" variant="outlined" />
        <TextField label="Longitude" variant="outlined" />
        </div>
        <div>
        <Button variant="contained"> LIMPAR </Button>
        <Button variant="contained"> SALVAR </Button>
        </div>
        
        </>
        

    )
};

export { CadastroDeFarmacia};