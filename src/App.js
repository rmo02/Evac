import { ThemeProvider } from 'styled-components';
import { Home } from './screens/Home';
import { theme } from './theme';
import { Login } from './screens/Login';
import { Calendario } from './screens/Calendario';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Calendario />
      </div>
    </ThemeProvider>
  );
}

export default App;
