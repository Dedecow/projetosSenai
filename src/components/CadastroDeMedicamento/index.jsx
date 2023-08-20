import { Button, MenuItem, TextField, TextareaAutosize } from "@mui/material";
// import { SelectTipoMedicamento } from '../SelectTipoMedicamento';
import { useEffect, useState } from 'react';
import './styled.css';

function CadastroDeMedicamento (){

    const [medicamento, setMedicamento] = useState({
        laboratorio: '',
        dosagem: '',
        tipo: '',
        precoUnitario: '',
        nome: '',
        descricao: ''
    });

    const [lista, setLista] = useState([]);
    // carregar a lista de medicamentos
    useEffect(() => {
        if(localStorage.getItem('lista_medicamentos') !== null) {
            setLista(JSON.parse(localStorage.getItem('lista_medicamentos')))
        }
    }, [])
    
    // atualizar a lista de medicamentos
    useEffect(() => {
        localStorage.setItem('lista_medicamentos', JSON.stringify(lista))
    }, [lista])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setMedicamento({...medicamento, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();console.log(lista);setLista([...lista, medicamento])
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

    const [selectedOption, setSelectedOption] = useState('');

    const handleChangeSelect = (event) => {
    setSelectedOption(event.target.value);
    };

    // preco unitario e select não funcionam
    return (
        <form className = "container" onSubmit={handleSubmit}>
        
        <div className="text-field" >
            <TextField label="Medicamento" variant="outlined" required = {true} name="nome" value={medicamento.nome} onChange={handleChange} />
            <TextField label="Laboratório" variant="outlined" required = {true} name="laboratorio" value={medicamento.laboratorio} onChange={handleChange} />
            <TextField label="Dosagem" variant="outlined" required = {true} name="dosagem" value={medicamento.dosagem} onChange={handleChange} />
            {/* <TextField label="Preço Unitário" variant="outlined" required = {true} name="precoUntario" value={medicamento.precoUnitario} onChange={handleChange} />  */}
        </div>
        
        <div className="select-container">
        <TextField
        select
        label="Selecione o Tipo" value={medicamento.tipo} onChange={handleChange}
        // value={medicamento.descricao}
        // onChange={handleChange}
        variant="outlined"
        fullWidth
        >
        <MenuItem name="tipo">Medicamento Comum</MenuItem>
        <MenuItem name="tipo">Medicamento Controlado</MenuItem>
        </TextField>


        {/* <Select 
        // label="Tipo" 
        // variant="outlined" 
        // required = {true} 
        // value={tipo} 
        // onChange={(e) => setTipo(e.target.value)}>
        //     {tipos.map((tipoOption) => (
        //     <MenuItem key={tipoOption} value={tipoOption}>
        //         {tipoOption}
        //     </MenuItem> 
        //     ))}
        //     </Select> */}
        {/* // <SelectTipoMedicamento tipo={tipo} setTipo={setTipo} />   */}
        </div>

        <div className ="text-area">
        <TextareaAutosize label= "Descrição do medicamento " name="descricao" value={medicamento.descricao} onChange={handleChange} />
        </div>
        
        <div className="button-container">
        <Button variant="contained"> LIMPAR </Button>
        <Button type="submit" variant="contained"> SALVAR </Button>
        </div>
        
        </form>
        

    )
};

export { CadastroDeMedicamento};