import { Button, TextField, TextareaAutosize } from "@mui/material";
import { SelectTipoMedicamento } from '../SelectTipoMedicamento';
import { useState } from 'react';
import './styled.css';

function CadastroDeMedicamento (){
    const [ medicamento, setMedicamento] = useState (" ");
    const [ laboratorio, setLaboratorio] = useState (" ");
    const [ dosagem, setDosagem] = useState (" ");
    const [ tipo, setTipo] = useState ("Medicamento Comum");
    // const tipos = ["Medicamento Comum", "Medicamento Controlado"];
    const [ precoUnitario, setPrecoUnitario] = useState (" ");


    return (
        <form className = "container">
        
        <p> Cadastro de Medicamento </p>

        <div className="text-field" >
        <TextField label="Medicamento" variant="outlined" required = {true} value={medicamento} onChange={(e) => setMedicamento(e.target.value)} />
        <TextField label="Laboratório" variant="outlined" required = {true} value={laboratorio} onChange={(e) => setLaboratorio(e.target.value)} />
        <TextField label="Dosagem" variant="outlined" required = {true} value={dosagem} onChange={(e) => setDosagem(e.target.value)} />
        <TextField label="Preço Unitário" variant="outlined" required = {true} value={precoUnitario} onChange={(e) => setPrecoUnitario(e.target.value)} /> 
        </div>
        
        <div className="select-container">
          {/* <Select 
        label="Tipo" 
        variant="outlined" 
        required = {true} 
        value={tipo} 
        onChange={(e) => setTipo(e.target.value)}>
            {tipos.map((tipoOption) => (
            <MenuItem key={tipoOption} value={tipoOption}>
                {tipoOption}
            </MenuItem> 
            ))}
            </Select> */}
        <SelectTipoMedicamento tipo={tipo} setTipo={setTipo} />  
        </div>
      
        <div className ="text-area">
        <TextareaAutosize label= "Descrição do medicamento " />
        </div>
        
        <div className="button-container">
        <Button variant="contained"> LIMPAR </Button>
        <Button variant="contained"> SALVAR </Button>
        </div>
        
        </form>
        

    )
};

export { CadastroDeMedicamento};