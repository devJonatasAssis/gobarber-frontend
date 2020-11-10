import React from 'react';
import { AuthProvider } from './hooks/AuthContext';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
    <>
        <AuthProvider>
            <Routes />
        </AuthProvider>
        <GlobalStyle />
    </>
);

export default App;
