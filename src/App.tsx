import React from 'react';
import ToastContainer from './components/ToastContainer';
import AppProvider from './hooks';
import { AuthProvider } from './hooks/AuthContext';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
    <>
        <AppProvider>
            <Routes />
        </AppProvider>

        <GlobalStyle />
    </>
);

export default App;
