import { Button, TextField } from "@mui/material";



function Login (){

    return(
        <>  
        <p> Logo da Pagina </p>
        <p> Texto </p>
        
        <TextField label="E-Mail" variant="outlined" />
        <TextField label="Senha" variant="outlined" />
        <Button variant="contained"> ENTRAR </Button>
        </>
      
    )
}
export { Login };