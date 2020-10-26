import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';

import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={logo} alt="GoBarber" />

                <form>
                    <h1>Faça seu Logon</h1>

                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input name="password" icon={FiLock} placeholder="Senha" />

                    <Button>Entrar</Button>

                    <a href="forgot">Esqueci minha senha</a>
                </form>

                <Link to="/login">
                    <FiLogIn />
                    Criar conta
                </Link>
            </Content>

            <Background />
        </Container>
    );
};

export default SignIn;
