import { Button, TextField, TextareaAutosize } from "@mui/material";

function CadastroDeMedicamento (){

    return (
        <form>
        
        <p> Cadastro de Medicamento </p>

        <div>
        <TextField label="Medicamento" variant="outlined" />
        <TextField label="Laboratório" variant="outlined" />
        <TextField label="Dosagem" variant="outlined" />
        <TextField label="Tipo" variant="outlined" />
        <TextField label="Preço Unitário" variant="outlined" />
        </div>
        <div>
        <TextareaAutosize label="Descrição " />
        </div>
        <div>
        <Button variant="contained"> LIMPAR </Button>
        <Button variant="contained"> SALVAR </Button>
        </div>
        
        </form>
        

    )
};

export { CadastroDeMedicamento};