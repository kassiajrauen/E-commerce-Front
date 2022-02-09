import axios from 'axios';
import React, {useState, useContext} from 'react';
import { Container, StyledLink } from './styles';
import {useNavigate} from 'react-router-dom';

function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    function handleSignUp(e){
        setLoading(true);
        e.preventDefault();

        const promise = axios.post('http://localhost:5000/signup', {name: name, email: email, password: password})

        setTimeout(() => {
            promise.then(() => {
                navigate('/');
            });
        }, 100000);
        promise.catch((error) => {
            setLoading(false);
            alert(error.response.data.message);
        });
    }   

    return(
        <Container>
            <h1>Vamos precisar de alguns dados</h1>
            <form onSubmit={handleSignUp}>
                <input
                type="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder='Nome'
                required
                />
                <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder='E-mail'
                required
                />
                <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder='Senha'
                required
                />
                <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder='Confirme sua senha'
                required
                />
                <button type="submit">{loading ? <Loading /> : 'Cadastrar'}</button>
            </form>
            <StyledLink to='/'>
                <span>Já tem uma conta? Entre agora!</span>
            </StyledLink>
        </Container>
    )

    function Loading(){
        return(
            <spam color='#FFFFFF' height={50} width={50}>
                Carregando...
            </spam>
        );
    }
}

export default SignUp;