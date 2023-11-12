import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Cadastro } from './screens/Paciente';
import { Usuarios } from './screens/Usuarios';
import Routes from './routes/Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
