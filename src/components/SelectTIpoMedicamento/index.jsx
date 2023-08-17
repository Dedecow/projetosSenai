import { } from 'react';
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

function SelectTipoMedicamento (){
    const tipos = ["Medicamento Comum", "Medicamento Controlado"];

    const handleTipoChange = (e) => {
        setTipo(e.target.value);
    return(
        <Form>
            <FormControl variant="outlined">
               <InputLabel>Tipo</InputLabel>
               <Select value={tipo} onChange={handleTipoChange} label="Tipo">
                   {tipos.map((tipoOption) => (
                     <MenuItem key={tipoOption} value={tipoOption}>
                        {tipoOption}
                     </MenuItem>
                    ))}
               </Select>
          </FormControl>
        </Form>
        
    )}
}

export { SelectTipoMedicamento };