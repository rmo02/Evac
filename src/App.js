import { ThemeProvider } from 'styled-components';
import { Home } from './screens/Home';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
