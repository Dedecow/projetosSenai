import { Button, TextField } from "@mui/material";
import { useState } from 'react';
import logo from '../../assets/image/logotipo.jpeg';
import './styled.css';
import { useNavigate } from 'react-router-dom';


function Login (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();
    const handleLogin = () => {
        if (email.trim() === "" || password.trim() === "") {
          setShowError(true);
        } else if (!isValidEmail(email) || !isValidSenha(password)) {
        //   console.log("isValidEmail", isValidEmail(email))
          setShowError(true);
        } else {
          setShowError(false);
          return navigate("/map")

        }
    }
    const isValidEmail = (email) => {
        const atIndex = email.indexOf("@");
        const dotIndex = email.lastIndexOf(".");
        
        return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
    };
    // const isValidSenha = (password) => {
    //     let passwordValid = false;
    //     if (password.length >= 8){
    //         passwordValid= true
    //     }
    //     console.log("passwordValid", passwordValid)
    //     return passwordValid;
    // }
    const isValidSenha = (password) => {
        return password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password);
    }
    // console.log("showError", showError)

    return(
        <form>  
        <p> Logo da Pagina </p>
        <img src={logo} alt="Logo da Farmácia" />      
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
        {showError ? <p> Digite um email válido e senha alfanumérica com pelo menos 8 caracteres.</p>:''}

        
        <Button variant="contained" onClick={ handleLogin } > ENTRAR </Button>
        </form>
      
    )
}
export { Login };