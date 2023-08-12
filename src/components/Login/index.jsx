import { Button, TextField } from "@mui/material";
import { useState } from 'react';


function Login (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);

    const handleLogin = () => {
        if (email.trim() === "" || password.trim() === "") {
          setShowError(true);
        } else if (!isValidEmail(email) || !isValidSenha(password)) {
          console.log("isValidEmail", isValidEmail(email))
          setShowError(true);
        } else {
          setShowError(false);
        }
    }
    const isValidEmail = (email) => {
        const atIndex = email.indexOf("@");
        const dotIndex = email.lastIndexOf(".");
        
        return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
    };
    const isValidSenha = (password) => {
        let passwordValid = false;
        if (password.length >= 8){
            passwordValid= true
        }
        console.log("passwordValid", passwordValid)
        return passwordValid;
    }
    console.log("showError", showError)

    return(
        <>  
        <p> Logo da Pagina </p>
        <p> Texto </p>
        
        <TextField 
            type="email" 
            required = {true}
            label="E-Mail" 
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <TextField 
            required = {true}
            label="Senha" 
            variant="outlined"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            // inputProps={{ minLength:8 }}
        /> 
        {showError ? <p> Digite um email válido e senha com pelo menos 8 caracteres.</p>:''}

        
        <Button variant="contained" onClick={ handleLogin } > ENTRAR </Button>
        </>
      
    )
}
export { Login };